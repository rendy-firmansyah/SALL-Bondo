import AboutImage from '@/asset/About.png';
import AnywhereImage from '@/asset/Anywhere.png';
import ArdaImage from '@/asset/Arda.png';
import BimaImage from '@/asset/Bima.png';
import ChandraImage from '@/asset/Chandra.png';
import CompassImage from '@/asset/Compass.png';
import DiahImage from '@/asset/Diah.png';
import DianaImage from '@/asset/Diana.png';
import FaridaImage from '@/asset/Farida.png';
import HeroImage from '@/asset/hero.png';
import IkaImage from '@/asset/Ika.png';
import JourneyImage from '@/asset/journey.png';
import LearnImage from '@/asset/Learn.png';
import LearningImage from '@/asset/learning.png';
import Lp2mImage from '@/asset/Lp2m.png';
import ModuleImage from '@/asset/module.png';
import PracticeImage from '@/asset/Practice.png';
import RafiImage from '@/asset/Rafi.png';
import T3Image from '@/asset/T3.png';
import TopicImage from '@/asset/topic.png';
import TutWuriImage from '@/asset/TutWuri.png';
import UnejImage from '@/asset/Unej.png';
import VisitImage from '@/asset/visit.png';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { Link } from '@inertiajs/react';

export default function Home() {
    return (
        <div className="bg-white">
            <Navbar />
            {/* Hero Section */}
            <section id="Hero" className="mt-8 flex min-h-screen w-full md:mt-15">
                <div className="mx-20 grid grid-cols-12">
                    <div className="col-span-12 flex items-center md:col-span-5">
                        <div>
                            <h3 className="text-tertiaryy flex items-center gap-2 text-lg md:text-2xl">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            fill="#58A0C8"
                                            d="M21.738 16.13a1 1 0 0 1-.19.61a1 1 0 0 1-.52.38l-1.71.57a3.6 3.6 0 0 0-1.4.86a3.5 3.5 0 0 0-.86 1.4l-.6 1.7a1 1 0 0 1-.36.51a1.1 1.1 0 0 1-.62.19a1 1 0 0 1-1-.71l-.57-1.71a3.5 3.5 0 0 0-.86-1.4a3.8 3.8 0 0 0-1.4-.87l-1.71-.56a1.1 1.1 0 0 1-.51-.37a1.1 1.1 0 0 1-.21-.62a1 1 0 0 1 .71-1l1.72-.57a3.54 3.54 0 0 0 2.28-2.28l.57-1.69a1 1 0 0 1 .95-.73c.215 0 .426.059.61.17c.182.125.322.303.4.51l.58 1.74a3.54 3.54 0 0 0 2.28 2.28l1.7.6a1 1 0 0 1 .51.38a1 1 0 0 1 .21.61m-9.999-6.36a1 1 0 0 1-.17.55a1 1 0 0 1-.47.35l-1.26.42c-.353.122-.673.32-.94.58a2.5 2.5 0 0 0-.58.94l-.43 1.24a.9.9 0 0 1-.35.47a1 1 0 0 1-.56.18a1 1 0 0 1-.57-.19a1 1 0 0 1-.34-.47l-.41-1.25a2.44 2.44 0 0 0-.58-.93a2.2 2.2 0 0 0-.93-.58l-1.25-.42a.93.93 0 0 1-.48-.35a1 1 0 0 1 .48-1.47l1.25-.41a2.49 2.49 0 0 0 1.53-1.53l.41-1.23a1 1 0 0 1 .32-.47a1 1 0 0 1 .55-.2a1 1 0 0 1 .57.16a1 1 0 0 1 .37.46l.42 1.28a2.49 2.49 0 0 0 1.53 1.53l1.25.43a.92.92 0 0 1 .46.35a.94.94 0 0 1 .18.56m5.789-5.36a1 1 0 0 1-.17.51a.82.82 0 0 1-.42.3l-.62.21a.84.84 0 0 0-.52.52l-.22.63a.93.93 0 0 1-.29.39a.82.82 0 0 1-.52.18a1.1 1.1 0 0 1-.49-.15a.9.9 0 0 1-.32-.44l-.21-.62a.7.7 0 0 0-.2-.32a.76.76 0 0 0-.32-.2l-.62-.2a1 1 0 0 1-.42-.31a.9.9 0 0 1-.16-.51a.94.94 0 0 1 .17-.51a.9.9 0 0 1 .42-.3l.61-.2a.9.9 0 0 0 .33-.2a.9.9 0 0 0 .2-.33l.21-.62c.06-.155.155-.292.28-.4a1 1 0 0 1 .49-.19a.94.94 0 0 1 .53.16a1 1 0 0 1 .32.41l.21.64a.9.9 0 0 0 .2.33a1 1 0 0 0 .32.2l.63.21a1 1 0 0 1 .41.3a.87.87 0 0 1 .17.51"
                                        />
                                    </svg>
                                </span>
                                Welcome to <span className="text-primaryy font-logo">SALL-Bondo</span>
                            </h3>
                            <h1 className="my-4 text-center font-sans text-3xl font-bold md:text-start md:text-5xl">
                                Explore English with Situbondo's Culture
                            </h1>
                            <h3 className="mb-12 text-center font-sans text-lg md:text-start md:text-2xl">
                                SALL-BONDO is a flexible self-learning platform to study English through Situbondo's culture
                            </h3>
                            <div className="text-center md:text-start">
                                <Link href="" className="bg-primaryy rounded-lg px-5 py-2.5 font-sans text-white">
                                    Let's start our exploration
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden justify-end md:col-span-7 md:flex md:items-center">
                        <img src={HeroImage} alt="Bima" className="h-[504px] w-[466px]" />
                    </div>
                </div>
            </section>
            <div className="mb-14 overflow-x-auto md:overflow-visible">
                <div className="flex w-max snap-x snap-mandatory gap-10 px-4 transition-transform duration-500 ease-in-out md:w-full md:justify-center">
                    <img src={BimaImage} alt="Bima" className="h-[111px] w-[369px]" />
                    <img src={TutWuriImage} alt="TutWuri" className="h-[111px] w-[111px]" />
                    <img src={T3Image} alt="T3" className="h-[111px] w-[111px]" />
                    <img src={UnejImage} alt="Unej" className="h-[110px] w-[200px]" />
                    <img src={Lp2mImage} alt="Lp2m" className="h-[112px] w-[192px]" />
                </div>
            </div>

            {/* About Section */}
            <section id="About" className="flex min-h-screen w-full">
                <div className="relative h-screen w-full bg-[#F2FAFF] px-8 md:px-20">
                    <div className="">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 hidden h-screen items-center justify-center md:col-span-5 md:flex">
                                <img src={AboutImage} alt="About" className="h-[345px] w-[403px]" />
                            </div>
                            <div className="col-span-12 flex items-center py-15 md:col-span-7 md:py-0">
                                <div className="text-center md:text-start">
                                    <div className="flex justify-center md:justify-start">
                                        <h3 className="text-tertiaryy flex items-center gap-2 font-sans text-xl">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path
                                                        fill="#58A0C8"
                                                        d="M21.738 16.13a1 1 0 0 1-.19.61a1 1 0 0 1-.52.38l-1.71.57a3.6 3.6 0 0 0-1.4.86a3.5 3.5 0 0 0-.86 1.4l-.6 1.7a1 1 0 0 1-.36.51a1.1 1.1 0 0 1-.62.19a1 1 0 0 1-1-.71l-.57-1.71a3.5 3.5 0 0 0-.86-1.4a3.8 3.8 0 0 0-1.4-.87l-1.71-.56a1.1 1.1 0 0 1-.51-.37a1.1 1.1 0 0 1-.21-.62a1 1 0 0 1 .71-1l1.72-.57a3.54 3.54 0 0 0 2.28-2.28l.57-1.69a1 1 0 0 1 .95-.73c.215 0 .426.059.61.17c.182.125.322.303.4.51l.58 1.74a3.54 3.54 0 0 0 2.28 2.28l1.7.6a1 1 0 0 1 .51.38a1 1 0 0 1 .21.61m-9.999-6.36a1 1 0 0 1-.17.55a1 1 0 0 1-.47.35l-1.26.42c-.353.122-.673.32-.94.58a2.5 2.5 0 0 0-.58.94l-.43 1.24a.9.9 0 0 1-.35.47a1 1 0 0 1-.56.18a1 1 0 0 1-.57-.19a1 1 0 0 1-.34-.47l-.41-1.25a2.44 2.44 0 0 0-.58-.93a2.2 2.2 0 0 0-.93-.58l-1.25-.42a.93.93 0 0 1-.48-.35a1 1 0 0 1 .48-1.47l1.25-.41a2.49 2.49 0 0 0 1.53-1.53l.41-1.23a1 1 0 0 1 .32-.47a1 1 0 0 1 .55-.2a1 1 0 0 1 .57.16a1 1 0 0 1 .37.46l.42 1.28a2.49 2.49 0 0 0 1.53 1.53l1.25.43a.92.92 0 0 1 .46.35a.94.94 0 0 1 .18.56m5.789-5.36a1 1 0 0 1-.17.51a.82.82 0 0 1-.42.3l-.62.21a.84.84 0 0 0-.52.52l-.22.63a.93.93 0 0 1-.29.39a.82.82 0 0 1-.52.18a1.1 1.1 0 0 1-.49-.15a.9.9 0 0 1-.32-.44l-.21-.62a.7.7 0 0 0-.2-.32a.76.76 0 0 0-.32-.2l-.62-.2a1 1 0 0 1-.42-.31a.9.9 0 0 1-.16-.51a.94.94 0 0 1 .17-.51a.9.9 0 0 1 .42-.3l.61-.2a.9.9 0 0 0 .33-.2a.9.9 0 0 0 .2-.33l.21-.62c.06-.155.155-.292.28-.4a1 1 0 0 1 .49-.19a.94.94 0 0 1 .53.16a1 1 0 0 1 .32.41l.21.64a.9.9 0 0 0 .2.33a1 1 0 0 0 .32.2l.63.21a1 1 0 0 1 .41.3a.87.87 0 0 1 .17.51"
                                                    />
                                                </svg>
                                            </span>
                                            About Us
                                        </h3>
                                    </div>
                                    <h2 className="my-5 font-sans text-2xl font-bold md:text-4xl">
                                        Your Gateway in English Learning through the Rich Culture of Situbondo
                                    </h2>
                                    <p className="font-sans text-base md:text-lg">
                                        SALL-BONDO is a self-access English learning platform developed through the 2025 DPPM Kemendikbudristek grant
                                        titled “Penguatan Kapasitas Bahasa Inggris dan Literasi Budaya melalui Penciptaan Motif Batik Kontemporer
                                        Berbasis Kearifan Lokal Tapal Kuda.”, in collaboration with Forum Pemuda Pelopor Situbondo. It aims to enhance
                                        English proficiency and cultural literacy through flexible online and offline learning, including the creation
                                        of contemporary batik motifs inspired by local wisdom. Managed by Ika Fitriani and Chandra Ayu Proborini
                                        (Universitas Jember), and Diana Setia Dewi (ITB Tuban), the program empowers Situbondo's youth by integrating
                                        language, culture, and creativity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Do Section */}
            <section className="mt-20 flex min-h-screen w-full">
                <div className="w-full">
                    <div className="flex flex-col justify-center">
                        <div className="flex flex-col justify-center">
                            <div className="flex justify-center">
                                <h3 className="text-tertiaryy flex items-center gap-2 font-sans text-2xl md:text-4xl">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path
                                                fill="#58A0C8"
                                                d="M21.738 16.13a1 1 0 0 1-.19.61a1 1 0 0 1-.52.38l-1.71.57a3.6 3.6 0 0 0-1.4.86a3.5 3.5 0 0 0-.86 1.4l-.6 1.7a1 1 0 0 1-.36.51a1.1 1.1 0 0 1-.62.19a1 1 0 0 1-1-.71l-.57-1.71a3.5 3.5 0 0 0-.86-1.4a3.8 3.8 0 0 0-1.4-.87l-1.71-.56a1.1 1.1 0 0 1-.51-.37a1.1 1.1 0 0 1-.21-.62a1 1 0 0 1 .71-1l1.72-.57a3.54 3.54 0 0 0 2.28-2.28l.57-1.69a1 1 0 0 1 .95-.73c.215 0 .426.059.61.17c.182.125.322.303.4.51l.58 1.74a3.54 3.54 0 0 0 2.28 2.28l1.7.6a1 1 0 0 1 .51.38a1 1 0 0 1 .21.61m-9.999-6.36a1 1 0 0 1-.17.55a1 1 0 0 1-.47.35l-1.26.42c-.353.122-.673.32-.94.58a2.5 2.5 0 0 0-.58.94l-.43 1.24a.9.9 0 0 1-.35.47a1 1 0 0 1-.56.18a1 1 0 0 1-.57-.19a1 1 0 0 1-.34-.47l-.41-1.25a2.44 2.44 0 0 0-.58-.93a2.2 2.2 0 0 0-.93-.58l-1.25-.42a.93.93 0 0 1-.48-.35a1 1 0 0 1 .48-1.47l1.25-.41a2.49 2.49 0 0 0 1.53-1.53l.41-1.23a1 1 0 0 1 .32-.47a1 1 0 0 1 .55-.2a1 1 0 0 1 .57.16a1 1 0 0 1 .37.46l.42 1.28a2.49 2.49 0 0 0 1.53 1.53l1.25.43a.92.92 0 0 1 .46.35a.94.94 0 0 1 .18.56m5.789-5.36a1 1 0 0 1-.17.51a.82.82 0 0 1-.42.3l-.62.21a.84.84 0 0 0-.52.52l-.22.63a.93.93 0 0 1-.29.39a.82.82 0 0 1-.52.18a1.1 1.1 0 0 1-.49-.15a.9.9 0 0 1-.32-.44l-.21-.62a.7.7 0 0 0-.2-.32a.76.76 0 0 0-.32-.2l-.62-.2a1 1 0 0 1-.42-.31a.9.9 0 0 1-.16-.51a.94.94 0 0 1 .17-.51a.9.9 0 0 1 .42-.3l.61-.2a.9.9 0 0 0 .33-.2a.9.9 0 0 0 .2-.33l.21-.62c.06-.155.155-.292.28-.4a1 1 0 0 1 .49-.19a.94.94 0 0 1 .53.16a1 1 0 0 1 .32.41l.21.64a.9.9 0 0 0 .2.33a1 1 0 0 0 .32.2l.63.21a1 1 0 0 1 .41.3a.87.87 0 0 1 .17.51"
                                            />
                                        </svg>
                                    </span>
                                    What can you do here?
                                </h3>
                            </div>
                            <div className="flex justify-center">
                                <h3 className="mt-5 mb-20 w-[600px] text-center font-sans text-lg font-semibold md:text-2xl">
                                    "Lifelong learning is critical to success. We upskill to get better at what we do."
                                </h3>
                            </div>
                        </div>
                        <div className="mx-auto max-w-6xl">
                            <div className="mb-20 grid grid-cols-1 gap-6 md:mb-0 md:grid-cols-2">
                                <div className="flex h-[180px] w-[370px] items-center justify-center rounded-xl bg-[#F6F6F6] md:h-[210px] md:w-[400px]">
                                    <div className="text-center">
                                        <div className="mb-2.5 flex justify-center">
                                            <img src={LearnImage} alt="Learn" className="h-[40px] w-[40px] md:h-[60px] md:w-[60px]" />
                                        </div>
                                        <h3 className="w-[350px] font-sans">
                                            access diverse interactive learning materials (texts, audio, video) rooted in Situbondo culture.
                                        </h3>
                                    </div>
                                </div>
                                <div className="flex h-[180px] w-[370px] items-center justify-center rounded-xl bg-[#F6F6F6] md:h-[210px] md:w-[400px]">
                                    <div className="text-center">
                                        <div className="mb-2.5 flex justify-center">
                                            <img src={PracticeImage} alt="Practice" className="h-[40px] w-[40px] md:h-[60px] md:w-[60px]" />
                                        </div>
                                        <h3 className="w-[350px] font-sans">practice English language skills independently</h3>
                                    </div>
                                </div>
                                <div className="flex h-[180px] w-[370px] items-center justify-center rounded-xl bg-[#F6F6F6] md:h-[210px] md:w-[400px]">
                                    <div className="text-center">
                                        <div className="mb-2.5 flex justify-center">
                                            <img src={AnywhereImage} alt="Anywhere" className="h-[40px] w-[40px] md:h-[60px] md:w-[60px]" />
                                        </div>
                                        <h3 className="w-[350px] font-sans">learn at your own pace, anytime and anywhere</h3>
                                    </div>
                                </div>
                                <div className="flex h-[180px] w-[370px] items-center justify-center rounded-xl bg-[#F6F6F6] md:h-[210px] md:w-[400px]">
                                    <div className="text-center">
                                        <div className="mb-2.5 flex justify-center">
                                            <img src={CompassImage} alt="Compass" className="h-[40px] w-[40px] md:h-[60px] md:w-[60px]" />
                                        </div>
                                        <h3 className="w-[350px] font-sans">
                                            discover the beauty of Situbondo culture through English language learning
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Access Section */}
            <section className="flex min-h-screen w-full">
                <div className="relative h-[1200px] w-full bg-[#F2FAFF] px-10 py-20 md:h-[850px] md:px-20">
                    <div className="flex justify-center">
                        <h1 className="text-center font-sans text-2xl font-semibold md:text-start md:text-4xl">How to Access Your SALL-BONDO?</h1>
                    </div>
                    <div className="my-10 flex justify-center md:my-20">
                        {/* md */}
                        <div className="hidden flex-col gap-y-5 md:flex">
                            <div className="flex h-[90px] w-[1000px] items-center gap-4 rounded-2xl border-2 border-gray-300 bg-white px-8">
                                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#F6F6F6]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                            <path
                                                fill="#58A0C8"
                                                d="m11 17.243l-3.95-3.95a1 1 0 1 0-1.414 1.414l5.657 5.657a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0-1.414-1.414L13 17.243V4a1 1 0 1 0-2 0z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div>
                                    <img src={VisitImage} alt="Visit" className="h-[60px] w-[60px]" />
                                </div>
                                <h2 className="font-sans text-xl">Visit the Website</h2>
                            </div>
                            <div className="flex h-[90px] w-[1000px] items-center justify-end gap-4 rounded-2xl border-2 border-gray-300 bg-white px-8">
                                <h2 className="font-sans text-xl">Explore the Learning Menu (Module 1 - 10)</h2>
                                <div>
                                    <img src={ModuleImage} alt="Module" className="h-[60px] w-[60px]" />
                                </div>
                                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#F6F6F6]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                            <path
                                                fill="#58A0C8"
                                                d="m11 17.243l-3.95-3.95a1 1 0 1 0-1.414 1.414l5.657 5.657a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0-1.414-1.414L13 17.243V4a1 1 0 1 0-2 0z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex h-[90px] w-[1000px] items-center gap-4 rounded-2xl border-2 border-gray-300 bg-white px-8">
                                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#F6F6F6]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                            <path
                                                fill="#58A0C8"
                                                d="m11 17.243l-3.95-3.95a1 1 0 1 0-1.414 1.414l5.657 5.657a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0-1.414-1.414L13 17.243V4a1 1 0 1 0-2 0z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div>
                                    <img src={TopicImage} alt="Topic" className="h-[60px] w-[60px]" />
                                </div>
                                <h2 className="font-sans text-xl">
                                    Choose the topic that are interesting for you. You can learn in any order and at your own pace.
                                </h2>
                            </div>
                            <div className="flex h-[90px] w-[1000px] items-center justify-end gap-4 rounded-2xl border-2 border-gray-300 bg-white px-8">
                                <h2 className="w-[800px] text-end font-sans text-xl">
                                    Explore all modules, keep learning, and enjoy your independent language learning journey.
                                </h2>
                                <div>
                                    <img src={JourneyImage} alt="Journey" className="h-[60px] w-[60px]" />
                                </div>
                                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#F6F6F6]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                            <path
                                                fill="#58A0C8"
                                                d="m11 17.243l-3.95-3.95a1 1 0 1 0-1.414 1.414l5.657 5.657a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0-1.414-1.414L13 17.243V4a1 1 0 1 0-2 0z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex h-[110px] w-[1000px] items-center gap-4 rounded-2xl border-2 border-gray-300 bg-white px-8">
                                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#F6F6F6]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                            <path
                                                fill="#58A0C8"
                                                d="m11 17.243l-3.95-3.95a1 1 0 1 0-1.414 1.414l5.657 5.657a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0-1.414-1.414L13 17.243V4a1 1 0 1 0-2 0z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div>
                                    <img src={LearningImage} alt="Learning" className="h-[60px] w-[60px]" />
                                </div>
                                <h2 className="w-[800px] font-sans text-xl">
                                    Take time to reflect on your learning by reviewing what you've understood, noting any challenges, and thinking
                                    about how you can use the new knowledge in real life.
                                </h2>
                            </div>
                        </div>

                        {/* sm */}
                        <div className="flex flex-col gap-y-4 md:hidden">
                            <div className="flex h-[100px] w-[370px] flex-col justify-center gap-y-2 rounded-2xl border-2 border-gray-300 bg-white px-8">
                                <div className="flex justify-center gap-4">
                                    <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#F6F6F6]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                            <g fill="none">
                                                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                                <path
                                                    fill="#58A0C8"
                                                    d="m11 17.243l-3.95-3.95a1 1 0 1 0-1.414 1.414l5.657 5.657a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0-1.414-1.414L13 17.243V4a1 1 0 1 0-2 0z"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div>
                                        <img src={VisitImage} alt="Visit" className="h-[40px] w-[40px]" />
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <h2 className="font-sans text-xl">Visit the Website</h2>
                                </div>
                            </div>
                            <div className="flex h-[130px] w-[370px] flex-col justify-center gap-y-2 rounded-2xl border-2 border-gray-300 bg-white px-8">
                                <div className="flex justify-center gap-4">
                                    <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#F6F6F6]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                            <g fill="none">
                                                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                                <path
                                                    fill="#58A0C8"
                                                    d="m11 17.243l-3.95-3.95a1 1 0 1 0-1.414 1.414l5.657 5.657a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0-1.414-1.414L13 17.243V4a1 1 0 1 0-2 0z"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div>
                                        <img src={ModuleImage} alt="Module" className="h-[40px] w-[40px]" />
                                    </div>
                                </div>
                                <div className="flex justify-center text-center">
                                    <h2 className="font-sans text-lg">Explore the Learning Menu (Module 1 - 10)</h2>
                                </div>
                            </div>
                            <div className="flex h-[180px] w-[370px] flex-col justify-center gap-y-2 rounded-2xl border-2 border-gray-300 bg-white px-8">
                                <div className="flex justify-center gap-4">
                                    <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#F6F6F6]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                            <g fill="none">
                                                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                                <path
                                                    fill="#58A0C8"
                                                    d="m11 17.243l-3.95-3.95a1 1 0 1 0-1.414 1.414l5.657 5.657a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0-1.414-1.414L13 17.243V4a1 1 0 1 0-2 0z"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div>
                                        <img src={TopicImage} alt="Topic" className="h-[40px] w-[40px]" />
                                    </div>
                                </div>
                                <div className="flex justify-center text-center">
                                    <h2 className="font-sans text-lg">
                                        Choose the topic that are interesting for you. You can learn in any order and at your own pace.
                                    </h2>
                                </div>
                            </div>
                            <div className="flex h-[190px] w-[370px] flex-col justify-center gap-y-2 rounded-2xl border-2 border-gray-300 bg-white px-8">
                                <div className="flex justify-center gap-4">
                                    <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#F6F6F6]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                            <g fill="none">
                                                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                                <path
                                                    fill="#58A0C8"
                                                    d="m11 17.243l-3.95-3.95a1 1 0 1 0-1.414 1.414l5.657 5.657a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0-1.414-1.414L13 17.243V4a1 1 0 1 0-2 0z"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div>
                                        <img src={JourneyImage} alt="Journey" className="h-[40px] w-[40px]" />
                                    </div>
                                </div>
                                <div className="flex justify-center text-center">
                                    <h2 className="font-sans text-lg">
                                        Explore all modules, keep learning, and enjoy your independent language learning journey.
                                    </h2>
                                </div>
                            </div>
                            <div className="flex h-[240px] w-[370px] flex-col justify-center gap-y-2 rounded-2xl border-2 border-gray-300 bg-white px-8">
                                <div className="flex justify-center gap-4">
                                    <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#F6F6F6]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                            <g fill="none">
                                                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                                <path
                                                    fill="#58A0C8"
                                                    d="m11 17.243l-3.95-3.95a1 1 0 1 0-1.414 1.414l5.657 5.657a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0-1.414-1.414L13 17.243V4a1 1 0 1 0-2 0z"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div>
                                        <img src={LearningImage} alt="Learning" className="h-[40px] w-[40px]" />
                                    </div>
                                </div>
                                <div className="flex justify-center text-center">
                                    <h2 className="font-sans text-lg">
                                        Take time to reflect on your learning by reviewing what you've understood, noting any challenges, and thinking
                                        about how you can use the new knowledge in real life.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="mt-20 flex min-h-screen w-full">
                <div className="flex w-full justify-center">
                    <div>
                        <div className="flex justify-center">
                            <h1 className="flex items-center gap-2 font-sans text-3xl font-semibold md:text-4xl">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            fill="#000"
                                            d="M21.738 16.13a1 1 0 0 1-.19.61a1 1 0 0 1-.52.38l-1.71.57a3.6 3.6 0 0 0-1.4.86a3.5 3.5 0 0 0-.86 1.4l-.6 1.7a1 1 0 0 1-.36.51a1.1 1.1 0 0 1-.62.19a1 1 0 0 1-1-.71l-.57-1.71a3.5 3.5 0 0 0-.86-1.4a3.8 3.8 0 0 0-1.4-.87l-1.71-.56a1.1 1.1 0 0 1-.51-.37a1.1 1.1 0 0 1-.21-.62a1 1 0 0 1 .71-1l1.72-.57a3.54 3.54 0 0 0 2.28-2.28l.57-1.69a1 1 0 0 1 .95-.73c.215 0 .426.059.61.17c.182.125.322.303.4.51l.58 1.74a3.54 3.54 0 0 0 2.28 2.28l1.7.6a1 1 0 0 1 .51.38a1 1 0 0 1 .21.61m-9.999-6.36a1 1 0 0 1-.17.55a1 1 0 0 1-.47.35l-1.26.42c-.353.122-.673.32-.94.58a2.5 2.5 0 0 0-.58.94l-.43 1.24a.9.9 0 0 1-.35.47a1 1 0 0 1-.56.18a1 1 0 0 1-.57-.19a1 1 0 0 1-.34-.47l-.41-1.25a2.44 2.44 0 0 0-.58-.93a2.2 2.2 0 0 0-.93-.58l-1.25-.42a.93.93 0 0 1-.48-.35a1 1 0 0 1 .48-1.47l1.25-.41a2.49 2.49 0 0 0 1.53-1.53l.41-1.23a1 1 0 0 1 .32-.47a1 1 0 0 1 .55-.2a1 1 0 0 1 .57.16a1 1 0 0 1 .37.46l.42 1.28a2.49 2.49 0 0 0 1.53 1.53l1.25.43a.92.92 0 0 1 .46.35a.94.94 0 0 1 .18.56m5.789-5.36a1 1 0 0 1-.17.51a.82.82 0 0 1-.42.3l-.62.21a.84.84 0 0 0-.52.52l-.22.63a.93.93 0 0 1-.29.39a.82.82 0 0 1-.52.18a1.1 1.1 0 0 1-.49-.15a.9.9 0 0 1-.32-.44l-.21-.62a.7.7 0 0 0-.2-.32a.76.76 0 0 0-.32-.2l-.62-.2a1 1 0 0 1-.42-.31a.9.9 0 0 1-.16-.51a.94.94 0 0 1 .17-.51a.9.9 0 0 1 .42-.3l.61-.2a.9.9 0 0 0 .33-.2a.9.9 0 0 0 .2-.33l.21-.62c.06-.155.155-.292.28-.4a1 1 0 0 1 .49-.19a.94.94 0 0 1 .53.16a1 1 0 0 1 .32.41l.21.64a.9.9 0 0 0 .2.33a1 1 0 0 0 .32.2l.63.21a1 1 0 0 1 .41.3a.87.87 0 0 1 .17.51"
                                        />
                                    </svg>
                                </span>
                                Our Team
                            </h1>
                        </div>
                        <div className="mt-20 mb-16 md:mb-0">
                            <div className="flex flex-wrap justify-center gap-10 md:justify-normal">
                                <div className="flex flex-col gap-y-5">
                                    <img src={IkaImage} alt="Ika" className="h-[330px] w-[330px]" />
                                    <div className="flex flex-col text-center">
                                        <h1 className="text-2xl font-semibold">Ika Fitriani</h1>
                                        <h3>Universitas Jember</h3>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-5">
                                    <img src={ChandraImage} alt="Chandra" className="h-[330px] w-[330px]" />
                                    <div className="flex flex-col text-center">
                                        <h1 className="text-2xl font-semibold">Chandra Ayu Proborini</h1>
                                        <h3>Universitas Jember</h3>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-5">
                                    <img src={DianaImage} alt="Diana" className="h-[330px] w-[330px]" />
                                    <div className="flex flex-col text-center">
                                        <h1 className="text-2xl font-semibold">Diana Setia Dewi</h1>
                                        <h3>Universitas Jember</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collage Section */}
            <section className="flex min-h-screen w-full">
                <div className="relative h-auto w-full bg-[#F2FAFF] px-20 py-20">
                    <div className="flex w-full justify-center">
                        <div>
                            <div className="flex justify-center">
                                <h1 className="flex items-center gap-2 font-sans text-2xl font-semibold text-[#58A0C8] md:text-4xl">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path
                                                fill="#58A0C8"
                                                d="M21.738 16.13a1 1 0 0 1-.19.61a1 1 0 0 1-.52.38l-1.71.57a3.6 3.6 0 0 0-1.4.86a3.5 3.5 0 0 0-.86 1.4l-.6 1.7a1 1 0 0 1-.36.51a1.1 1.1 0 0 1-.62.19a1 1 0 0 1-1-.71l-.57-1.71a3.5 3.5 0 0 0-.86-1.4a3.8 3.8 0 0 0-1.4-.87l-1.71-.56a1.1 1.1 0 0 1-.51-.37a1.1 1.1 0 0 1-.21-.62a1 1 0 0 1 .71-1l1.72-.57a3.54 3.54 0 0 0 2.28-2.28l.57-1.69a1 1 0 0 1 .95-.73c.215 0 .426.059.61.17c.182.125.322.303.4.51l.58 1.74a3.54 3.54 0 0 0 2.28 2.28l1.7.6a1 1 0 0 1 .51.38a1 1 0 0 1 .21.61m-9.999-6.36a1 1 0 0 1-.17.55a1 1 0 0 1-.47.35l-1.26.42c-.353.122-.673.32-.94.58a2.5 2.5 0 0 0-.58.94l-.43 1.24a.9.9 0 0 1-.35.47a1 1 0 0 1-.56.18a1 1 0 0 1-.57-.19a1 1 0 0 1-.34-.47l-.41-1.25a2.44 2.44 0 0 0-.58-.93a2.2 2.2 0 0 0-.93-.58l-1.25-.42a.93.93 0 0 1-.48-.35a1 1 0 0 1 .48-1.47l1.25-.41a2.49 2.49 0 0 0 1.53-1.53l.41-1.23a1 1 0 0 1 .32-.47a1 1 0 0 1 .55-.2a1 1 0 0 1 .57.16a1 1 0 0 1 .37.46l.42 1.28a2.49 2.49 0 0 0 1.53 1.53l1.25.43a.92.92 0 0 1 .46.35a.94.94 0 0 1 .18.56m5.789-5.36a1 1 0 0 1-.17.51a.82.82 0 0 1-.42.3l-.62.21a.84.84 0 0 0-.52.52l-.22.63a.93.93 0 0 1-.29.39a.82.82 0 0 1-.52.18a1.1 1.1 0 0 1-.49-.15a.9.9 0 0 1-.32-.44l-.21-.62a.7.7 0 0 0-.2-.32a.76.76 0 0 0-.32-.2l-.62-.2a1 1 0 0 1-.42-.31a.9.9 0 0 1-.16-.51a.94.94 0 0 1 .17-.51a.9.9 0 0 1 .42-.3l.61-.2a.9.9 0 0 0 .33-.2a.9.9 0 0 0 .2-.33l.21-.62c.06-.155.155-.292.28-.4a1 1 0 0 1 .49-.19a.94.94 0 0 1 .53.16a1 1 0 0 1 .32.41l.21.64a.9.9 0 0 0 .2.33a1 1 0 0 0 .32.2l.63.21a1 1 0 0 1 .41.3a.87.87 0 0 1 .17.51"
                                            />
                                        </svg>
                                    </span>
                                    Team of College Students
                                </h1>
                            </div>
                            <div className="mt-20">
                                <div className="flex flex-wrap gap-10">
                                    <div className="flex flex-col gap-y-5">
                                        <img src={FaridaImage} alt="Farida" className="h-[260px] w-[260px]" />
                                        <div className="flex flex-col text-center">
                                            <h1 className="text-2xl font-semibold">Faridatul Aliyah</h1>
                                            <h3>Universitas Jember</h3>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-5">
                                        <img src={RafiImage} alt="Rafi" className="h-[260px] w-[260px]" />
                                        <div className="flex flex-col text-center">
                                            <h1 className="text-2xl font-semibold">M. Rafi Sofyan Putra</h1>
                                            <h3>Universitas Jember</h3>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-5">
                                        <img src={ArdaImage} alt="Arda" className="h-[260px] w-[260px]" />
                                        <div className="flex flex-col text-center">
                                            <h1 className="text-2xl font-semibold">Arda Cahyaning P.</h1>
                                            <h3>Universitas Jember</h3>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-5">
                                        <img src={DiahImage} alt="Diah" className="h-[260px] w-[260px]" />
                                        <div className="flex flex-col text-center">
                                            <h1 className="text-2xl font-semibold">Diah Alfian Safitri</h1>
                                            <h3>Universitas Jember</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
