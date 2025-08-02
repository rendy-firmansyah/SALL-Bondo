import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { PencilIcon, Trash } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Data Portfolio Student',
        href: '/data-portfolio-student',
    },
];

export default function DataPortfolio() {
    const [showModal, setShowModal] = useState(false);

    const [formData, setFormData] = useState({
        content: '',
        title: '',
        description: '',
    });

    const [file, setFile] = useState<File | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploaded = e.target.files?.[0];
        if (uploaded && isValidFile(uploaded)) {
            setFile(uploaded);
        } else {
            alert('Hanya file .png, .jpg, .jpeg, atau .pdf yang diperbolehkan.');
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const uploaded = e.dataTransfer.files[0];
        if (uploaded && isValidFile(uploaded)) {
            setFile(uploaded);
        } else {
            alert('Hanya file .png, .jpg, .jpeg, atau .pdf yang diperbolehkan.');
        }
    };

    const isValidFile = (file: File) => {
        return ['image/png', 'image/jpeg', 'application/pdf'].includes(file.type);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const payload = new FormData();
        payload.append('content', formData.content);
        payload.append('title', formData.title);
        payload.append('description', formData.description);
        if (file) {
            payload.append('file', file);
        }

        console.log('Form Data:', formData);
        console.log('Uploaded File:', file);

        setShowModal(false);
        setFormData({ content: '', title: '', description: '' });
        setFile(null);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Learning Reflection Survey" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="my-3">
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-secondaryy cursor-pointer rounded-sm px-5 py-3 font-semibold text-white transition-all ease-linear hover:bg-[#58A0C8]"
                    >
                        Tambah Portfolio
                    </button>
                </div>

                <table className="min-w-full table-auto border-collapse text-left text-sm">
                    <thead className="bg-primaryy text-white">
                        <tr>
                            <th className="px-4 py-2">No</th>
                            <th className="px-4 py-2">Content</th>
                            <th className="px-4 py-2">Judul Title</th>
                            <th className="px-4 py-2">Deskripsi Title</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t">
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">Video.mp4</td>
                            <td className="px-4 py-2">Judul Demo</td>
                            <td className="px-4 py-2">Deskripsi singkat tentang demo</td>
                            <td className="px-4 py-2">
                                <Button
                                    variant="outline"
                                    className="me-2 bg-yellow-400 text-white transition-all ease-linear hover:bg-yellow-300 hover:text-white"
                                    size="sm"
                                >
                                    <PencilIcon size={12} />
                                </Button>
                                <Button
                                    variant="outline"
                                    className="bg-red-500 text-white transition-all ease-linear hover:bg-red-400 hover:text-white"
                                    size="sm"
                                >
                                    <Trash size={12} />
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-red-600"
                        >
                            &times;
                        </button>
                        <h2 className="mb-4 text-lg font-semibold">Tambah Portfolio</h2>
                        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                            <div>
                                <label className="block font-medium">Link Video (Jika mau upload video)</label>
                                <input
                                    type="text"
                                    name="content"
                                    value={formData.content}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full rounded border p-2"
                                    placeholder="URL/Link Video"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">Upload File (opsional)</label>
                                <div
                                    className="flex h-32 w-full flex-col items-center justify-center rounded border-2 border-dashed border-gray-300 bg-gray-50 text-sm text-gray-500 hover:border-blue-400"
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={handleDrop}
                                >
                                    <p className="font-semibold">Drop file here</p>
                                    <span className="text-xs">or</span>
                                    <label className="mt-1 cursor-pointer rounded border border-gray-300 bg-white px-3 py-1 shadow-sm hover:bg-gray-100">
                                        Browse
                                        <input type="file" className="hidden" accept=".png,.jpg,.jpeg,.pdf" onChange={handleFileChange} />
                                    </label>
                                </div>
                                {file && <p className="mt-2 text-sm text-gray-600">File terpilih: {file.name}</p>}
                            </div>

                            <div>
                                <label className="block font-medium">Judul Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full rounded border p-2"
                                    placeholder="Judul"
                                />
                            </div>

                            <div>
                                <label className="block font-medium">Deskripsi Title</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full rounded border p-2"
                                    placeholder="Deskripsi"
                                />
                            </div>

                            <div className="text-right">
                                <Button type="submit" className="bg-primaryy text-white hover:bg-blue-700">
                                    Simpan
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AppLayout>
    );
}
