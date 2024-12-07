import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const packagesData = {
    Obesity: {
        basic: {
            title: "Basic Package",
            price: 5500000, 
            description: "Kickstart your weight loss journey with our Basic package, perfect for those who want to explore plant-based eating. This package includes:",
            imgSrc: "/PackageImages/Plantmea2.png",
            features: [
                "🍏 4-week meal plan: Carefully curated plant-based recipes to help you start your weight loss journey.",
                "🥑 Nutritional guidance: Expert advice on making healthier food choices.",
                "📅 Weekly check-ins: Keep you on track and motivated.",
                <strong>Consultation fee: ₦10,000</strong>
            ],
        },
        'Full Program Package': {
            title: "Full Program Package",
            price: 8500000,
            description: "Ready to fully commit to a plant-based lifestyle? The Full Program package is for you! It includes everything in the Basic package, plus:",
            imgSrc: "/PackageImages/Plantmea4.png",
            features: [
                "🍉 8-week meal plan: A more comprehensive meal plan for long-lasting results.",
                "🥗 Recipe e-book: A collection of 50 delectable plant-based recipes.",
                "🏋‍♂ Exercise guide: A personalized workout plan to accelerate your weight loss.",
                <strong>Consultation fee: ₦10,000</strong>
            ],
        },
        executive: {
            title: "Executive Package",
            price: 12000000,
            description: "For those looking for an elevated experience, our Executive package has you covered! This package includes:",
            imgSrc: "/PackageImages/Plantmea5.png",
            features: [
                "🍽 12-week meal plan: A prolonged program for a steady and sustainable weight loss.",
                "🧘‍♀ Stretch & Exercise Sessions: Enhance your well-being inside and out.",
                "🛒 Grocery shopping list: Simplify your meal prep with a curated shopping list.",
                "🌟 Exclusive Support Group: Connect with like-minded individuals on a similar journey.",
                <strong>Consultation fee: ₦10,000</strong>
            ],
        },
        "Exclusive Package": {
            title: "Exclusive Package",
            price: "45000000",
            description: "Take your weight loss journey to a whole new level with our Exclusive package. This all-inclusive package includes:",
            imgSrc: "/PackageImages/Plantmea6.png",
            features: [
                "🌱 Year-long access: A full year of personalized meal plans, support, and guidance.",
                "🍽 Monthly meal delivery: Healthy and delicious plant-based meals delivered to your doorstep (when you booked from our menu).",
                "🚴‍♀ Food Supplements: Will be delivered to you that covers 6 months.",
                "👩‍⚕ Access to a nutritionist: Get tailored advice from a professional for maximum results.",
                <strong>Consultation fee: ₦10,000</strong>
            ],
        },
        premium: {
            title: "Premium Package",
            price: 350000000,
            description: "For the ultimate wellness experience, our Premium package is designed for the discerning individual who wants the best. This exclusive package includes:",
            imgSrc: "/PackageImages/Plantmea7.png",
            features: [
                "🍎 Lifetime membership: Access to our program for life.",
                "🍽 Daily gourmet meal delivery: Enjoy a daily selection of gourmet plant-based dishes for 60 days only.",
                "🧖‍♀ Spa and wellness retreat: Relax and rejuvenate at a luxurious wellness retreat.",
                "👨‍⚕ Personalized health concierge: 24/7 access to a team of experts for your well-being.",
            ],
        },
    },
    "Weight-Gain": {
        basic: {
            title: "Basic Package",
            price: 50000000, 
            description: "Focus on Weight gain through natural, plant-based nutrition.",
            imgSrc: "/PackageImages/Plantmea2.png",
            features: [
                "4 Weeks of Nutrient-Dense Meals.",
                " Weekly Meal Plans Tailored to Your Body.",
                "Personalized Nutrition Guidance for Healthy Weight Gain",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Full: {
            title: "Full Package",
            price: 120000000,
            description: "Focus on Weight gain through natural, plant-based nutrition.",
            imgSrc: "/PackageImages/Plantmea5.png",
            features: [
                "12 Weeks of Complete Plant-Based Nutrition Transformation",
                "Weekly Meal Plans, One-on-One Coaching",
                "Customized Health & Healing Protocols",
                "Weekly Progress Check-ins to Track Your Growth",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Premium: {
            title: "Premium Package (with Cooking)",
            price: 600000000,
            description: "Focus on Weight gain through natural, plant-based nutrition.",
            imgSrc: "/PackageImages/Plantmea7.png",
            features: [
                "12 Weeks of Complete Healing & Cooking Guidance",
                "A Private Plant-Based Chef to Prepare All Your Meals",
                "Full Access to Personal Nutrition Coaching and Healing Guidance",
                "Daily Progress Tracking & 24/7 Support",
            ],
        },
    },
    Cancer: {
        basic: {
            title: "Basic Package ",
            price: 120000000, 
            description: "Heal Any Type of CANCER with Our Plant-Based Nutritional Healing Program!",
            imgSrc: "/PackageImages/Plantmea2.png",
            features: [
                "Kickstart your journey to wellness with personalized nutrition guidance.",
                "Access to essential resources and meal plans tailored to your needs.",
                "Dive into the fundamentals of plant-based healing to address root causes effectively.",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Full: {
            title: "Full Package",
            price: 1040000000,
            description: "Heal Any Type of CANCER with Our Plant-Based Nutritional Healing Program!",
            imgSrc: "/PackageImages/Plantmea4.png",
            features: [
                "Experience comprehensive support with one-on-one coaching sessions.",
                "Unlock the power of targeted nutritional strategies for cancer management.",
                "Gain exclusive access to advanced meal plans and recipe guides with Permanent Healing kit's for 180 days.",
                "Dive deeper into understanding the root causes of your condition for lasting results.",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Premium: {
            title: "Premium Package",
            price: 2800000000,
            description: "Heal Any Type of CANCER with Our Plant-Based Nutritional Healing Program!",
            imgSrc: "/PackageImages/Plantmea7.png",
            features: [
                "Experience comprehensive support with one-on-one coaching sessions.",
                "Unlock the power of targeted nutritional strategies for cancer management.",
                "Gain exclusive access to advanced meal plans and recipe guides with Permanent Healing kit's for 180 days.",
                "Dive deeper into understanding the root causes of your condition for lasting results.",
            ],
        },
    },
    "HIV-AIDS": {
        basic: {
            title: "Basic Package",
            price: 240000000, 
            description: "Our Basic Package : offers a comprehensive approach to managing HIV/AIDS through plant-based nutrition and lifestyle adjustments. With personalized guidance from our expert team, you'll receive:",
            imgSrc: "/PackageImages/Plantmea5.png",
            features: [
                "Customized meal plans tailored to your nutritional needs",
                "Access to exclusive online resources and support groups",
                "Regular check-ins with our certified health coaches",
                "Tips for stress management and improving overall well-being",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Full: {
            title: "Full Package",
            price: 1200000000,
            description: "Our Full Package provides everything in the Basic Package and more, ensuring you have all the tools and support necessary for success.",
            imgSrc: "/PackageImages/Plantmea6.png",
            features: [
                "One-on-one sessions with our experienced nutritionists and wellness experts",
                "Personalized fitness plans to enhance your physical health",
                "Access to advanced workshops and seminars on holistic healing modalities",
                "Ongoing support and guidance for long-term lifestyle changes",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Premium: {
            title: "Premium Package",
            price: 3280000000,
            description: "Experience the ultimate level of care and support with our Premium Package. Tailored for those committed to achieving optimal health and vitality, this package includes everything in the Full Package and more. With the Premium Package, you'll enjoy:",
            imgSrc: "/PackageImages/Plantmea7.png",
            features: [
                "VIP access to exclusive retreats and wellness events",
                "Advanced diagnostic testing for personalized health insights",
                "Concierge service for priority scheduling and support",
                "Dedicated health concierge for 24/7 assistance and guidance",
            ],
        },
    },
    "Sickle-Cell": {
        basic: {
            title: "Basic Package",
            price: 720000000, 
            description: "Start your journey to better health with our Basic Package, featuring:",
            imgSrc: "/PackageImages/Plantmea2.png",
            features: [
                "Nutritional Guidance: General meal plans designed for sickle cell support.",
                "Essential Testing: Basic tests to identify common nutritional needs.",
                "Consultations: Periodic consultations to ensure you’re on the right track.",
                "Educational Materials: Access to foundational resources to help you understand and manage your condition.",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Full: {
            title: "Full Package",
            price: 1680000000,
            description: "Comprehensive care for Sickle Cell patients.",
            imgSrc: "/PackageImages/Plantmea4.png",
            features: [
                "Personalized Nutrition Plans: Customized meal plans to address your specific health needs.",
                "Detailed Testing: Diagnostic tests to determine key nutritional needs.",
                "Consultations: Regular check-ins with our expert nutritionists to guide you on your journey.",
                "Exclusive Content: Access to educational resources and materials to support your health journey.",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Premium: {
            title: "Premium Package",
            price: 4800000000,
            description: "Experience the pinnacle of personalized care with our Premium Package. This all-inclusive offering provides:",
            imgSrc: "/PackageImages/Plantmea7.png",
            features: [
                "Tailored Nutrition Plans: Custom meal plans designed by top nutritionists specializing in sickle cell disease.",
                "Comprehensive Testing: Advanced diagnostic testing to identify specific nutritional deficiencies and health markers.",
                "One-on-One Consultations: Regular consultations with our team of experts to monitor progress and make adjustments.",
                "24/7 Support: Around-the-clock access to our health professionals for any questions or concerns.",
                "Exclusive Resources: Access to premium content, including webinars, workshops, and educational materials.",
            ],
        },
    },
    "High-Blood-Pressure": {
        basic: {
            title: "Basic Package",
            price: 80000000, 
            description: "Are you tired of high blood pressure controlling your life? Ready for a natural, sustainable solution? It's time to make a change and invest in your well-being!",
            imgSrc: "/PackageImages/Plantmea2.png",
            features: [
                "Specially crafted, wholesome meals",
                "Expert guidance and support",
                "Start your journey to a healthier you",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        full: {
            title: "Full Package",
            price: 250000000,
            description: "Enhanced support for high blood pressure.",
            imgSrc: "/PackageImages/Plantmea5.png",
            features: [
                "Comprehensive meal plan",
                "Exclusive recipes for your condition",
                "Personalized coaching for lasting results",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Premium: {
            title: "Premium Package",
            price: 850000000,
            description: "Enhanced support for high blood pressure.",
            imgSrc: "/PackageImages/Plantmea7.png",
            features: [
                "Luxurious gourmet experience",
                "Holistic health transformation",
                "Private chef at your service",
            ],
        },
    },
    "Kidney-Disease": {
        basic: {
            title: "Basic Package",
            price: 85000000, 
            description: "Introducing our revolutionary Kidney Disease Plant-Based Healing Meals Programs, designed to restore and rejuvenate your well-being.",
            imgSrc: "/PackageImages/Plantmea4.png",
            features: [
                "Expert-Crafted Meal Plans",
                "Nutrient-Packed, Delicious Meals",
                "Essential Wellness Support",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Full: {
            title: "Full Package",
            price: 385000000,
            description: "Introducing our revolutionary Kidney Disease Plant-Based Healing Meals Programs, designed to restore and rejuvenate your well-being.",
            imgSrc: "/PackageImages/Plantmea5.png",
            features: [
                "Comprehensive Healing Regimen",
                "Personalized Nutrition Guidance",
                "Ongoing Holistic Care",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Premium: {
            title: "Premium Package",
            price: 1350000000,
            description: "Introducing our revolutionary Kidney Disease Plant-Based Healing Meals Programs, designed to restore and rejuvenate your well-being.",
            imgSrc: "/PackageImages/Plantmea7.png",
            features: [
                "Elite Healing Experience",
                "Dedicated 1-on-1 Wellness Coach",
                "Exclusive Access to Advanced Therapies",
            ],
        },
    },
    "Stroke": {
        basic: {
            title: "Basic Package",
            price: 100000000, 
            description: "Comprehensive Healing Plan for Stroke Survivors",
            imgSrc: "/PackageImages/Plantmea4.png",
            features: [
                " - Scientifically-formulated nutrition plan to support brain and nerve regeneration",
                "- Effective therapy and rehabilitation support to regain motor skills and cognitive function.",
                "  - Personalized coaching and guidance for a healthier, stroke-free life.",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Full: {
            title: "Full Recovery Package – 180 Days",
            price: 300000000,
            description: "Accelerate Your Recovery with Intensive Support",
            imgSrc: "/PackageImages/Plantmea5.png",
            features: [
                "  - 3x longer therapy duration for faster recovery and long-term health benefits.",
                "  - Advanced stroke rehabilitation therapies (physical, speech, and cognitive).",
                "  - Targeted nutritional plan with premium ingredients to enhance brain health.",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Premium: {
            title: "Premium Healing Package – 180 Days",
            price: 1650000000,
            description: "All-Inclusive Comprehensive Care – Healing from the Inside Out",
            imgSrc: "/PackageImages/Plantmea7.png",
            features: [
                "  - All aspects of the Full Recovery Package PLUS personalized in-home cooking sessions",
                "- Travel to your location for personal consultations, ensuring you receive the care and attention you deserve.",
                "  - Advanced therapies focused on deep recovery for both physical and mental health.",
                " - Round-the-clock assistance from our team of doctors, therapists, and nutritionists."
            ],
        },
    },
    "Gut": {
        basic: {
            title: "Basic Package: Gut & Ulcer Relief – (60 Days)",
            price: 45000000, 
            description: `- What You Get:
                          - 60 days of a plant-based, gluten-free nutritional plan. 
                          - Daily recipes packed with raw, protein-rich, healing Nigerian ingredients.
                          - Customized guidance to soothe ulcers and promote optimal gut health.`,
            imgSrc: "/PackageImages/Plantmea4.png",
            features: [
                "- Relief from gut discomfort and heartburn. ",
                "- Improved digestion and nutrient absorption.",
                "- Enhanced energy and well-being. ",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Full: {
            title: "Full Healing Package – (180 Days)",
            price: 150000000,
            description: `- What You Get:
                          - 180 days of a comprehensive meal program tailored for gut health and ulcer recovery.  
                          - Exclusive access to a variety of wholesome Nigerian recipes.  
                          - Regular consultations with our health experts.  
                          - Continuous support to track progress and adjust plans.`,
            imgSrc: "/PackageImages/Plantmea5.png",
            features: [
                "- Long-term healing and prevention of recurrence.",
                "- Balanced weight management.",
                "- Improved immunity and overall vitality.",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Premium: {
            title: "Premium VIP Package",
            price: 1050000000,
            description: `- What You Get:  
                          - Everything in the Full Healing Package plus:  
                          - Personalized in-home cooking services. 
                          - Dedicated travel services to meet you anywhere.
                          - Hands-on nutritional coaching tailored to your schedule.`,
            imgSrc: "/PackageImages/Plantmea7.png",
            features: [
                "- Luxury and convenience with unmatched personalized care.",
                "- Tailored healing solutions in the comfort of your space.",
                "- A holistic transformation for mind and body.",
            ],
        },
    },
    "Athrithis": {
        basic: {
            title: "Basic Package (60 Days)",
            price: 150000000, 
            description: "Benefits:",
            imgSrc: "/PackageImages/Plantmea4.png",
            features: [
                "- Personalized 60-day arthritis-focused meal plan.",
                "- Wholesome, plant-based recipes rich in anti-inflammatory ingredients.",
                "- Weekly check-ins with a nutrition specialist.",
                "- Guidance on incorporating Nigerian plant-based superfoods for lasting relief.",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Full: {
            title: "Full Package (180 Days)",
            price: 450000000,
            description: "Benefits:",
            imgSrc: "/PackageImages/Plantmea5.png",
            features: [
                "- Comprehensive 6-month arthritis management program",
                "- In-depth nutritional assessments and personalized meal adjustments.",
                "- Access to gluten-free and plant-based recipes tailored for joint health. ",
                "- Weekly coaching calls for motivation and progress tracking.",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Premium: {
            title: "Premium Package (Personalized & On-the-Go)",
            price: 1050000000,
            description: "Benefits:",
            imgSrc: "/PackageImages/Plantmea7.png",
            features: [
                "- Exclusive 6-month program with hands-on support.  ",
                "- Private chef services for arthritis-friendly meals prepared in your home.",
                "- Wellness travel assistance for a rejuvenating, arthritis-friendly experience. ",
            ],
        },
    },
    "Diabetes": {
        basic: {
            title: "BASIC PACKAGE - 60 DAYS",
            price: 8000000, 
            description: "Benefits:",
            imgSrc: "/PackageImages/Plantmea4.png",
            features: [
                "- Customized meal plans tailored to support diabetes management.",
                " - Bi-weekly consultations to monitor progress.",
                "- Evidence-based guidance to stabilize blood sugar levels naturally.",
                "- Access to healing recipes featuring Nigerian plant-based superfoods. ",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Full: {
            title: "FULL PACKAGE - 180 DAYS",
            price: 400000000,
            description: "Benefits:",
            imgSrc: "/PackageImages/Plantmea5.png",
            features: [
                "- Everything in the Basic Package, PLUS:",
                "- Monthly deep-dive health assessments. ",
                "- Weekly virtual cooking sessions to master healing recipes.  ",
                "  - Exclusive plant-based ingredient packs delivered to your door. ",
                " - Complimentary access to a specialized fitness plan. ",
                <strong>Consultation fee: ₦50,000</strong>
            ],
        },
        Premium: {
            title: "PREMIUM PACKAGE - FULL IMMERSIVE CARE",
            price: 1550000000,
            description: "Benefits:",
            imgSrc: "/PackageImages/Plantmea7.png",
            features: [
                "- Everything in the Full Package, PLUS:  ",
                " - Personal chef services—we cook for you in the comfort of your home! ",
                " - Tailored wellness retreats to deepen your healing. ",
                " - Round-the-clock access to a dedicated team of experts. ",
            ],
        },
    },
};

const PackageSelection = () => {
    const { programName } = useParams();
    const selectedPackages = packagesData[programName] || {};

    const handleBuyNow = async (title, price) => {
        try {
            
            const { value: email } = await Swal.fire({
                title: 'Enter your email for payment',
                input: 'email',
                inputPlaceholder: 'Enter your email',
                confirmButtonText: 'Proceed',
                showCancelButton: true,
                background: '#f4f4f4',
                color: '#333',
                confirmButtonColor: '#609a33',
                cancelButtonColor: '#d33',
                inputValidator: (value) => {
                    if (!value) {
                        return 'Email is required to proceed with the payment.';
                    }
                },
                customClass: {
                    input: 'custom-swal-input',
                },
            });
            
            

            if (!email) {
                Swal.fire({
                    icon: 'error',
                    title: 'Email Required',
                    text: 'Email is required to proceed with the payment.',
                    background: '#FF7F7F',
                    color: '#fff',
                });
                return;
            }

            const amount = price;

            const apiUrl = import.meta.env.VITE_PAYSTACK_INITIALIZE_API_URL;
            const response = await axios.post(apiUrl, { email, amount });

            if (response.data.status) {
                Swal.fire({
                    icon: 'success',
                    title: 'Redirecting to Payment',
                    text: 'You will now be redirected to complete your payment.',
                    background: '#609a33',
                    color: '#fff',
                }).then(() => {
                    window.location.href = response.data.data.authorization_url;
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Payment Initialization Failed',
                    text: 'Failed to initialize payment. Please try again.',
                    background: '#FF7F7F',
                    color: '#fff',
                });
            }
        } catch (error) {
            console.error('Error initializing payment:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while processing your request. Please try again.',
                background: '#FF7F7F',
                color: '#fff',
            });
        }
    };

    return (
      <section
        id='packagesSection'
        className='w-full min-h-screen flex justify-center bg-[#f3f6ea]'
      >
        <div className='w-full lg:w-3/4 p-4 lg:p-8'>
          <h2 className='text-[#609a33] text-center text-2xl md:text-3xl lg:text-4xl'>
            {programName} Packages
          </h2>
          <div className='w-full mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
            {Object.entries(selectedPackages).map(
              ([key, { title, price, description, imgSrc, features }]) => (
                <div
                  key={key}
                  className='bg-[#cbe8e1] p-4 lg:p-6 rounded shadow-md md:hover:scale-105 transition-all duration-300 ease-linear'
                >
                  <div className='w-full flex justify-center'>
                    <img
                      src={imgSrc}
                      alt={title}
                      className='productImag w-[150px] h-[150px] rounded-full'
                    />
                  </div>
                  <h3 className='productName mt-4'>{title}</h3>
                  <p className='productDescription'>{description}</p>
                  <ul className='featureList'>
                    {features.map((feature, index) => (
                      <li key={index} className='featureItem'>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <span className='price'>
                    ₦
                    {(price / 100).toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                  <div className='w-full lg:flex justify-center mt-6'>
                    <button
                      className='ctaButton w-full'
                      onClick={() => handleBuyNow(title, price)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    )
};

export default PackageSelection;
