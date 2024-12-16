import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TypingEffect from "react-typing-effect";

export default function HealingPrograms() {
  const programs = [
    { name: "Obesity", image: "/HealingProgramImages/Healingprogram1.jpg" },
    { name: "Weight Gain", image: "/HealingProgramImages/Healingprogram2.jpg" },
    { name: "Cancer", image: "/HealingProgramImages/Healingprogram3.jpg" },
    { name: "HIV/AIDS", image: "/HealingProgramImages/Healingprogram4.jpg" },
    { name: "Sickle Cell", image: "/HealingProgramImages/Healingprogram5.jpg" },
    {
      name: "High Blood Pressure",
      image: "/HealingProgramImages/Healingprogram6.jpg",
    },
    {
      name: "Kidney Disease",
      image: "/HealingProgramImages/Healingprogram7.jpg",
    },
    { name: "Stroke", image: "/HealingProgramImages/Healingprogram8.jpg" },
    { name: "Gut", image: "/HealingProgramImages/Healingprogram9.jpg" },
    { name: "Arthritis", image: "/HealingProgramImages/Healingprogram10.jpg" },
    { name: "Diabetes", image: "/HealingProgramImages/Healingprogram2.jpg" },
    {
      name: "Lupus & Autoimmune disease",
      image: "/HealingProgramImages/Healingprogram3.jpg",
    },
  ];

  return (
    <motion.div
      className="bg-white p-4 md:p-10 w-full min-h-screen text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="autoTypingText text-center font-[Merriweather] text-[#7C997A] text-xl md:text-2xl font-extrabold uppercase">
        <TypingEffect
          text={["Healing Programs available", "Click on anyone to Proceed"]}
          speed={100}
          eraseSpeed={70}
          typingDelay={500}
          eraseDelay={2000}
        />
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mt-6"
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
            className="h-40 md:h-44 lg:h-52 bg-center bg-cover relative"
            style={{ backgroundImage: `url(${program.image})` }}
            key={program.name}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex flex-col items-center gap-2 absolute bottom-4 w-full">
              {/* Hand Animation */}
              <motion.div
                className="-translate-x-1/2 -ml-1"
                initial={{ opacity: 0 }}
                animate={{ y: [0, -10, 0] }}
                whileHover={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="50"
                  height="50"
                  fill="white"
                >
                  <g transform="translate(1 1)">
                    <g>
                      <path d="M448.159,262.68c-15.36-17.067-46.933-52.907-66.56-88.747c-1.707-1.707-24.747-39.253-50.347-67.413V84.333 C331.253,37.4,292.853-1,245.919-1h-85.333c-36.693,0-75.093,30.72-83.627,67.413c-1.707,9.387-5.12,17.067-8.533,20.48 c-8.533,10.24-18.773,34.133-18.773,65.707v136.533c0,23.893,18.773,42.667,42.667,42.667c9.387,0,18.773-3.413,25.6-8.533v8.533 c0,23.893,18.773,42.667,42.667,42.667c9.387,0,18.773-3.413,25.6-8.533c0,23.893,18.773,42.667,42.667,42.667 c9.387,0,18.773-3.413,25.6-8.533v68.267c0,23.893,18.773,42.667,42.667,42.667c23.893,0,42.667-18.773,43.52-42.667V274.627 c18.773,32.427,62.293,48.64,95.573,36.693c5.12-1.707,9.387-4.267,11.947-5.973c12.8-8.533,11.947-19.627,11.947-23.04 C460.959,277.187,460.106,276.333,448.159,262.68z M437.066,290.84c-3.413,1.707-5.973,3.413-8.533,4.267 c-22.187,7.68-58.88-2.56-75.093-30.72l-15.36-23.04c-0.338-0.676-0.779-1.247-1.291-1.729l-7.242-14.484 c-1.707-3.413-6.827-5.12-11.093-3.413c-3.413,1.707-5.12,6.827-3.413,11.093l7.68,15.36v220.16c0,14.507-11.093,25.6-25.6,25.6 c-14.507,0-25.6-11.093-25.6-25.6v-102.4V331.8V229.4c0-5.12-3.413-8.533-8.533-8.533s-8.533,3.413-8.533,8.533v102.4v34.133 c0,14.507-11.093,25.6-25.6,25.6c-14.507,0-25.6-11.093-25.6-25.6V331.8v-93.867c0-5.12-3.413-8.533-8.533-8.533 s-8.533,3.413-8.533,8.533V331.8c0,14.507-11.093,25.6-25.6,25.6c-14.507,0-25.6-11.093-25.6-25.6v-42.667V229.4 c0-5.12-3.413-8.533-8.533-8.533s-8.533,3.413-8.533,8.533v59.733c0,14.507-11.093,25.6-25.6,25.6s-25.6-11.093-25.6-25.6V152.6 c0-15.895,2.819-28.709,6.349-38.036c0.51-0.64,0.962-1.334,1.331-2.071C77.813,101.4,88.053,98.84,106.826,93.72l5.12-0.853 c4.267-1.707,7.68-6.827,5.973-11.093s-5.973-6.827-11.093-5.973l-4.267,0.853c-3.838,1.047-7.673,2.059-11.409,3.181 c0.982-3.118,1.93-6.46,2.876-10.007c5.973-29.013,37.547-53.76,66.56-53.76h85.333c37.547,0,68.267,30.72,68.267,68.267v7.726 c-1.67-1.209-3.366-2.363-5.12-3.459c-5.12-4.267-9.387-6.827-14.507-11.093c-3.413-3.413-8.533-2.56-11.947,0.853 s-2.56,8.533,0.853,11.947c5.12,5.12,10.24,8.533,15.36,11.947c5.493,3.924,10.986,7.856,16.479,12.443 c0.189,0.41,0.388,0.811,0.587,1.21c25.6,26.453,50.347,66.56,50.347,66.56c20.48,36.693,52.907,73.387,68.267,91.307 c2.56,3.413,5.973,7.68,7.68,9.387C442.186,285.72,441.333,288.28,437.066,290.84z" />
                    </g>
                  </g>
                </svg>
              </motion.div>
            <Link
              to={`/program-details/${
                program.name === "HIV/AIDS"
                  ? "HIV-AIDS"
                  : program.name.replace(/\s+/g, "-")
              }`}
            >
              <button className="bg-white hover:bg-[#7C997A] hover:text-white transition-all duration-300 ease-in w-max px-4 py-2 rounded text-[#7C997A] font-semibold shadow-lg animate-bounceGlow">
                {program.name}
              </button>
            </Link>
                  </div>
          </motion.div>
        ))}
      </motion.div>
      <p className="instruction">
        Click on any of the Healing programs to proceed.
      </p>
    </motion.div>
  );
}
