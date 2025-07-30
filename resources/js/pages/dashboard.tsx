import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    const { props } = usePage<{ message?: string; auth: { user?: { name: string } } }>();
    const { auth } = props;
    const [shownMessage, setShownMessage] = useState<string | null>(null);

    // ✅ Menampilkan pesan dari flash session (message)
    useEffect(() => {
        if (props.message && props.message !== shownMessage) {
            toast.success(props.message);
            setShownMessage(props.message);
        }
    }, [props.message, shownMessage]);

    // ✅ Menampilkan toast jika user login
    useEffect(() => {
        const loggedIn = localStorage.getItem('login_success');
        if (loggedIn === 'true' && auth?.user) {
            toast.success(`👋 Selamat datang kembali, ${auth.user.name}!`);
            localStorage.removeItem('login_success');
        }
    }, [auth]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <ToastContainer position="top-right" autoClose={3000} />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
                        >
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        </div>
                    ))}
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}
