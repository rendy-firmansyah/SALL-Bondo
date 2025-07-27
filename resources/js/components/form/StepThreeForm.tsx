import React from 'react';

interface StepThreeProps {
    formData: {
        kemudahanNavigasi: string;
        petunjukModul: string;
        kendalaAkses: string;
        tampilanPlatform: string;
        kesesuaianMateri: string;
        topikRelevan: string;
        kaitanMateri: string;
        peningkatanMembaca: string;
        peningkatanMendengar: string;
        belajarBudaya: string;
        impactPlatform: string;
        kenikmatanBelajar: string;
        pemberianAktifitas: string;
        motivasiBelajar: string;
        kebutuhanPlatform: string;
        kepuasan: string;
        penilaianPlatform: string;
        rekomendasi: string;
        kesukaanMateri: string;
        ketidaksukaanMateri: string;
        tantangan: string;
        saranHarapan: string;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBack: () => void;
    // onSubmit: () => void;
}

const StepThreeForm: React.FC<StepThreeProps> = ({ formData, onChange, onBack }) => {
    const questions = [
        {
            key: 'kemudahanNavigasi',
            text: 'Platform ini mudah digunakan dan dinavigasi.',
        },
        {
            key: 'petunjukModul',
            text: 'Petunjuk pada setiap modul jelas dan mudah dipahami.',
        },
        {
            key: 'kendalaAkses',
            text: 'Saya dapat mengakses platform tanpa kendala teknis.',
        },
        {
            key: 'tampilanPlatform',
            text: 'Tampilan platform menarik dan nyaman dilihat.',
        },
        {
            key: 'kesesuaianMateri',
            text: 'Materi sesuai dengan tingkat kemampuan bahasa Inggris saya.',
        },
        {
            key: 'topikRelevan',
            text: 'Topik yang disajikan relevan dengan budaya lokal Situbondo.',
        },
        {
            key: 'kaitanMateri',
            text: 'Saya dapat mengaitkan materi dengan situasi nyata di kehidupan sehari-hari.',
        },
        {
            key: 'peningkatanMembaca',
            text: 'Platform ini membantu saya meningkatkan kemampuan membaca.',
        },
        {
            key: 'peningkatanMendengar',
            text: 'Platform ini membantu saya meningkatkan kemampuan mendengar.',
        },
        {
            key: 'belajarBudaya',
            text: 'Saya mempelajari budaya Situbondo melalui modul yang disediakan.',
        },
        {
            key: 'impactPlatform',
            text: 'Saya merasa lebih terhubung dengan identitas lokal setelah menggunakan platform ini.',
        },
        {
            key: 'kenikmatanBelajar',
            text: 'Saya menikmati belajar bahasa Inggris dengan SALL-Bondo.',
        },
        {
            key: 'pemberianAktifitas',
            text: 'Aktivitas yang diberikan menarik dan interaktif.',
        },
        {
            key: 'motivasiBelajar',
            text: 'Saya termotivasi untuk belajar secara mandiri melalui platform ini.',
        },
        {
            key: 'kebutuhanPlatform',
            text: 'Platform ini memperhatikan berbagai kebutuhan dan gaya belajar siswa.',
        },
        {
            key: 'kepuasan',
            text: 'Secara keseluruhan, saya puas dengan platform SALL-Bondo.',
        },
        {
            key: 'penilaianPlatform',
            text: 'Berikan penilaianmu untuk terhadap platform SALL-Bondo.',
        },
        {
            key: 'rekomendasi',
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
                <label htmlFor="kesukaanMateri" className="mb-2 block font-medium">
                    Materi belajar SALL-Bondo apa yang paling Anda sukai? Jelaskan mengapa?
                </label>
                <textarea
                    id="kesukaanMateri"
                    name="kesukaanMateri"
                    value={formData.kesukaanMateri}
                    onChange={onChange}
                    rows={3}
                    className="w-full rounded border px-4 py-2"
                />
            </div>

            <div className="mt-6">
                <label htmlFor="ketidaksukaanMateri" className="mb-2 block font-medium">
                    Materi belajar SALL-Bondo apa yang kurang Anda sukai? Jelaskan mengapa?
                </label>
                <textarea
                    id="ketidaksukaanMateri"
                    name="ketidaksukaanMateri"
                    value={formData.ketidaksukaanMateri}
                    onChange={onChange}
                    rows={3}
                    className="w-full rounded border px-4 py-2"
                />
            </div>

            <div className="mt-6">
                <label htmlFor="tantangan" className="mb-2 block font-medium">
                    Apa tantangan atau kesulitan yang Anda alami saat menggunakan SALL-Bondo?
                </label>
                <textarea
                    id="tantangan"
                    name="tantangan"
                    value={formData.tantangan}
                    onChange={onChange}
                    rows={3}
                    className="w-full rounded border px-4 py-2"
                />
            </div>

            <div className="mt-6">
                <label htmlFor="saranHarapan" className="mb-2 block font-medium">
                    Apa saran atau harapan Anda untuk pengembangan platform SALL-Bondo di masa depan?
                </label>
                <textarea
                    id="saranHarapan"
                    name="saranHarapan"
                    value={formData.saranHarapan}
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
                <button className="bg-primaryy w-full rounded px-6 py-2 text-white transition-all ease-linear hover:bg-[#34699A]">Submit</button>
            </div>
        </div>
    );
};

export default StepThreeForm;
