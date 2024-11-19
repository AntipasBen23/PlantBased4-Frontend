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
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <motion.div
            className="secondSection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Carousel */}
            <motion.div
                className="carouselContainer"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <div
                    className="imageSlider"
                    style={{ transform: `translateX(-${currentImage * 100}%)` }}
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
                <h2 className="parr">Why Plantbased Nutrition Heals Your Body?</h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    If you're tired of chronic diseases holding you back?
                    <br /><br />
                    Science proves that plant-based nutrition can be your cure!
                    <br /> 🌱 <br />
                    Chronic diseases don't stand a chance when you fuel your body with the right nutrients!
                    <br /><br />
                    💪🏽 Backed by science, a plant-based diet can help reverse heart disease, diabetes, high blood pressure, and more.
                    <br /><br />
                    Ditch processed foods and embrace nature’s pharmacy!
                    <br /><br />
                    🌿 Your health transformation starts now—because real healing begins with real food! 🍎🥦
                    <br /><br />
                    Want to Start a healthier, disease-free life?
                    <br /><br />
                    Click the link below to start a healing program.
                </motion.p>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                >
                    <Link to="/healing-programs">
                        <button className="S2Btn">Purchase Now</button>
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
