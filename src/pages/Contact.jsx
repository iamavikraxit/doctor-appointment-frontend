import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
    return (
        <Layout>
            <section className="px-4 py-10 bg-pink-50">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white/70 backdrop-blur-md border border-pink-200 rounded-3xl shadow-2xl p-6 sm:p-10 transition-all">

                    {/* Left Side - Text */}
                    <div className="space-y-6 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-500 to-purple-800 drop-shadow mb-4">
                            Let’s Connect
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg">
                            Have questions or feedback? We'd love to hear from you! Reach out and our team will be happy to assist.
                        </p>

                        <ul className="mt-6 space-y-4 text-gray-600 text-sm sm:text-base">
                            <li><span className="font-semibold text-pink-600">📍 Address:</span> 456 Market Street, Commerce City, IN</li>
                            <li><span className="font-semibold text-pink-600">📞 Phone:</span> +91 98765 43210</li>
                            <li><span className="font-semibold text-pink-600">✉️ Email:</span> contact@ecommerce.com</li>
                        </ul>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-white/90 backdrop-blur-md border border-pink-200 rounded-3xl shadow-xl p-6 sm:p-8 w-full">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-500 to-pink-700 drop-shadow mb-6">
                            Contact Us
                        </h2>

                        <form className="space-y-5 sm:space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none shadow-sm transition-all text-sm sm:text-base"
                                    placeholder="John Smith"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none shadow-sm transition-all text-sm sm:text-base"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none focus:ring-2 focus:ring-pink-500 outline-none shadow-sm transition-all text-sm sm:text-base"
                                    placeholder="Your message..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 rounded-full shadow-md hover:from-purple-700 hover:to-pink-600 hover:scale-105 transition-transform text-sm sm:text-base"
                            >
                                🚀 Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default Contact;