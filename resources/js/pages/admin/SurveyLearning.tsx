import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import axios from 'axios';
import { Info } from 'lucide-react';
import { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Learning Survey',
        href: '/learning-reflection-survey',
    },
];

interface LearningReflectItem {
    id: number;
    name: string;
    phone: string;
    modules_completed: string[];
    learning_reflection: Record<string, string | number>;
    platform_rating: Record<string, string | number>;
    created_at: string;
    updated_at: string;
}

// ... import tetap sama

export default function SurveyLearning() {
    const [data, setData] = useState<LearningReflectItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedData, setSelectedData] = useState<LearningReflectItem | null>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/learningReflect');
                setData(response.data);
            } catch (error) {
                console.error('Gagal mengambil data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const interpretRating = (value: string | number) => {
        const ratingMap: Record<number, string> = {
            1: 'Tidak Setuju',
            2: 'Kurang Setuju',
            3: 'Netral',
            4: 'Setuju',
            5: 'Sangat Setuju',
        };

        const numValue = Number(value);
        return ratingMap[numValue] || value;
    };

    const openModal = async (itemId: number) => {
        try {
            const response = await axios.get(`/api/learningReflect/${itemId}`);
            const item = response.data;

            const parsedLearning = typeof item.learning_reflection === 'string' ? JSON.parse(item.learning_reflection) : item.learning_reflection;

            const parsedPlatform = typeof item.platform_rating === 'string' ? JSON.parse(item.platform_rating) : item.platform_rating;

            setSelectedData({
                ...item,
                learning_reflection: parsedLearning,
                platform_rating: parsedPlatform,
            });

            setShowModal(true);
        } catch (error) {
            console.error('Gagal mengambil detail data:', error);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedData(null);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Learning Reflection Survey" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="my-3">
                    <Link
                        href={route('questions-learning')}
                        className="bg-secondaryy cursor-pointer rounded-sm px-5 py-3 font-semibold text-white transition-all ease-linear hover:bg-[#58A0C8]"
                    >
                        Upload Pertanyaan
                    </Link>
                </div>

                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <table className="min-w-full table-auto border-collapse text-left text-sm">
                        <thead className="bg-primaryy text-white">
                            <tr>
                                <th className="px-4 py-2">No</th>
                                <th className="px-4 py-2">Nama</th>
                                <th className="px-4 py-2">Phone</th>
                                <th className="px-4 py-2">Modul yang Dikerjakan</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="py-4 text-center">
                                        Tidak ada data.
                                    </td>
                                </tr>
                            ) : (
                                data.map((item, index) => (
                                    <tr key={item.id} className="border-t">
                                        <td className="px-4 py-2">{index + 1}</td>
                                        <td className="px-4 py-2">{item.name}</td>
                                        <td className="px-4 py-2">{item.phone}</td>
                                        <td className="px-4 py-2">
                                            {typeof item.modules_completed === 'string'
                                                ? JSON.parse(item.modules_completed).join(', ')
                                                : Array.isArray(item.modules_completed)
                                                  ? item.modules_completed.join(', ')
                                                  : ''}
                                        </td>
                                        <td className="px-4 py-2">
                                            <Button
                                                variant="outline"
                                                className="bg-primaryy text-white transition-all ease-linear hover:bg-[#34699A] hover:text-white"
                                                size="sm"
                                                onClick={() => openModal(item.id)}
                                            >
                                                <Info size={12} className="mr-1" /> Info
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                )}

                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                        <div className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
                            <button onClick={closeModal} className="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-red-600">
                                &times;
                            </button>
                            <h2 className="mb-4 text-lg font-semibold">Detail Survey</h2>

                            <div className="max-h-[70vh] overflow-y-auto pr-2">
                                {selectedData ? (
                                    <>
                                        <div className="mb-3">
                                            <h3 className="font-semibold">Learning Reflection</h3>
                                            <ul className="list-disc pl-5">
                                                {Object.entries(selectedData.learning_reflection).map(([key, value]) => (
                                                    <li key={`learning-${key}`}>
                                                        <strong>{key.replace(/_/g, ' ')}:</strong>{' '}
                                                        {typeof value === 'number' || !isNaN(Number(value))
                                                            ? `${value} - ${interpretRating(value)}`
                                                            : value}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="mb-3">
                                            <h3 className="font-semibold">Platform Rating</h3>
                                            <ul className="list-disc pl-5">
                                                {Object.entries(selectedData.platform_rating).map(([key, value]) => (
                                                    <li key={`platform-${key}`}>
                                                        <strong>{key.replace(/_/g, ' ')}:</strong>{' '}
                                                        {typeof value === 'number' || !isNaN(Number(value))
                                                            ? `${value} - ${interpretRating(value)}`
                                                            : value}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                ) : (
                                    <div>Loading detail...</div>
                                )}
                            </div>

                            <div className="mt-4 text-right">
                                <Button onClick={closeModal} className="bg-gray-500 text-white hover:bg-gray-700">
                                    Tutup
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
