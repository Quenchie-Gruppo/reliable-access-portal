import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [emailOrPhone, setEmailOrPhone] = useState('');  // Changed field name to support both email and phone
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', {
                email_or_phone: emailOrPhone,  // Send emailOrPhone to match the backend controller
                password,
            }, {
                withCredentials: true
            });

            localStorage.setItem('token', response.data.access_token);
            const userRole = response.data.user.role;

            setEmailOrPhone('');
            setPassword('');
            navigate('/dashboard', { state: { userRole } });

        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.message || 'Invalid credentials');
            } else if (error.request) {
                setErrorMessage('No response from server');
            } else {
                setErrorMessage('An unexpected error occurred.');
            }
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Email or Phone"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
