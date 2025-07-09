import React from 'react';
import AuthenticatedLayout from '../../components/AuthenticatedLayout';
import {
    Film, Users, Eye, Settings
} from 'lucide-react';

const stats = [
    {
        label: 'Total Shows',
        value: '124',
        icon: Film,
        color: 'bg-indigo-100 text-indigo-600',
    },
    {
        label: 'Active Users',
        value: '8,540',
        icon: Users,
        color: 'bg-green-100 text-green-600',
    },
    {
        label: 'Views Today',
        value: '25.4K',
        icon: Eye,
        color: 'bg-blue-100 text-blue-600',
    },
    {
        label: 'Settings Updated',
        value: '12',
        icon: Settings,
        color: 'bg-yellow-100 text-yellow-600',
    },
];


const trendingShows = [
    { title: 'CyberWorld', genre: 'Sci-Fi', views: '12.4K', status: 'Active' },
    { title: 'DramaVille', genre: 'Drama', views: '8.2K', status: 'Active' },
    { title: 'LaughTrack', genre: 'Comedy', views: '6.7K', status: 'Paused' },
];

const Dashboard = () => {
    return (
        <AuthenticatedLayout>
            {/* Page Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-extrabold text-gray-600 text-start">
                    Welcome to the Dashboard
                </h2>
                <p className="text-start text-slate-600 text-md mt-2">
                    Use the sidebar to manage content, track views, and control settings.
                </p>
            </div>

            {/* Statistic Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map(({ label, value, icon: Icon, color }) => (
                    <div key={label} className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4">
                        <div className={`w-12 h-12 flex items-center justify-center rounded-full ${color}`}>
                            <Icon className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-2xl font-semibold text-gray-800">{value}</div>
                            <div className="text-sm text-gray-500">{label}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Trending Shows Table */}
            <div className="mt-10">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Trending Shows</h3>
                <div className="overflow-auto rounded-xl shadow-sm">
                    <table className="min-w-full bg-white rounded-xl text-sm text-left border border-slate-100">
                        <thead className="bg-slate-50 text-slate-600 font-medium">
                            <tr>
                                <th className="px-4 py-3">Title</th>
                                <th className="px-4 py-3">Genre</th>
                                <th className="px-4 py-3">Views</th>
                                <th className="px-4 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {trendingShows.map((row, i) => (
                                <tr key={i} className="hover:bg-slate-50">
                                    <td className="px-4 py-3">{row.title}</td>
                                    <td className="px-4 py-3">{row.genre}</td>
                                    <td className="px-4 py-3">{row.views}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${row.status === 'Active'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {row.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
