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
                <div className="mt-20 px-10 md:px-20">
                    <h1 className="mb-4 text-center text-3xl font-bold">{porto.judul}</h1>
                    <div className="mb-6 flex justify-center">
                        {porto.link_video ? (
                            <div className="aspect-video w-full max-w-2xl">
                                <iframe
                                    className="h-full w-full rounded-xl"
                                    src={getEmbedUrl(porto.link_video)}
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
