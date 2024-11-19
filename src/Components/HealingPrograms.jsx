import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HealingPrograms() {
    const programs = [
        { name: 'Obesity', image: '/HealingProgramImages/HealingPic1.jpg' },
        { name: 'Weight Gain', image: '/HealingProgramImages/HealingPic2.jpg' },
        { name: 'Cancer', image: '/HealingProgramImages/HealingPic3.jpg' },
        { name: 'HIV/AIDS', image: '/HealingProgramImages/HealingPic4.jpg' },
        { name: 'Sickle Cell', image: '/HealingProgramImages/HealingPic5.jpg' },
        { name: 'High Blood Pressure', image: '/HealingProgramImages/HealingPic1.jpg' },
        { name: 'Kidney Disease', image: '/HealingProgramImages/HealingPic2.jpg' },
        { name: 'And Others', image: '/HealingProgramImages/HealingPic3.jpg' },
    ];

    return (
        <motion.div
            className="healing-progrs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1>Healing Programs Available</h1>
            <motion.div
                className="program-li"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                {programs.map((program) => (
                    <motion.div
                        className="colum"
                        key={program.name}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <Link
                            to={`/program-details/${program.name === 'HIV/AIDS' ? 'HIV-AIDS' : program.name.replace(/\s+/g, '-')}`}
                        >
                            <motion.img
                                src={program.image}
                                alt={program.name}
                                className="program-imag"
                                whileHover={{
                                    scale: 1.1,
                                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {program.name}
                            </motion.button>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
            <p className="instruction">Click on any of the Healing programs to proceed.</p>
        </motion.div>
    );
}
