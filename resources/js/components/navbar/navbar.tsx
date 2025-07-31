import { Link } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="sticky-top top-0 right-0 left-0 z-50 bg-white shadow">
                <div className="flex items-center justify-between px-10 py-4 md:px-20">
                    {/* Logo */}
                    <div className="font-logo text-2xl font-bold text-[#113F67]">SALL-Bondo</div>

                    {/* Hamburger (mobile only) */}
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(true)} aria-label="Open Menu">
                            <Menu size={24} />
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden items-center gap-10 font-medium text-gray-700 md:flex">
                        <li>
                            <a href={route('home')} className="hover:text-secondaryy">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href={route('resources')} className="hover:text-secondaryy">
                                Resource
                            </a>
                        </li>
                        <li>
                            <Link href={route('learning')} className="hover:text-secondaryy">
                                Learning Reflection
                            </Link>
                        </li>
                        <li>
                            <a href={route('feedback')} className="hover:text-secondaryy">
                                Feedback
                            </a>
                        </li>
                    </ul>

                    {/* Desktop Login Button */}
                    <Link
                        href={route('login')}
                        className="hidden rounded-sm bg-[#113F67] px-6 py-1.5 font-medium text-white hover:bg-[#34699A] md:block"
                    >
                        Login
                    </Link>
                </div>
            </nav>

            {/* Overlay when mobile menu is open */}
            {menuOpen && <div className="fixed inset-0 z-40 bg-gray-700 opacity-40 md:hidden" onClick={() => setMenuOpen(false)} />}

            {/* Sidebar Menu (mobile only) */}
            <div
                className={`fixed top-0 right-0 z-50 h-full w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                } md:hidden`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={() => setMenuOpen(false)} aria-label="Close Menu">
                        <X size={24} />
                    </button>
                </div>
                <div className="flex flex-col space-y-6 p-6 font-medium text-gray-700">
                    <a href={route('home')} className="hover:text-[#34699A]" onClick={() => setMenuOpen(false)}>
                        Home
                    </a>
                    <a href={route('resources')} className="hover:text-[#34699A]" onClick={() => setMenuOpen(false)}>
                        Resource
                    </a>
                    <a href={route('learning')} className="hover:text-[#34699A]" onClick={() => setMenuOpen(false)}>
                        Learning Reflection
                    </a>
                    <a href={route('feedback')} className="hover:text-[#34699A]" onClick={() => setMenuOpen(false)}>
                        Feedback
                    </a>
                    <Link
                        href={route('login')}
                        className="block w-full rounded-sm bg-[#113F67] px-6 py-2 text-center font-medium text-white hover:bg-[#34699A]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Login
                    </Link>
                </div>
            </div>
        </>
    );
}
