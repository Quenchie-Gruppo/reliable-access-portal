import React from 'react';
import { FaChartBar, FaUsers, FaClipboardList, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { GiChart } from 'react-icons/gi'; 
import Packages from '../components/packages.js';
import '../css/Dashboard.css';
import { useLocation } from 'react-router-dom';
import AdminDashboard from '../components/Dashboards/AdminDashboard';
import UserDashboard from '../components/Dashboards/UserDashboard';
import ManagerDashboard from '../components/Dashboards/ManagerDashboard';

const Dashboard = () => {
    const location = useLocation();
    const userRole = location.state?.userRole;

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <nav>
                    <ul>
                        <li><FaChartBar /> Dashboard Overview</li>
                        {userRole === 'admin' && <li><FaUsers /> Users Management</li>}
                        {userRole === 'admin' && <li><FaClipboardList /> Packages Management</li>}
                        {userRole === 'user' && <li><GiChart /> Usage Statistics</li>}
                        <li><FaCog /> Settings</li>
                        <li><FaSignOutAlt /> Logout</li>
                    </ul>
                </nav>
            </aside>

            <main className="dashboard-content">
                <h1>Welcome to ReliableAccess Dashboard</h1>

                {/* Render the appropriate dashboard based on user role */}
                {userRole === 'admin' && <AdminDashboard />}
                {userRole === 'user' && <UserDashboard />}
                {userRole === 'manager' && <ManagerDashboard />}
                
                <Packages />
            </main>
        </div>
    );
};

export default Dashboard;