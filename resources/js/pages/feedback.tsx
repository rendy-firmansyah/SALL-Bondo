import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import axios from 'axios';
import { useState } from 'react';

export default function Feedback() {
    const [learningMaterial, setLearningMaterial] = useState('');
    const [usability, setUsability] = useState('');
    const [showStats, setShowStats] = useState(false);
    const [stats, setStats] = useState<{
        learningMaterials: { label: string; value: number }[];
        usability: { label: string; value: number }[];
    } | null>(null);

    const handleCheckboxChange = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
        setter(value); // Hanya bisa pilih satu (seperti radio, tapi tampilan kotak)
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/submit', {
            learningMaterial,
            usability,
        });

        const response = await axios.get('http://localhost:5000/api/statistics');
        setStats(response.data);
        setShowStats(true);
    };

    if (showStats && stats) {
        return (
            <>
                <Navbar />
                <section className="pt-15">
                    <div className="min-h-screen items-center justify-center bg-white p-8">
                        <h2 className="mb-10 py-5 text-center text-4xl font-bold">✨ We value your opinion!</h2>
                        <div className="mx-30 grid grid-cols-1 gap-30 pt-10 text-xl lg:grid-cols-2">
                            {/* Learning Materials */}
                            <div>
                                <p className="mb-2 font-semibold">learning materials :</p>
                                {stats.learningMaterials.map((item) => (
                                    <div key={item.label} className="mb-3 overflow-hidden rounded-lg border bg-white">
                                        <div className="relative flex items-center justify-between px-4 py-2">
                                            <div className="absolute top-0 left-0 z-0 h-full bg-gray-200" style={{ width: `${item.value}%` }} />
                                            <div className="relative z-10 flex w-full justify-between">
                                                <span className="font-medium">{item.label}</span>
                                                <span className="font-medium">{item.value.toString().padStart(2, '0')}%</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Usability */}
                            <div>
                                <p className="mb-2 font-semibold">Usability of our learning website :</p>
                                {stats.usability.map((item) => (
                                    <div key={item.label} className="mb-3 overflow-hidden rounded-lg border bg-white">
                                        <div className="relative flex items-center justify-between px-4 py-2">
                                            <div className="absolute top-0 left-0 z-0 h-full bg-gray-200" style={{ width: `${item.value}%` }} />
                                            <div className="relative z-10 flex w-full justify-between">
                                                <span className="font-medium">{item.label}</span>
                                                <span className="font-medium">{item.value.toString().padStart(2, '0')}%</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <section>
                <div className="flex min-h-screen items-center justify-center bg-white px-0 md:px-4">
                    <form onSubmit={handleSubmit} className="w-3/4 rounded-lg bg-white px-2 py-8 md:p-8">
                        <h2 className="mt-20 mb-10 text-center text-2xl font-bold md:mt-0 md:mb-15 md:text-3xl">
                            Please complete this short survey <br />
                            before you leave.
                        </h2>

                        <div className="grid grid-cols-1 gap-16 text-xl md:grid-cols-2 md:gap-30">
                            {/* Learning Materials */}
                            <div>
                                <p className="mb-4 font-semibold">How do you find the provided learning materials?</p>
                                {['Very effective', 'Effective', 'Neutral', 'Ineffective', 'Very Ineffective'].map((item) => (
                                    <label key={item} className="mb-2 flex cursor-pointer items-center justify-between">
                                        <span>{item}</span>
                                        <input
                                            type="checkbox"
                                            className="h-5 w-5 rounded-sm border border-gray-300 text-blue-300 focus:ring-blue-500"
                                            checked={learningMaterial === item}
                                            onChange={() => handleCheckboxChange(setLearningMaterial, item)}
                                        />
                                    </label>
                                ))}
                            </div>

                            {/* Usability */}
                            <div>
                                <p className="mb-4 font-semibold">How would you rate the usability of our learning website?</p>
                                {['Excellent', 'Good', 'Average', 'Poor', 'Very poor'].map((item) => (
                                    <label key={item} className="mb-2 flex cursor-pointer items-center justify-between">
                                        <span>{item}</span>
                                        <input
                                            type="checkbox"
                                            className="h-5 w-5 rounded-sm border border-gray-300 text-blue-300 focus:ring-blue-500"
                                            checked={usability === item}
                                            onChange={() => handleCheckboxChange(setUsability, item)}
                                        />
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mt-15 text-center">
                            <button
                                type="submit"
                                className="rounded bg-[#173F63] px-8 py-2 font-semibold text-white shadow transition hover:bg-[#135085] md:px-80"
                            >
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
}
