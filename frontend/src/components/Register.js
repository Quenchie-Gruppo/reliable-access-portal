import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [emailOrPhone, setEmailOrPhone] = useState(''); // Field for both email and phone
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== passwordConfirmation) {
            setErrorMessage('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', {
                email: emailOrPhone, // Use email for both fields
                password,
                name,
                password_confirmation: passwordConfirmation,
                phone: emailOrPhone, // Assuming you want to allow both email and phone
                role: 'user', // Default role
            });

            // Check for a successful response
            if (response.status === 201) {
                localStorage.setItem('token', response.data.access_token);
                navigate('/dashboard'); 
            } else {
                setErrorMessage('Registration failed. Please try again.'); 
            }

        } catch (error) {
            console.error('Error registering:', error.response ? error.response.data : error.message);
            setErrorMessage(error.response?.data?.message || 'Registration failed. Please try again.');
        }
    };

    return (
        <div className="auth-container">
            <h2>Register</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text" // Use text input for both email and phone
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
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
