import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// Removed unused Footer import
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './pages/Dashboard';
import Packages from './components/packages'; // Ensure correct casing
import PackageDetails from './components/Package/PackageDetails'; // Import PackageDetails
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './components/NotFound';
import DashboardNav from './components/DashboardNav';
import './App.css';
import Layout from './components/Layout';  // New component for layout logic

function App() {
    const userRole = 'admin'; // Mock user role

    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact-us" element={<ContactUs />} />

                    <Route 
                        path="/dashboard" 
                        element={
                            <PrivateRoute userRole={userRole}>
                                <DashboardNav />
                                <Dashboard />
                            </PrivateRoute>
                        } 
                    />

                    <Route path="/packages" element={<Packages />} />
                    <Route path="/packages/:id" element={<PackageDetails />} /> {/* Route for package details */}

                    {/* Catch-all route for 404 Not Found */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            {/* Use Layout to handle conditional footer rendering */}
            <Layout />
        </Router>
    );
}

export default App;
