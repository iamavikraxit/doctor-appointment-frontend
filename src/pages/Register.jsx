import React from 'react'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Register = () => {
    return (
        <div className="bg-gradient-to-br from-blue-100 via-cyan-100 to-blue-50 min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 overflow-x-hidden flex items-center justify-center py-16 px-4 bg-gradient-to-br from-blue-100 via-cyan-100 to-blue-50">
                <div className="w-full max-w-5xl bg-white/70 backdrop-blur-md border border-blue-100 rounded-3xl shadow-2xl p-10 grid grid-cols-1 md:grid-cols-5 gap-10 items-center transition-all">

                    {/* Left - Illustration or Welcome Text */}
                    <div className="md:col-span-2 space-y-6 text-center md:text-left">
                        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-800 drop-shadow">
                            Join Us Today
                        </h2>
                        <p className="text-gray-700 text-lg">
                            Create your account and start your journey with us.
                        </p>
                        <p className="text-sm text-gray-500 italic">We're excited to have you here ✨</p>
                    </div>

                    {/* Right - Register Form */}
                    <div className="md:col-span-3 bg-white/90 backdrop-blur-md border border-blue-100 rounded-3xl shadow-xl p-10 w-full">
                        <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 drop-shadow mb-6">
                            Create Account
                        </h2>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your full name"
                                    required
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Create a password"
                                    required
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Re-enter your password"
                                    required
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 rounded-full shadow-md hover:from-blue-700 hover:to-cyan-700 hover:scale-105 transition-transform"
                            >
                                🚀 Register
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
