import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'; 
import { motion } from 'framer-motion';

const ClientForm = () => {
    const navigate = useNavigate();
    const { programName } = useParams();

    const [formData, setFormData] = useState({
        name: '',
        location: '',
        email: '',
        whatsapp: '',
        age: '',
        maritalStatus: '',
        numChildren: '',
        height: '',
        weight: '',
        healthHistory: '',
        symptoms: '',
        prescriptionDrugs: '',
        healthGoal: '',
        intendedStartDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        if (formData.age < 1 || formData.age > 120) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Age',
                text: 'Please enter a valid age.',
                background: '#FF7F7F', 
                color: '#fff',
                confirmButtonColor: '#609a33',
            });
            setLoading(false)
            return;
        }

        if (!programName) {
            Swal.fire({
                icon: 'error',
                title: 'Missing Program',
                text: 'Program name is not defined.',
                background: '#FF7F7F', 
                color: '#fff',
                confirmButtonColor: '#609a33',
            });
            setLoading(false)
            return;
        }

        try {
            const apiUrl = import.meta.env.VITE_CLIENT_FORM_API_URL;
            await axios.post(apiUrl, formData);

            Swal.fire({
                icon: 'success',
                title: 'Form Submitted',
                text: 'Your form has been submitted successfully.',
                background: '#609a33', 
                color: '#fff',
                confirmButtonColor: '#609a33',
            });

            const safeProgramName = encodeURIComponent(programName.trim());
            navigate(`/package-selection/${safeProgramName}`);
        } catch (error) {
            console.error("Error submitting form:", error);
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: 'Error submitting form. Please try again.',
                background: '#FF7F7F', 
                color: '#fff',
                confirmButtonColor: '#609a33',
            });
        } finally {
            setLoading(false)
        }
    };

    return (
      <div className='w-full overflow-x-hiddenh-auto lg:min-h-screen bg-transparent lg:bg-white p-0 md:p-6 lg:p-10 flex justify-center '>
        <div className='w-[89%] h-full md:h-auto md:w-[95%] lg:w-2/3 xl:w-1/2 md:rounded-lg md:shadow-[0px_2px_10px_rgba(0,0,0,0.2),0px_-2px_10px_rgba(0,0,0,0.2)] md:border border-[#ededed] text-[#333] overflow-hidden  bg-cover bg-center bg-no-repeat bg-[url(./assets/Plantbased2Logo.jpg)]'>
          <div className='w-full h-full bg-[#f9f9f9] md:bg-opacity-60 py-8 mx-auto p-5 flex flex-col md:block'>
            <h1 className='text-center text-base font-bold md:text-2xl text-[#7C997A]'>
              Confidential Client Form
            </h1>
            <p className='mt-2 text-center text-base md:text-lg'>
              (We won't use your data for anything other than healing.)
            </p>
            <form onSubmit={handleSubmit} className='mt-4 md:mt-6'>
              <div className='flex flex-col md:flex-row md:items-center md:space-x-8'>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Enter your name'
                />
                <input
                  type='text'
                  name='location'
                  value={formData.location}
                  onChange={handleChange}
                  placeholder='Enter your location'
                />
              </div>
              <div className='flex flex-col md:flex-row md:items-center md:space-x-8'>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Enter your email'
                />
                <input
                  type='text'
                  name='whatsapp'
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder='Enter your WhatsApp number'
                />
              </div>
              <div className='flex flex-col md:flex-row md:items-center md:space-x-8'>
                <input
                  type='number'
                  name='age'
                  value={formData.age}
                  onChange={handleChange}
                  placeholder='Enter your age'
                />
                <input
                  type='text'
                  name='maritalStatus'
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  placeholder='Enter your marital status'
                />
              </div>
              <div className='flex flex-col md:flex-row md:items-center md:space-x-8'>
                <input
                  type='number'
                  name='numChildren'
                  value={formData.numChildren}
                  onChange={handleChange}
                  placeholder='Number of children'
                />
                <input
                  type='text'
                  name='height'
                  value={formData.height}
                  onChange={handleChange}
                  placeholder='Enter your height'
                />
              </div>
              <div className='flex flex-col md:flex-row md:items-center md:space-x-8'>
                <input
                  type='text'
                  name='weight'
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder='Enter your weight'
                />
                <textarea
                  name='healthHistory'
                  value={formData.healthHistory}
                  onChange={handleChange}
                  placeholder='Enter your health history'
                />
              </div>
              <div className='flex flex-col md:flex-row md:items-center md:space-x-8'>
                <textarea
                  name='symptoms'
                  value={formData.symptoms}
                  onChange={handleChange}
                  placeholder='Describe your symptoms'
                />
                <textarea
                  name='prescriptionDrugs'
                  value={formData.prescriptionDrugs}
                  onChange={handleChange}
                  placeholder='List any prescription drugs'
                />
              </div>

              <textarea
                name='healthGoal'
                value={formData.healthGoal}
                onChange={handleChange}
                placeholder='Describe your health goal'
              />
              <div>
                <label htmlFor='intendedStartDate block mb-2'>
                  Date of Diagnosis
                </label>
                <input
                  type='date'
                  id='intendedStartDate'
                  name='intendedStartDate'
                  value={formData.intendedStartDate}
                  onChange={handleChange}
                  placeholder='Intended start date'
                />
              </div>
              <div className='w-full flex justify-center mt-4'>
                <button
                  type='submit'
                  className={`w-full md:w-1/2 px-4 py-3 flex items-center justify-center ${
                    loading
                      ? 'cursor-not-allowed bg-gray-500'
                      : 'hover:bg-[#4a7e26] bg-[#609a33]'
                  } text-white font-bold py-2 px-4 rounded`}
                  disabled={loading}
                >
                  {loading ? (
                    <span className='loader'></span>
                  ) : (
                    <span>Submit</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
};

export default ClientForm;
