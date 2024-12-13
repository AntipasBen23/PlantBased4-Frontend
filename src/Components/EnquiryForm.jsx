import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const EnquiryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        location: '',
        healthChallenge: '',
    });

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            const apiUrl = import.meta.env.VITE_ENQUIRY_FORM_API_URL;
            await axios.post(apiUrl, formData);
            Swal.fire({
                icon: 'success',
                title: 'Submitted!',
                text: 'Enquiry submitted successfully.',
                background: '#609a33', 
                color: '#fff', 
                confirmButtonColor: '#609a33', 
            });
        } catch (error) {
            console.error("Error submitting enquiry:", error);
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: 'Error submitting enquiry. Please try again.',
                background: '#FF7F7F', 
                color: '#fff', 
                confirmButtonColor: '#609a33', 
            });
        } finally {
            setLoading(false)
        }
    };

    return (
      <div className=' w-screen h-screen flex justify-center items-center bg-gray-100 overflow-hidden'>
        <div className='w-full h-full md:h-auto md:w-5/6 lg:w-2/3 xl:w-1/3 md:rounded-lg md:shadow-[0px_2px_10px_rgba(0,0,0,0.2),0px_-2px_10px_rgba(0,0,0,0.2)] md:border border-[#ededed] text-[#333] overflow-hidden  bg-cover bg-center bg-no-repeat bg-[url(./assets/Plantbased2Logo.jpg)]'>
          <div className='w-full h-full bg-[#f9f9f9] md:bg-opacity-60 py-8 mx-auto p-5 flex flex-col md:block'>
            <h1 className='mb-4 md:mb-6 text-[#7C997A] text-center text-xl md:text-2xl lg:text-4xl font-bold'>
              FREE-SCAN FORM
            </h1>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col md:flex-row md:items-center md:space-x-8'>
                <input
                  type='text'
                  name='name'
                  required
                  className='w-full p-3 border border-[#ccc] rounded-md mb-4 text-base'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Enter your name'
                />
                <input
                  type='email'
                  name='email'
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Enter your email'
                />
              </div>
              <div className='flex flex-col md:flex-row md:items-center md:space-x-8'>
                <input
                  type='text'
                  name='whatsapp'
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder='Enter your WhatsApp number'
                />
                <input
                  type='text'
                  name='location'
                  required
                  value={formData.location}
                  onChange={handleChange}
                  placeholder='Enter your location'
                />
              </div>
              <textarea
                name='healthChallenge'
                value={formData.healthChallenge}
                required
                onChange={handleChange}
                placeholder='Describe your health challenge'
              />
              <div className='w-full flex md:justify-center'>
                <button
                  type='submit'
                  className={`w-full md:w-1/2 px-4 py-3 flex items-center justify-center ${
                    loading
                      ? 'cursor-not-allowed bg-gray-500'
                      : 'hover:bg-[#4a7e26] bg-[#609a33]'
                  } text-white font-bold py-2 px-4 rounded`}
                  disabled={loading}
                >
                  {loading ? <span className='loader'></span> : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
};

export default EnquiryForm;
