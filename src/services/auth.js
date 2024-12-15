import axios from "axios";
import {LOGIN} from "@/constants/routesAPI";

export default class AuthServices {
    static validateLoginInputs(email, password, remember_me) {
        if (!email || !password) {
            throw new Error("Email dan password harus diisi.");
        }

        if (typeof remember_me !== "boolean") {
            throw new Error("Remember me harus berupa boolean.");
        }

        if (!this.isValidEmail(email)) {
            throw new Error("Format email tidak valid.");
        }
    }

    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static async login(email, password, remember_me) {
        try {
            this.validateLoginInputs(email, password, remember_me);
            const formattedRememberMe = !!remember_me;
            const response = await axios.post(LOGIN, {email, password, remember_me: formattedRememberMe}, {
                headers: {"Content-Type": "application/json"},
                timeout: 10000,
            });

            const {access_token, refresh_token} = response.data.data;

            localStorage.setItem("access_token", access_token);
            localStorage.setItem("refresh_token", refresh_token);

            return response.data;
        } catch (error) {
            throw new Error("Login gagal. Periksa kembali kredensial Anda.");
        }
    }

    static logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
    }

    // static async refreshAccessToken() {
    //     const refreshToken = localStorage.getItem("refresh_token");
    //
    //     if (!refreshToken) {
    //         throw new Error("Refresh token tidak tersedia. Silakan login kembali.");
    //     }
    //
    //     try {
    //         const response = await axios.post(REFRESH, {}, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": `Bearer ${refreshToken}`
    //             }
    //         });
    //
    //         const {access_token, refresh_token} = response.data.data;
    //
    //         localStorage.setItem("access_token", access_token);
    //         localStorage.setItem("refresh_token", refresh_token);
    //
    //         axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
    //
    //         return access_token;
    //     } catch (error) {
    //         this.logout();
    //         window.location.href = "/login";
    //         throw new Error("Sesi Anda telah berakhir. Silakan login kembali.");
    //     }
    // }
    //
    // static getAccessToken() {
    //     return localStorage.getItem("access_token");
    // }
    //
    // static isAccessTokenValid() {
    //     const token = this.getAccessToken();
    //     if (!token) return false;
    //     try {
    //         const payload = JSON.parse(atob(token.split(".")[1]));
    //         const expiration = payload.exp * 1000;
    //         return Date.now() / 1000 + 10 < expiration;
    //     } catch (e) {
    //         return false;
    //     }
    // }
}

// axios.interceptors.request.use(
//     (config) => {
//         const token = AuthServices.getAccessToken();
//         if (token && AuthServices.isAccessTokenValid()) {
//             config.headers["Authorization"] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );
//
// axios.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const originalRequest = error.config;
//
//         if (error.response?.status === 401 && !originalRequest._retry && originalRequest.url !== REFRESH) {
//             originalRequest._retry = true;
//
//             try {
//                 const newToken = await AuthServices.refreshAccessToken();
//                 originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
//                 return axios(originalRequest);
//             } catch (refreshError) {
//                 AuthServices.logout();
//                 window.location.href = "/login";
//                 return Promise.reject(refreshError);
//             }
//         }
//         return Promise.reject(error);
//     }
// );