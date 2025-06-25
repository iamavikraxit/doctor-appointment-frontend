import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Doctors', path: '/doctors' },
        { name: 'Appointment', path: '/appointment' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 px-6 sm:px-10 py-3 shadow-sm">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4M4 10v10a1 1 0 001 1h14a1 1 0 001-1V10M4 10l8 5 8-5" />
                    </svg>
                    <a href="/">
                        <span className="text-2xl font-extrabold text-blue-900 tracking-wide">DocAppoint</span>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`font-bold transition-all duration-300 ${currentPath === item.path
                                    ? "bg-white text-blue-800 px-4 py-1.5 rounded-xl shadow ring-2 ring-offset-2 ring-blue-300 scale-105"
                                    : "text-blue-900 hover:text-blue-600 hover:scale-105"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a
                        href="/login"
                        className="bg-white text-blue-800 font-bold px-5 py-2 rounded-full shadow hover:bg-blue-100 hover:shadow-md hover:scale-105 transition-all duration-300"
                    >
                        Sign In
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-900 focus:outline-none">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {menuOpen && (
                <div className="md:hidden mt-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className={`block w-full text-center font-bold py-2 rounded transition-all duration-300 ${currentPath === item.path
                                    ? "bg-white text-blue-800 shadow ring-2 ring-blue-300"
                                    : "text-blue-900 hover:text-blue-600 hover:bg-blue-100"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a
                        href="/login"
                        className="block w-full text-center bg-white text-blue-800 font-bold py-3 rounded-xl shadow hover:bg-blue-100 hover:shadow-md hover:scale-105 transition-all duration-300"
                    >
                        Sign In
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
