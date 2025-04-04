import { Routes, Route } from 'react-router-dom'; 
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>Welcome to the App</h1>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
};

export default App;