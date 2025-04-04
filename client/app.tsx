import { Routes, Route, Link } from 'react-router-dom'; 
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';

const App = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Welcome to the Gainz Tracker</h1>
            <div>
                <Link to="/register">
                    <button style={{ margin: '10px', padding: '10px' }}>Register</button>
                </Link>
                <Link to="/login">
                    <button style={{ margin: '10px', padding: '10px' }}>Login</button>
                </Link>
            </div>

            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    );
};

export default App;