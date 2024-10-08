import React, { useState, useEffect, useCallback } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import '../css/DashboardNav.css';

const DashboardNav = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        console.log('Profile icon clicked'); // Debugging line
        setDropdownOpen((prev) => !prev);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
        
        // Simulate a search operation (replace with actual search logic)
        const results = mockData.filter(item => 
            item.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        setSearchResults(results);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleClickOutside = useCallback((event) => {
        if (dropdownOpen && !event.target.closest('.dropdown-menu') && !event.target.closest('.profile-icon')) {
            setDropdownOpen(false);
        }
    }, [dropdownOpen]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    // Mock data for demonstration purposes
    const mockData = [
        'High-Speed Internet',
        'Cloud Solutions',
        'Security Solutions',
        'Domain Hosting',
        'Flexible Packages',
        'Seamless Streaming'
    ];

    return (
        <nav className="dashboard-nav">
            <div className="nav-left">
                <Link to="/"><img src="/logo.png" alt="Logo" className="logo" /></Link>
            </div>
            <div className="nav-center">
                <form onSubmit={handleSearch} className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} 
                    />
                    <button type="submit"><FiSearch /></button>
                </form>
                {searchResults.length > 0 && (
                    <div className="search-results">
                        {searchResults.map((result, index) => (
                            <div key={index} className="search-item">
                                {result}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="nav-right">
                <div className="profile-icon" onClick={toggleDropdown}>
                    <FaUserCircle />
                </div>
                {dropdownOpen && (
                    <div className="dropdown-menu">
                        <Link to="/profile" className="dropdown-item">View Profile</Link>
                        <div onClick={handleLogout} className="dropdown-item">Logout</div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default DashboardNav;