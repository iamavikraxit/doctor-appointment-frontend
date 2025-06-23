import React from 'react'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Doctors = () => {
    // Example doctors data
    const doctors = [
        { id: 1, name: "Dr. Ethan Walker", specialty: "Neurologist", location: "Boston" },
        { id: 2, name: "Dr. Maya Patel", specialty: "Oncologist", location: "Seattle" },
        { id: 3, name: "Dr. Samuel Green", specialty: "Orthopedic Surgeon", location: "Dallas" },
        { id: 4, name: "Dr. Olivia Brooks", specialty: "Endocrinologist", location: "San Francisco" },
        { id: 5, name: "Dr. Liam Harris", specialty: "Psychiatrist", location: "Atlanta" },
        { id: 6, name: "Dr. Chloe Nguyen", specialty: "Rheumatologist", location: "Denver" }
    ];

    return (
        <div className="bg-gradient-to-br from-blue-100 via-cyan-100 to-blue-50 min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 overflow-x-hidden">
                <div className="container mx-auto px-4 py-10">
                    <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-cyan-600 via-blue-500 to-blue-800 bg-clip-text text-transparent mb-10 drop-shadow-lg">
                        Meet Our Doctors
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {doctors.map((doctor) => (
                            <div
                                key={doctor.id}
                                className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl border border-blue-100"
                            >
                                <div className="absolute top-4 right-4 bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold shadow">
                                    {doctor.specialty}
                                </div>
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-200 via-cyan-200 to-white rounded-full flex items-center justify-center mb-6 shadow-inner border-4 border-white">
                                    <span className="text-3xl font-bold text-blue-700">
                                        {doctor.name.replace("Dr. ", "").split(" ").map(n => n[0]).join("")}
                                    </span>

                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-1">{doctor.name}</h2>
                                <p className="text-gray-500 mb-2">{doctor.location}</p>
                                <button className="mt-4 px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow hover:from-cyan-600 hover:to-blue-700 transition">
                                    Book Appointment
                                </button>
                                <div className="absolute bottom-4 left-4 flex space-x-2">
                                    <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                                    <span className="text-xs text-cyan-700 font-medium">Available</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Doctors