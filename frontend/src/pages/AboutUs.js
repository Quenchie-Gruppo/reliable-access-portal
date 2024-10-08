import React from 'react';
import '../css/AboutUs.css';
import Slider from 'react-slick'; // Importing the slider component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaUsers, FaClipboardCheck } from 'react-icons/fa';

const AboutUs = () => {
    const images = [
        '/images/hero.jpg',
        '/images/access.jpg',
        '/images/connectivity.jpg'
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="about-us">
            <header className="about-hero">
                <h1>About ReliableAccess</h1>
                <p>Kenya's Preferred Corporate Internet Service Provider</p>
            </header>

            <section className="image-slider">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="slider-item">
                            <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
                        </div>
                    ))}
                </Slider>
            </section>

            <section className="vision-mission">
                <div className="vision">
                    <h2>Our Vision</h2>
                    <p>To be Kenya's preferred corporate internet service provider, delivering fast, affordable, and reliable services.</p>
                </div>
                <div className="mission">
                    <h2>Our Mission</h2>
                    <p>We provide quality internet-managed solutions while consistently delivering efficient, affordable, and effective services for all our customers.</p>
                </div>
            </section>

            <section className="services">
                <h2>Our Key Features</h2>
                <div className="features-grid">
                    {['Max Speed', 'Flexible Packages', 'High Security & Privacy', 'Seamless Streaming'].map((feature, index) => (
                        <div className="feature" key={index}>
                            <h3>{feature}</h3>
                            <p>{getFeatureDescription(feature)}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="stats-section">
                <h2>Our Reach</h2>
                <div className="stats">
                    <div className="stat">
                        <FaUsers />
                        <h3>550+</h3>
                        <p>PBX Installations</p>
                    </div>
                    <div className="stat">
                        <FaClipboardCheck />
                        <h3>125k+</h3>
                        <p>Bandwidth Usage</p>
                    </div>
                </div>
                <div className="actions">
                    <a href="/bandwidth-check" className="cta-button">Check Your Bandwidth</a>
                    <a href="/speed-test" className="cta-button">Test Your Internet Speed</a>
                </div>
            </section>

            <section className="expertise">
                <h2>Our Expertise</h2>
                <p>At ReliableAccess, we pride ourselves on our extensive expertise in various fields, ensuring that we deliver top-notch services tailored to your needs.</p>
                <div className="expertise-grid">
                    {[
                        { title: 'Internet Solutions', percentage: '70%' },
                        { title: 'Domain Hosting', percentage: '89%' },
                        { title: 'Low-Cost Broadband', percentage: '90%' },
                        { title: 'PBX Systems', percentage: '60%' }
                    ].map((item, index) => (
                        <div className="expertise-item" key={index}>
                            <h3>{item.title}</h3>
                            <p>Expertise Level: <strong>{item.percentage}</strong></p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="team">
                <h2>Meet the Team</h2>
                <p>A dedicated team committed to your success.</p>
                <div className="team-grid">
                    {['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown'].map((member, index) => (
                        <div className="team-member" key={index}>
                            <h3>{member}</h3>
                            <p>Position</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="awards">
                <h2>Awards & Recognition</h2>
                <p>Proudly recognized as the Fastest Growing and Most Innovative ISP by the Computer Society of Kenya from 2007 to 2009.</p>
            </section>

            <section className="contact">
                <h2>Contact Us</h2>
                <p>Maksons Plaza, P.O BOX 14748-00800, Nairobi Kenya</p>
                <p>Email: 
                   <a href="mailto:info@reliableaccess.co.ke"> info@reliableaccess.co.ke</a> | 
                   Phone: 
                   <a href="tel:0730911000"> 0730911000</a></p>
            </section>
        </div>
    );
};

const getFeatureDescription = (feature) => {
    switch (feature) {
        case 'Max Speed':
            return 'Enjoy blazing fast speeds that are excellent for streaming, gaming, and working from home.';
        case 'Flexible Packages':
            return 'Choose from packages that fit your unique needs and budget.';
        case 'High Security & Privacy':
            return 'We prioritize your security and privacy with top-notch encryption and secure systems.';
        case 'Seamless Streaming':
            return 'Binge your favorite shows, enjoy multi-player gaming, and share files effortlessly.';
        default:
            return '';
    }
};

export default AboutUs;