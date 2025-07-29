import { FormData } from '@/types/FormData';
import React from 'react';

interface StepTwoProps {
    formData: FormData;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    onBack: () => void;
    onNext: () => void;
}

const StepTwoForm: React.FC<StepTwoProps> = ({ formData, onChange, onBack, onNext }) => {
    const fields: { label: string; name: keyof FormData }[] = [
        { label: 'Apa hal baru yang Anda pelajari dari modul SALL-BONDO ini?', name: 'new_knowledge' },
        { label: 'Bagaimana materi dalam SALL-BONDO membantu Anda belajar bahasa Inggris?', name: 'how_helped' },
        {
            label: 'Apakah Anda merasa lebih percaya diri belajar bahasa Inggris secara mandiri setelah menggunakan SALL-Bondo? Jelaskan alasannya.',
            name: 'confidence',
        },
        { label: 'Apakah Anda merasa kemampuan membaca teks bahasa Inggris Anda meningkat? Jelaskan.', name: 'reading_improvement' },
        {
            label: 'Apakah Anda merasa kemampuan menyimak atau mendengarkan dalam bahasa Inggris Anda meningkat? Jelaskan.',
            name: 'listening_improvement',
        },
        { label: 'Apakah ada peningkatan dalam bahasa Inggris setelah belajar dengan platform SALL-Bondo? Jelaskan.', name: 'overall_improvement' },
        // {
        //     label: 'Berdasarkan refleksi Anda, berapa nilai bahasa Inggris Anda setelah serangkaian proses belajar bahasa Inggris dalam dengan dosen dan menggunakan SALL-Bondo?',
        //     name: 'nilaiBahasa',
        // },
    ];

    return (
        <div>
            <h1 className="mt-20 text-5xl font-bold">
                Lembar Refleksi Penggunaan <br></br> SALL-Bondo
            </h1>
            <h2 className="mt-5 text-lg font-bold">Refleksi Pembelajaran</h2>
            <div className="mt-4 mb-8 rounded-lg border-2 border-dashed border-red-600 p-4 text-sm">
                Bagian ini bertujuan untuk mengetahui pendapat dan mengeksplorasi pengalaman belajar pengguna dalam menggunakan SALL-Bondo dan
                dampaknya dalam pengembangan kemampuan bahasa Inggris.
            </div>

            {fields.map(({ label, name }) => (
                <label key={name} className="mb-4 block">
                    <span className="text-sm font-medium">{label}</span>
                    <textarea
                        name={name}
                        value={formData[name] as string}
                        onChange={onChange}
                        className="mt-2 w-full rounded border bg-gray-50 p-2.5 text-sm shadow-sm"
                        placeholder="Jawaban anda"
                    />
                </label>
            ))}

            {/* Custom input nilaiBahasa */}
            <div className="mb-6">
                <p className="mb-4 text-sm font-medium">
                    Berdasarkan refleksi Anda, berapa nilai bahasa Inggris Anda setelah serangkaian proses belajar bahasa Inggris dalam dengan dosen
                    dan menggunakan SALL-Bondo?
                </p>
                <div className="mx-20 flex justify-between">
                    {[...Array(10)].map((_, i) => {
                        const value = (i + 1).toString();
                        return (
                            <label key={value} className="text-md flex flex-col items-center font-medium text-gray-700">
                                <span className="mb-1">{value}</span>
                                <input
                                    type="radio"
                                    name="english_score"
                                    value={value}
                                    checked={formData.english_score === value}
                                    onChange={onChange}
                                    className="h-8 w-8 accent-blue-600"
                                />
                            </label>
                        );
                    })}
                </div>
            </div>

            <div className="mt-12 mb-20 flex justify-between gap-4">
                <button onClick={onBack} className="w-full rounded bg-gray-400 px-6 py-2 text-white transition-all ease-linear hover:bg-gray-500">
                    Kembali
                </button>
                <button onClick={onNext} className="bg-primaryy w-full rounded px-6 py-2 text-white transition-all ease-linear hover:bg-[#34699A]">
                    Berikutnya
                </button>
            </div>
        </div>
    );
};

export default StepTwoForm;
