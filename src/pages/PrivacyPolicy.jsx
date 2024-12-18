import {Typography} from "@/components/ui/Typography";
import React from "react";

const privacySections = [
    {
        title: "1. Informasi yang Kami Kumpulkan",
        content: `Kami mengumpulkan berbagai jenis informasi untuk memastikan bahwa layanan kami dapat berfungsi secara optimal 
                      dan memberikan pengalaman terbaik kepada Anda. Informasi yang kami kumpulkan meliputi data yang Anda berikan 
                      secara langsung kepada kami, seperti nama, alamat email, nomor telepon, dan detail lainnya saat Anda membuat akun, 
                      mengisi formulir, atau menghubungi kami untuk dukungan. Kami juga mengumpulkan data secara otomatis saat Anda 
                      menggunakan layanan kami, termasuk catatan aktivitas Anda, perangkat yang digunakan, alamat IP, serta data terkait lokasi Anda. 
                      Selain itu, kami menerima informasi dari pihak ketiga, seperti mitra bisnis, platform media sosial, dan penyedia layanan lain 
                      yang bekerja sama dengan kami untuk memberikan nilai lebih kepada Anda.`,
    },
    {
        title: "2. Menggunakan Informasi Anda",
        content: `Informasi yang kami kumpulkan digunakan untuk berbagai tujuan yang bermanfaat bagi Anda. Kami memanfaatkan data 
                      tersebut untuk mengelola akun Anda, memberikan akses ke layanan kami, dan memastikan ketersediaan fitur yang relevan 
                      dengan kebutuhan Anda. Selain itu, kami menggunakan informasi ini untuk meningkatkan performa dan pengalaman pengguna, 
                      seperti melalui analisis data untuk mengidentifikasi masalah, mempelajari pola penggunaan, serta mengembangkan fitur baru.`,
    },
    {
        title: "3. Keamanan Informasi Anda",
        content: `Keamanan informasi Anda adalah prioritas utama kami. Kami menerapkan langkah-langkah keamanan fisik, teknis, 
                      dan administratif untuk melindungi data Anda dari akses tidak sah, perubahan, pengungkapan, atau penghancuran. 
                      Teknologi enkripsi, firewall, serta sistem pemantauan digunakan untuk memastikan data Anda tetap aman selama 
                      disimpan atau ditransfer.`,
    },
    {
        title: "4. Berbagi Informasi Anda",
        content: 'Kami berbagi informasi Anda hanya jika diperlukan dan sesuai dengan kebijakan privasi ini. Informasi dapat dibagikan dengan mitra bisnis, penyedia layanan pihak ketiga, atau afiliasi kami untuk mendukung operasional layanan, seperti pemrosesan pembayaran, analitik data, dan pemasaran. Kami juga dapat membagikan informasi dalam situasi hukum tertentu, seperti untuk mematuhi peraturan hukum, menanggapi permintaan pemerintah, atau melindungi hak dan keamanan kami serta pengguna lain. Namun, kami memastikan bahwa setiap pihak yang menerima informasi Anda memiliki kewajiban untuk menjaga kerahasiaannya.'
    },
    {
        title: "5. Pilihan dan Hak Anda",
        content: 'Kami percaya bahwa Anda memiliki kendali penuh atas informasi pribadi Anda. Anda dapat mengakses, memperbarui, atau menghapus data pribadi Anda kapan saja melalui pengaturan akun atau dengan menghubungi kami langsung. Selain itu, Anda memiliki hak untuk memilih keluar dari komunikasi pemasaran yang kami kirimkan dengan mengikuti tautan berhenti berlangganan dalam email kami. Kami juga menyediakan opsi untuk membatasi pengumpulan atau penggunaan informasi tertentu sesuai dengan preferensi Anda, demi memberikan pengalaman yang sesuai dengan kebutuhan Anda.'
    },
    {
        title: "6. Perubahan pada Kebijakan Privasi",
        content: 'Dari waktu ke waktu, kami mungkin memperbarui kebijakan privasi ini untuk mencerminkan perubahan dalam layanan kami atau peraturan hukum yang berlaku. Jika terjadi perubahan material, kami akan memberi tahu Anda melalui email, pemberitahuan dalam aplikasi, atau metode lain yang kami anggap sesuai. Kami mendorong Anda untuk secara berkala meninjau kebijakan privasi ini untuk tetap mendapatkan informasi terkini tentang bagaimana kami melindungi informasi Anda.'
    },
    {
        title: "7. Hubungi Kami",
        content: (
            <>
                Jika Anda memiliki pertanyaan, komentar, atau permintaan terkait kebijakan privasi ini, jangan ragu
                untuk menghubungi kami melalui email di <a href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                                                           target="_blank"
                                                           className="text-emerald-500">support@greenlify.com</a>. Tim kami
                akan dengan senang hati membantu Anda dan memberikan informasi yang Anda butuhkan.
            </>
        )
    }
];


export default function PrivacyPolicy() {
    return (
        <div className="w-full mt-[99px] h-auto flex flex-col items-center gap-[33px]">
            <div className="max-w-3x1 text-center lg:text-center">
                <Typography variant="title" className="hero-title">
                    <strong className="text-emerald-700">Kebijakan</strong> Privasi
                </Typography>
            </div>
            <div className="md:max-w-5xl lg:max-w-8xl px-4 lg:px-0 text-justify lg:text-center hero-description">
                <Typography variant="p">
                    Kebijakan Privasi ini menjelaskan bagaimana Greenlify mengumpulkan, menggunakan, dan membagikan
                    informasi.
                    Ini mencakup praktik penanganan data kami, langkah-langkah keamanan, dan hak Anda untuk mengakses
                    serta
                    memperbaiki data.
                </Typography>
            </div>
            <div className="w-full flex flex-col max-w-7xl gap-[33px]">
                {privacySections.map((section, index) => (
                    <div key={index} className="w-full">
                        <Typography variant="h2" className="text-justify lg:text-left px-4 lg:px-0">
                            {section.title}
                        </Typography>
                        <Typography variant="p" className="mt-4 text-justify md:text-left px-4 lg:px-0">
                            {section.content}
                        </Typography>
                    </div>
                ))}
            </div>
        </div>
    );
}