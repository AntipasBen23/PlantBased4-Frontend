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
      <section className='w-screen h-screen bg-green-200'>
        <div className='w-full bg-cover bg-no-repeat bg-center h-full  bg-[url(./assets/Plantbsd2bckggg.jpg)]'>
          <div className='w-full h-full bg-black flex items-center 2xl:justify-center  bg-opacity-50 p-4 md:p-8 lg:p-14'>
            <div className='flex flex-col lg:flex-row w-full lg:w-full 2xl:w-4/6 lg:justify-between lg:items-center lg:space-x-10'>
              <div className=''>
                <motion.div
                  className=''
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <div className='text-[#609a33] flex flex-col md:flex-row lg:flex-col md:space-x-4 lg:space-x-0'>
                    <div className='bg-white p-3 rounded-lg mb-5 shadow-md lg:max-w-[400px] w-full md:block'>
                      <h1 className='uppercase text-xl  md:text-2xl lg:text-4xl font-semibold tracking-normal'>
                        Heal all chronic diseases with nutrition
                      </h1>
                    </div>
                    <div className='bg-white p-3 rounded-lg mb-5 shadow-md lg:max-w-[400px] w-full md:block'>
                      <p className='text-[#609a33] text-base md:text-lg font-semibold'>
                        Here are some of the key plant-based nutritional
                        programs to consider for maintaining a healthy body.
                      </p>
                    </div>
                  </div>

                  {/* LIST CONTAINER */}
                  <motion.div
                    className='list-container bg-white p-5 rounded-lg shadow-md lg:max-w-[400px] w-full md:block'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    <ul className='list-none p-0 font-roboto flex flex-wrap text-[#609a33] text-base md:text-lg  font-semibold'>
                      <li className='basis-1/2 p-0.5'>Obesity</li>
                      <li className='basis-1/2 p-0.5'>Stroke</li>
                      <li className='basis-1/2 p-0.5'>Diabetes</li>
                      <li className='basis-1/2 p-0.5'>Cancer</li>
                      <li className='basis-1/2 p-0.5'>Arthritis</li>
                      <li className='basis-1/2 p-0.5'>Gut Issues</li>
                      <li className='basis-1/2 p-0.5'>High-blood Pressure</li>
                      <li className='basis-1/2 p-0.5'>Sickle-cell Anaemia</li>
                      <li className='basis-1/2 p-0.5'>Hiv/Aids</li>
                    </ul>
                    <button className=' mt-3 w-full'>
                      <Link
                        to='/enquiry-form'
                        className={`w-full px-3 md:px-12 py-3 block   border-none rounded cursor-pointer text-sm md:text-base font-medium transition ease-in-out duration-300  ${
                          isEnquiryLoading
                            ? 'loader bg-gray-500 text-white cursor-not-allowed'
                            : 'bg-[#ffa200] text-white hover:bg-[#e68a00]'
                        }`}
                        onClick={handleEnquiryClick}
                      >
                        {isEnquiryLoading ? (
                          <span className='loader'></span>
                        ) : (
                          'FREE BODY SCAN (WORTH ₦50,000)'
                        )}
                      </Link>
                    </button>
                  </motion.div>
                </motion.div>
              </div>

              {/* CTA SECTION */}
              <div className='cta-container w-full lg:w-1/2 flex flex-col items-center space-y-4 mt-5 lg:mt-0'>
                <div className='autoTypingText text-center'>
                  <TypingEffect
                    text={[
                      'Choose a Healing Program Now',
                      'Join the Revolution of Healing',
                      'Your Path to Wellness Starts Here!',
                    ]}
                    speed={100}
                    eraseSpeed={70}
                    typingDelay={500}
                    eraseDelay={2000}
                  />
                </div>

                {/* Static button */}
                <div className='flex justify-center'>
                  <motion.div
                    className={`py-2.5 md:py-4 px-12 static-button text-white bg-[url(./assets/buttonbk.png)] rounded-full transition-all duration-300 ease font-bold text-center w-full lg:w-auto ${
                      isProgramLoading
                        ? 'loader bg-gray-500 text-white cursor-not-allowed'
                        : 'bg-[#7fb401] text-white'
                    }`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    onClick={handleProgramClick}
                  >
                    <Link
                      to='/second-section'
                      style={{ textDecoration: 'none' }}
                    >
                      {isProgramLoading ? (
                        <span className='loader'></span>
                      ) : (
                        'CLICK HERE'
                      )}
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
