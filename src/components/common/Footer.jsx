import React from 'react';

const Footer = () => (
    <footer className="bg-gray-900 px-6 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between text-gray-300 text-sm sm:text-base shadow-lg space-y-2 sm:space-y-0 lg:px-10">
        <span className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} NetVerse. All rights reserved.
        </span>
        <a href="https://www.facebook.com/bappa.raxit" target='_blank' rel="noopener noreferrer">
            <span className="text-center sm:text-right">
                Powered by <strong className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">NetVerse</strong>
            </span>
        </a>
    </footer>
);

export default Footer;
