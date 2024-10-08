import React from 'react';
import '../css/Footer.css'; // Import the CSS file for the footer
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-columns">
                    <div className="footer-contact">
                        <h2>Get in Touch</h2>
                        <p><FaMapMarkerAlt /> Malili & Nairobi, Nairobi - Mombasa Road, Kenya</p>
                        <p><FaPhoneAlt /> <a href="tel:+254712345689">+254 712 345 689</a></p>
                        <p><FaEnvelope /> <a href="mailto:info@reliableaccess.co.ke">info@reliableaccess.co.ke</a></p>
                    </div>

                    <div className="footer-links">
                        <h2>Our Services</h2>
                        <a href="/">Internet Solutions</a>
                        <a href="/">Domain Hosting</a>
                        <a href="/">Low-Cost Broadband</a>
                        <a href="/">PBX Systems</a>
                    </div>

                    <div className="footer-links">
                        <h2>Quick Links</h2>
                        <a href="/about-us">About Us</a>
                        <a href="/contact-us">Contact Us</a>
                        <a href="/team">Our Team</a>
                        <a href="/projects">Projects</a>
                    </div>
                </div>

                <div className="newsletter">
                    <h2>Subscribe to Our Newsletter</h2>
                    <p>Stay updated with the latest news and exclusive offers from ReliableAccess.</p>
                    <form className="form">
                        <input type="email" placeholder="Enter your email" required />
                        {/* Added margin for spacing between input and button */}
                        <button type="submit" className="btn">Subscribe</button>
                    </form>
                </div>

                <div className="footer-social">
                    <h3>Follow Us</h3>
                    {/* Ensure Font Awesome is included in your project */}
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} ReliableAccess. All rights reserved.</p>
                </div>

                {/* Footer Menu */}
                <div className="footer-menu">
                    <div className="f-menu">
                        <a href="/terms-of-use">Terms of Use</a>
                        <a href="/privacy-policy">Privacy Policy</a>
                        <a href="/cookies-policy">Cookies Policy</a>
                        <a href="/help">Help</a>
                        <a href="/faq">FAQs</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;