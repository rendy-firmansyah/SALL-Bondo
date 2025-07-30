import { FormData } from '@/types/FormData';
import React from 'react';

interface StepThreeProps {
    formData: FormData;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBack: () => void;
    onSubmit: () => void;
}

const StepThreeForm: React.FC<StepThreeProps> = ({ formData, onChange, onBack, onSubmit }) => {
    const questions = [
        {
            key: 'easy_to_use',
            text: 'Platform ini mudah digunakan dan dinavigasi.',
        },
        {
            key: 'clear_instructions',
            text: 'Petunjuk pada setiap modul jelas dan mudah dipahami.',
        },
        {
            key: 'no_technical_issue',
            text: 'Saya dapat mengakses platform tanpa kendala teknis.',
        },
        {
            key: 'attractive_platform',
            text: 'Tampilan platform menarik dan nyaman dilihat.',
        },
        {
            key: 'appropriate_level',
            text: 'Materi sesuai dengan tingkat kemampuan bahasa Inggris saya.',
        },
        {
            key: 'cultural_relevance',
            text: 'Topik yang disajikan relevan dengan budaya lokal Situbondo.',
        },
        {
            key: 'real_life_context',
            text: 'Saya dapat mengaitkan materi dengan situasi nyata di kehidupan sehari-hari.',
        },
        {
            key: 'reading_skill',
            text: 'Platform ini membantu saya meningkatkan kemampuan membaca.',
        },
        {
            key: 'listening_skill',
            text: 'Platform ini membantu saya meningkatkan kemampuan mendengar.',
        },
        {
            key: 'study_cultural',
            text: 'Saya mempelajari budaya Situbondo melalui modul yang disediakan.',
        },
        {
            key: 'local_identity',
            text: 'Saya merasa lebih terhubung dengan identitas lokal setelah menggunakan platform ini.',
        },
        {
            key: 'learning_enjoyment',
            text: 'Saya menikmati belajar bahasa Inggris dengan SALL-Bondo.',
        },
        {
            key: 'interactivity',
            text: 'Aktivitas yang diberikan menarik dan interaktif.',
        },
        {
            key: 'independent_learning',
            text: 'Saya termotivasi untuk belajar secara mandiri melalui platform ini.',
        },
        {
            key: 'learner_needs',
            text: 'Platform ini memperhatikan berbagai kebutuhan dan gaya belajar siswa.',
        },
        {
            key: 'overall_satisfaction',
            text: 'Secara keseluruhan, saya puas dengan platform SALL-Bondo.',
        },
        {
            key: 'recommend_to_friends',
            text: 'Saya akan merekomendasikan platform ini kepada teman-teman saya.',
        },
    ];

    return (
        <div>
            <h1 className="mt-20 text-5xl font-bold">
                Lembar Refleksi Penggunaan <br></br> SALL-Bondo
            </h1>
            <h2 className="mt-5 text-lg font-bold">Penilaian Platform SALL-Bondo</h2>
            <div className="mt-4 mb-8 rounded-lg border-2 border-dashed border-red-600 p-4 text-sm">
                Bagian ini bertujuan untuk mengevaluasi kualitas dan efektivitas platform SALL-Bondo berdasarkan pengalaman pengguna.
            </div>

            {questions.map((q) => (
                <div key={q.key} className="mt-6">
                    <p className="mb-4 font-medium">{q.text}</p>
                    <div className="flex items-center gap-14">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <label key={num} className="flex flex-col items-center">
                                <span className="mb-2 text-sm">{num}</span>
                                <input
                                    type="radio"
                                    name={q.key}
                                    value={num}
                                    checked={formData[q.key as keyof typeof formData] === num.toString()}
                                    onChange={onChange}
                                    className="h-8 w-8"
                                />
                            </label>
                        ))}
                    </div>
                    <div className="mt-3 flex max-w-sm justify-between text-xs">
                        <span>Tidak Setuju</span>
                        <span>Sangat Setuju</span>
                    </div>
                </div>
            ))}

            {/* Pertanyaan Teks */}
            <div className="mt-8">
                <label htmlFor="liked_aspect" className="mb-2 block font-medium">
                    Materi belajar SALL-Bondo apa yang paling Anda sukai? Jelaskan mengapa?
                </label>
                <textarea
                    id="liked_aspect"
                    name="liked_aspect"
                    value={formData.liked_aspect}
                    onChange={onChange}
                    rows={3}
                    className="w-full rounded border px-4 py-2"
                />
            </div>

            <div className="mt-6">
                <label htmlFor="disliked_aspect" className="mb-2 block font-medium">
                    Materi belajar SALL-Bondo apa yang kurang Anda sukai? Jelaskan mengapa?
                </label>
                <textarea
                    id="disliked_aspect"
                    name="disliked_aspect"
                    value={formData.disliked_aspect}
                    onChange={onChange}
                    rows={3}
                    className="w-full rounded border px-4 py-2"
                />
            </div>

            <div className="mt-6">
                <label htmlFor="challenges" className="mb-2 block font-medium">
                    Apa tantangan atau kesulitan yang Anda alami saat menggunakan SALL-Bondo?
                </label>
                <textarea
                    id="challenges"
                    name="challenges"
                    value={formData.challenges}
                    onChange={onChange}
                    rows={3}
                    className="w-full rounded border px-4 py-2"
                />
            </div>

            <div className="mt-6">
                <label htmlFor="suggestions" className="mb-2 block font-medium">
                    Apa saran atau harapan Anda untuk pengembangan platform SALL-Bondo di masa depan?
                </label>
                <textarea
                    id="suggestions"
                    name="suggestions"
                    value={formData.suggestions}
                    onChange={onChange}
                    rows={3}
                    className="w-full rounded border px-4 py-2"
                />
            </div>

            {/* Navigasi */}
            <div className="mt-8 mb-20 flex justify-between gap-4">
                <button onClick={onBack} className="w-full rounded bg-gray-400 px-6 py-2 text-white transition-all ease-linear hover:bg-gray-500">
                    Kembali
                </button>
                {/* <button className="bg-primaryy w-full rounded px-6 py-2 text-white transition-all ease-linear hover:bg-[#34699A]">Submit</button> */}
                <button onClick={onSubmit} className="bg-primaryy w-full rounded px-6 py-2 text-white transition-all ease-linear hover:bg-[#34699A]">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default StepThreeForm;
