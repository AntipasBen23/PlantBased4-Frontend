import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Section2() {
  const images = [
    '/Images3/Plantfruit1.png',
    '/Images3/Plantfruit2.png',
    '/Images3/Plantfruit3.png',
    '/Images3/Plantfruit4.png',
    '/Images3/Plantfruit5.png',
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className='w-full h-auto min-h-screen flex bg-gray-100 overflow-hidden p-4  md:p-6 lg:p-10'>
      <div className='w-full md:w-auto flex flex-col lg:flex-row h-full'>
        <div className='carousel-container flex-1 h-full md:h-auto overflow-hidden order-2 mt-6 lg:mt-0'>
          <div
            className='imageSlider h-[400px]'
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className='flex-shrink-0 flex-grow-0 basis-full h-full object-contain'
              />
            ))}
          </div>
        </div>

        <div className='w-full lg:w-1/2 order-1 px-4 md:px-8'>
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#7C997A] font-[Georgia, Merriweather]">
          Why Plantbased Nutrition Heals Your Body?
        </h2>



  <p className='text-black mt-4 font-bold font-[Georgia, Merriweather]'>
    If you're tired of chronic diseases holding you back? Science proves
    that plant-based nutrition can be your cure!
  </p>
  <p className='mt-2.5 font-bold font-[Georgia, Merriweather]'>
    🌱 Chronic diseases don't stand a chance when you fuel your body
    with the right nutrients!
  </p>
  <p className='mt-2.5 font-bold font-[Georgia, Merriweather]'>
    💪🏽 Backed by science, a plant-based diet can help reverse heart
    disease, diabetes, high blood pressure, and more. Ditch processed
    foods and embrace nature’s pharmacy!
  </p>

  <p className='mt-2.5 font-bold font-[Georgia, Merriweather]'>
    🌿 Your health transformation starts now—because real healing begins
    with real food! 🍎🥦
  </p>

  <p className='mt-2.5 font-bold font-[Georgia, Merriweather]'>
    🌱 Packed with essential nutrients, plant-based foods can *reduce
    inflammation, Cancers, Sicklecell, lower blood pressure, manage
    diabetes*, and more. Reclaim your health naturally—it's time to let
    food be your medicine! 🍏🥑
  </p>
  <p className='mt-2.5 font-bold font-[Georgia, Merriweather]'>
    Want to start a healthier, disease-free life? Click the link below
    to start a healing program.
  </p>
  <div className='w-full flex justify-center lg:justify-start mt-5 md:mt-10'>
    <Link to='/healing-programs' className='w-full lg:w-auto'>
      <button className='S2Btn bg-[#7C997A] py-3 px-6 w-full'>
        Purchase Now
      </button>
    </Link>
  </div>
</div>

      </div>
    </div>
  )
}
