import React from 'react';
import Layout from '../components/Layout';

const Shop = () => {
    const shops = [
        {
            id: 1,
            name: 'Urban Threads',
            category: 'Fashion',
            location: 'Mumbai, India',
            image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80',
        },
        {
            id: 2,
            name: 'TechNest',
            category: 'Electronics',
            location: 'Bangalore, India',
            image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80',
        },
        {
            id: 3,
            name: 'Glow & Glam',
            category: 'Beauty',
            location: 'Delhi, India',
            image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80',
        },
        {
            id: 4,
            name: 'HomeHaven',
            category: 'Furniture',
            location: 'Chennai, India',
            image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80',
        },
        {
            id: 5,
            name: 'Gizmo World',
            category: 'Gadgets',
            location: 'Hyderabad, India',
            image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80',
        },
        {
            id: 6,
            name: 'Kitchen Story',
            category: 'Appliances',
            location: 'Pune, India',
            image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80',
        },
    ];

    return (
        <Layout>
            <div className="container max-w-7xl mx-auto px-4">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-center bg-gradient-to-r from-purple-600 via-pink-500 to-pink-600 bg-clip-text text-transparent mb-12 drop-shadow">
                    Featured Products
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {shops.map((shop) => (
                        <div
                            key={shop.id}
                            className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl border border-pink-100"
                        >
                            {/* Shop Image */}
                            <img
                                src={shop.image}
                                alt={shop.name}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6 sm:p-8 flex flex-col items-center text-center">
                                {/* Badge */}
                                <div className="absolute top-4 right-4 bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold shadow">
                                    {shop.category}
                                </div>

                                {/* Shop Info */}
                                <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-1">{shop.name}</h2>
                                <p className="text-gray-500 text-sm sm:text-base mb-2">{shop.location}</p>

                                {/* Button */}
                                <button className="mt-4 px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold shadow hover:from-purple-700 hover:to-pink-600 transition">
                                    Visit Store
                                </button>

                                {/* Status */}
                                <div className="mt-4 flex space-x-2 items-center">
                                    <span className="inline-block w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
                                    <span className="text-xs text-pink-700 font-medium">Open Now</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Shop;
