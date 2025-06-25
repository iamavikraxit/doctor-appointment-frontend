import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 overflow-hidden">

            {/* Fixed Header */}
            <header className="fixed top-0 left-0 w-full z-50">
                <Header />
            </header>

            {/* Scrollable Content */}
            <main className="flex-1 overflow-y-auto px-4 py-6 mt-[72px] mb-[72px] sm:mt-[80px] sm:mb-[80px]">
                {children}
            </main>

            {/* Fixed Footer */}
            <footer className="fixed bottom-0 left-0 w-full z-50">
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;