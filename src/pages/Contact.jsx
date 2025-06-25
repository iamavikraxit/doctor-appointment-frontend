import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
    return (
        <Layout>
            <section className="px-4 py-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white/70 backdrop-blur-md border border-blue-100 rounded-3xl shadow-2xl p-6 sm:p-10 transition-all">

                    {/* Left Side - Text */}
                    <div className="space-y-6 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-800 drop-shadow mb-4">
                            Let’s Connect
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg">
                            Whether you have a question, need help, or just want to connect — we’d love to hear from you.
                            Reach out and our team will get back to you as soon as possible.
                        </p>

                        <ul className="mt-6 space-y-4 text-gray-600 text-sm sm:text-base">
                            <li><span className="font-semibold text-blue-700">📍 Address:</span> 123 Health St, Wellness City, IN</li>
                            <li><span className="font-semibold text-blue-700">📞 Phone:</span> (123) 456-7890</li>
                            <li><span className="font-semibold text-blue-700">✉️ Email:</span> support@example.com</li>
                        </ul>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-white/90 backdrop-blur-md border border-blue-100 rounded-3xl shadow-xl p-6 sm:p-8 w-full">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 drop-shadow mb-6">
                            Contact Us
                        </h2>

                        <form className="space-y-5 sm:space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all text-sm sm:text-base"
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
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all text-sm sm:text-base"
                                    placeholder="jane@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all text-sm sm:text-base"
                                    placeholder="Write your message..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 rounded-full shadow-md hover:from-blue-700 hover:to-cyan-700 hover:scale-105 transition-transform text-sm sm:text-base"
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