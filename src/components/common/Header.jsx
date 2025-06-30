import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'TV Shows', path: '/tv-shows' },
        { name: 'Movies', path: '/movies' },
        { name: 'New & Popular', path: '/new-popular' },
        { name: 'My List', path: '/my-list' },
        { name: 'Browse by Genre', path: '/genres' },
        { name: 'Sign In', path: '/login' },
    ];


    return (
        <header className="bg-pink-50 px-6 sm:px-10 py-3 shadow-xs fixed top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between lg:px-40">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="/" className="flex items-center space-x-2">
                        <img
                            src="https://assets.designhill.com/design-blog/wp-content/uploads/2023/12/5.jpg"
                            alt="Logo"
                            className="h-8 w-8 bg-gray-100 object-cover rounded"
                        />
                        <span className="text-xl font-extrabold hidden sm:flex bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent">
                            NetVerse
                        </span>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-3">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`font-semibold px-4 py-1.5 rounded-sm transition-all duration-300 ${currentPath === item.path
                                ? "bg-pink-100 text-pink-700"
                                : "text-gray-800 hover:text-pink-600 hover:scale-105"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>


                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-pink-700 focus:outline-none"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={
                                    menuOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
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
                            className={`block w-full text-center font-semibold py-2 rounded transition-all duration-300 ${currentPath === item.path
                                ? "bg-pink-100 text-pink-700 shadow ring-2 ring-pink-300"
                                : "text-gray-800 hover:text-pink-600 hover:bg-pink-50"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}

                </div>
            )}
        </header>
    );
};

export default Header;
