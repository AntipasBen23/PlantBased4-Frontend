import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Section2() {
    const images = [
        '/Images3/Plantfruit1.png',
        '/Images3/Plantfruit2.png',
        '/Images3/Plantfruit3.png',
        '/Images3/Plantfruit4.png',
        '/Images3/Plantfruit5.png',
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length); // Show one image at a time
        }, 3000); // Adjust timing as needed
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <motion.div
            className="second-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Carousel */}
            <motion.div
                className="carousel-container"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <div
                    className="imageSlider"
                    style={{ '--translateX': `-${currentImage * 100}%` }}
                >
                    {images.map((image, index) => (
                        <motion.img
                            key={index}
                            src={image}
                            alt={`Slide ${index}`}
                            className="carouselImage"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        />
                    ))}
                </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
                className="contentss"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className="content-box">
                    <h2>PLANTBASED NUTRITION AS HEALING:</h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        Did you know that food is medicine?<br /><br />

                        🔬 <strong>The Evidence is Clear:</strong><br /><br />
                        Groundbreaking research shows that proper nutrition can:<br /><br />

                        ✅ Reverse chronic conditions like Obesity, Diabetes, Cancers, High blood pressure, and hypertension etc.<br /><br />

                        ✅ Boost immune function<br /><br />

                        🩺 Meet the Experts Using Nutrition to Heal:<br /><br />
                        <strong>- Dr. Michael Greger, MD</strong> – Author of <strong>How Not to Die,</strong> leveraging plant-based diets for chronic disease prevention.<br /><br />

                        <strong>- Dr. Mark Hyman, MD</strong> – Functional medicine pioneer, using food as medicine to fight aging and chronic illness.<br /><br />

                        <strong>🌱The right nutrition can heal your body, one meal at a time.</strong><br /><br />

                        💡 🌱 Choose A Healing Program &<br />
                        Follow us for:<br />
                        ✨ Expert insights<br />
                        ✨ Healing recipes<br />
                        ✨ Real success stories<br /><br />

                        💚 Your body is designed to thrive. Start your journey today—because healing begins on your plate.<br /><br />

                        Click the link below to start a healing program.<br /><br />
                    </motion.p>
               </div>
                <motion.div
                    className="S2BtnContainer"
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                >
                    <Link to="/healing-programs" style={{ textDecoration: "none" }}>
                        <button className="S2Btn">Purchase Now</button>
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
