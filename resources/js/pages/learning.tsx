import Footer from '@/components/footer/footer';
import StepOneForm from '@/components/form/StepOneForm';
import StepThreeForm from '@/components/form/StepThreeForm';
import StepTwoForm from '@/components/form/StepTwoForm';
import Navbar from '@/components/navbar/navbar';
import { FormData } from '@/types/FormData';
import { router } from '@inertiajs/react';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Learning() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        modules: [],
        new_knowledge: '',
        how_helped: '',
        confidence: '',
        reading_improvement: '',
        listening_improvement: '',
        overall_improvement: '',
        english_score: '',
        easy_to_use: '',
        clear_instructions: '',
        no_technical_issue: '',
        attractive_platform: '',
        appropriate_level: '',
        cultural_relevance: '',
        real_life_context: '',
        reading_skill: '',
        listening_skill: '',
        study_cultural: '',
        local_identity: '',
        learning_enjoyment: '',
        interactivity: '',
        independent_learning: '',
        learner_needs: '',
        overall_satisfaction: '',
        recommend_to_friends: '',
        liked_aspect: '',
        disliked_aspect: '',
        challenges: '',
        suggestions: '',
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

    const handleSubmit = async () => {
        const payload = {
            name: formData.name,
            phone: formData.phone,
            modules: formData.modules,
            learning_reflection: {
                new_knowledge: formData.new_knowledge,
                how_helped: formData.how_helped,
                confidence: formData.confidence,
                reading_improvement: formData.reading_improvement,
                listening_improvement: formData.listening_improvement,
                overall_improvement: formData.overall_improvement,
                english_score: parseInt(formData.english_score),
            },
            platform_rating: {
                easy_to_use: parseInt(formData.easy_to_use),
                clear_instructions: parseInt(formData.clear_instructions),
                no_technical_issue: parseInt(formData.no_technical_issue),
                attractive_platform: parseInt(formData.attractive_platform),
                appropriate_level: parseInt(formData.appropriate_level),
                cultural_relevance: parseInt(formData.cultural_relevance),
                real_life_context: parseInt(formData.real_life_context),
                reading_skill: parseInt(formData.reading_skill),
                listening_skill: parseInt(formData.listening_skill),
                study_cultural: formData.study_cultural,
                local_identity: parseInt(formData.local_identity),
                learning_enjoyment: parseInt(formData.learning_enjoyment),
                interactivity: parseInt(formData.interactivity),
                independent_learning: parseInt(formData.independent_learning),
                learner_needs: parseInt(formData.learner_needs),
                overall_satisfaction: parseInt(formData.overall_satisfaction),
                recommend_to_friends: parseInt(formData.recommend_to_friends),
                liked_aspect: formData.liked_aspect,
                disliked_aspect: formData.disliked_aspect,
                challenges: formData.challenges,
                suggestions: formData.suggestions,
            },
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
        <>
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
        </>
    );
}
