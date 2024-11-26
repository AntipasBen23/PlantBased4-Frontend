import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TypingEffect from 'react-typing-effect';

export default function HeroSection() {
    const [isEnquiryLoading, setIsEnquiryLoading] = useState(false);
    const [isProgramLoading, setIsProgramLoading] = useState(false);

    const handleEnquiryClick = () => {
        setIsEnquiryLoading(true);
        setTimeout(() => setIsEnquiryLoading(false), 1500);
    };

    const handleProgramClick = () => {
        setIsProgramLoading(true);
        setTimeout(() => setIsProgramLoading(false), 1500);
    };

    return (
        <section className="hero-section">
            <motion.div
                className="box-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="box">
                    <h1>
                        <span className="primaryText">HEAL ALL CHRONIC DISEASES</span><br />
                        <span className="highlightedText">WITH NUTRITION</span>
                    </h1>
                </div>
                <div className="box">
                    <p className="Paragrph">
                        Here are some of the key plant-based nutritional programs to consider for maintaining a healthy body.
                    </p>
                </div>

                {/* LIST CONTAINER */}
                <motion.div
                    className="list-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    
                        <div className="flex-container">
                            <div className="list-section">
                                <ul>
                                    <li>Obesity</li>
                                    <li>Diabetes</li>
                                    <li>High-blood Pressure</li>
                                    <li>Arthritis</li>
                                </ul>
                            </div>
                            <div className="list-section">
                                <ul>
                                    <li>Stroke</li>
                                    <li>Cancer</li>
                                    <li>Sickle-cell Anaemia</li>
                                    <li>Gut Issues</li>
                                </ul>
                            </div>
                        </div>
                        <div className="enquiry-button">
                            <Link to="/enquiry-form" className="Btnvk" onClick={handleEnquiryClick}>
                                {isEnquiryLoading ? <span className="loader"></span> : "FREE BODY SCAN (WORTH ₦50,000)"}
                            </Link>
                        </div>
                    
                </motion.div>
            </motion.div>

            {/* CTA SECTION */}
            <div className="cta-container">
                <div className="autoTypingText">
                    <TypingEffect
                        text={[
                            "Choose a Healing Program Now",
                            "Join the Revolution of Healing",
                            "Your Path to Wellness Starts Here!",
                        ]}
                        speed={100}
                        eraseSpeed={70}
                        typingDelay={500}
                        eraseDelay={2000}
                    />
                </div>

                {/* Static button */}
                <motion.div
                    className="static-button"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    onClick={handleProgramClick}
                >
                    <Link to="/second-section" style={{ textDecoration: 'none' }}>
                        {isProgramLoading ? <span className="loader"></span> : "CLICK HERE"}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
