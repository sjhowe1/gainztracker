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
    const navigate = useNavigate();

    const [register] = useMutation(REGISTER_USER, {
        onCompleted: () => navigate('/login'),
        onError: (error) => alert(error.message),
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        register({ variables: { username, email, password,firstname,lastname } });
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="firstname" placeholder="FirstName" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
                <input type="lastname" placeholder="Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;