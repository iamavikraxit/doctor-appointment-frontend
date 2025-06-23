import React from 'react'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Welcome = () => {
    return (
        <div className="bg-gradient-to-br from-blue-100 via-cyan-100 to-blue-50 min-h-screen flex flex-col font-sans">
            <Header />

            <main className="flex-1 py-20 px-4 mt-6">
                <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
                    {/* Left: Text Content */}
                    <div className="space-y-8">
                        <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
                            Book <span className="text-blue-500">Doctor</span> Appointments<br />
                            Anytime, Anywhere
                        </h1>
                        <p className="text-xl text-gray-600 max-w-xl">
                            Find trusted doctors, schedule appointments online, and get quality healthcare at your convenience. Your health, our priority.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/doctors"
                                className="bg-gradient-to-br from-blue-600 via-cyan-400 hover:bg-blue-700 text-white hover:text-gray-800 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-200"
                            >
                                Find Doctors
                            </a>
                            <a
                                href="/signup"
                                className="bg-white border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-50 font-bold py-3 px-8 rounded-lg transition duration-200"
                            >
                                Create Account
                            </a>
                        </div>
                        <div className="mt-10 flex items-center gap-4">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Patient"
                                className="rounded-full w-12 h-12 border-2 border-cyan-500"
                            />
                            <div>
                                <p className="text-gray-700 font-medium">
                                    “Booking appointments is so easy and quick. Highly recommended!” 
                                </p>
                                <span className="text-sm text-gray-400">— John D.</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image Showcase */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <img
                                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80"
                                alt="Doctor Consultation"
                                className="rounded-2xl shadow-xl object-cover w-full h-60"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=400&q=80"
                                alt="Clinic"
                                className="rounded-2xl shadow-xl object-cover w-full h-40"
                            />
                        </div>
                        <div className="flex flex-col justify-end space-y-6">
                            <img
                                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=400&q=80"
                                alt="Healthcare"
                                className="rounded-2xl shadow-xl object-cover w-full h-40"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=400&q=80"
                                alt="Medical Team"
                                className="rounded-2xl shadow-xl object-cover w-full h-60"
                            />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Welcome