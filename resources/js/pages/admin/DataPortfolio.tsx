import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import axios from 'axios';
import { PencilIcon, Trash } from 'lucide-react';
import { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Data Portfolio Student', href: '/data-portfolio-student' }];

interface PortfolioItem {
    id: number;
    judul: string;
    deskripsi: string;
    link_video: string;
}

export default function DataPortfolio() {
    const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState<number | null>(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);

    const [formData, setFormData] = useState({
        link_video: '',
        judul: '',
        deskripsi: '',
    });
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
        fetchPortfolios();
    }, []);

    const fetchPortfolios = async () => {
        try {
            const response = await axios.get('/api/porto');
            setPortfolios(response.data);
        } catch (error) {
            console.error('Gagal ambil data:', error);
        }
    };

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

    const isValidFile = (file: File) => {
        return ['image/png', 'image/jpeg', 'application/pdf'].includes(file.type);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = new FormData();
        payload.append('link_video', formData.link_video);
        payload.append('judul', formData.judul);
        payload.append('deskripsi', formData.deskripsi);
        if (file) payload.append('file', file);

        try {
            await axios.post('/api/porto', payload);
            resetForm();
            fetchPortfolios();
        } catch (error) {
            console.error('Gagal kirim data:', error);
        }
    };

    const handleEditClick = async (id: number) => {
        try {
            const response = await axios.get(`/api/porto/${id}`);
            const { judul, deskripsi, link_video } = response.data;
            setFormData({ judul, deskripsi, link_video });
            setIsEditMode(true);
            setEditingId(id);
            setShowModal(true);
        } catch (error) {
            console.error('Gagal fetch detail:', error);
        }
    };

    const handleDeleteClick = (id: number) => {
        setDeleteId(id);
        setShowConfirmDeleteModal(true);
    };

    const confirmDelete = async () => {
        if (deleteId === null) return;
        try {
            await axios.delete(`/api/porto/${deleteId}`);
            fetchPortfolios();
            setShowConfirmDeleteModal(false);
            setDeleteId(null);
        } catch (error) {
            console.error('Gagal hapus data:', error);
        }
    };

    const resetForm = () => {
        setFormData({ link_video: '', judul: '', deskripsi: '' });
        setFile(null);
        setIsEditMode(false);
        setEditingId(null);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Data Portfolio Student" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="my-3">
                    <button
                        onClick={() => {
                            resetForm();
                            setShowModal(true);
                        }}
                        className="bg-secondaryy cursor-pointer rounded-sm px-5 py-3 font-semibold text-white hover:bg-[#58A0C8]"
                    >
                        Tambah Portfolio
                    </button>
                </div>

                <table className="min-w-full table-auto border-collapse text-left text-sm">
                    <thead className="bg-primaryy text-white">
                        <tr>
                            <th className="px-4 py-2">No</th>
                            <th className="px-4 py-2">Content</th>
                            <th className="px-4 py-2">Judul</th>
                            <th className="px-4 py-2">Deskripsi</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {portfolios.map((item, index) => (
                            <tr key={item.id} className="border-t">
                                <td className="px-4 py-2">{index + 1}</td>
                                <td className="px-4 py-2">
                                    <a href={item.link_video} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                        {item.link_video}
                                    </a>
                                </td>
                                <td className="px-4 py-2">{item.judul}</td>
                                <td className="px-4 py-2">{item.deskripsi}</td>
                                <td className="px-4 py-2">
                                    <Button
                                        onClick={() => handleEditClick(item.id)}
                                        variant="outline"
                                        className="me-2 bg-yellow-400 text-white hover:bg-yellow-300"
                                        size="sm"
                                    >
                                        <PencilIcon size={12} />
                                    </Button>
                                    <Button
                                        onClick={() => handleDeleteClick(item.id)}
                                        variant="outline"
                                        className="bg-red-500 text-white hover:bg-red-400"
                                        size="sm"
                                    >
                                        <Trash size={12} />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal Tambah/Edit */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-red-600"
                        >
                            &times;
                        </button>
                        <h2 className="mb-4 text-lg font-semibold">{isEditMode ? 'Edit Portfolio' : 'Tambah Portfolio'}</h2>
                        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                            <div>
                                <label className="block font-medium">Link Video</label>
                                <input
                                    type="text"
                                    name="link_video"
                                    value={formData.link_video}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full rounded border p-2"
                                    placeholder="URL Video"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block font-medium">Upload File</label>
                                <input type="file" accept=".png,.jpg,.jpeg,.pdf" onChange={handleFileChange} className="w-full" />
                                {file && <p className="mt-2 text-sm">File terpilih: {file.name}</p>}
                            </div>
                            <div>
                                <label className="block font-medium">Judul</label>
                                <input
                                    type="text"
                                    name="judul"
                                    value={formData.judul}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full rounded border p-2"
                                />
                            </div>
                            <div>
                                <label className="block font-medium">Deskripsi</label>
                                <textarea
                                    name="deskripsi"
                                    value={formData.deskripsi}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full rounded border p-2"
                                />
                            </div>
                            <div className="text-right">
                                <Button type="submit" className="bg-primaryy text-white hover:bg-blue-700">
                                    {isEditMode ? 'Update' : 'Simpan'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal Konfirmasi Hapus */}
            {showConfirmDeleteModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div className="rounded-lg bg-white p-6 shadow-xl">
                        <h2 className="mb-4 text-lg font-semibold text-gray-800">Yakin ingin menghapus data ini?</h2>
                        <div className="flex justify-end gap-2">
                            <Button onClick={() => setShowConfirmDeleteModal(false)} variant="outline" className="hover:bg-gray-100">
                                Batal
                            </Button>
                            <Button onClick={confirmDelete} className="bg-red-600 text-white hover:bg-red-500">
                                Ya, Hapus
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </AppLayout>
    );
}
