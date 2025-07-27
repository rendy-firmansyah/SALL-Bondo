import { Link } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <nav className="fixed top-0 right-0 left-0 z-50">
                <div>
                    <div className="flex items-center justify-between bg-white px-10 py-4 md:px-20">
                        <div className="font-logo text-2xl font-bold text-[#113F67]">SALL-Bondo</div>
                        <div className="md:hidden">
                            <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
                        </div>
                        <ul className="hidden items-center gap-10 font-medium text-gray-700 md:flex">
                            <li>
                                <a href="#home" className="hover:text-secondaryy">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#resource" className="hover:text-secondaryy">
                                    Resource
                                </a>
                            </li>
                            <li>
                                <a href="#learning-reflection" className="hover:text-secondaryy">
                                    Learning Reflection
                                </a>
                            </li>
                            <li>
                                <a href="#feedback" className="hover:text-secondaryy">
                                    Feedback
                                </a>
                            </li>
                        </ul>
                        <Link
                            href={route('login')}
                            className="hidden rounded-sm bg-[#113F67] px-6 py-1.5 font-medium text-white hover:bg-[#34699A] md:block"
                        >
                            Login
                        </Link>

                        {/* Mobile Sidebar Menu */}
                        <div
                            className={`fixed top-0 right-0 z-40 h-full w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${
                                menuOpen ? 'translate-x-0' : 'translate-x-full'
                            } md:hidden`}
                        >
                            <div className="flex justify-end p-4">
                                <button onClick={() => setMenuOpen(false)}>
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="flex flex-col space-y-6 p-6 font-medium text-gray-700">
                                <a href="#home" className="hover:text-[#34699A]">
                                    Home
                                </a>
                                <a href="#resource" className="hover:text-[#34699A]">
                                    Resource
                                </a>
                                <a href="#learning-reflection" className="hover:text-[#34699A]">
                                    Learning Reflection
                                </a>
                                <a href="#feedback" className="hover:text-[#34699A]">
                                    Feedback
                                </a>
                                <Link
                                    href={route('login')}
                                    className="block w-full rounded-sm bg-[#113F67] px-6 py-2 text-center font-medium text-white hover:bg-[#34699A]"
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
