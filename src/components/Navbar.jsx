import { Menu, LogOut, User, Search, UserCircle, Settings } from "lucide-react";
import { useState, useRef, useEffect } from "react";


const Navbar = ({ setSidebarOpen, sidebarCollapsed, setSidebarCollapsed }) => {

    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const searchRef = useRef(null);

    
    

    // Autofocus when search becomes visible
    useEffect(() => {
        if (showSearch && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showSearch]);

    return (
        <nav className="backdrop-blur bg-white/90 border-b border-slate-200 px-4 sm:px-6 py-4 shadow-md flex items-center justify-between z-10">
            {/* Left - Logo and Toggle */}
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => {
                        if (window.innerWidth < 768) {
                            setSidebarOpen(true);
                        } else {
                            setSidebarCollapsed(!sidebarCollapsed);
                        }
                    }}
                    className="text-slate-600 hover:text-fuchsia-600 transition"
                >
                    <Menu className="w-6 h-6" />
                </button>
                <h1 className="text-lg sm:text-xl font-bold text-fuchsia-700 tracking-tight">
                    OTT<span className="text-cyan-600">verse</span>
                </h1>
            </div>

            {/* Right - User Actions */}
            <div className="flex items-center space-x-4 relative">
                {/* Collapsible Search beside Username */}
                <div className="hidden sm:flex items-center space-x-2">
                    {showSearch && (
                        <input
                            ref={searchRef}
                            type="text"
                            placeholder="Search..."
                            className="transition-all duration-300 w-48 pl-3 pr-2 py-1.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                        />
                    )}
                    <button
                        onClick={() => setShowSearch(!showSearch)}
                        className="text-slate-600 hover:text-fuchsia-600 transition"
                        title="Search"
                    >
                        <Search className="w-5 h-5" />
                    </button>
                </div>

                {/* User Dropdown */}
                <div className="relative hidden sm:block">
                    <button
                        onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                        className="flex items-center space-x-2 text-sm text-gray-700 hover:text-cyan-600 transition font-medium"
                    >
                        <UserCircle className="w-6 h-6 text-cyan-500" />
                        <span>Admin</span>
                    </button>

                    {userDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                            {/* Top User Info */}
                            <div className="px-4 py-3 border-b">
                                <div className="text-sm font-semibold text-gray-900">Admin</div>
                                <div className="text-xs text-gray-500">admin@example.com</div>
                            </div>

                            {/* Menu Items */}
                            <div className="py-1">
                                <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition">
                                    <User className="w-4 h-4 mr-2 text-gray-500" />
                                    Profile
                                </button>
                                <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition">
                                    <Settings className="w-4 h-4 mr-2 text-gray-500" />
                                    Settings
                                </button>
                            </div>

                            <div className="border-t">
                                <button className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition">
                                    <LogOut className="w-4 h-4 mr-2 text-red-500" />
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Mobile Logout Button */}
                <button
                    className="sm:hidden text-slate-600 hover:text-red-600 flex items-center space-x-1 text-sm font-semibold transition"
                >
                    <LogOut className="w-4 h-4" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
