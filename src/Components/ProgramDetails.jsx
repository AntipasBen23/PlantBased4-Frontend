import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const healingProcedure = [
    "Consult with a healthcare provider.",
    "Follow dietary guidelines.",
    "Monitor progress regularly."
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
                    A systematic review published in <strong>Nutrients</strong> (2019) found that plant-based diets are associated
                    with lower body mass index (BMI) and reduced risk of obesity due to higher fiber intake and lower
                    caloric density (Tonstad et al., 2019).
                </p>
                <strong>References:</strong>
                <p>
                    Tonstad, S., et al. "The association between plant-based dietary patterns and body weight: A systematic review."
                    Nutrients, 11(9), 2083.
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
        ],
        research: `The American Institute for Cancer Research (AICR) highlights that plant-based diets rich in antioxidants, fiber, and phytochemicals help reduce the risk of cancer.`,
    },
    "Sickle-Cell": {
        reviews: [
            {
                name: "Sarah M.",
                image: "/ReviewImages/ReviewPic3.jpg",
                text: `I was diagnosed with rheumatoid arthritis five years ago, and the medications were taking a toll on my body. Switching to a plant-based diet changed my life.`,
                rating: 5,
            },
            {
                name: "Mark R.",
                image: "/ReviewImages/ReviewPic5.jpg",
                text: `As someone living with multiple sclerosis, I felt hopeless. A plant-based diet gave me clarity and reduced fatigue.`,
                rating: 5,
            },
            {
                name: "Emily T.",
                image: "/ReviewImages/ReviewPic2.jpg",
                text: `I have lupus and struggled with flare-ups for years. After attending a workshop on plant-based nutrition, I was inspired to make a change.`,
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
};

const ProgramDetails = () => {
    const { programName } = useParams();
    const navigate = useNavigate();

    const reviewsData = programData[programName]?.reviews || [];
    const researchData = programData[programName]?.research || "";

    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
        }, 9000);
        return () => clearInterval(interval);
    }, [reviewsData.length]);

    const handlePayNow = () => {
        navigate(`/client-form/${programName}`);
    };

    return (
        <div className="program-details">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {programName} Program Details
            </motion.h1>
            <div className="columns">
                <motion.div
                    className="reviews"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Reviews</h2>
                    {reviewsData.length > 0 && (
                        <motion.div
                            className="review"
                            key={currentReviewIndex}
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 50, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="review-text">{reviewsData[currentReviewIndex].text}</p>
                            <div className="review-details">
                                {reviewsData[currentReviewIndex].image && (
                                    <img
                                        src={reviewsData[currentReviewIndex].image}
                                        alt={reviewsData[currentReviewIndex].name}
                                        className="review-image"
                                    />
                                )}
                                <div>
                                    <p className="review-name">{reviewsData[currentReviewIndex].name}</p>
                                    <div className="rating">
                                        {"★".repeat(reviewsData[currentReviewIndex].rating)}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
                <motion.div
                    className="scientific-research"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Scientific Research</h2>
                    <div>{researchData}</div>
                </motion.div>
                <motion.div
                    className="healing-procedure"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Healing Procedure Guidelines</h2>
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
    );
};

export default ProgramDetails;
