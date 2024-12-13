import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TypingEffect from "react-typing-effect";

export default function HeroSection() {
  const [isProgramLoading, setIsProgramLoading] = useState(false);

  const handleProgramClick = () => {
    setIsProgramLoading(true);
    setTimeout(() => setIsProgramLoading(false), 1500);
  };

  const [isEnquiryLoading, setEnquiryLoading] = React.useState(false);

  const handleEnquiryClick = (e) => {
    e.preventDefault(); 
    setEnquiryLoading(true);
    setTimeout(() => {
      
    setEnquiryLoading(false);
    window.location.href = '/enquiry-form'; 
  }, 2000); 
};


  return (
    <section className="w-full h-full min-h-screen">
      <div className="w-screen bg-cover bg-no-repeat bg-center bg-fixed h-full bg-[url(./assets/Plantbsd2bckggg.jpg)]">
        <div className="fixed top-0 left-0 z-0 w-full h-full min-h-screen bg-black bg-opacity-50" />
        <div className="w-full h-full min-h-screen flex flex-col lg:flex-row items-center lg:justify-between justify-center px-6 md:px-12 lg:px-20 py-10 max-w-[1440px] mx-auto relative z-10">
          {/* Left Section */}
          <div className="relative bg-green-900 bg-opacity-80 text-white rounded-lg p-6 lg:h-[90%] flex flex-col justify-center items-center text-center w-[300px] shrink-0">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url(./assets/LeftSectionImage.jpg)] bg-cover bg-center bg-no-repeat rounded-lg"></div>

            {/* Darker Top Overlay for H1 and Paragraph */}
            <div className="absolute top-0 left-0 w-full h-[25%] bg-[#7C997A]/10 rounded-t-lg"></div>

            {/* Lighter Middle Overlay for the List */}
            <div className="absolute top-[25%] left-0 w-full h-[50%] bg-[#7C997A]/40 [top:31%] [bottom:40%]"></div>

            {/* Darker Bottom Overlay for Button */}
            <div className="absolute bottom-0 left-0 w-full h-[25%] bg-[#7C997A]/10 rounded-b-lg"></div>

            <div className="relative z-10">
              <h1 className="font-times text-custom24 font-bold uppercase mb-4 md:text-2xl lg:text-3xl tracking-normal">
                Heal All Chronic Diseases With Nutrition
              </h1>
              <p className="font-arial text-[12px] md:text-[14px] font-bold tracking-wide mb-4">
                Our plant-based nutritional programs helps to significantly cure the following:
              </p>

              <ul className="list-none space-y-2 text-base font-semibold">
                <li>Obesity</li>
                <li>High-blood</li>
                <li>HIV/Aids</li>
                <li>Cancer</li>
                <li>Arthritis</li>
                <li>and lots more..</li>
              </ul>
              <button
                className="mt-6 bg-[#dbf9d8] hover:bg-[#c3e9c0] text-[#4b6649] font-arial text-[11px] md:text-[13px] font-bold px-4 py-2 rounded-full transition-all flex items-center justify-center space-x-3 mx-auto"
              >
              <Link
                to="/enquiry-form"
                className={`flex items-center justify-center space-x-3 w-full relative overflow-hidden ${
                isEnquiryLoading
                ? 'loader bg-gray-500 text-white cursor-not-allowed'
                : ''
                }`}
                onClick={handleEnquiryClick}
                >
                {isEnquiryLoading ? (
                <span className="loader"></span>
                ) : (
                <>
                  <span>ACCESS FREE BODY SCAN WORTH 50K</span>
                  <span
                    className="ml-2 bg-[#4b6649] text-white w-16 h-11 flex items-center justify-center rounded-full"
                  >
                    ➤
                  </span>
                </>
                )}
              </Link>
            </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-container w-full lg:w-1/2 flex flex-col items-center space-y-4 mt-5 lg:mt-0">
            <div className="autoTypingText text-center">
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

            {/* Static Button */}
            <div className="flex justify-center">
              <motion.div
                className={`py-2.5 md:py-4 px-12 static-button text-white bg-[url(./assets/buttonbk.png)] rounded-full transition-all duration-300 ease font-bold text-center w-full lg:w-auto ${
                  isProgramLoading
                    ? "loader bg-gray-500 text-white cursor-not-allowed"
                    : "bg-[#7C997A,] text-white"
                }`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={handleProgramClick}
              >
                <Link to="/second-section" style={{ textDecoration: "none" }}>
                  {isProgramLoading ? (
                    <span className="loader"></span>
                  ) : (
                    "CLICK HERE"
                  )}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
