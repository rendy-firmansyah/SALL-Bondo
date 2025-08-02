import LogoModul from '@/asset/logo-modul.png';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { useEffect, useRef } from 'react';

export default function Portofolio() {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const portofolio = [
        {
            title: 'Portofolio 1',
            deskripsi: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.',
            link: 'https://view.genially.com/686ce3d29295cb24924dcab3',
        },
        {
            title: 'Portofolio 2',
            deskripsi: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.',
            link: 'https://view.genially.com/686ce3d29295cb24924dcab3',
        },
        {
            title: 'Portofolio 3',
            deskripsi: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.',
            link: 'https://view.genially.com/686ce3d29295cb24924dcab3',
        },
        {
            title: 'Portofolio 4',
            deskripsi: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.',
            link: 'https://view.genially.com/686ce3d29295cb24924dcab3',
        },
    ];

    const videos = [
        {
            title: 'Traditional Market Tour',
            description: 'By Ayu & Rian – Exploring local market culture in English.',
            youtubeId: 'YOUTUBE_ID_1',
        },
        {
            title: 'Local Culinary Review',
            description: 'By Dika – Presenting Situbondo’s food culture in English.',
            youtubeId: 'YOUTUBE_ID_2',
        },
        {
            title: 'Local Culinary Review',
            description: 'By Dika – Presenting Situbondo’s food culture in English.',
            youtubeId: 'YOUTUBE_ID_3',
        },
        {
            title: 'Local Culinary Review',
            description: 'By Dika – Presenting Situbondo’s food culture in English.',
            youtubeId: 'YOUTUBE_ID_4',
        },
        // Add more videos as needed
    ];

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const slideWidth = slider.firstElementChild?.clientWidth || 0;
        const gap = 16; // gap-4
        const totalWidth = slideWidth + gap;

        const interval = setInterval(() => {
            if (!slider) return;

            if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: totalWidth, behavior: 'smooth' });
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="bg-white">
            <Navbar />
            <div className="min-h-screen">
                <div className="mx-20">
                    <div className="mt-20 flex justify-center">
                        <div className="">
                            <h1 className="flex items-center justify-center gap-2 font-sans text-3xl font-semibold md:text-4xl">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            fill="#000"
                                            d="M21.738 16.13a1 1 0 0 1-.19.61a1 1 0 0 1-.52.38l-1.71.57a3.6 3.6 0 0 0-1.4.86a3.5 3.5 0 0 0-.86 1.4l-.6 1.7a1 1 0 0 1-.36.51a1.1 1.1 0 0 1-.62.19a1 1 0 0 1-1-.71l-.57-1.71a3.5 3.5 0 0 0-.86-1.4a3.8 3.8 0 0 0-1.4-.87l-1.71-.56a1.1 1.1 0 0 1-.51-.37a1.1 1.1 0 0 1-.21-.62a1 1 0 0 1 .71-1l1.72-.57a3.54 3.54 0 0 0 2.28-2.28l.57-1.69a1 1 0 0 1 .95-.73c.215 0 .426.059.61.17c.182.125.322.303.4.51l.58 1.74a3.54 3.54 0 0 0 2.28 2.28l1.7.6a1 1 0 0 1 .51.38a1 1 0 0 1 .21.61m-9.999-6.36a1 1 0 0 1-.17.55a1 1 0 0 1-.47.35l-1.26.42c-.353.122-.673.32-.94.58a2.5 2.5 0 0 0-.58.94l-.43 1.24a.9.9 0 0 1-.35.47a1 1 0 0 1-.56.18a1 1 0 0 1-.57-.19a1 1 0 0 1-.34-.47l-.41-1.25a2.44 2.44 0 0 0-.58-.93a2.2 2.2 0 0 0-.93-.58l-1.25-.42a.93.93 0 0 1-.48-.35a1 1 0 0 1 .48-1.47l1.25-.41a2.49 2.49 0 0 0 1.53-1.53l.41-1.23a1 1 0 0 1 .32-.47a1 1 0 0 1 .55-.2a1 1 0 0 1 .57.16a1 1 0 0 1 .37.46l.42 1.28a2.49 2.49 0 0 0 1.53 1.53l1.25.43a.92.92 0 0 1 .46.35a.94.94 0 0 1 .18.56m5.789-5.36a1 1 0 0 1-.17.51a.82.82 0 0 1-.42.3l-.62.21a.84.84 0 0 0-.52.52l-.22.63a.93.93 0 0 1-.29.39a.82.82 0 0 1-.52.18a1.1 1.1 0 0 1-.49-.15a.9.9 0 0 1-.32-.44l-.21-.62a.7.7 0 0 0-.2-.32a.76.76 0 0 0-.32-.2l-.62-.2a1 1 0 0 1-.42-.31a.9.9 0 0 1-.16-.51a.94.94 0 0 1 .17-.51a.9.9 0 0 1 .42-.3l.61-.2a.9.9 0 0 0 .33-.2a.9.9 0 0 0 .2-.33l.21-.62c.06-.155.155-.292.28-.4a1 1 0 0 1 .49-.19a.94.94 0 0 1 .53.16a1 1 0 0 1 .32.41l.21.64a.9.9 0 0 0 .2.33a1 1 0 0 0 .32.2l.63.21a1 1 0 0 1 .41.3a.87.87 0 0 1 .17.51"
                                        />
                                    </svg>
                                </span>
                                Portofolio Student's
                            </h1>
                            <p className="mt-5 w-[790px] text-center text-xl">
                                A collection of student works showcasing their English learning through the culture of Situbondo
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 mb-8 h-[3px] w-auto bg-gray-300"></div>
                    <div className="mb-20">
                        <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-4">
                            {portofolio.map((module, idx) => (
                                <div key={idx} className="flex justify-center rounded-3xl border-2 border-gray-300 bg-white p-8 shadow-xl">
                                    <div>
                                        {/* Logo Modul */}
                                        <div className="flex justify-center">
                                            <img src={LogoModul} alt={`Learning Modul ${module.title}`} className="mb-5 h-36 w-44 object-contain" />
                                        </div>

                                        {/* Judul */}
                                        <h3 className="text-xl font-semibold">{module.title}</h3>

                                        {/* Subtitle (Chapter 1, Chapter 2, dst) */}
                                        <p className="text-[16px] text-gray-500">{module.deskripsi}</p>

                                        {/* Tombol dengan link unik */}
                                        <a
                                            href={module.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-secondaryy mt-5 flex justify-end text-sm font-semibold"
                                        >
                                            Selengkapnya
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-center">
                            <div>
                                <h1 className="flex items-center justify-center gap-2 font-sans text-3xl font-semibold md:text-4xl">
                                    Video Portfolio
                                </h1>
                                <p className="mt-5 mb-8 w-[790px] text-center text-xl">
                                    Creative student videos that celebrate Situbondo's culture in English
                                </p>
                            </div>
                        </div>

                        <div ref={sliderRef} className="mb-20 flex snap-x gap-4 overflow-x-auto scroll-smooth">
                            {videos.map((video, index) => (
                                <div key={index} className="w-full shrink-0 snap-start rounded-xl bg-white p-4 shadow-md sm:w-[500px]">
                                    <div className="mb-3 aspect-video">
                                        <iframe
                                            className="h-full w-full rounded-md"
                                            src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                            frameBorder="0"
                                            allowFullScreen
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold">{video.title}</h3>
                                    <p className="text-sm text-gray-500">{video.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
