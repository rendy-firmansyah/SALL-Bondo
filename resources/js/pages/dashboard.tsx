import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

type FeedbackData = {
    total: number;
    learning: { label: string; value: number }[];
    usability: { label: string; value: number }[];
};

export default function Dashboard() {
    const [surveyCount, setSurveyCount] = useState({ learning: 0, platform: 0 });
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

            const reflectRes = await axios.get('/api/learningReflect');
            const reflects = reflectRes.data;

            const learningCount = reflects.filter((item: any) => {
                try {
                    const parsed = JSON.parse(item.learning_reflection);
                    return Object.values(parsed).some((val) => val && val.trim() !== '');
                } catch {
                    return false;
                }
            }).length;

            const platformCount = reflects.filter((item: any) => {
                try {
                    const parsed = JSON.parse(item.platform_rating);
                    return Object.values(parsed).some((val) => val && val.trim() !== '');
                } catch {
                    return false;
                }
            }).length;

            setSurveyCount({ learning: learningCount, platform: platformCount });
        };

        fetch();
    }, []);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <div className="h-full p-5">
                            <div className="flex items-center gap-2">
                                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024">
                                        <path
                                            fill="#000"
                                            d="M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z"
                                        />
                                    </svg>
                                </div>
                                <h1 className="text-lg font-bold">Learning Survey</h1>
                            </div>
                            <div className="absolute right-5 bottom-5 text-right">
                                <div>
                                    <h1 className="text-5xl">
                                        {surveyCount.learning}
                                        <span className="text-base">Survey</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <div className="h-full p-5">
                            <div className="flex items-center gap-2">
                                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                            <path
                                                fill="#000"
                                                d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 8H5v6h14zm0-6H5v4h14zM7 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <h1 className="text-lg font-bold">Platform Survey</h1>
                            </div>
                            <div className="absolute right-5 bottom-5 text-right">
                                <div>
                                    <h1 className="text-5xl">
                                        {surveyCount.platform}
                                        <span className="text-base">Survey</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <div className="h-full p-5">
                            <div className="flex items-center gap-2">
                                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                        <path
                                            fill="none"
                                            stroke="#000"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 20c0-1.742-1.67-3.223-4-3.773M15 20c0-2.21-2.686-4-6-4s-6 1.79-6 4m12-7a4 4 0 0 0 0-8m-6 8a4 4 0 1 1 0-8a4 4 0 0 1 0 8"
                                        />
                                    </svg>
                                </div>
                                <h1 className="text-lg font-bold">Feedback</h1>
                            </div>
                            <div className="absolute right-5 bottom-5 text-right">
                                <div>
                                    <h1 className="text-5xl">
                                        {data.total}
                                        <span className="text-base">Responden</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
