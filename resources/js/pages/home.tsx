import Navbar from '@/components/navbar/navbar';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Home">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <Navbar />
            <div className="flex min-h-screen">
                <h1>Hello World</h1>
            </div>
        </>
    );
}
