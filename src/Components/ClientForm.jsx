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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.age < 1 || formData.age > 120) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Age',
                text: 'Please enter a valid age.',
                background: '#FF7F7F', 
                color: '#fff',
                confirmButtonColor: '#609a33',
            });
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
        }
    };

    return (
        <motion.div
            className="client-form"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1>Confidential Client Form</h1>
            <p>(We won't use your data for anything other than healing.)</p>
            <form onSubmit={handleSubmit}>
                {[
                    { name: 'name', type: 'text', placeholder: 'Enter your name' },
                    { name: 'location', type: 'text', placeholder: 'Enter your location' },
                    { name: 'email', type: 'email', placeholder: 'Enter your email' },
                    { name: 'whatsapp', type: 'text', placeholder: 'Enter your WhatsApp number' },
                    { name: 'age', type: 'number', placeholder: 'Enter your age' },
                    { name: 'maritalStatus', type: 'text', placeholder: 'Enter your marital status' },
                    { name: 'numChildren', type: 'number', placeholder: 'Number of children' },
                    { name: 'height', type: 'text', placeholder: 'Enter your height' },
                    { name: 'weight', type: 'text', placeholder: 'Enter your weight' },
                ].map((field, index) => (
                    <motion.input
                        key={index}
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                    />
                ))}
                {[
                    { name: 'healthHistory', placeholder: 'Enter your health history' },
                    { name: 'symptoms', placeholder: 'Describe your symptoms' },
                    { name: 'prescriptionDrugs', placeholder: 'List any prescription drugs' },
                    { name: 'healthGoal', placeholder: 'Describe your health goal' },
                ].map((field, index) => (
                    <motion.textarea
                        key={index}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                    />
                ))}
                <label htmlFor="intendedStartDate">Date of Diagnosis</label>
                <input
                    type="date"
                    id="intendedStartDate"
                    name="intendedStartDate"
                    value={formData.intendedStartDate}
                    onChange={handleChange}
                />
                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Submit
                </motion.button>
            </form>
        </motion.div>
    );
};

export default ClientForm;
