import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const healingProcedure = [
  "Consult with a healthcare provider.",
  "Follow dietary guidelines.",
  "Monitor progress regularly.",
];

const programData = {
  Obesity: {
    reviews: [
      {
        name: "Sarah O.",
        image: "/ReviewImages/ReviewPic10.jpg",
        text: `At 300 pounds, I felt like I was trapped in my own body. I tried cutting calories and following
                       traditional diet plans, but nothing worked long-term. A friend introduced me to plant-based
                       eating, and I thought, ‘What do I have to lose?’ The results were remarkable.`,
        rating: 5,
      },
      {
        name: "David M.",
        image: "/ReviewImages/ReviewPic2.jpg",
        text: `I was skeptical at first when I heard people talking about the benefits of a plant-based diet 
                       for weight loss. But after struggling with obesity for over a decade, I was ready to try anything.`,
        rating: 4,
      },
    ],
    research: (
      <>
        <p>
          A systematic review published in <strong>Nutrients</strong> (2019)
          found that plant-based diets are associated with lower body mass index
          (BMI) and reduced risk of obesity due to higher fiber intake and lower
          caloric density (Tonstad et al., 2019).
        </p>
        <strong>References:</strong>
        <p>
          Tonstad, S., et al. "The association between plant-based dietary
          patterns and body weight: A systematic review." Nutrients, 11(9),
          2083.
        </p>
      </>
    ),
  },
  "Weight-Gain": {
    reviews: [
      {
        name: "Sarah, 28",
        image: "/ReviewImages/ReviewPic11.jpg",
        text: `I struggled with being underweight for years, and traditional diets weren't working for me. After switching to a plant-based diet, I noticed a significant change.`,
        rating: 5,
      },
      {
        name: "Michael, 35",
        image: "/ReviewImages/ReviewPic8.jpg",
        text: `As a long-time vegan, I was concerned about my weight, which had dipped too low. I consulted a Plantbased nutrition consultant who helped me create a meal program.`,
        rating: 5,
      },
      {
        name: "Emily, 22",
        image: "/ReviewImages/ReviewPic5.jpg",
        text: `I turned to plant-based nutrition to help me gain weight after losing appetite due to stress.`,
        rating: 5,
      },
    ],
    research: `A study published in the Journal of the International Society of Sports Nutrition found that plant-based proteins can effectively support muscle growth.`,
  },
  Cancer: {
    reviews: [
      {
        name: "Sarah, Breast Cancer Survivor",
        image: "/ReviewImages/ReviewPic6.jpg",
        text: `When I was diagnosed with breast cancer, I shifted to a predominantly plant-based diet filled with green leafy vegetables, legumes, and whole grains.`,
        rating: 5,
      },
      {
        name: "Daniel, Prostate Cancer Fighter",
        image: "/ReviewImages/ReviewPic9.jpg",
        text: `A year ago, I was diagnosed with early-stage prostate cancer. I researched everything I could do to support my body’s natural healing process.`,
        rating: 5,
      },
      {
        name: "Maria, Colon Cancer Survivor",
        image: "/ReviewImages/ReviewPic3.jpg",
        text: `After my colon cancer diagnosis, I realized that my diet needed a complete overhaul. I started incorporating more plant-based foods.`,
        rating: 5,
      },
      {
        name: "Chinenye, Abuja. Colon Breast Cancer Stage 2 Survivor",
        image: "/ReviewImages/ReviewPic3.jpg",
        text: ` I started the Plantbased meal cos I was diagnosed with stage two cancer of the breast but before I joined, I was doing a little bit of it thinking it was right but as soon as I came across this page on instagram, I called immediately and keyed in. I was given a diet plan totally different from what I was doing. I have done it now for one month and two weeks and the result is tremendous. I feel so much energy and am seeing a lot of changes in my body just like I was told. You are what you eat really and God gave us plant as food. Plantbased meal is a way of life and am enjoying it.`,
        rating: 5,
      },
    ],
    research: `The American Institute for Cancer Research (AICR) highlights that plant-based diets rich in antioxidants, fiber, and phytochemicals help reduce the risk of cancer.`,
  },
  "Sickle-Cell": {
    reviews: [
      {
        name: "Ifeoma, Lagos",
        image: "/ReviewImages/ReviewPic3.jpg",
        text: `Since i switched to a plant-based diet, my symptoms have been milder, and i'm feeling stronger. I've no more crises, i am finally free`,
        rating: 5,
      },
      {
        name: "Chinonso, Abuja",
        image: "/ReviewImages/ReviewPic5.jpg",
        text: `Living with sickle Cell was always a struggle, but since embracing plant-based nutrition, my energy levels have improved. I can do more without the drugs and now permanently healed`,
        rating: 5,
      },
      {
        name: "Tunde, Port Harcout.",
        image: "/ReviewImages/ReviewPic2.jpg",
        text: `My doctor was amazed by my improvement and complete change about my health. 
               I believe my switch to plant-based foods healed my body and replace my
               sickle-Cell to healthy cells, I feel more in control now.`,
        rating: 4,
      },
    ],
    research: `Oxidative stress is a major factor in sickle cell crises, and plant-based diets rich in antioxidants may help mitigate this. Foods like berries and herbs such as turmeric can reduce oxidative damage.`,
  },
  "HIV-AIDS": {
    reviews: [
      {
        name: "Aisha, 42",
        image: "/ReviewImages/ReviewPic11.jpg",
        text: `Switching to a plant-based diet transformed my health journey. My energy levels improved within weeks, and my CD4 count stabilized.`,
        rating: 5,
      },
      {
        name: "David, 35",
        image: "/ReviewImages/ReviewPic8.jpg",
        text: `I learned how plant-based nutrition benefits people with HIV. My digestion improved, and I felt less bloated. My doctor said my nutrient levels were excellent.`,
        rating: 5,
      },
      {
        name: "Ngozi, 29",
        image: "/ReviewImages/ReviewPic6.jpg",
        text: `A plant-based diet with high-protein plants like beans and lentils improved my strength and energy levels significantly.`,
        rating: 5,
      },
    ],
    research: `Plant-based diets are rich in essential nutrients like vitamins A, C, and E, which support immune health. These diets help reduce oxidative stress and inflammation, crucial for managing HIV.`,
  },
  "High-Blood-Pressure": {
    reviews: [
      {
        name: "Mrs. Ayo Olabode",
        image: "/ReviewImages/ReviewPic11.jpg",
        text: `After switching to a plant-based diet, my blood pressure stabilized. I lost weight, felt more energetic, and my doctor was surprised to see my readings in the normal range.`,
        rating: 5,
      },
      {
        name: "Adebanjo Femi",
        image: "/ReviewImages/ReviewPic9.jpg",
        text: `A plant-based diet helped me reduce salt intake and focus on natural spices. My blood pressure readings dropped significantly.`,
        rating: 5,
      },
    ],
    research: `Plant-based diets help normalize high blood pressure by providing potassium, magnesium, fiber, and antioxidants, which improve vascular health.`,
  },
  "Kidney-Disease": {
    reviews: [
      {
        name: "David M.",
        image: "/ReviewImages/ReviewPic7.jpg",
        text: `My creatinine levels started dropping after switching to a plant-based diet. My kidney function stabilized, and my doctors are surprised by my progress.`,
        rating: 5,
      },
      {
        name: "Sarah J.",
        image: "/ReviewImages/ReviewPic4.jpg",
        text: `I’ve had polycystic kidney disease for years. After switching to a plant-based diet, my lab results have improved significantly.`,
        rating: 5,
      },
    ],
    research: `Research shows plant-based diets can reduce proteinuria and slow the progression of kidney disease by lowering dietary acid loads and providing essential nutrients.`,
  },
  Stroke: {
    reviews: [
      {
        name: "David M.",
        image: "/ReviewImages/ReviewPic7.jpg",
        text: `My creatinine levels started dropping after switching to a plant-based diet. My kidney function stabilized, and my doctors are surprised by my progress.`,
        rating: 5,
      },
      {
        name: "Sarah J.",
        image: "/ReviewImages/ReviewPic4.jpg",
        text: `I’ve had polycystic kidney disease for years. After switching to a plant-based diet, my lab results have improved significantly.`,
        rating: 5,
      },
    ],
    research: `Healing Packages for Stroke Recovery: Restore Your Health Naturally!
                   Discover the power of science-backed healing with our tailored stroke recovery packages.
                   Each package is designed to promote long-term healing, support physical rehabilitation, and improve overall well-being. Choose the right plan for you and experience the difference!`,
  },
  Gut: {
    reviews: [
      {
        name: "Ada, Lagos",
        image: "/ReviewImages/ReviewPic11.jpg",
        text: "After trying this, I feel lighter and more energetic. My stomach issues are gone!",
        rating: 5,
      },
      {
        name: "Tolu, Abuja",
        image: "/ReviewImages/ReviewPic8.jpg",
        text: "Switching to plant-based nutrition has been life-changing. I didn’t know food could heal like this.",
        rating: 5,
      },
      {
        name: "Chinedu, Enugu",
        image: "/ReviewImages/ReviewPic5.jpg",
        text: "The recipes are so easy, and my gut feels amazing now. I’m finally sleeping better too!",
        rating: 5,
      },
    ],
    research: `Join Thousands in Nigeria Transforming Their Gut Health  
                   Using wholesome, plant-based foods, our program has helped people:  
                   - Reduce bloating and discomfort  
                   - Boost digestion and nutrient absorption  
                   - Regain energy and vitality naturally`,
  },
  Arthritis: {
    reviews: [
      {
        name: "Chinwe, Abuja",
        image: "/ReviewImages/ReviewPic10.jpg",
        text: "I was in constant pan untill i switched to a plant-based liefstyle. Now i feel like i'm living again",
        rating: 5,
      },
      {
        name: "Ade Lagos",
        image: "/ReviewImages/ReviewPic2.jpg",
        text: "Who knew Nigerian Plant-based foods like okra, ugu, and tigernut could heal? My joints feel stronger eveyday!",
        rating: 4,
      },
      {
        name: "Halima, Kano",
        image: "/ReviewImages/ReviewPic2.jpg",
        text: "I ditched processed foods and embraced nature's gift. Arthritis is no longer in charge of my life.",
        rating: 4,
      },
    ],
    research: (
      <>
        <div>
          <div>
            <strong>Why Choose a Plant-Based Diet for Arthritis?</strong>
          </div>
          <div>
            <h5>Anti-Inflamatory Properties</h5>
            <p>
              Research shows that plant-based diets are rich in antioxidants and
              phytochemicals found in fruits, vegetables, legumes, and nuts.
              These compounds help reduce inflammation, a key driver of
              arthritis symptoms.
            </p>
            <strong>
              Source:"The American Journal of Clinical Nutrition,"2017
            </strong>
          </div>
        </div>
      </>
    ),
  },
  Diabetes: {
    reviews: [
      {
        name: "Amaka O, Lagos",
        image: "/ReviewImages/ReviewPic10.jpg",
        text: "After embracing this plant-based nutrition plan, my blood sugar levels stabilized, and I feel healthier than ever. My doctor even reduced my medications!",
        rating: 5,
      },
      {
        name: "Ahmed K, Abuja",
        image: "/ReviewImages/ReviewPic2.jpg",
        text: "This isn’t just another fad. I followed the program, and in less than 6 months, my HbA1c levels dropped to normal. I never thought it was possible to feel this free!",
        rating: 4,
      },
    ],
    research: (
      <>
        <p>
          <strong>Diabetes Scientific evidence</strong>
          <br />
          <strong>Evidence-Backed Results:</strong> <br />
          A 2018 study published in Nutrients found that a whole-food,
          plant-based diet could lower HbA1c levels, a key indicator of
          long-term blood glucose control.
          <br />
          According to the American Diabetes Association, plant-based diets can
          improve insulin sensitivity and even prevent the onset of Type 2
          diabetes in at-risk individuals.
        </p>
      </>
    ),
  },
  "Lupus-&-Autoimmune-disease": {
    reviews: [
      {
        name: "Amina, Lagos",
        image: "/ReviewImages/ReviewPic10.jpg",
        text: `After years of battling Lupus with medications and feeling hopeless, I turned to plant-based nutrition.
                 Within weeks, I noticed a significant improvement in my energy, pain reduction, and overall health.
                 Today, I live a full, active life — all thanks to this life-changing diet!`,
        rating: 5,
      },
      {
        name: "Chuka, Abuja",
        image: "/ReviewImages/ReviewPic2.jpg",
        text: "I never thought I’d live without the constant flare-ups of Lupus. After committing to a plant-based lifestyle, I feel stronger and healthier than ever. This journey has given me a new lease on life!",
        rating: 4,
      },
    ],
    research: (
      <>
        <p>
          Scientific studies reveal that plant-based nutrition:
          <br />
          1. <strong>Reduces Inflammation</strong>: High-fiber, antioxidant-rich
          foods such as fruits, vegetables, nuts, and seeds reduce systemic
          inflammation, a key driver of lupus flares.
          <br />- <strong>Study Insight</strong>: Research shows that
          polyphenols in plants combat oxidative stress, a hallmark of lupus
          (source: Frontiers in Immunology, 2020).
          <br />
          <br />
          2. Strengthens the Immune System: A whole-food, plant-based diet
          balances immune responses, helping to reduce the body's attack on
          healthy tissues.
          <br />
          <strong>- Study Insight</strong>: Omega-3-rich foods like flaxseeds
          have shown immunomodulatory benefits in autoimmune diseases (Clinical
          Rheumatology, 2021).
        </p>
      </>
    ),
  },
};

const ProgramDetails = () => {
  const { programName } = useParams();
  const navigate = useNavigate();

  const reviewsData = programData[programName]?.reviews || [];
  const researchData = programData[programName]?.research || "";

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex(
        (prevIndex) => (prevIndex + 1) % reviewsData.length,
      );
    }, 9000);
    return () => clearInterval(interval);
  }, [reviewsData.length]);

  const handlePayNow = () => {
    navigate(`/client-form/${programName}`);
  };

  return (
    <div className="program-detail w-full h-auto lg:h-screen bg-transparent bg-[#e1e4da] p-0 md:p-8 lg:p-10 flex justify-center">
      <div className="w-full md:w-[90%] lg:w-5/6 xl:w-3/4 flex flex-col p-4 md:p-4 rounded">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 md:mb-6 text-center py-4 text-lg md:text-2xl lg:text-3xl font-extrabold text-[#7C997A] font-[Georgia, Merriweather]"
        >
          {programName} Program Details
        </motion.h1>
        <div className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              key={currentReviewIndex}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full bg-[#7C997A] px-6 pt-6 pb-8 md:p-8 md:px-8 md:pt-8 md:pb-10 h-auto flex justify-center items-center font-bold font-[Georgia, Merriweather]"
            >
              <div className="relative max-w-md bg-white shadow-[4px_4px_8px_rgba(0,0,0,0.3)] text-white p-4 rounded-lg">
                <div className="relative z-10">
                  {/* Main Content */}
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <div className="bg-[#D9EAD3] w-12 h-12 flex justify-center items-center rounded-full border border-[#7C997A] shrink-0">
                        <span className="text-[#7C997A] font-bold text-lg">
                          {reviewsData[currentReviewIndex].name[0]}
                        </span>
                      </div>
                      <h2 className="font-bold text-lg text-black">
                        {reviewsData[currentReviewIndex].name}
                      </h2>
                    </div>
                    <p className="text-black mt-2 leading-relaxed">
                      {reviewsData[currentReviewIndex].text}
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-6 left-0 w-0 h-0 border-t-[24px] border-t-transparent border-b-[24px] border-b-transparent border-l-[24px] border-l-white z-0"></div>
              </div>
            </motion.div>

            <motion.div
              className="flex-1  bg-white p-4 shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-lg md:text-2xl font-bold text-[#7C997A]">
                Scientific Research
              </h2>
              <div className="text-base mt-2">{researchData}</div>
            </motion.div>
          </div>

          <motion.div
            className="healing-procedure"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bold text-[#7C997A]">Healing Procedure Guidelines</h2>
            <ul>
              {healingProcedure.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="pay-now" onClick={handlePayNow}>
              Pay Now
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;
