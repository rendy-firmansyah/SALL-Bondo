import { UserFormData } from '@/types/FormData';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface Question {
    id: number;
    name_key: string;
    pages: string;
    keterangan: string;
    type: string;
    value: Record<string, string>;
}

// interface FormData {
//     [key: string]: string;
// }

interface StepTwoProps {
    formData: UserFormData;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    onBack: () => void;
    onNext: () => void;
}

const StepTwoForm: React.FC<StepTwoProps> = ({ formData, onChange, onBack, onNext }) => {
    const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('/api/questionLearningReflect');
                setQuestions(response.data);
            } catch (error) {
                console.error('Gagal mengambil data pertanyaan:', error);
            }
        };
        fetchQuestions();
    }, []);

    const handleNext = () => {
        const requiredQuestions = questions.filter((q) => q.pages === 'learning_reflection');
        const isAnyEmpty = requiredQuestions.some((q) => {
            const value = formData[q.name_key];
            return (
                value === undefined ||
                value === null ||
                (typeof value === 'string' && value.trim() === '') ||
                (Array.isArray(value) && value.length === 0)
            );
        });

        if (isAnyEmpty) {
            toast.error('Lengkapi field yang lain');
            return;
        }

        onNext();
    };

    return (
        <div>
            <h1 className="mt-20 text-5xl font-bold">
                Lembar Refleksi Penggunaan <br /> SALL-Bondo
            </h1>
            <h2 className="mt-5 text-lg font-bold">Refleksi Pembelajaran</h2>
            <div className="mt-4 mb-8 rounded-lg border-2 border-dashed border-red-600 p-4 text-sm">
                Bagian ini bertujuan untuk mengetahui pendapat dan mengeksplorasi pengalaman belajar pengguna dalam menggunakan SALL-Bondo dan
                dampaknya dalam pengembangan kemampuan bahasa Inggris.
            </div>

            {questions
                .filter((q) => q.pages === 'learning_reflection')
                .map((q) => (
                    <label key={q.id} className="mb-4 block">
                        <span className="text-md font-medium">{q.keterangan}</span>
                        {q.type === 'text' ? (
                            <textarea
                                name={q.name_key}
                                value={String(formData[q.name_key] || '')}
                                onChange={onChange}
                                className="mt-2 w-full rounded border bg-gray-50 p-2.5 text-sm shadow-sm"
                                placeholder="Jawaban anda"
                            />
                        ) : q.type === 'radio_button' ? (
                            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
                                {Object.entries(typeof q.value === 'string' ? JSON.parse(q.value) : q.value).map(([key, value]) => {
                                    const valStr = value as string;
                                    return (
                                        <label key={key} className="flex flex-col items-center gap-3">
                                            <span>{valStr}</span>
                                            <input
                                                type="radio"
                                                name={q.name_key}
                                                value={valStr}
                                                checked={formData[q.name_key] === valStr}
                                                onChange={onChange}
                                                className="scale-200"
                                            />
                                        </label>
                                    );
                                })}
                            </div>
                        ) : null}
                    </label>
                ))}

            <div className="mt-12 mb-20 flex justify-between gap-4">
                <button onClick={onBack} className="w-full rounded bg-gray-400 px-6 py-2 text-white transition-all ease-linear hover:bg-gray-500">
                    Kembali
                </button>
                <button
                    onClick={handleNext}
                    className="bg-primaryy w-full rounded px-6 py-2 text-white transition-all ease-linear hover:bg-[#34699A]"
                >
                    Berikutnya
                </button>
            </div>
        </div>
    );
};

export default StepTwoForm;
