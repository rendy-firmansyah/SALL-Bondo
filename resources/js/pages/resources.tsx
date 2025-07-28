import srcImg from '@/asset/image-resources.png';
import LogoModul from '@/asset/logo-modul.png';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { Head } from '@inertiajs/react';

export default function Resources() {
    const modules = [
        { title: 'Chapter 1', link: 'https://view.genially.com/686ce3d29295cb24924dcab3' },
        { title: 'Chapter 2', link: 'https://view.genially.com/68704ef3bbc10ba4c982a81b' },
        { title: 'Chapter 3', link: 'https://view.genially.com/686fe33bc3dbdcaef92d7ac5' },
        { title: 'Chapter 4', link: 'https://view.genially.com/686cca9ce6a46e608fcac3e1' },
        { title: 'Chapter 5', link: 'https://view.genially.com/6870d1385ec2176b35041d80' },
        { title: 'Chapter 6', link: 'https://view.genially.com/68748078db7ca114656fcc42' },
        { title: 'Chapter 7', link: 'https://view.genially.com/6874ad31dbbb4bd4903323de' },
        { title: 'Chapter 8', link: 'https://view.genially.com/6876becbab77cefe05bd1e81' },
        { title: 'Chapter 9', link: 'https://view.genially.com/687717ebb8ddccfb57626417' },
        { title: 'Chapter 10', link: 'https://view.genially.com/687424b2c6076c8091b5568c' },
    ];

    return (
        <>
            <Head title="Resources">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <Navbar />

            {/* Hero Section */}
            <section className="container mx-auto mt-10 flex flex-col-reverse items-center gap-6 px-4 md:mt-20 md:flex-row md:items-center md:gap-12">
                {/* Text Section */}
                <div className="flex-1 text-center md:w-[50%] md:text-left">
                    <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
                        Improve your English skills, <br /> starting here!
                    </h1>
                    <p className="text-justify text-lg leading-relaxed text-gray-600 md:text-xl">
                        Access all learning materials in a flexible, interactive, and enjoyable way — designed to help you grow your English skills
                        with confidence.
                    </p>
                </div>

                {/* Image Section */}
                <div className="flex-1 md:w-[45%]">
                    <img src={srcImg} alt="Learning Illustration" className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg" />
                </div>
            </section>

            {/* Modules Section */}
            <section className="container mx-auto mt-16 px-4">
                <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl md:ps-14 md:text-left">List of Learning Modules (SALL Resources)</h2>

                <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {modules.map((module, idx) => (
                        <div key={idx} className="flex w-72 flex-col items-center rounded-3xl border-2 border-gray-300 bg-white p-4 shadow-xl md:p-5">
                            <img src={LogoModul} alt={`Learning Modul ${module.title}`} className="mb-5 h-36 w-44 object-contain" />
                            <h3 className="text-center text-2xl font-semibold">Learning Modul</h3>
                            <p className="text-center text-xl text-gray-500">{module.title}</p>
                            <a
                                href={module.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 rounded bg-[#34699A] px-5 py-3 text-xl text-white transition hover:bg-[#2A5278]"
                            >
                                Click Here
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quote Section */}
            <section className="container mx-auto mt-20 mb-16 px-4 text-center md:px-16">
                <p className="text-2xl font-semibold italic sm:text-3xl md:text-5xl">
                    “Keep learning, keep growing — your English journey starts here and goes beyond!”
                </p>
            </section>

            <Footer />
        </>
    );
}
