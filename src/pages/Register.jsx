import React from 'react';

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4 py-10 sm:py-16">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white/70 backdrop-blur-md border border-pink-100 rounded-3xl shadow-2xl p-6 sm:p-10 transition-all">

                {/* Left Side - Welcome Text */}
                <div className="flex items-center h-full">
                    <div className="space-y-6 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-pink-600 drop-shadow mb-4">
                            Create Your Account
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg">
                            Join our shopping community today and unlock exclusive deals, early access, and more.
                        </p>
                        <ul className="mt-6 space-y-3 text-gray-600 text-sm sm:text-base">
                            <li>✅ Enjoy member-only discounts</li>
                            <li>✅ Get fast checkout experience</li>
                            <li>✅ Track and manage your orders</li>
                        </ul>
                    </div>
                </div>

                {/* Right Side - Registration Form */}
                <div className="bg-white/90 backdrop-blur-md border border-pink-100 rounded-2xl shadow-xl p-6 sm:p-8 w-full">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-pink-600 drop-shadow mb-6">
                        Sign Up
                    </h2>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-pink-500 outline-none shadow-sm transition-all"
                                placeholder="Jane Doe"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-pink-500 outline-none shadow-sm transition-all"
                                placeholder="jane@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-pink-500 outline-none shadow-sm transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-pink-500 outline-none shadow-sm transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 rounded-full shadow-md hover:from-purple-700 hover:to-pink-600 hover:scale-105 transition-transform"
                        >
                            🚀 Create Account
                        </button>
                    </form>

                    {/* Login Link */}
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Have an account?{' '}
                        <a href="/login" className="text-pink-600 font-semibold hover:underline">
                            Sign in here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;