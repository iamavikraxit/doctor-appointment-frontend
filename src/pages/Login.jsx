import React from 'react';


const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10 sm:py-16">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/70 backdrop-blur-md border border-blue-100 rounded-3xl shadow-2xl p-6 sm:p-10 transition-all">

                {/* Left - Welcome Text */}
                <div className="flex flex-col justify-center text-center md:text-left space-y-5">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-800 drop-shadow">
                        Welcome Back 👋
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg">
                        Sign in to your account to access appointments, doctors, and more.
                    </p>
                    <p className="text-sm text-gray-500 italic">We’re glad to see you again.</p>
                </div>

                {/* Right - Login Form */}
                <div className="bg-white/90 backdrop-blur-md border border-blue-100 rounded-2xl shadow-xl p-6 sm:p-8 w-full">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 drop-shadow mb-6">
                        Sign In
                    </h2>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                required
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2 rounded text-blue-600" />
                                Remember me
                            </label>
                            <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 rounded-full shadow-md hover:from-blue-700 hover:to-cyan-700 hover:scale-105 transition-transform"
                        >
                            🔐 Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;