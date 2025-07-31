import { Head, Link } from '@inertiajs/react';
import axios from 'axios';
import { Trash } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Question {
    id: number;
    name_key: string;
    pages: string;
    keterangan: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Learning Survey',
        href: '/learning-reflection-survey/questions/Data',
    },
];

export default function DataQuestion() {
    const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('/api/questionLearningReflect');
                setQuestions(response.data);
            } catch (error) {
                console.error('Gagal mengambil data:', error);
            }
        };

        fetchQuestions();
    }, []);

    const handleDelete = async (id: number) => {
        if (!confirm('Apakah Anda yakin ingin menghapus pertanyaan ini?')) return;

        try {
            await axios.delete(`/api/questionLearningReflect/${id}`);
            toast.success('Pertanyaan berhasil dihapus!');
            setQuestions((prev) => prev.filter((q) => q.id !== id));
        } catch (error) {
            console.error('Gagal menghapus data:', error);
            toast.error('Gagal menghapus pertanyaan. Silakan coba lagi.');
        }
    };

    const learningReflectionQuestions = questions.filter((item) => item.pages === 'learning_reflection');

    const platformRatingQuestions = questions.filter((item) => item.pages === 'platform_rating');

    const renderTable = (title: string, data: Question[]) => (
        <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-gray-700">{title}</h2>
            <table className="min-w-full table-auto border-collapse text-left text-sm">
                <thead className="bg-primaryy text-white">
                    <tr>
                        <th className="px-4 py-2">No</th>
                        <th className="px-4 py-2">Keterangan</th>
                        <th className="px-4 py-2">Key Question</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id} className="border-t">
                            <td className="px-4 py-2">{index + 1}</td>
                            <td className="px-4 py-2">{item.keterangan}</td>
                            <td className="px-4 py-2">{item.name_key}</td>
                            <td className="px-4 py-2">
                                <Button
                                    variant="outline"
                                    className="bg-red-500 text-white transition-all ease-linear hover:bg-red-400 hover:text-white"
                                    size="sm"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    <Trash size={12} /> Hapus
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Learning Reflection Survey" />
                <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                    <div className="my-3">
                        <Link
                            href={route('questions-learning')}
                            className="bg-secondaryy cursor-pointer rounded-sm px-5 py-3 font-semibold text-white transition-all ease-linear hover:bg-[#58A0C8]"
                        >
                            Kembali
                        </Link>
                    </div>

                    {renderTable('Pertanyaan untuk Learning Reflection', learningReflectionQuestions)}
                    {renderTable('Pertanyaan untuk Platform Rating', platformRatingQuestions)}
                </div>
            </AppLayout>
            <ToastContainer />
        </>
    );
}
