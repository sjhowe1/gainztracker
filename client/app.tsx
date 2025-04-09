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
        <div className="text-center p-5">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Gainz Tracker</h1>
            <div>
                <button 
                    onClick={() => setIsRegisterModalOpen(true)} 
                    className="m-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    Register
                </button>
                <button 
                    onClick={() => setIsLoginModalOpen(true)} 
                    className="m-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                    Login
                </button>
            </div>

            {/* Modals */}
            {isRegisterModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-80 text-center">
                        <h2 className="text-xl font-semibold mb-4">Register</h2>
                        <Register />
                        <button 
                            onClick={closeModal} 
                            className="mt-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {isLoginModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-80 text-center">
                        <h2 className="text-xl font-semibold mb-4">Login</h2>
                        <Login />
                        <button 
                            onClick={closeModal} 
                            className="mt-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    );
};

export default App;