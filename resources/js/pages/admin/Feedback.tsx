import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import axios from 'axios';
import { Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Data Feedback', href: '/data-feedback' }];

type FeedbackData = {
    total: number;
    learning: { label: string; value: number }[];
    usability: { label: string; value: number }[];
};

export default function SurveyLearning() {
    const [data, setData] = useState<FeedbackData>({
        total: 0,
        learning: [],
        usability: [],
    });

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get('/api/feedback');

            const learningObj = res.data.learning_materials_summary || {};
            const usabilityObj = res.data.website_usability_summary || {};

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

            const total = [...learningArray, ...usabilityArray].reduce((sum, item) => sum + item.value, 0);

            setData({ total, learning: learningArray, usability: usabilityArray });
        };

        fetch();
    }, []);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Learning Reflection Survey" />

            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                {/* Kartu Total Responden */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <Users size={40} className="text-blue-500" />
                        <div>
                            <p className="text-sm text-gray-500">Total Responden</p>
                            <p className="text-3xl font-bold">{data.total}</p>
                        </div>
                    </div>
                </div>

                {/* Dua Diagram Batang */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* Diagram Learning */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <p className="mb-4 text-sm font-semibold text-gray-700">Learning Materials Survey</p>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={data.learning}>
                                <XAxis className="text-sm" dataKey="label" />
                                <YAxis allowDecimals={false} interval="preserveStartEnd" />
                                <Tooltip formatter={(value: number) => `${value} orang`} />
                                <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Diagram Usability */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <p className="mb-4 text-sm font-semibold text-gray-700">Usability Survey</p>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={data.usability}>
                                <XAxis className="text-sm" dataKey="label" />
                                <YAxis allowDecimals={false} interval="preserveStartEnd" />
                                <Tooltip formatter={(value: number) => `${value} orang`} />
                                <Bar dataKey="value" fill="#00C49F" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
