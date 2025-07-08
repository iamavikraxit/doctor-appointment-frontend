import React from 'react'

export const Trend = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">
                Trending Now
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {[
                    {
                        src: "https://image.tmdb.org/t/p/w300/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
                        title: "Stranger Things",
                    },
                    {
                        src: "https://image.tmdb.org/t/p/w300/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
                        title: "Breaking Bad",
                    },
                    {
                        src: "https://image.tmdb.org/t/p/w300/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
                        title: "Interstellar",
                    },
                    {
                        src: "https://image.tmdb.org/t/p/w300/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
                        title: "Ad Astra",
                    },
                    {
                        src: "https://image.tmdb.org/t/p/w300/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
                        title: "Avengers: Endgame",
                    },

                ].map((item, index) => (
                    <div key={index} className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                        <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                            <div className="bg-black/60 w-full px-4 py-2 text-white text-sm font-semibold">
                                {item.title}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Trend;