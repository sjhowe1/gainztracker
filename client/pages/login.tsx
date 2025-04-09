import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [login] = useMutation(LOGIN_USER, {
        onCompleted: (data) => {
            localStorage.setItem('token', data.login.token);
            navigate('/dashboard');
        },
        onError: (error) => alert(error.message),
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login({ variables: { email, password } });
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm mx-auto space-y-4"
        >
            <h2 className="text-2xl font-semibold text-center text-blue-600">Login</h2>

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

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
                Login
            </button>
        </form>
    );
};

export default Login;