import React, { useState } from 'react';
import {
    Home, Users, Settings, BarChart2, X
} from 'lucide-react';
import Navbar from './Navbar';
import { Link, useLocation } from 'react-router-dom';

const AuthenticatedLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(true); // collapsed by default

    const location = useLocation();
    const currentPath = location.pathname;

    const menuItems = [
        { label: 'Dashboard', icon: Home, path: '/dashboard', hover: 'hover:bg-pink-100 hover:text-pink-600' },
        { label: 'Users', icon: Users, path: '/users', hover: 'hover:bg-emerald-100 hover:text-emerald-600' },
        { label: 'Settings', icon: Settings, path: '/settings', hover: 'hover:bg-yellow-100 hover:text-yellow-600' },
        { label: 'Reports', icon: BarChart2, path: '/reports', hover: 'hover:bg-indigo-100 hover:text-indigo-600' },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-fuchsia-50 via-white to-sky-100 text-gray-800">
            {/* Navbar */}
            <Navbar
                sidebarCollapsed={sidebarCollapsed}
                setSidebarCollapsed={setSidebarCollapsed}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="flex flex-1 relative overflow-hidden">
                {/* Sidebar (desktop + tablet) */}
                <aside
                    onMouseEnter={() => setSidebarCollapsed(false)}
                    onMouseLeave={() => setSidebarCollapsed(true)}
                    className={`hidden md:flex flex-col bg-white/80 backdrop-blur-md border-r border-slate-200 shadow-md transition-all duration-300 ease-in-out
                        ${sidebarCollapsed ? 'w-20' : 'w-64'} px-4 py-6 space-y-6`}
                >
                    <h2 className="text-base text-gray-600 font-bold tracking-wide">
                        {!sidebarCollapsed ? 'Menus' : ''}
                    </h2>
                    <nav className="flex flex-col space-y-1">
                        {menuItems.map(({ label, icon, path, hover }) => {
                            const isActive = currentPath === path;

                            return (
                                <Link
                                    key={label}
                                    to={path}
                                    className={`flex items-center px-3 py-2 rounded-lg group transition-all duration-200
                                        ${sidebarCollapsed ? 'justify-center' : 'space-x-3'}
                                        ${isActive ? 'bg-fuchsia-100 text-fuchsia-700 font-semibold' : 'text-slate-700'}
                                        ${!isActive && hover}
                                    `}
                                >
                                    {React.createElement(icon, {
                                        className: `w-5 h-5 group-hover:scale-110 transition-transform ${isActive ? 'text-fuchsia-600' : ''}`,
                                    })}
                                    {!sidebarCollapsed && <span className="text-sm">{label}</span>}
                                </Link>
                            );
                        })}
                    </nav>
                    {!sidebarCollapsed && (
                        <div className="mt-auto text-xs text-slate-400 px-2 text-left">
                            <span>Version 1.0</span>
                        </div>
                    )}
                </aside>

                {/* Mobile sidebar */}
                {sidebarOpen && (
                    <div className="fixed inset-0 z-40 md:hidden bg-black/30 backdrop-blur-sm" onClick={() => setSidebarOpen(false)}>
                        <aside
                            className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg p-6 space-y-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-bold text-fuchsia-700">Menu</h2>
                                <button onClick={() => setSidebarOpen(false)}>
                                    <X className="w-5 h-5 text-slate-600 hover:text-red-600" />
                                </button>
                            </div>
                            <nav className="flex flex-col space-y-1">
                                {menuItems.map(({ label, path, hover, icon }) => {
                                    const isActive = currentPath === path;

                                    return (
                                        <Link
                                            key={label}
                                            to={path}
                                            className={`flex items-center px-3 py-2 rounded-lg space-x-3 transition
                                                ${isActive ? 'bg-fuchsia-100 text-fuchsia-700 font-semibold' : 'text-slate-700'}
                                                ${!isActive && hover}
                                            `}
                                        >
                                            {React.createElement(icon, { className: `w-5 h-5 ${isActive ? 'text-fuchsia-600' : ''}` })}
                                            <span className="text-sm font-medium">{label}</span>
                                        </Link>
                                    );
                                })}
                            </nav>
                        </aside>
                    </div>
                )}

                {/* Main content */}
                <main className="flex-1 p-4 sm:p-6 overflow-y-auto bg-white/60 backdrop-blur-sm transition-all rounded-tl-2xl">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AuthenticatedLayout;