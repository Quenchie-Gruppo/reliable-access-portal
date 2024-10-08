import React from 'react';
import '../css/Services.css'; // Import the CSS file

const Services = () => {
    return (
        <div className="services-container">
            <h1 className="services-header">Our Services</h1>
            <div className="services-list">
                <div className="service-item">
                    <h2>Web Development</h2>
                    <p>We offer high-quality web development services.</p>
                </div>
                <div className="service-item">
                    <h2>SEO Optimization</h2>
                    <p>Optimize your website to rank higher in search engines.</p>
                </div>
                <div className="service-item">
                    <h2>Cloud Solutions</h2>
                    <p>Secure and scalable cloud services tailored to your needs.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
