import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';

const App = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

    const closeModal = () => {
        setIsLoginModalOpen(false);
        setIsRegisterModalOpen(false);
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Welcome to the Gainz Tracker</h1>
            <div>
                <button 
                    onClick={() => setIsRegisterModalOpen(true)} 
                    style={{ margin: '10px', padding: '10px' }}>
                    Register
                </button>
                <button 
                    onClick={() => setIsLoginModalOpen(true)} 
                    style={{ margin: '10px', padding: '10px' }}>
                    Login
                </button>
            </div>

            {/* Modals */}
            {isRegisterModalOpen && (
                <div style={modalStyle}>
                    <div style={modalContentStyle}>
                        <h2>Register</h2>
                        <Register />
                        <button onClick={closeModal} style={closeButtonStyle}>Close</button>
                    </div>
                </div>
            )}

            {isLoginModalOpen && (
                <div style={modalStyle}>
                    <div style={modalContentStyle}>
                        <h2>Login</h2>
                        <Login />
                        <button onClick={closeModal} style={closeButtonStyle}>Close</button>
                    </div>
                </div>
            )}

            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    );
};

const modalStyle = {
    position: 'fixed' as 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1000',
};

const modalContentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    width: '300px',
    textAlign: 'center' as 'center',
};

const closeButtonStyle = {
    marginTop: '20px',
    padding: '10px',
    cursor: 'pointer',
};

export default App;