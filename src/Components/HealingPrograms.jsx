import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HealingPrograms() {
    const programs = [
        { name: 'Obesity', image: '/HealingProgramImages/Healingprogram1.jpg' },
        { name: 'Weight Gain', image: '/HealingProgramImages/Healingprogram2.jpg' },
        { name: 'Cancer', image: '/HealingProgramImages/Healingprogram3.jpg' },
        { name: 'HIV/AIDS', image: '/HealingProgramImages/Healingprogram4.jpg' },
        { name: 'Sickle Cell', image: '/HealingProgramImages/Healingprogram5.jpg' },
        { name: 'High Blood Pressure', image: '/HealingProgramImages/Healingprogram6.jpg' },
        { name: 'Kidney Disease', image: '/HealingProgramImages/Healingprogram7.jpg' },
        { name: 'Stroke', image: '/HealingProgramImages/Healingprogram8.jpg' },
        { name: 'Gut', image: '/HealingProgramImages/Healingprogram9.jpg' },
        { name: 'Arthritis  ', image: '/HealingProgramImages/Healingprogram10.jpg' },
        { name: 'Diabetes', image: '/HealingProgramImages/Healingprogram2.jpg' },    
        { name: 'Lupus & Autoimmune disease', image: '/HealingProgramImages/Healingprogram3.jpg' },
    ];

    return (
      <motion.div
        className=' bg-white p-4 md:p-10 w-full min-h-screen text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className='text-center text-[#609a33] text-2xl lg:text-3xl font-bold'>
          Healing Programs Available
        </h1>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mt-6'
          initial='hidden'
          animate='visible'
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
              className='h-40 md:h-44 lg:h-52 bg-center bg-cover relative'
              style={{ backgroundImage: `url(${program.image})` }}
              key={program.name}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                to={`/program-details/${
                  program.name === 'HIV/AIDS'
                    ? 'HIV-AIDS'
                    : program.name.replace(/\s+/g, '-')
                }`}
              >
                <motion.button
                  className='bg-white -translate-x-1/2 bottom-4 hover:bg-[#4a7e26] hover:text-white transition-all duration-300 ease-in absolute w-max px-4 py-2 rounded text-[#609a33] font-semibold'
                >
                  {program.name}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <p className='instruction'>
          Click on any of the Healing programs to proceed.
        </p>
      </motion.div>
    )
}
