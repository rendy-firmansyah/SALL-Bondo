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
            <div className="mt-20 flex min-h-screen">
                <div className="flex">
                    <div>
                        <h3>
                            Welcome to <span>SALL-Bondo</span>
                        </h3>
                    </div>
                    <div>
                        <h1>Hello</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
