import Footer from '@/components/footer/footer';
import StepOneForm from '@/components/form/StepOneForm';
import StepThreeForm from '@/components/form/StepThreeForm';
import StepTwoForm from '@/components/form/StepTwoForm';
import Navbar from '@/components/navbar/navbar';
import { UserFormData } from '@/types/FormData';
import { router } from '@inertiajs/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Learning() {
    interface Question {
        pages: string;
        name_key: string;
    }
    const [step, setStep] = useState(1);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [formData, setFormData] = useState<UserFormData>({
        name: '',
        phone: '',
        modules: [],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleModulChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        const newModul = checked ? [...formData.modules, value] : formData.modules.filter((mod) => mod !== value);
        setFormData((prev) => ({ ...prev, modules: newModul }));
    };

    useEffect(() => {
        axios
            .get('/api/questionLearningReflect')
            .then((res) => {
                setQuestions(res.data);
            })
            .catch((err) => {
                console.error('Gagal memuat pertanyaan:', err);
            });
    }, []);

    const handleSubmit = async () => {
        const learningKeys = questions.filter((q) => q.pages === 'learning_reflection').map((q) => q.name_key);

        const platformKeys = questions.filter((q) => q.pages === 'platform_rating').map((q) => q.name_key);

        const payload = {
            name: formData.name,
            phone: formData.phone,
            modules: formData.modules,
            learning_reflection: Object.fromEntries(
                learningKeys.map((key) => [key, isNaN(Number(formData[key])) ? formData[key] : parseInt(formData[key] as string)]),
            ),
            platform_rating: Object.fromEntries(
                platformKeys.map((key) => [key, isNaN(Number(formData[key])) ? formData[key] : parseInt(formData[key] as string)]),
            ),
        };

        try {
            await axios.post('/api/learningReflect', payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            toast.success('Form berhasil dikirim!', {
                position: 'top-right',
                autoClose: 1000,
                onClose: () => router.visit(route('home')),
            });
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error('Axios error:', error.response?.data);
                toast.error('Gagal mengirim form. Silakan coba lagi.');
            } else {
                console.error('Unexpected error:', error);
                toast.error('Terjadi kesalahan tak terduga.');
            }
        }
    };

    return (
        <div className="bg-white">
            <Navbar />
            <div className="mx-auto min-h-screen max-w-4xl px-6 py-10">
                {step === 1 && (
                    <StepOneForm formData={formData} onChange={handleChange} onModulChange={handleModulChange} onNext={() => setStep(2)} />
                )}
                {step === 2 && <StepTwoForm formData={formData} onChange={handleChange} onBack={() => setStep(1)} onNext={() => setStep(3)} />}
                {step === 3 && <StepThreeForm formData={formData} onChange={handleChange} onBack={() => setStep(2)} onSubmit={handleSubmit} />}
            </div>
            <ToastContainer />
            <Footer />
        </div>
    );
}
