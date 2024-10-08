// src/components/DeviceManager.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DeviceManager = () => {
    const [devices, setDevices] = useState([]);
    const [macAddress, setMacAddress] = useState('');
    const [updateId, setUpdateId] = useState(null);

    useEffect(() => {
        fetchDevices();
    }, []);

    const fetchDevices = async () => {
        const response = await axios.get('/api/devices'); // Ensure this matches your Laravel API endpoint
        setDevices(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (updateId) {
            // Update device
            await axios.put(`/api/devices/${updateId}`, { mac_address: macAddress });
            setUpdateId(null);
        } else {
            // Add new device
            await axios.post('/api/devices', { mac_address: macAddress });
        }
        setMacAddress('');
        fetchDevices();
    };

    const handleEdit = (device) => {
        setMacAddress(device.mac_address);
        setUpdateId(device.id);
    };

    const handleDelete = async (id) => {
        await axios.delete(`/api/devices/${id}`);
        fetchDevices();
    };

    return (
        <div>
            <h2>Device Manager</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter MAC Address"
                    value={macAddress}
                    onChange={(e) => setMacAddress(e.target.value)}
                    required
                />
                <button type="submit">{updateId ? 'Update Device' : 'Add Device'}</button>
            </form>
            <ul>
                {devices.map(device => (
                    <li key={device.id}>
                        {device.mac_address}
                        <button onClick={() => handleEdit(device)}>Edit</button>
                        <button onClick={() => handleDelete(device.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeviceManager;
