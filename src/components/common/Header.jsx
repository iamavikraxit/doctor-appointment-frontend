import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Doctors", path: "/doctors" },
        { name: "Appointments", path: "/appointments" },
        { name: "Patients", path: "/patients" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 sm:px-10 py-3 shadow-lg">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4M4 10v10a1 1 0 001 1h14a1 1 0 001-1V10M4 10l8 5 8-5" />
                    </svg>
                    <a href="/"><span className="text-2xl font-extrabold text-white tracking-wide">DocAppoint</span></a>
                </div>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`font-bold duration-300 transition-all ease-in-out ${currentPath === item.path
                                ? "bg-yellow-400 text-blue-900 px-4 py-1.5 rounded-xl shadow-lg shadow-yellow-500/50 ring-2 ring-offset-2 ring-yellow-300 scale-105"
                                : "text-white hover:text-yellow-300 hover:scale-105"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a href="/login" className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white font-bold px-5 py-2 rounded-full shadow-md hover:from-cyan-600 hover:to-indigo-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
                        {/* <button className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white font-bold px-5 py-2 rounded-full shadow-md hover:from-cyan-600 hover:to-indigo-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
                            Sign In
                        </button> */}
                        Sign In
                    </a>
                </nav>

                {/* Mobile menu toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile nav items */}
            {menuOpen && (
                <div className="md:hidden mt-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className={`block w-full text-center font-bold py-2 rounded transition-all duration-300 ${currentPath === item.path
                                ? "bg-yellow-400 text-blue-900 shadow ring-2 ring-yellow-300"
                                : "text-white hover:text-yellow-300"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a href="/login">
                        <button className="w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white font-bold py-3 rounded-xl shadow-md hover:from-blue-600 hover:to-teal-600 hover:shadow-lg hover:scale-105 transition-all duration-300">
                            Sign In
                        </button>
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;