import LogoModul from '@/asset/logo-modul.png';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import axios from 'axios';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useState } from 'react';

type Portofolio = {
    id: number;
    judul: string;
    deskripsi: string;
    link_video: string;
    file_path: string | null;
    original_name: string | null;
    mime_type: string | null;
    created_at: string;
    updated_at: string;
};

export default function Portofolio() {
    const [portofolio, setPortofolio] = useState<Portofolio[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, sliderInstanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: 'snap',
        slides: {
            perView: 1,
            spacing: 15,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    const fetchData = async () => {
        const response = await axios.get('/api/porto?id=');
        setPortofolio(response.data);
    };

    console.log(portofolio);

    useEffect(() => {
        fetchData();
    }, []);

    const isImage = (mime: string | null) => mime?.startsWith('image/');
    const isPdf = (mime: string | null) => mime === 'application/pdf';
    const portoGambar = portofolio.filter((item) => !item.link_video);
    const portoVideo = portofolio.filter((item) => item.link_video);

    const getEmbedUrl = (url: string): string => {
        // Cek apakah YouTube
        const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
        if (youtubeMatch) {
            return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
        }

        // Cek apakah Google Drive
        const driveMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
        if (driveMatch) {
            return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
        }

        // Jika tidak cocok dua-duanya, kembalikan URL asli
        return url;
    };

    return (
        <div className="bg-white">
            <Navbar />
            <div className="min-h-screen">
                <div className="mx-10 md:mx-20">
                    <div className="mt-20 flex justify-center">
                        <div className="">
                            <h1 className="flex items-center justify-center gap-2 font-sans text-2xl font-semibold md:text-4xl">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            fill="#000"
                                            d="M21.738 16.13a1 1 0 0 1-.19.61a1 1 0 0 1-.52.38l-1.71.57a3.6 3.6 0 0 0-1.4.86a3.5 3.5 0 0 0-.86 1.4l-.6 1.7a1 1 0 0 1-.36.51a1.1 1.1 0 0 1-.62.19a1 1 0 0 1-1-.71l-.57-1.71a3.5 3.5 0 0 0-.86-1.4a3.8 3.8 0 0 0-1.4-.87l-1.71-.56a1.1 1.1 0 0 1-.51-.37a1.1 1.1 0 0 1-.21-.62a1 1 0 0 1 .71-1l1.72-.57a3.54 3.54 0 0 0 2.28-2.28l.57-1.69a1 1 0 0 1 .95-.73c.215 0 .426.059.61.17c.182.125.322.303.4.51l.58 1.74a3.54 3.54 0 0 0 2.28 2.28l1.7.6a1 1 0 0 1 .51.38a1 1 0 0 1 .21.61m-9.999-6.36a1 1 0 0 1-.17.55a1 1 0 0 1-.47.35l-1.26.42c-.353.122-.673.32-.94.58a2.5 2.5 0 0 0-.58.94l-.43 1.24a.9.9 0 0 1-.35.47a1 1 0 0 1-.56.18a1 1 0 0 1-.57-.19a1 1 0 0 1-.34-.47l-.41-1.25a2.44 2.44 0 0 0-.58-.93a2.2 2.2 0 0 0-.93-.58l-1.25-.42a.93.93 0 0 1-.48-.35a1 1 0 0 1 .48-1.47l1.25-.41a2.49 2.49 0 0 0 1.53-1.53l.41-1.23a1 1 0 0 1 .32-.47a1 1 0 0 1 .55-.2a1 1 0 0 1 .57.16a1 1 0 0 1 .37.46l.42 1.28a2.49 2.49 0 0 0 1.53 1.53l1.25.43a.92.92 0 0 1 .46.35a.94.94 0 0 1 .18.56m5.789-5.36a1 1 0 0 1-.17.51a.82.82 0 0 1-.42.3l-.62.21a.84.84 0 0 0-.52.52l-.22.63a.93.93 0 0 1-.29.39a.82.82 0 0 1-.52.18a1.1 1.1 0 0 1-.49-.15a.9.9 0 0 1-.32-.44l-.21-.62a.7.7 0 0 0-.2-.32a.76.76 0 0 0-.32-.2l-.62-.2a1 1 0 0 1-.42-.31a.9.9 0 0 1-.16-.51a.94.94 0 0 1 .17-.51a.9.9 0 0 1 .42-.3l.61-.2a.9.9 0 0 0 .33-.2a.9.9 0 0 0 .2-.33l.21-.62c.06-.155.155-.292.28-.4a1 1 0 0 1 .49-.19a.94.94 0 0 1 .53.16a1 1 0 0 1 .32.41l.21.64a.9.9 0 0 0 .2.33a1 1 0 0 0 .32.2l.63.21a1 1 0 0 1 .41.3a.87.87 0 0 1 .17.51"
                                        />
                                    </svg>
                                </span>
                                Students' Portfolio
                            </h1>
                            <p className="mt-5 w-auto text-center text-xl md:w-[790px]">
                                A collection of student works showcasing their English learning through the culture of Situbondo
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 mb-8 h-[3px] w-auto bg-gray-300"></div>
                    <div className="mb-20">
                        {portofolio.length === 0 ? (
                            <div className="text-center">
                                <h1 className="text-2xl font-semibold text-[#b6b6b6]">Oops! No portfolio found just yet.</h1>
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
                                        <path
                                            fill="#b6b6b6"
                                            d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M15 14H9l-.117.007a1 1 0 0 0 0 1.986L9 16h6l.117-.007a1 1 0 0 0 0-1.986zM9.01 9l-.127.007a1 1 0 0 0 0 1.986L9 11l.127-.007a1 1 0 0 0 0-1.986zm6 0l-.127.007a1 1 0 0 0 0 1.986L15 11l.127-.007a1 1 0 0 0 0-1.986z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-4">
                                {portoGambar.map((item) => (
                                    <div key={item.id} className="rounded-xl border-2 border-gray-300 bg-white p-8 shadow-xl">
                                        {/* Gambar */}
                                        {item.file_path && (
                                            <div className="mb-5 flex justify-center">
                                                {isImage(item.mime_type) ? (
                                                    <img
                                                        src={`/storage/${item.file_path}`}
                                                        alt={`Gambar ${item.judul}`}
                                                        className="h-36 w-44 object-contain"
                                                    />
                                                ) : isPdf(item.mime_type) ? (
                                                    <img src={LogoModul} alt="PDF File" className="h-36 w-44 object-contain" />
                                                ) : null}
                                            </div>
                                        )}

                                        {/* Judul */}
                                        <h3 className="text-xl font-semibold">{item.judul}</h3>

                                        {/* Deskripsi */}
                                        <p className="mt-2 text-[16px] text-gray-500">
                                            {item.deskripsi.split(' ').length > 20
                                                ? item.deskripsi.split(' ').slice(0, 20).join(' ') + '...'
                                                : 'Deskripsi terlalu singkat'}
                                        </p>
                                        <div className="text-end">
                                            {isPdf(item.mime_type) ? (
                                                // Jika PDF, buka file langsung
                                                <a
                                                    href={`/storage/${item.file_path}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm font-semibold text-[#34699A]"
                                                >
                                                    Lihat PDF
                                                </a>
                                            ) : (
                                                // Jika gambar, buka halaman detail
                                                <a href={route('detailPortofolio', { id: item.id })} className="text-sm font-semibold text-[#34699A]">
                                                    Selengkapnya
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="">
                        <div className="flex justify-center">
                            <div>
                                <h1 className="flex items-center justify-center gap-2 font-sans text-2xl font-semibold md:text-4xl">
                                    Videos Portfolio
                                </h1>
                                <p className="mt-5 mb-8 w-auto text-center text-xl md:w-[790px]">
                                    Creative student videos that celebrate Situbondo's culture in English
                                </p>
                            </div>
                        </div>
                        {portofolio.length === 0 ? (
                            <div className="mb-20 text-center">
                                <h1 className="text-2xl font-semibold text-[#b6b6b6]">Oops! No portfolio found just yet.</h1>
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
                                        <path
                                            fill="#b6b6b6"
                                            d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M15 14H9l-.117.007a1 1 0 0 0 0 1.986L9 16h6l.117-.007a1 1 0 0 0 0-1.986zM9.01 9l-.127.007a1 1 0 0 0 0 1.986L9 11l.127-.007a1 1 0 0 0 0-1.986zm6 0l-.127.007a1 1 0 0 0 0 1.986L15 11l.127-.007a1 1 0 0 0 0-1.986z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col justify-center">
                                <div ref={sliderRef} className="keen-slider">
                                    {portoVideo.map((item) => (
                                        <div key={item.id} className="keen-slider__slide flex justify-center">
                                            <div className="h-auto w-[600px] rounded-xl border-2 border-gray-300 bg-white p-5 shadow-xl">
                                                {/* Embed Video */}
                                                <div className="mt-4 aspect-video">
                                                    <iframe
                                                        className="h-full w-full rounded-xl"
                                                        src={getEmbedUrl(item.link_video)}
                                                        title={item.judul}
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    />
                                                </div>
                                                {/* Judul & Deskripsi */}
                                                <h3 className="mt-2.5 text-center text-xl font-semibold">{item.judul}</h3>
                                                <p className="text-center text-[16px] text-gray-500">
                                                    {item.deskripsi.split(' ').length > 20
                                                        ? item.deskripsi.split(' ').slice(0, 20).join(' ') + '...'
                                                        : 'Deskripsi terlalu singkat'}
                                                </p>
                                                <div className="text-end">
                                                    <a
                                                        href={route('detailPortofolio', { id: item.id })}
                                                        className="text-sm font-semibold text-[#34699A]"
                                                    >
                                                        Selengkapnya
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Dot Navigation */}
                                <div className="mt-4 mb-20 flex justify-center gap-2">
                                    {portoVideo.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => sliderInstanceRef.current?.moveToIdx(idx)}
                                            className={`h-3 w-3 rounded-full transition-all duration-300 ${
                                                currentSlide === idx ? 'scale-110 bg-[#34699A]' : 'bg-gray-300'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
