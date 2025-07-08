import React from 'react';
import Layout from '../components/Layout';

const Welcome = () => {
    return (
        <Layout>
            <section className="w-full min-h-screen flex items-center py-0 bg-gradient-to-br from-gray-50 via-white to-gray-200">
                <div className="relative w-full flex flex-col lg:flex-row items-center justify-between px-0">
                    {/* Left: Text Content */}
                    <div className="flex-1 flex flex-col justify-center items-center lg:items-start px-8 py-24 lg:py-40 z-10">
                        <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight mb-6 drop-shadow-lg">
                            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-700 bg-clip-text text-transparent">
                                Discover & Shop
                            </span>
                            <br />
                            <span className="text-gray-800">Your Style</span>
                        </h1>
                        <p className="text-xl text-gray-700 max-w-2xl mb-8">
                            Explore the latest trends in fashion, electronics, and more. Enjoy a seamless shopping experience with fast delivery and exclusive deals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a
                                href="/shop"
                                className="bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-700 text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition"
                            >
                                Start Shopping
                            </a>
                            <a
                                href="/signup"
                                className="bg-white text-purple-700 hover:bg-purple-50 font-bold py-4 px-10 rounded-xl transition"
                            >
                                Join Now
                            </a>
                        </div>
                        {/* Testimonial */}
                        <div className="flex items-center gap-4 bg-white/80 rounded-lg shadow-md px-6 py-4 backdrop-blur-sm">
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="Customer"
                                className="rounded-full w-14 h-14 shadow"
                            />
                            <div>
                                <p className="text-gray-700 font-medium italic">
                                    “Amazing products and super fast delivery. My go-to shop for everything!”
                                </p>
                                <span className="text-sm text-gray-400">— Priya S.</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Advanced Image Showcase */}
                    <div className="flex-1 relative w-full h-[600px] lg:h-screen flex items-center justify-center overflow-hidden">
                        {/* Decorative Blobs */}
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-200 rounded-full opacity-40 blur-3xl z-0"></div>
                        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-200 rounded-full opacity-40 blur-3xl z-0"></div>

                        {/* Image Grid */}
                        <div className="relative grid grid-cols-2 gap-8 z-10">
                            <img
                                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"
                                alt="Fashion"
                                className="rounded-3xl shadow-2xl w-64 h-44 object-cover transform rotate-[-6deg] hover:scale-105 transition"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
                                alt="Electronics"
                                className="rounded-3xl shadow-2xl w-52 h-64 object-cover transform rotate-[8deg] hover:scale-105 transition"
                                style={{ marginTop: '3rem' }}
                            />
                            <img
                                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                                alt="Accessories"
                                className="rounded-3xl shadow-2xl w-52 h-64 object-cover transform rotate-[-8deg] hover:scale-105 transition"
                                style={{ marginTop: '-2rem' }}
                            />
                            <img
                                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
                                alt="Home Decor"
                                className="rounded-3xl shadow-2xl w-64 h-44 object-cover transform rotate-[5deg] hover:scale-105 transition"
                            />
                        </div>

                        {/* Floating Cart Button */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                            <div className="bg-white rounded-full shadow-lg p-4 animate-pulse">
                                <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
                                    <circle cx="18" cy="18" r="18" fill="#EC4899" />
                                    <path d="M12 16h12l-1.5 7.5h-9L12 16zm1.5-4a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm9 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="#fff" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Welcome;
