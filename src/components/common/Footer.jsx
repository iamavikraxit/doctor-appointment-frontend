import React from 'react';

const Footer = () => (
    <footer className="bg-pink-50 px-6 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between text-pink-800 text-sm sm:text-base shadow-md space-y-2 sm:space-y-0">
        <span className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} KAMALA TRADERS. All rights reserved.
        </span>
        <a href="https://www.facebook.com/bappa.raxit" target='_blank' rel="noopener noreferrer">
            <span className="text-center sm:text-right">
                Powered by <strong className="text-pink-600">KAMALA TRADERS</strong>
            </span>
        </a>
    </footer>
);

export default Footer;
