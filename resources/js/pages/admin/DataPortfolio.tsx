import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import axios from 'axios';
import { Info, PencilIcon, Trash } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Data Portfolio Student', href: '/data-portfolio-student' }];

interface PortfolioItem {
    id: number;
    judul: string;
    deskripsi: string;
    link_video: string;
    file_path?: string;
    original_name?: string;
}

export default function DataPortfolio() {
    const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [deleteId, setDeleteId] = useState<number | null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [formData, setFormData] = useState({
        link_video: '',
        judul: '',
        deskripsi: '',
    });
    const [file, setFile] = useState<File | null>(null);
    const [existingFileName, setExistingFileName] = useState<string | null>(null);

    useEffect(() => {
        fetchPortfolios();
    }, []);

    const fetchPortfolios = async () => {
        try {
            const response = await axios.get('/api/porto');
            setPortfolios(response.data);
        } catch (error) {
            console.error('Gagal ambil data:', error);
            toast.error('Failed to load portfolio data');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploaded = e.target.files?.[0];
        if (!uploaded) return;

        if (uploaded.size > 5 * 1024 * 1024) {
            toast.warning('The maximum file size is 5MB.');
            return;
        }

        if (!isValidFile(uploaded)) {
            toast.error('Only .png, .jpg, .jpeg, or .pdf files are allowed.');
            return;
        }

        setFile(uploaded);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const uploaded = e.dataTransfer.files[0];
        if (!uploaded) return;

        if (uploaded.size > 5 * 1024 * 1024) {
            toast.warning('The maximum file size is 5MB.');
            return;
        }

        if (!isValidFile(uploaded)) {
            toast.error('Only .png, .jpg, .jpeg, or .pdf files are allowed.');
            return;
        }

        setFile(uploaded);
    };

    const isValidFile = (file: File) => {
        return ['image/png', 'image/jpeg', 'application/pdf'].includes(file.type);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.judul.trim() || !formData.deskripsi.trim()) {
            toast.warning('Title and description must be filled in');
            return;
        }

        // Validasi hanya jika mode tambah
        if (!isEditMode && !formData.link_video.trim() && !file) {
            toast.warning('Either link video or file must be provided');
            return;
        }

        // Normalisasi link video jika Google Drive
        let link_video = formData.link_video.trim();
        const driveMatch = link_video.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
        if (driveMatch) {
            link_video = `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
        }

        const payload = new FormData();
        payload.append('judul', formData.judul);
        payload.append('deskripsi', formData.deskripsi);

        // Tambahkan link hanya jika ada perubahan atau saat tambah baru
        if (link_video) {
            payload.append('link_video', link_video);
        }

        // Tambahkan file hanya jika user upload baru
        if (file) {
            payload.append('file', file);
        }

        try {
            if (isEditMode && editingId !== null) {
                await axios.post(`/api/porto/${editingId}?_method=PUT`, payload, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                toast.success('Portfolio has been successfully updated');
            } else {
                await axios.post('/api/porto', payload);
                toast.success('Portfolio has been successfully added');
            }

            resetForm();
            setShowModal(false);
            fetchPortfolios();
        } catch (error) {
            console.error('Gagal kirim data:', error);
            toast.error('Failed to save portfolio');
        }
    };

    const handleEditClick = async (id: number) => {
        try {
            const response = await axios.get(`/api/porto/${id}`);

            // Pastikan ambil objek sesuai struktur API
            const portfolio = response.data.data ?? response.data;

            const { judul, deskripsi, original_name } = portfolio;
            let { link_video } = portfolio;

            // Kalau link gdrive preview, ubah jadi view agar bisa diedit
            if (link_video) {
                const driveMatch = link_video.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
                if (driveMatch) {
                    link_video = `https://drive.google.com/file/d/${driveMatch[1]}/view?usp=sharing`;
                }
            }

            setFormData({ judul, deskripsi, link_video: link_video ?? '' });
            setIsEditMode(true);
            setEditingId(id);
            setExistingFileName(original_name ?? null); // simpan nama file lama
            setFile(null);
            setShowModal(true);
        } catch (error) {
            console.error('Gagal fetch detail:', error);
            toast.error('Failed to retrieve portfolio details');
        }
    };

    const resetForm = () => {
        setFormData({ link_video: '', judul: '', deskripsi: '' });
        setFile(null);
        setExistingFileName(null);
        setShowModal(false);
        setIsEditMode(false);
        setEditingId(null);
    };

    const handleDeleteClick = (id: number) => {
        setDeleteId(id);
        setShowDeleteModal(true);
    };

    const confirmDelete = async () => {
        if (deleteId === null) return;

        try {
            await axios.delete(`/api/porto/${deleteId}`);
            setShowDeleteModal(false);
            fetchPortfolios();
            toast.success('The portfolio has been successfully deleted.');
        } catch (error) {
            console.error('Gagal hapus data:', error);
            toast.error('Failed to delete portfolio');
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Data Portfolio Student" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="my-3">
                    <button
                        onClick={() => {
                            setIsEditMode(false);
                            setEditingId(null);
                            setShowModal(true);
                            setFormData({ link_video: '', judul: '', deskripsi: '' });
                            setFile(null);
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
                                <td className="space-y-1 px-4 py-2">
                                    {item.link_video && (
                                        <a href={item.link_video} className="block text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                                            Link Video
                                        </a>
                                    )}

                                    {item.file_path && (
                                        <a
                                            href={`/storage/${item.file_path}`}
                                            className="block text-green-500 underline"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {item.original_name ?? 'Lihat File'}
                                        </a>
                                    )}

                                    {!item.link_video && !item.file_path && <span className="text-gray-400 italic">Tidak ada file atau video</span>}
                                </td>

                                <td className="px-4 py-2">{item.judul}</td>
                                <td className="w-[300px] px-4 py-2">
                                    {item.deskripsi.split(' ').length > 20
                                        ? item.deskripsi.split(' ').slice(0, 20).join(' ') + '...'
                                        : 'Deskripsi terlalu singkat'}
                                </td>
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

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
                        <button onClick={resetForm} className="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-red-600">
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
                                    className="w-full rounded border p-2"
                                    placeholder="URL Video"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">Upload File</label>
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
                                    <p className="mt-2 flex items-center gap-2 font-medium">
                                        {' '}
                                        <Info size={14} /> Maksimal file hanya 5MB
                                    </p>
                                </div>
                                {file ? (
                                    <p className="mt-2 text-sm text-gray-600">File terpilih: {file.name}</p>
                                ) : existingFileName ? (
                                    <p className="mt-2 text-sm text-gray-600">File sebelumnya: {existingFileName}</p>
                                ) : null}
                            </div>

                            <div>
                                <label className="block font-medium">Judul</label>
                                <input
                                    type="text"
                                    name="judul"
                                    value={formData.judul}
                                    onChange={handleInputChange}
                                    className="w-full rounded border p-2"
                                />
                            </div>
                            <div>
                                <label className="block font-medium">Deskripsi</label>
                                <textarea
                                    name="deskripsi"
                                    value={formData.deskripsi}
                                    onChange={handleInputChange}
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

            {showDeleteModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                        <h2 className="mb-4 text-lg font-semibold text-red-600">Konfirmasi Hapus</h2>
                        <p className="mb-6">Apakah kamu yakin ingin menghapus portfolio ini?</p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="rounded bg-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-400"
                            >
                                Batal
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AppLayout>
    );
}
