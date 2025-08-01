import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Trash } from 'lucide-react';

export default function FormQuestion() {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Learning Survey',
            href: '/learning-reflection-survey/questions',
        },
    ];

    const [dataLearning, setDataLearning] = useState({
        name_key: '',
        keterangan: '',
        pages: 'learning_reflection', // default
    });

    const [typeLearning, setTypeLearning] = useState<'text' | 'radio_button'>('text');
    const [valueLearning, setValueLearning] = useState<{ [key: string]: string }>({});
    const [loadingLearning, setLoadingLearning] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setDataLearning({ ...dataLearning, [name]: value });
    };

    const handleAddOption = () => {
        const optionCount = Object.keys(valueLearning).length;
        if (optionCount < 10) {
            const nextKey = `option${optionCount + 1}`;
            setValueLearning({ ...valueLearning, [nextKey]: '' });
        }
    };

    const handleOptionChange = (key: string, value: string) => {
        setValueLearning({ ...valueLearning, [key]: value });
    };

    const handleRemoveOption = (key: string) => {
        const updated = { ...valueLearning };
        delete updated[key];
        setValueLearning(updated);
    };

    const handleSubmitLearningReflection = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoadingLearning(true);

        try {
            const payload = {
                ...dataLearning,
                type: typeLearning,
                value: typeLearning === 'radio_button' ? valueLearning : null,
            };

            await axios.post('/api/questionLearningReflect', payload);

            toast.success('Pertanyaan berhasil disimpan!');
            setDataLearning({ name_key: '', keterangan: '', pages: 'learning_reflection' });
            setValueLearning({});
            setTypeLearning('text');
        } catch (error) {
            console.error(error);
            toast.error('Terjadi kesalahan saat menyimpan pertanyaan.');
        } finally {
            setLoadingLearning(false);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Learning Reflection Survey" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="my-3">
                    <Link
                        href={route('learning-dashboard')}
                        className="bg-secondaryy me-3 cursor-pointer rounded-sm px-5 py-3 font-semibold text-white transition-all ease-linear hover:bg-[#58A0C8]"
                    >
                        Kembali
                    </Link>
                    <Link
                        href={route('questions-data')}
                        className="bg-secondaryy cursor-pointer rounded-sm px-5 py-3 font-semibold text-white transition-all hover:bg-[#58A0C8]"
                    >
                        Cek Data Question
                    </Link>
                </div>
                <form onSubmit={handleSubmitLearningReflection} className="space-y-4 rounded border p-4">
                    <div>
                        <label className="mb-1 block font-medium">Key Pertanyaan</label>
                        <input
                            type="text"
                            name="name_key"
                            value={dataLearning.name_key}
                            onChange={handleChange}
                            required
                            className="w-full rounded border p-2"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block font-medium">Keterangan</label>
                        <input
                            type="text"
                            name="keterangan"
                            value={dataLearning.keterangan}
                            onChange={handleChange}
                            required
                            className="w-full rounded border p-2"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block font-medium">Pages</label>
                        <select name="pages" value={dataLearning.pages} onChange={handleChange} required className="w-full rounded border p-2">
                            <option value="learning_reflection">Learning Reflection</option>
                            <option value="platform_rating">Platform Rating</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-1 block font-medium">Tipe Pertanyaan</label>
                        <select
                            value={typeLearning}
                            onChange={(e) => setTypeLearning(e.target.value as 'text' | 'radio_button')}
                            className="w-full rounded border p-2"
                        >
                            <option value="text">Text</option>
                            <option value="radio_button">Radio Button</option>
                        </select>
                    </div>

                    {typeLearning === 'radio_button' && (
                        <div>
                            <label className="mb-2 block font-medium">Opsi Jawaban</label>
                            {Object.entries(valueLearning).map(([key, val]) => (
                                <div key={key} className="mb-2 flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={val}
                                        onChange={(e) => handleOptionChange(key, e.target.value)}
                                        placeholder={`Masukkan ${key}`}
                                        className="w-full rounded border p-2"
                                    />
                                    <button type="button" onClick={() => handleRemoveOption(key)} className="text-sm text-red-500">
                                        Hapus
                                    </button>
                                </div>
                            ))}
                            {Object.keys(valueLearning).length < 10 && (
                                <button type="button" onClick={handleAddOption} className="text-sm text-blue-600 underline">
                                    + Tambah Opsi
                                </button>
                            )}
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="bg-primaryy rounded px-4 py-2 text-white transition-all ease-linear hover:bg-[#58A0C8]"
                            disabled={loadingLearning}
                        >
                            {loadingLearning ? 'Menyimpan...' : 'Simpan Pertanyaan'}
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </AppLayout>
    );
}
