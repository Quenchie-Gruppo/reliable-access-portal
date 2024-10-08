import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome for icons
import { useNavigate } from 'react-router-dom';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(''); // State for error messages
    const navigate = useNavigate(); // Use useNavigate

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/packages');
                setPackages(response.data);
            } catch (error) {
                console.error('Error kwa kufetching packages:', error);
                setError('Failed to load packages. Please try again later.'); // Set error message
            } finally {
                setLoading(false); // Stop loading regardless of success or failure
            }
        };
        fetchPackages();
    }, []);

    const handleSelectPackage = (id) => {
        navigate(`/packages/${id}`); // Navigate to Package Details page
    };

    if (loading) return <p className="text-center">Loading packages...</p>; // Loading state
    if (error) return <p className="text-danger text-center">{error}</p>; // Error state

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Our Packages</h2>
            <div className="row">
                {packages.map(pkg => (
                    <div key={pkg.id} className="col-md-4 col-sm-6 mb-4">
                        <div className="card shadow-sm border-light">
                            <div className="card-body">
                                <h4 className="card-title">{pkg.name} <i className="fa fa-gift"></i></h4>
                                <p className="card-text">{pkg.description}</p>
                                <p className="card-text"><strong>Duration:</strong> {pkg.duration} minutes</p>
                                {pkg.wallet_bonus && <p className="card-text"><strong>Wallet Bonus:</strong> {pkg.wallet_bonus}</p>}
                                <h3><sup>Ksh </sup>{pkg.price}</h3>
                                <button 
                                    className="btn btn-primary w-100 mt-3" 
                                    onClick={() => handleSelectPackage(pkg.id)} // Handle package selection
                                >
                                    SELECT <i className="fa fa-check-circle"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Packages;