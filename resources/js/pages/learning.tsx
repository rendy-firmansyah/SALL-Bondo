import Footer from '@/components/footer/footer';
import StepOneForm from '@/components/form/StepOneForm';
import StepThreeForm from '@/components/form/StepThreeForm';
import StepTwoForm from '@/components/form/StepTwoForm';
import Navbar from '@/components/navbar/navbar';
import { FormData } from '@/types/FormData';
import { useState } from 'react';

export default function Learning() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        nama: '',
        noHp: '',
        modul: [],
        pelajaranBaru: '',
        bantuanMateri: '',
        percayaDiri: '',
        kemampuanMembaca: '',
        kemampuanMenyimak: '',
        peningkatanBahasa: '',
        nilaiBahasa: '',
        kemudahanNavigasi: '',
        petunjukModul: '',
        kendalaAkses: '',
        tampilanPlatform: '',
        kesesuaianMateri: '',
        topikRelevan: '',
        kaitanMateri: '',
        peningkatanMembaca: '',
        peningkatanMendengar: '',
        belajarBudaya: '',
        impactPlatform: '',
        kenikmatanBelajar: '',
        pemberianAktifitas: '',
        motivasiBelajar: '',
        kebutuhanPlatform: '',
        kepuasan: '',
        penilaianPlatform: '',
        rekomendasi: '',
        kesukaanMateri: '',
        ketidaksukaanMateri: '',
        tantangan: '',
        saranHarapan: '',
    });

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setFormData((prev) => ({ ...prev, [name]: value }));
    // };

    // const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     const { name, value } = e.target;
    //     setFormData((prev) => ({ ...prev, [name]: value }));
    // };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleModulChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        const newModul = checked ? [...formData.modul, value] : formData.modul.filter((mod) => mod !== value);
        setFormData((prev) => ({ ...prev, modul: newModul }));
    };

    // const handleSubmit = () => {
    //     console.log('Final Data:', formData);
    //     // Inertia.post('/submit-refleksi', formData); // aktifkan jika sudah siap koneksi ke backend
    //     alert('Form berhasil dikirim!');
    // };

    return (
        <>
            <Navbar />
            <div className="mx-auto min-h-screen max-w-4xl px-6 py-10">
                {step === 1 && (
                    <StepOneForm formData={formData} onChange={handleChange} onModulChange={handleModulChange} onNext={() => setStep(2)} />
                )}
                {step === 2 && <StepTwoForm formData={formData} onChange={handleChange} onBack={() => setStep(1)} onNext={() => setStep(3)} />}
                {step === 3 && <StepThreeForm formData={formData} onChange={handleChange} onBack={() => setStep(2)} />}
            </div>
            <Footer />
        </>
    );
}
