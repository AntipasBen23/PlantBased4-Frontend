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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

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
        }
    };

    return (
        <div className="enquiry-form-container">
            <h1>Scan Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                />
                <input
                    type="text"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="Enter your WhatsApp number"
                />
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter your location"
                />
                <textarea
                    name="healthChallenge"
                    value={formData.healthChallenge}
                    onChange={handleChange}
                    placeholder="Describe your health challenge"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EnquiryForm;
