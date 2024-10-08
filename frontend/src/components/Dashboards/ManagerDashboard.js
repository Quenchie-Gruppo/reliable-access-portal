import React from 'react';
import { FaChartLine, FaUsers, FaBell, FaSignOutAlt } from 'react-icons/fa'; // Manager icons
import { useNavigate } from 'react-router-dom'; // For navigation
import '../../css/Dashboard.css'; // Include your custom styles

const ManagerDashboard = () => {
    const navigate = useNavigate(); // Initialize useNavigate for routing

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token from local storage
        navigate('/login'); // Redirect to login page
    };
    return (
        <div className="manager-dashboard">
            <header className="dashboard-header">
                <h2>Manager Dashboard</h2>
                <button className="logout-button" onClick={handleLogout}>
                    <FaSignOutAlt className="logout-icon" /> Logout
                </button>
            </header>
            <div className="dashboard-cards">
                <div className="card">
                    <FaChartLine className="card-icon" />
                    <h3>Team Performance</h3>
                    <p>Monitor your team's performance.</p>
                </div>
                <div className="card">
                    <FaUsers className="card-icon" />
                    <h3>Team Management</h3>
                    <p>Manage team members and roles.</p>
                </div>
                <div className="card">
                    <FaBell className="card-icon" />
                    <h3>Notifications</h3>
                    <p>Stay updated with recent notifications.</p>
                </div>
            </div>
            <div className="analysis">
                <h2>Team Analysis</h2>
                {/* Team performance charts */}
                <div className="analysis-charts">
                    <div className="chart">[Chart Placeholder]</div>
                    <div className="chart">[Chart Placeholder]</div>
                </div>
            </div>
        </div>
    );
};

export default ManagerDashboard;
