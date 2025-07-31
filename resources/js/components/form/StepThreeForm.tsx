// import { FormData } from '@/types/FormData';
import { UserFormData } from '@/types/FormData';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Question {
    id: number;
    name_key: string;
    pages: string;
    keterangan: string;
    type: string;
    value: Record<string, string> | string;
}

// interface FormData {
//     [key: string]: string;
// }

interface StepThreeProps {
    formData: UserFormData;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBack: () => void;
    onSubmit: () => void;
}

const StepThreeForm: React.FC<StepThreeProps> = ({ formData, onChange, onBack, onSubmit }) => {
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

    return (
        <div>
            <h1 className="mt-20 text-5xl font-bold">
                Lembar Refleksi Penggunaan <br /> SALL-Bondo
            </h1>
            <h2 className="mt-5 text-lg font-bold">Penilaian Platform SALL-Bondo</h2>
            <div className="mt-4 mb-8 rounded-lg border-2 border-dashed border-red-600 p-4 text-sm">
                Bagian ini bertujuan untuk mengevaluasi kualitas dan efektivitas platform SALL-Bondo berdasarkan pengalaman pengguna.
            </div>

            {questions
                .filter((q) => q.pages === 'platform_rating')
                .map((q) => (
                    <div key={q.id} className="mt-6">
                        <p className="mb-4 font-medium">{q.keterangan}</p>

                        {q.type === 'radio_button' && (
                            <div className="flex items-center gap-14">
                                {Object.entries(typeof q.value === 'string' ? JSON.parse(q.value) : q.value).map(([key, value]) => {
                                    const valStr = value as string;
                                    return (
                                        <label key={key} className="flex flex-col items-center">
                                            <span className="mb-2 text-sm">{valStr}</span>
                                            <input
                                                type="radio"
                                                name={q.name_key}
                                                value={valStr}
                                                checked={formData[q.name_key] === valStr}
                                                onChange={onChange}
                                                className="h-8 w-8"
                                            />
                                        </label>
                                    );
                                })}
                            </div>
                        )}

                        {q.type === 'text' && (
                            <textarea
                                name={q.name_key}
                                value={String(formData[q.name_key] || '')}
                                onChange={onChange}
                                className="mt-2 w-full rounded border bg-gray-50 p-2.5 text-sm shadow-sm"
                                placeholder="Jawaban anda"
                            />
                        )}

                        {q.type === 'radio_button' && (
                            <div className="mt-3 flex max-w-sm justify-between text-xs">
                                <span>Tidak Setuju</span>
                                <span>Sangat Setuju</span>
                            </div>
                        )}
                    </div>
                ))}

            <div className="mt-8 mb-20 flex justify-between gap-4">
                <button onClick={onBack} className="w-full rounded bg-gray-400 px-6 py-2 text-white hover:bg-gray-500">
                    Kembali
                </button>
                <button onClick={onSubmit} className="bg-primaryy w-full rounded px-6 py-2 text-white hover:bg-[#34699A]">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default StepThreeForm;
