import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { useEffect, useState } from 'react';

interface Submission {
    learningMaterial: string;
    usability: string;
}

const learningOptions = ['Very effective', 'Effective', 'Neutral', 'Ineffective', 'Very Ineffective'];
const usabilityOptions = ['Excellent', 'Good', 'Average', 'Poor', 'Very poor'];

const SurveyPage = () => {
    const [learningMaterial, setLearningMaterial] = useState('');
    const [usability, setUsability] = useState('');
    const [showStats, setShowStats] = useState(false);
    const [submissions, setSubmissions] = useState<Submission[]>([]);

    // ✅ Load state dari localStorage saat pertama kali halaman dibuka
    useEffect(() => {
        const savedShowStats = localStorage.getItem('showStats');
        const savedSubmissions = localStorage.getItem('submissions');

        if (savedShowStats === 'true') {
            setShowStats(true);
        }

        if (savedSubmissions) {
            setSubmissions(JSON.parse(savedSubmissions));
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newSubmission = { learningMaterial, usability };
        const updatedSubmissions = [...submissions, newSubmission];
        setSubmissions(updatedSubmissions);
        setShowStats(true);

        // ✅ Simpan ke localStorage
        localStorage.setItem('showStats', 'true');
        localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
    };

    const calculateStats = (options: string[], field: keyof Submission): { label: string; value: number }[] => {
        const total = submissions.length || 1;
        return options.map((label) => {
            const count = submissions.filter((s) => s[field] === label).length;
            return { label, value: Math.round((count / total) * 100) };
        });
    };

    if (showStats) {
        const learningStats = calculateStats(learningOptions, 'learningMaterial');
        const usabilityStats = calculateStats(usabilityOptions, 'usability');

        return (
            <>
                <Navbar />
                <section className="pt-15">
                    <div className="min-h-screen items-center justify-center bg-white p-8">
                        <h2 className="mb-10 py-5 text-center text-4xl font-bold">✨ We value your opinion!</h2>
                        <div className="mx-30 grid grid-cols-1 gap-30 pt-10 text-xl lg:grid-cols-2">
                            {/* Learning Materials */}
                            <div>
                                <p className="mb-2 font-bold">learning materials :</p>
                                {learningStats.map((item) => (
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
                                <p className="mb-2 font-bold">Usability of our learning website :</p>
                                {usabilityStats.map((item) => (
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

    // Form survey
    return (
        <div className="flex min-h-screen items-center justify-center bg-white px-4">
            <form onSubmit={handleSubmit} className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-md">
                <h2 className="mb-8 text-center text-xl font-bold">
                    Please complete this short survey <br />
                    before you leave.
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Learning Materials */}
                    <div>
                        <p className="mb-4 font-semibold">How do you find the provided learning materials?</p>
                        {learningOptions.map((item) => (
                            <label key={item} className="mb-2 flex cursor-pointer items-center justify-between">
                                <span>{item}</span>
                                <input
                                    type="checkbox"
                                    className="h-5 w-5 rounded-sm border border-gray-300 text-blue-600"
                                    checked={learningMaterial === item}
                                    onChange={() => setLearningMaterial(item)}
                                />
                            </label>
                        ))}
                    </div>

                    {/* Usability */}
                    <div>
                        <p className="mb-4 font-semibold">How would you rate the usability of our learning website?</p>
                        {usabilityOptions.map((item) => (
                            <label key={item} className="mb-2 flex cursor-pointer items-center justify-between">
                                <span>{item}</span>
                                <input
                                    type="checkbox"
                                    className="h-5 w-5 rounded-sm border border-gray-300 text-blue-600"
                                    checked={usability === item}
                                    onChange={() => setUsability(item)}
                                />
                            </label>
                        ))}
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <button type="submit" className="rounded bg-[#173F63] px-8 py-2 font-semibold text-white shadow transition hover:bg-[#135085]">
                        Simpan
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SurveyPage;
