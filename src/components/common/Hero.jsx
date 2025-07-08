import React from 'react';

const Hero = () => {
    return (
        <div className="w-full py-14 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 flex flex-col lg:flex-row items-center justify-between text-gray-900">

                {/* Left: Hero Text */}
                <div className="flex-1 flex flex-col justify-center items-center lg:items-start z-10 max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight mb-6 text-center lg:text-left">
                        <span className="bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                            Stream Everything
                        </span>
                        <br />
                        <span className="text-gray-800">Anywhere. Anytime.</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 mb-8 text-center lg:text-left">
                        Unlimited access to movies, TV shows, originals, and more. Watch across all your devices. No commitments. Cancel anytime.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <a
                            href="/signup"
                            className="bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-700 text-white font-bold py-3 px-8 rounded-xl shadow-md hover:scale-105 transition-all duration-300"
                        >
                            Start Free Trial
                        </a>
                        <a
                            href="/browse"
                            className="bg-gradient-to-br from-gray-800 to-gray-900 text-white font-bold py-3 px-8 rounded-xl shadow-md hover:scale-105 transition-all duration-300"
                        >
                            Browse Library
                        </a>
                    </div>
                </div>

                {/* Right: Featured Poster */}
                <div className="flex-1 relative w-full max-w-md h-[420px] lg:h-[500px] flex items-center justify-center mt-10 lg:mt-0">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden group transition-all duration-500">
                        <img
                            src="https://image.tmdb.org/t/p/w780/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg"
                            alt="Stranger Things"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">Stranger Things</h3>
                            <p className="text-sm sm:text-base mb-4 text-gray-100">A group of kids uncover supernatural mysteries in their small town.</p>
                            <div className="flex gap-3">
                                <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                                    ▶ Play
                                </button>
                                <button className="bg-white/20 border border-white text-white font-semibold px-4 py-2 rounded-lg hover:bg-white/30 transition">
                                    + My List
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
