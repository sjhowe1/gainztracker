import { useQuery } from '@apollo/client';
import { GET_USERS } from '../utils/queries';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const { data, loading, error } = useQuery(GET_USERS, {
        context: {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        },
    });

    if (loading) return <p className="text-center mt-10 text-blue-600 text-lg">Loading...</p>;
    if (error) return <p className="text-center mt-10 text-red-600 text-lg">Error: {error.message}</p>;

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm mx-auto space-y-4 flex flex-col items-center mt-20">
        <h1 className="text-2xl font-semibold text-center text-blue-600">
            Welcome, {data.profile.username}
        </h1>
        <p className="text-center text-gray-700">Email: {data.profile.email}</p>
        <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
            Logout
        </button>
    </div>
    );
};

export default Dashboard;