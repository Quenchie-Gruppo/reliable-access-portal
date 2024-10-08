import React, { useState } from 'react';
import '../css/BandwidthCheck.css'; // Import CSS file

const BandwidthCheck = () => {
    const [status, setStatus] = useState('Press the button to check your bandwidth.');
    const [result, setResult] = useState('');

    const checkBandwidth = () => {
        setStatus('Checking your bandwidth...');
        setResult('');

        const startTime = Date.now();
        const image = new Image();
        const downloadSize = 5000000; // 5 MB

        image.onload = () => {
            const endTime = Date.now();
            const duration = (endTime - startTime) / 1000; // in seconds
            const speedMbps = (downloadSize / (duration * 1024 * 1024)).toFixed(2);

            setStatus('Bandwidth Check Complete!');
            setResult(`Your download speed is ${speedMbps} Mbps.`);
        };

        image.src = 'https://www.paessler.com/bandwidth_monitoring' + Math.random(); // Replace with an actual image URL
    };

    return (
        <div className="container">
            <h1>Bandwidth Check</h1>
            <p>{status}</p>
            <button onClick={checkBandwidth}>Check Bandwidth</button>
            <div className="result">{result}</div>
        </div>
    );
};

export default BandwidthCheck;
