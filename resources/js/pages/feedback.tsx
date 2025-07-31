import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export default function Feedback() {
    const [learningMaterial, setLearningMaterial] = useState<string>('');
    const [usability, setUsability] = useState<string>('');
    const [showLearningMaterial, setShowLearningMaterial] = useState<{ label: string; value: number }[]>([]);
    const [showUsability, setShowUsability] = useState<{ label: string; value: number }[]>([]);
    const [showStats, setShowStats] = useState(false);

    const handleCheckboxChange = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
        setter(value); // Hanya bisa pilih satu (seperti radio, tapi tampilan kotak)
    };

    const fetchStats = async () => {
        try {
            const response = await axios.get('/api/feedback');

            const learningObj = response.data.learning_materials_summary;
            const usabilityObj = response.data.website_usability_summary;

            const defaultLearning = ['Very effective', 'Effective', 'Neutral', 'Ineffective', 'Very Ineffective'];
            const defaultUsability = ['Excellent', 'Good', 'Average', 'Poor', 'Very poor'];

            const learningArray = defaultLearning.map((label) => ({
                label,
                value: Number(learningObj[label] || 0),
            }));

            const usabilityArray = defaultUsability.map((label) => ({
                label,
                value: Number(usabilityObj[label] || 0),
            }));

            setShowLearningMaterial(learningArray);
            setShowUsability(usabilityArray);
        } catch (error) {
            console.error('Error fetching feedback:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('/api/feedback', {
                learning_materials: learningMaterial,
                website_usability: usability,
            });

            Cookies.set('showStats', 'true', { expires: 7 });
            setShowStats(true);
            await fetchStats(); // langsung tampilkan data statistik
        } catch (error) {
            console.error('Error submitting feedback:', error);
            alert('Terjadi kesalahan saat mengirim data. Coba lagi nanti.');
        }
    };

    useEffect(() => {
        const cookieStats = Cookies.get('showStats');
        if (cookieStats === 'true') {
            setShowStats(true);
            fetchStats(); // ambil data jika cookie ada
        } else {
            setShowStats(false);
        }
    }, []);

    console.log('Feedback stats:', showLearningMaterial);
    console.log('Feedback stats:', showUsability);

    return (
        <>
            <Navbar />
            {showStats ? (
                <section className="pt-16">
                    <div className="min-h-screen items-center justify-center bg-white p-8">
                        <h2 className="mb-10 py-5 text-center text-4xl font-bold">✨ We value your opinion!</h2>
                        <div className="mx-0 grid grid-cols-1 gap-30 pt-10 text-xl md:mx-30 lg:grid-cols-2">
                            {/* Learning Materials */}
                            <div>
                                <p className="mb-2 font-semibold">learning materials :</p>
                                {(() => {
                                    const total = showLearningMaterial.reduce((sum, item) => sum + item.value, 0);
                                    return showLearningMaterial.map((item) => {
                                        const percent = total > 0 ? Math.round((item.value / total) * 100) : 0;
                                        return (
                                            <div key={item.label} className="mb-3 overflow-hidden rounded-lg border bg-white">
                                                <div className="relative flex items-center justify-between px-4 py-2">
                                                    <div className="absolute top-0 left-0 z-0 h-full bg-gray-200" style={{ width: `${percent}%` }} />
                                                    <div className="relative z-10 flex w-full justify-between">
                                                        <span className="font-medium">{item.label}</span>
                                                        <span className="font-medium">{percent.toString().padStart(2, '0')}%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    });
                                })()}
                            </div>

                            {/* Usability */}
                            <div>
                                <p className="mb-2 font-semibold">Usability of our learning website :</p>
                                {(() => {
                                    const total = showUsability.reduce((sum, item) => sum + item.value, 0);
                                    return showUsability.map((item) => {
                                        const percent = total > 0 ? Math.round((item.value / total) * 100) : 0;
                                        return (
                                            <div key={item.label} className="mb-3 overflow-hidden rounded-lg border bg-white">
                                                <div className="relative flex items-center justify-between px-4 py-2">
                                                    <div className="absolute top-0 left-0 z-0 h-full bg-gray-200" style={{ width: `${percent}%` }} />
                                                    <div className="relative z-10 flex w-full justify-between">
                                                        <span className="font-medium">{item.label}</span>
                                                        <span className="font-medium">{percent.toString().padStart(2, '0')}%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    });
                                })()}
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
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
            )}
            <Footer />
        </>
    );
}
