import React from 'react';
import { FaUsersCog, FaClipboardCheck, FaChartPie, FaSignOutAlt } from 'react-icons/fa'; // Importing necessary icons
import { useNavigate } from 'react-router-dom'; // For navigation
import '../../css/Dashboard.css'; // Include your custom styles

const AdminDashboard = () => {
    const navigate = useNavigate(); // Initialize useNavigate for routing

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token from local storage
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="admin-dashboard">
            <header className="dashboard-header">
                <h2>Admin Dashboard</h2>
                <button className="logout-button" onClick={handleLogout}>
                    <FaSignOutAlt className="logout-icon" /> Logout
                </button>
            </header>
            <div className="dashboard-cards">
                <div className="card">
                    <FaUsersCog className="card-icon" />
                    <h3>User Management</h3>
                    <p>Manage users, roles, and permissions.</p>
                </div>
                <div className="card">
                    <FaClipboardCheck className="card-icon" />
                    <h3>Package Overview</h3>
                    <p>Analyze packages and performance.</p>
                </div>
                <div className="card">
                    <FaChartPie className="card-icon" />
                    <h3>Analytics</h3>
                    <p>View overall analytics and insights.</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
