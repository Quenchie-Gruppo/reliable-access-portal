import React from 'react';
import { FaClipboardList, FaTasks, FaRegFileAlt, FaChartLine } from 'react-icons/fa'; // User icons
import '../../css/UserDashboard.css'; // Include your custom styles

const UserDashboard = () => {
    return (
        <div className="user-dashboard">
            <h2 className="dashboard-title">User Dashboard</h2>
            <div className="dashboard-cards">
                <div className="card">
                    <FaClipboardList className="card-icon" />
                    <h3>My Packages</h3>
                    <p>View and manage your packages.</p>
                </div>
                <div className="card">
                    <FaTasks className="card-icon" />
                    <h3>Task Management</h3>
                    <p>Keep track of your tasks and deadlines.</p>
                </div>
                <div className="card">
                    <FaRegFileAlt className="card-icon" />
                    <h3>Reports</h3>
                    <p>Access your reports and analytics.</p>
                </div>
                <div className="card">
                    <FaChartLine className="card-icon" />
                    <h3>Performance Analytics</h3>
                    <p>Analyze your performance metrics.</p>
                </div>
            </div>

            {/* Recent Activity Section */}
            <div className="analysis">
                <h2>Recent Activity</h2>
                {/* Placeholder for recent activities */}
                <div className="activity-list">
                    {/* This could be replaced with dynamic data */}
                    <ul>
                        <li>Package upgraded on 01/10/2024</li>
                        <li>Task completed: Update profile on 30/09/2024</li>
                        <li>Report generated on 29/09/2024</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;