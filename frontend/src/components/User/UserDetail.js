// src/components/UserDetail.js
import React, { useEffect, useState } from 'react';

const UserDetail = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`/api/users/${userId}`); // Adjust this URL to your API endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch user');
                }
                const data = await response.json();
                setUser(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [userId]);

    if (loading) return <p>Loading user details...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="user-detail">
            <h2>User Details</h2>
            {user ? (
                <div>
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Role:</strong> {user.role}</p>
                </div>
            ) : (
                <p>No user found.</p>
            )}
        </div>
    );
};

export default UserDetail;