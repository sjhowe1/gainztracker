import { useQuery } from '@apollo/client';
import { GET_PROFILE } from '../utils/queries';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const { data, loading, error } = useQuery(GET_PROFILE, {
        context: {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div>
            <h1>Welcome, {data.profile.username}</h1>
            <p>Email: {data.profile.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;