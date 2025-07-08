import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    const searchRef = useRef(null);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'TV Shows', path: '/tv-shows' },
        { name: 'Movies', path: '/movies' },
        { name: 'New & Popular', path: '/new-popular' },
        { name: 'My List', path: '/my-list' },
        { name: 'Sign In', path: '/login' },
    ];

    const toggleSearch = () => {
        setSearchOpen(prev => !prev);
        setMenuOpen(false);
    };

    const handleSearchInputChange = (e) => {
        console.log("Search query:", e.target.value);
    };

    const handleSearchSubmit = (e) => {
        if (e.key === 'Enter') {
            alert(`Searching for: ${e.target.value}`);
            setSearchOpen(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchOpen && searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchOpen(false);
            }
        };

        if (searchOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchOpen]);

    return (
        <header className="bg-transparent px-6 sm:px-10 py-4 shadow-lg fixed top-0 left-0 w-full z-50 backdrop-filter backdrop-blur-md">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center space-x-2">
                        <img
                            src="https://assets.designhill.com/design-blog/wp-content/uploads/2023/12/5.jpg"
                            alt="NetVerse Logo"
                            className="h-9 w-9 object-cover rounded-md"
                        />
                        <span className="text-2xl font-extrabold hidden sm:flex bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            NetVerse
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation, Search Button, and Search Input */}
                <div className="hidden md:flex items-center space-x-6" ref={searchRef}>
                    {/* Conditional rendering for Desktop Search: Input field or Search button */}
                    {searchOpen ? (
                        <input
                            type="text"
                            placeholder="Search movies, TV shows..."
                            className="px-4 py-2 rounded-md bg-gray-100 text-gray-8ffgdgf00 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 w-64 transition-all duration-300"
                            onKeyDown={handleSearchSubmit}
                            onChange={handleSearchInputChange}
                            autoFocus
                        />
                    ) : (
                        <button
                            onClick={toggleSearch}
                            className="p-2 rounded-full bg-gray-50 text-gray-300 hover:text-teal-400 hover:bg-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
                            aria-label="Search"
                        >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    )}

                    {/* Desktop Navigation (always visible) */}
                    <nav className="flex items-center space-x-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`px-3 py-2 transition-all duration-300 border-b-2 border-transparent
                                ${currentPath === item.path
                                        ? "font-bold text-gray-600 border-gray-400"
                                        : "font-semibold text-gray-600 hover:text-gray-400 hover:border-gray-300"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>


                {/* Mobile Menu Toggle and Search Button/Input */}
                <div className="md:hidden flex items-center space-x-3" ref={searchRef}>
                    {/* Mobile Search Input Field or Button */}
                    {searchOpen ? (
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-3 py-2 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 w-full max-w-xs transition-all duration-300"
                            onKeyDown={handleSearchSubmit}
                            onChange={handleSearchInputChange}
                            autoFocus
                        />
                    ) : (
                        <button
                            onClick={toggleSearch}
                            className="p-2 rounded-full text-gray-300 hover:text-teal-400 focus:outline-none"
                            aria-label="Search"
                        >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    )}

                    {/* Mobile Menu Toggle (always visible, alongside search if not open) */}
                    <button
                        onClick={() => setMenuOpen(prev => !prev)}
                        className="text-gray-300 hover:text-teal-400 focus:outline-none"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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

            {/* Mobile Navigation (collapses below header) */}
            {menuOpen && (
                <div className="md:hidden mt-4 space-y-3 p-4 bg-gray-800 rounded-lg shadow-xl">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className={`block w-full text-center font-semibold py-2.5 rounded-md transition-all duration-300
                            ${currentPath === item.path
                                    ? "bg-gray-700 text-teal-400"
                                    : "text-gray-200 hover:text-teal-300 hover:bg-gray-700"
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