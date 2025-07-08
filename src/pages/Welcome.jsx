import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/common/Hero';
import Trend from '../components/common/Trend';

const Welcome = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="w-full flex items-center py-0 overflow-hidden">
                <Hero />
            </section>

            {/* Trending Section */}
            <section className="w-full  py-16 px-6 sm:px-10">
                <Trend />
            </section>

            {/* Features Section */}
            <section className="w-full py-16 px-6 z-30 sm:px-10">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                        Why Choose Our OTT Platform?
                    </h2>
                    <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                        From award-winning series to blockbuster movies and kids’ favorites — there's always something worth watching.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: "🎬",
                                title: "Unlimited Content",
                                desc: "Stream an endless collection of shows, movies, and originals.",
                            },
                            {
                                icon: "⚡",
                                title: "Fast Streaming",
                                desc: "Buffer-free playback on all devices — even in low networks.",
                            },
                            {
                                icon: "📱",
                                title: "Watch Anywhere",
                                desc: "Compatible with mobile, tablet, desktop, and smart TVs.",
                            },
                            {
                                icon: "🚫",
                                title: "No Ads",
                                desc: "Enjoy uninterrupted entertainment with our ad-free plans.",
                            },
                        ].map((feature, i) => (
                            <div key={i} className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Welcome;
