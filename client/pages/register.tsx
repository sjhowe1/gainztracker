import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../utils/mutations';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const [register] = useMutation(REGISTER_USER, {
        onCompleted: (data) => {
            if (data.register.message === 'Registration successful') {
                navigate('/login'); 
            } else {
                setMessage(data.register.message); 
            }
        },
        onError: (error) => {
            setMessage(error.message); 
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        register({ variables: { username, email, password,firstname,lastname } });
    };

    return (
        <div>
        <h2 className="text-2xl font-semibold text-center text-blue-600">Register</h2>
        {/* Display message if available */}
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm mx-auto space-y-4 flex flex-col items-center">
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input 
                type="text" 
                placeholder="FirstName" 
                value={firstname} 
                onChange={(e) => setFirstname(e.target.value)} 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input 
                type="text" 
                placeholder="Lastname" 
                value={lastname} 
                onChange={(e) => setLastname(e.target.value)} 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
                Register
            </button>
        </form>
    </div>
    );
};

export default Register;