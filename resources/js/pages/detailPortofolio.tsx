import LogoModul from '@/asset/logo-modul.png';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';

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

type Props = {
    porto: Portofolio;
};

export default function DetailPortofolio({ porto }: Props) {
    const isImage = porto.mime_type?.startsWith('image/');
    const isPdf = porto.mime_type === 'application/pdf';
    console.log(porto);

    const getYoutubeEmbedUrl = (url: string): string => {
        const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
        const match = url.match(regex);
        return match ? `https://www.youtube.com/embed/${match[1]}` : url;
    };

    return (
        <div className="bg-white">
            <Navbar />
            <div className="min-h-screen">
                <div className="mt-20 px-10 md:px-20">
                    <h1 className="mb-4 text-center text-3xl font-bold">{porto.judul}</h1>
                    <div className="mb-6 flex justify-center">
                        {porto.link_video ? (
                            <div className="aspect-video w-full max-w-2xl">
                                <iframe
                                    className="h-full w-full rounded-xl"
                                    src={getYoutubeEmbedUrl(porto.link_video)}
                                    title={porto.judul}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        ) : isImage ? (
                            <img
                                src={`/storage/${porto.file_path}`}
                                alt={`Gambar ${porto.judul}`}
                                className="h-auto w-full max-w-md object-contain"
                            />
                        ) : isPdf ? (
                            <a href={`/storage/${porto.file_path}`} target="_blank" rel="noopener noreferrer">
                                <img src={LogoModul} alt="PDF File" className="mx-auto h-48 w-auto" />
                            </a>
                        ) : (
                            <p className="text-center text-gray-500">File tidak tersedia.</p>
                        )}
                    </div>
                    <div className="mb-20">
                        <p className="text-justify text-lg text-gray-700">{porto.deskripsi}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
