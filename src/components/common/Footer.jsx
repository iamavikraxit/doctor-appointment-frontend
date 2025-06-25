import React from 'react';

const Footer = () => (
    <footer className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 px-6 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between text-blue-900 text-sm sm:text-base shadow-md space-y-2 sm:space-y-0">
        <span className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} DocAppoint. All rights reserved.
        </span>
        <span className="text-center sm:text-right">
            Powered by <strong className="text-blue-600">DocAppoint</strong>
        </span>
    </footer>
);

export default Footer;
