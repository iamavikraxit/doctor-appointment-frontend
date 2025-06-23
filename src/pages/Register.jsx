import React from 'react'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Register = () => {
    return (
        <div className="bg-gradient-to-br from-blue-100 via-cyan-100 to-blue-50 min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 overflow-x-hidden flex items-center justify-center py-16 px-4 bg-gradient-to-br from-blue-100 via-cyan-100 to-blue-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl items-center bg-white/70 backdrop-blur-md border border-blue-100 rounded-3xl shadow-2xl p-10 transition-all">

                    {/* Left Side - Welcome Text */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-800 drop-shadow mb-4">
                            Create Your Account
                        </h2>
                        <p className="text-gray-700 text-lg">
                            Join our community today and gain access to exclusive features, updates, and more. Let’s get started!
                        </p>
                        <ul className="mt-6 space-y-4 text-gray-600">
                            <li>✅ Access exclusive content</li>
                            <li>✅ Receive personalized updates</li>
                            <li>✅ Manage your preferences easily</li>
                        </ul>
                    </div>

                    {/* Right Side - Registration Form */}
                    <div className="bg-white/90 backdrop-blur-md border border-blue-100 rounded-3xl shadow-xl p-8 w-full">
                        <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 drop-shadow mb-6">
                            Sign Up
                        </h2>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
                                    placeholder="Jane Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
                                    placeholder="jane@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 rounded-full shadow-md hover:from-blue-700 hover:to-cyan-700 hover:scale-105 transition-transform"
                            >
                                🚀 Create Account
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    )
}
export default Register
