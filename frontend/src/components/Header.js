import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to access current route
import '../css/Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get the current location

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // Define routes where header should not show
    const hideHeaderRoutes = [
        '/dashboard',
        '/admindashboard',
        '/userdashboard',
        '/managerdashboard',
    ];

    // Check if current route is in the list of routes to hide the header
    const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

    // Render nothing if header should be hidden
    if (shouldHideHeader) return null;

    return (
        <header>
            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                <div className="logo">ReliableAccess</div>
                <div className="menu-icon" onClick={toggleMenu} aria-label="Toggle navigation" role="button">
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                </div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><a href="/" onClick={closeMenu}>Home</a></li>
                    <li><a href="/about-us" onClick={closeMenu}>About</a></li>
                    <li><a href="/services" onClick={closeMenu}>Services</a></li>
                    <li><a href="/contact-us" onClick={closeMenu}>Contact Us</a></li>
                    <li><a href="/login" onClick={closeMenu}>Login</a></li>
                    <li><a href="/register" onClick={closeMenu}>Register</a></li>
                    {/* <li><a href="/dashboard" onClick={closeMenu}>Dashboard</a></li> */}
                    <li><a href="/packages" onClick={closeMenu}>Packages</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
