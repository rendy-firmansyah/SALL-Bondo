import { UserFormData } from '@/types/FormData';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface StepOneProps {
    formData: UserFormData;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onModulChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onNext: () => void;
}

const StepOneForm: React.FC<StepOneProps> = ({ formData, onChange, onModulChange, onNext }) => {
    const handleNext = () => {
        if (!formData.name.trim()) {
            toast.error('Nama harus diisi');
            return;
        }
        if (!formData.phone.trim()) {
            toast.error('Nomor HP harus diisi');
            return;
        }
        if (formData.modules.length === 0) {
            toast.error('Pilih minimal satu modul');
            return;
        }

        onNext();
    };

    return (
        <div>
            <h1 className="text-5xl font-bold">
                Lembar Refleksi Penggunaan <br></br> SALL-Bondo
            </h1>
            <p className="mt-3 text-lg font-light">
                Isilah jurnal reflektif ini setelah Anda menyelesaikan belajar dari modul pembelajaran di platform SALL-Bondo. Tulislah jawaban Anda
                dengan jujur dan jelas berdasarkan pengalaman pribadi Anda dalam menggunakan platform ini.
            </p>

            <h2 className="mt-5 text-lg font-bold">Informasi Umum</h2>
            <div className="mt-4 rounded-lg border-2 border-dashed border-red-600 p-4 text-sm">
                Bagian ini bertujuan untuk mencatat data responden. Data responden akan dijaga kerahasiaannya dan hanya diperuntukkan untuk
                kepentingan pengembangan materi dan program Pengabdian kepada Masyarakat.
            </div>

            <div className="mt-6">
                <label className="mb-4 block">
                    <span className="font-bold">Nama Pengguna</span>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={onChange}
                        type="text"
                        className="border-primaryy mt-2 w-full rounded border bg-gray-50 p-2.5 text-sm shadow-sm"
                        placeholder="Jawaban anda"
                    />
                </label>
                <label className="mb-4 block">
                    <span className="font-bold">Nomor HP</span>
                    <input
                        name="phone"
                        value={formData.phone}
                        onChange={onChange}
                        type="tel"
                        className="border-primaryy mt-2 w-full rounded border bg-gray-50 p-2.5 text-sm shadow-sm"
                        placeholder="Jawaban anda"
                    />
                </label>

                <div className="mt-6">
                    <span className="font-bold">Modul yang telah diselesaikan</span>
                    <div className="mt-2 grid grid-flow-col grid-rows-5 gap-2">
                        {[...Array(10)].map((_, i) => (
                            <label key={i} className="flex items-center gap-2 text-sm">
                                <input
                                    name="modules"
                                    type="checkbox"
                                    className="border-primaryy h-5 w-5 border-2"
                                    value={`Learning Module Chapter ${i + 1}`}
                                    checked={formData.modules.includes(`Learning Module Chapter ${i + 1}`)}
                                    onChange={onModulChange}
                                />
                                Learning Module Chapter {i + 1}
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            <button
                onClick={handleNext}
                className="bg-primaryy mt-6 w-full rounded px-6 py-2 text-white transition-all ease-linear hover:bg-[#34699A]"
            >
                Berikutnya
            </button>
        </div>
    );
};

export default StepOneForm;
