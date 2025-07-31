// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Info } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Learning Survey',
        href: '/learning-reflection-survey',
    },
];

export default function SurveyLearning() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Learning Reflection Survey" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="my-3">
                    <Link
                        href={route('questions-learning')}
                        className="bg-secondaryy cursor-pointer rounded-sm px-5 py-3 font-semibold text-white transition-all ease-linear hover:bg-[#58A0C8]"
                    >
                        Upload Pertanyaan
                    </Link>
                </div>
                <table className="min-w-full table-auto border-collapse text-left text-sm">
                    <thead className="bg-primaryy text-white">
                        <tr>
                            <th className="px-4 py-2">No</th>
                            <th className="px-4 py-2">Nama</th>
                            <th className="px-4 py-2">Phone</th>
                            <th className="px-4 py-2">Modul yang Dikerjakan</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key="" className="border-t">
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">Bondo</td>
                            <td className="px-4 py-2">+62</td>
                            <td className="px-4 py-2">Learning Modul 1, Learning Modul 2</td>
                            <td className="px-4 py-2">
                                <Button
                                    variant="outline"
                                    className="bg-primaryy text-white transition-all ease-linear hover:bg-[#34699A] hover:text-white"
                                    size="sm"
                                >
                                    <Info size={12} /> Info
                                </Button>
                            </td>
                        </tr>
                        <tr key="" className="border-t">
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">Bondo</td>
                            <td className="px-4 py-2">+62</td>
                            <td className="px-4 py-2">Learning Modul 1, Learning Modul 2</td>
                            <td className="px-4 py-2">
                                <Button
                                    variant="outline"
                                    className="bg-primaryy text-white transition-all ease-linear hover:bg-[#34699A] hover:text-white"
                                    size="sm"
                                >
                                    <Info size={12} /> Info
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
