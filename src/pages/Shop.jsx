import React from 'react';
import Layout from '../components/Layout';

const Shop = () => {
    const shops = [
        {
            id: 1,
            product: {
                name: 'Sunglass D1001 with B2 GREY Mineral Lens – Devi Opticians',
                price: '₹1,299',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0hlZVNFlD4sgRSkQm3DB75U-jVSPx3LYFvw&s',
            },
        },
        {
            id: 2,
            product: {
                name: 'Sunglass - Glassesbd',
                price: '₹999',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9HocGAxHDIuHkFumoS7u80yAj_UW_eRJa2g&s',
            },
        },
        {
            id: 3,
            product: {
                name: 'Sunglass D1001 with B2 GREY Mineral Lens – Devi Opticians',
                price: '₹4,299',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPPzmc8zOubN2w-8QivS390SQIoYJLt7vFpA&s',
            },
        },
        {
            id: 4,
            product: {
                name: 'Sunglass D1001 with B2 GREY Mineral Lens – Devi Opticians',
                price: '₹2,299',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQOFwQZYCNYjRVVr2KMbObXwq0e6fAj7zPQ&s',
            },
        },
        {
            id: 5,
            product: {
                name: 'Sunglass D1001 with B2 GREY Mineral Lens – Devi Opticians',
                price: '₹3,299',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTduf-Kl8oeciZhKN3Qdd3Ofv134ebVXJ9Quw&s',
            },
        },
        {
            id: 6,
            product: {
                name: 'Sunglass D1001 with B2 GREY Mineral Lens – Devi Opticians',
                price: '₹2,299',
                image: 'data:image/jpeg;base64,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',
            },
        },
    ];

    return (
        <Layout>
            <div className="container max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-center bg-gradient-to-r from-purple-600 via-pink-500 to-pink-600 bg-clip-text text-transparent mb-10 drop-shadow">
                    Shop Our Products
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {shops.map((shop) => (
                        <div
                            key={shop.id}
                            className="flex flex-col bg-pink-100 rounded-3xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative">
                                <img
                                    src={shop.product.image}
                                    alt={shop.product.name}
                                    className="w-full h-56 object-cover object-center"
                                />
                                <span className="absolute top-3 right-3 bg-white/70 text-pink-600 font-bold px-3 py-1 rounded-full shadow text-sm">
                                    {shop.product.price}
                                </span>
                            </div>
                            <div className="flex-1 flex flex-col justify-between p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">{shop.product.name}</h3>
                                <button className="mt-auto bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-xl shadow hover:from-pink-600 hover:to-purple-600 transition">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Shop;
