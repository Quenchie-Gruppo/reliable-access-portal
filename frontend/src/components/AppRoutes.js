// src/components/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from './Dashboard';
import Login from './Login';
import Home from './Home';
import AboutUs from './AboutUs'; // New About Us page
import Services from './Services'; // New Services page
import ContactUs from './ContactUs'; // New Contact Us page
import BandwidthCheck from './BandwidthCheck';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/bandwidth-check" element={<BandwidthCheck />} />
        <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
        </Route>
    </Routes>
);

export default AppRoutes;
