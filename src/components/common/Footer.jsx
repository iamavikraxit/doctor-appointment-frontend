import React from 'react';

const Footer = () => (
    <footer className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between text-white text-sm sm:text-base shadow-lg space-y-2 sm:space-y-0">
        <span className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} DocAppoint. All rights reserved.
        </span>
        <span className="text-center sm:text-right">
            Powered by <strong>DocAppoint</strong>
        </span>
    </footer>
);

export default Footer
