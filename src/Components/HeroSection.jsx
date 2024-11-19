import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
        <div className="wrapper">
            <section className="backgr">
                <motion.div
                    className="content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="box">
                        <h1>
                            <span className="primaryText">Heal all Chronic Diseases</span><br />
                            <span className="highlightedText">With Nutrition</span>
                        </h1>
                    </div>
                    <div className="box">
                        <p className="Paragrph">
                            Here are some of the key plant-based nutritional programs to consider for maintaining a healthy body.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="listContainer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="HeroList box">
                        <div className="flex-container">
                            <div className="list-section">
                                <ul>
                                    <li>Obesity</li>
                                    <li>Diabetes</li>
                                    <li>High-blood Pressure</li>
                                </ul>
                            </div>
                            <div className="list-section">
                                <ul>
                                    <li>Stroke</li>
                                    <li>Cancer</li>
                                    <li>Sickle-cell Anaemia</li>
                                </ul>
                            </div>
                        </div>
                        <div className="enquiry-button">
                            <Link to="/enquiry-form" className="Btnvk" onClick={handleEnquiryClick}>
                                {isEnquiryLoading ? <span className="loader"></span> : "MAKE AN ENQUIRY"}
                            </Link>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="HeroDown"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <h1 className="RightTxt">Click Below to choose a Healing Program Now!</h1><br />
                    <Link to="/second-section" style={{ textDecoration: 'none' }}>
                        <button className="btnRight" onClick={handleProgramClick}>
                            {isProgramLoading ? <span className="loader"></span> : "CLICK HERE"}
                        </button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
