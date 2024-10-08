import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../css/PackageDetails.css'; // Import the CSS file for styling

const PackageDetails = () => {
    const { id } = useParams(); // Get the package ID from the URL
    const [packageDetails, setPackageDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode] = useState('+254'); // Default country code
    const [modalType, setModalType] = useState(null); // Track which modal to show
    const [devices, setDevices] = useState([]); // Store fetched devices
    const [selectedDevices, setSelectedDevices] = useState([]); // Store selected devices for adding
    const [editableDevice, setEditableDevice] = useState(null); // Store device details for editing

    useEffect(() => {
        const fetchPackageDetails = async () => {
            try {
                const token = localStorage.getItem('token'); // Get the token
                const response = await axios.get(`http://127.0.0.1:8000/api/packages/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}` // Include the Bearer token in the headers
                    }
                });
                setPackageDetails(response.data);
            } catch (err) {
                console.error('Error fetching package details:', err); // Log detailed error
                setError('Error fetching package details');
            } finally {
                setLoading(false);
            }
        };

        fetchPackageDetails();
    }, [id]);

    const fetchDevices = async () => {
        try {
            const token = localStorage.getItem('token'); // Get the token
            const response = await axios.get(`http://127.0.0.1:8000/api/devices`, {
                headers: {
                    'Authorization': `Bearer ${token}` // Include the Bearer token in the headers
                }
            });
            setDevices(response.data.devices); // Set devices to state
        } catch (err) {
            console.error('Error fetching devices:', err);
            setError('Error fetching devices'); // Update error state
        }
    };

    const handlePayment = () => {
        if (phoneNumber.length !== 9) {
            setError('Please enter a valid 9-digit phone number.');
            return;
        }
        console.log(`Paying with ${countryCode}${phoneNumber}`);
    };

    const openModal = (type) => {
        setModalType(type);
        if (type === 'addDevice' || type === 'updateDevice') {
            fetchDevices(); // Fetch devices when opening modal
        }
    };

    const closeModal = () => {
        setModalType(null);
        setSelectedDevices([]); // Clear selected devices when closing modal
        setEditableDevice(null); // Clear editable device when closing modal
    };

    const handleDeviceSelect = (deviceId) => {
        if (selectedDevices.includes(deviceId)) {
            setSelectedDevices(selectedDevices.filter(id => id !== deviceId)); // Deselect device
        } else {
            setSelectedDevices([...selectedDevices, deviceId]); // Select device
        }
    };

    const handleUpdateDevice = async () => {
        try {
            if (!editableDevice) return; // No device selected for update

            const token = localStorage.getItem('token'); // Get the token
            await axios.put(`http://127.0.0.1:8000/api/devices/${editableDevice.id}`, editableDevice, {
                headers: {
                    'Authorization': `Bearer ${token}` // Include the Bearer token in the headers
                }
            });
            closeModal(); // Close modal after updating
            fetchDevices(); // Refresh devices list after updating
        } catch (err) {
            console.error('Error updating device:', err);
            setError('Error updating device');
        }
    };

    if (loading) return <p>Loading package details...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container mt-5">
            <div className="package-card">
                <h2 className="text-center mb-4">{packageDetails.name}</h2>
                <p>{packageDetails.description}</p>
                <p><strong>Duration:</strong> {packageDetails.duration} minutes</p>
                {packageDetails.wallet_bonus && <p><strong>Wallet Bonus:</strong> {packageDetails.wallet_bonus}</p>}
                <h3><sup>Ksh </sup>{packageDetails.price}</h3>

                {/* Buttons for adding/updating devices */}
                <div className="mt-4 button-group">
                    <button className="btn btn-success" onClick={() => openModal('addDevice')}>Add Device</button>
                    <button className="btn btn-warning" onClick={() => openModal('updateDevice')}>Update Device</button>
                    <button className="btn btn-info" onClick={() => openModal('usage')}>Usage</button>
                </div>
            </div>

            {/* Payment Section */}
            <section className="payment-section mt-5">
                <div className="payment-container">
                    {/* Image below buttons */}
                    <img src="https://portal.sasakonnect.net/assets/img/lipa.png" alt="Payment Options" className="payment-image" />

                    {/* Pricing Information */}
                    <div className="pricing-info">
                        <span className="product-price" style={{ color: '#549b36', fontSize: '20px' }}>
                            <strong>Ksh 20</strong>
                        </span>
                        <span className="product-price" style={{ color: '#549b36', fontSize: '20px' }}>
                            for 2-Hour Unlimited Access
                        </span>
                    </div>

                    {/* Input field for M-PESA number */}
                    <div className="input-group">
                        <span className="country-code-prefix">{countryCode}</span>
                        <input 
                            className="m-pesa-input" 
                            placeholder="Enter M-PESA number" 
                            required 
                            type="tel" 
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <h4 style={{ fontSize: '12px', color: '#f3ba05' }}>Enter the M-PESA Pin on prompt to complete your payment.</h4>

                    {/* Pay Now Button */}
                    <button 
                        className="btn btn-primary text-white mt-2" 
                        style={{ backgroundColor: '#549b36' }} 
                        onClick={handlePayment}
                    >
                        Pay Now
                    </button>

                    {error && <p className="error-message">{error}</p>} {/* Display error message */}
                </div>
            </section>

            {/* Modals for Add Device and Update Device */}
            {modalType && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-modal-button" onClick={closeModal}>×</button> {/* Close button */}
                        {modalType === 'addDevice' && (
                            <>
                               <h3>Add Device</h3>
                                {devices.length > 0 ? (
                                    devices.map(device => (
                                        <div key={device.id}>
                                            <label style={{ display: 'flex', alignItems: 'center' }}>
                                                <input 
                                                    type="checkbox" 
                                                    checked={selectedDevices.includes(device.id)} 
                                                    onChange={() => handleDeviceSelect(device.id)} 
                                                    style={{ marginRight: '10px' }} // Add margin to the right of the checkbox
                                                />
                                                {device.mac_address} {/* Display MAC address or any other relevant info */}
                                            </label>
                                        </div>
                                    ))
                                ) : (
                                    <p>No devices found.</p>
                                )}
                                {/* Button to add selected devices */}
                                <button 
                                    onClick={closeModal} 
                                    style={{ backgroundColor: '#28a745', color: 'white', marginTop: '10px' }} 
                                    className="btn"
                                >
                                    Add Selected Devices
                                </button>
                            </>
                        )}
                        {modalType === 'updateDevice' && (
                            <>
                                <h3>Update Device</h3>
                                {devices.length > 0 ? (
                                    devices.map(device => (
                                        <div key={device.id}>
                                            {/* Display device information and provide an option to update */}
                                            <label onClick={() => setEditableDevice(device)}>
                                                {device.mac_address} {/* Display MAC address or any other relevant info */}
                                            </label>
                                        </div>
                                    ))
                                ) : (
                                    <p>No devices found.</p>
                                )}
                                {editableDevice && (
                                    <>
                                        <h4>Edit Device</h4>
                                        {/* Editable fields for updating device details */}
                                        {/* You can add input fields here based on what you want to edit */}
                                        <input 
                                            type="text" 
                                            value={editableDevice.mac_address} 
                                            onChange={(e) => setEditableDevice({ ...editableDevice, mac_address: e.target.value })}
                                        />
                                        {/* Add more fields as necessary */}
                                        <button onClick={handleUpdateDevice}>Update Device</button> {/* Call update function */}
                                    </>
                                )}
                                {/* Close button */}
                                <button onClick={closeModal}>Close</button>
                            </>
                        )}
                        {modalType === 'usage' && (
                            <>
                                <h3>Usage Analysis</h3>
                                {/* Display usage analysis graph here */}
                                {/* Add functionality to show usage details */}
                                <button onClick={closeModal}>Close</button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PackageDetails;