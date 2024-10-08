import React, { useEffect, useState } from 'react';
import '../css/Home.css';
import { FaUsers, FaClipboardCheck, FaHeadset, FaBolt, FaBox, FaLock, FaTv } from 'react-icons/fa'; // Importing icons from react-icons

const Home = () => {
    const features = {
        'Max Speed': {
            description: 'Enjoy blazing fast speeds that are excellent for streaming, gaming, and working from home.',
            icon: <FaBolt />,
        },
        'Flexible Packages': {
            description: 'Choose from packages that fit your unique needs and budget.',
            icon: <FaBox />,
        },
        'High Security & Privacy': {
            description: 'We prioritize your security and privacy with top-notch encryption and secure systems.',
            icon: <FaLock />,
        },
        'Seamless Streaming': {
            description: 'Binge your favorite shows, enjoy multi-player gaming, and share files effortlessly.',
            icon: <FaTv />,
        },
    };

    const [clientCount, setClientCount] = useState(0);
    const [projectCount, setProjectCount] = useState(0);
    const [supportHours, setSupportHours] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (clientCount < 100) setClientCount(clientCount + 1);
            if (projectCount < 50) setProjectCount(projectCount + 1);
            if (supportHours < 24) setSupportHours(supportHours + 1);
        }, 50); // Adjust time as needed

        return () => clearInterval(interval);
    }, [clientCount, projectCount, supportHours]);

    return (
        <div className="home-container">
            <div className="home-hero">
                <h1>Welcome to ReliableAccess</h1>
                <p>Your one-stop solution for innovative digital services</p>
            </div>

            <section className="features-section">
                <h2>Why Choose Us?</h2>
                <div className="features-grid">
                    {Object.keys(features).map((feature) => (
                        <div className="feature" key={feature}>
                            <div className="feature-icon">{features[feature].icon}</div>
                            <h3>{feature}</h3>
                            <p>{features[feature].description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="stats-section">
                <h2>Our Achievements</h2>
                <div className="stats">
                    <div className="stat">
                        <FaUsers className="stat-icon" />
                        <h3>{clientCount}+</h3>
                        <p>Clients Served</p>
                    </div>
                    <div className="stat">
                        <FaClipboardCheck className="stat-icon" />
                        <h3>{projectCount}+</h3>
                        <p>Projects Completed</p>
                    </div>
                    <div className="stat">
                        <FaHeadset className="stat-icon" />
                        <h3>{supportHours}/7</h3>
                        <p>Customer Support</p>
                    </div>
                </div>
            </section>

            <div className="contact">
                <p>Ready to take your business to the next level? <a className="cta-button" href="/contact-us">Contact Us</a></p>
            </div>
        </div>
    );
};

export default Home;
