import { InstagramIcon, MailIcon } from 'lucide-react';
import connect from '../../../js/asset/Connect.png';

export default function Footer() {
    return (
        <div className="bg-primaryy w-full px-6 py-8 md:py-2 lg:py-2">
            <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-28">
                {/* Bagian Kiri */}
                <div className="m-0 flex flex-col items-center text-center md:m-10 md:items-start md:text-left">
                    <div className="mb-3 flex flex-col items-center gap-3 md:flex-row md:items-center">
                        <img src={connect} alt="connect" className="h-[55px] w-[55px]" />
                        <h1 className="text-2xl font-bold text-white md:text-3xl">Stay Connected with Us</h1>
                    </div>
                    <div className="md:text-md text-sm font-medium text-white">© 2025 SALL Bondo | All rights reserved</div>
                    <div className="mt-8 md:mt-16">
                        <ul className="flex flex-wrap justify-center gap-6 font-medium text-white md:justify-start md:gap-10">
                            <li>
                                <a href="#home" className="hover:text-secondaryy">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#resource" className="hover:text-secondaryy">
                                    Resource
                                </a>
                            </li>
                            <li>
                                <a href="#learning-reflection" className="hover:text-secondaryy">
                                    Learning Reflection
                                </a>
                            </li>
                            <li>
                                <a href="#feedback" className="hover:text-secondaryy">
                                    Feedback
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bagian Kanan */}
                <div className="m-0 flex flex-col items-center text-center text-white md:m-10 md:items-start md:text-left">
                    <div className="flex items-center gap-3">
                        <InstagramIcon size={28} />
                        <h1 className="text-lg font-semibold">Instagram</h1>
                    </div>
                    <h1 className="mt-2 mb-5 text-lg font-medium">@PKM_EnglishCultureFPP25</h1>
                    <div className="flex items-center gap-3">
                        <MailIcon size={28} />
                        <h1 className="text-lg font-semibold">E-mail</h1>
                    </div>
                    <h1 className="mt-2 text-lg font-medium">ikafitriani@mail.unej.ac.id</h1>
                    <h1 className="mt-6 flex flex-col gap-1">
                        <span className="font-semibold">Media SALLBondo ini didanai oleh:</span>Direktorat Penelitian dan Pengabdian Kepada Masyarakat
                        Tahun Anggaran 2025
                    </h1>
                </div>
            </div>
        </div>
    );
}
