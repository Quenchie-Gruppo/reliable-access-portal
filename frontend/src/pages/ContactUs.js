import React from 'react';
import '../css/ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us">
            {/* Contact Header */}
            <header className="contact-header">
                <h1>Contact Us</h1>
                <p>Home / Contact</p>
            </header>

            {/* Contact Introduction */}
            <section className="contact-introduction">
                <h2>We'd Love to Hear from You</h2>
                <p>
                    Our team at ReliableAccess is here to assist you with any questions or inquiries you may have. 
                    Whether it's technical support or general inquiries, feel free to reach out.
                </p>
            </section>

            {/* Contact Form */}
            <section className="contact-form-section">
                <h2>Get in Touch</h2>
                <div className="contact-form-container card">
                    <form className="contact-form">
                        <input type="text" placeholder="First Name*" required />
                        <input type="text" placeholder="Last Name*" required />
                        <input type="email" placeholder="Email*" required />
                        <textarea placeholder="Your Message*" required></textarea>
                        <label className="privacy-agreement">
                            <input type="checkbox" required />
                            I agree to the collection and storage of my data. View our <a href="/privacy-policy">Privacy Policy</a>.
                        </label>
                        <button type="submit" className="cta-button">Send Message</button>
                    </form>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="contact-methods-section card">
                <h2>Other Ways to Reach Us</h2>
                <div className="contact-method">
                    <h3>Phone Support</h3>
                    <p>Questions about services or pricing? Call us:</p>
                    <p><strong>Nairobi:</strong> +254730911000</p>
                    <p><strong>Mombasa:</strong> +254707377000</p>
                </div>
                <div className="contact-method">
                    <h3>Live Chat</h3>
                    <p>Chat with our team during business hours:</p>
                    <p><strong>Monday - Friday:</strong> 8 AM - 5 PM</p>
                    <p><strong>Saturday:</strong> 9 AM - 1 PM</p>
                    <button className="chat-button">Start Chat</button>
                </div>
            </section>

            {/* About ReliableAccess */}
            <section className="about-company card">
                <h2>About ReliableAccess</h2>
                <p>
                    ReliableAccess is a leading provider of wireless and fiber internet in Kenya, offering private
                    networking solutions, web development, and more. Contact us today to learn how we can help your business thrive.
                </p>
            </section>
        </div>
    );
};

export default ContactUs;
