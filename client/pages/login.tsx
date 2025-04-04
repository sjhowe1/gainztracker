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
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;