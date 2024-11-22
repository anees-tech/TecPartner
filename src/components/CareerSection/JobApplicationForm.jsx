import React, { useState } from 'react';
import Navbar from '../Navbar';
import HeaderForPages from '../HeaderForPages';
import RenderBar from '../RenderBar';
import Footer from '../Footer';

const JobApplicationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        coverLaters: '',
        resume: null,
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        coverLaters: '',
        resume: '',
    });

    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files[0],
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        let formIsValid = true;

        if (!formData.name) {
            newErrors.name = 'Name is required';
            formIsValid = false;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            formIsValid = false;
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number (10 digits)';
            formIsValid = false;
        }

        if (!formData.resume) {
            newErrors.resume = 'Resume is required';
            formIsValid = false;
        }

        setErrors(newErrors);
        return formIsValid;
    };

    const handleSubmit = (e) => {

        //
        //
        //
        //
        // Yaha To Kuch Apna Data Email karny kaa Logic Laga Liiii
        //
        //
        //
        //
        e.preventDefault();

        if (validateForm()) {
            setSubmissionStatus('Form submitted successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                coverLaters: '',
                resume: null,
            });
        } else {
            setSubmissionStatus('Please fill the form correctly.');
        }
    };

    return (
        <>
            <Navbar />
            <HeaderForPages heading={"Job Application Section"} />
            <div className="job-application-form max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-8 mt-12">
                <h2 className="text-center text-4xl font-semibold text-[#15307c] mb-6">Job Application Form</h2>

                {submissionStatus && <p className="text-center text-lg text-green-600 mb-4">{submissionStatus}</p>}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="form-group">
                        <label htmlFor="name" className="block text-lg font-medium text-[#15307c] mb-2">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="input-field w-full p-4 bg-gray-100 text-[#15307c] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15307c] transition duration-200"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="email" className="block text-lg font-medium text-[#15307c] mb-2">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input-field w-full p-4 bg-gray-100 text-[#15307c] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15307c] transition duration-200"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                        <label htmlFor="phone" className="block text-lg font-medium text-[#15307c] mb-2">Phone Number</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="input-field w-full p-4 bg-gray-100 text-[#15307c] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15307c] transition duration-200"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
                    </div>

                    {/* Cover Letter */}
                    <div className="form-group">
                        <label htmlFor="coverLaters" className="block text-lg font-medium text-[#15307c] mb-2">Cover Letter (optional)</label>
                        <textarea
                            id="coverLaters"
                            name="coverLaters"
                            value={formData.coverLaters}
                            onChange={handleChange}
                            className="input-field w-full p-4 bg-gray-100 text-[#15307c] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15307c] transition duration-200"
                        />
                        {errors.coverLaters && <p className="text-red-500 text-sm mt-2">{errors.coverLaters}</p>}
                    </div>
                    {/* Resume Upload */}
                    <div className="form-group">
                        <label htmlFor="resume" className="block text-lg font-medium text-[#15307c] mb-2">Upload Resume</label>
                        <input
                            type="file"
                            id="resume"
                            name="resume"
                            onChange={handleFileChange}
                            className="input-file w-full p-4 bg-gray-100 text-[#15307c] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15307c] transition duration-200"
                        />
                        {errors.resume && <p className="text-red-500 text-sm mt-2">{errors.resume}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="form-group">
                        <button type="submit" className="submit-btn w-full p-4 bg-[#15307c] text-white font-semibold rounded-lg hover:bg-[#1c439f] transition duration-300">
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>


            <RenderBar />
            <Footer />
        </>
    );
};

export default JobApplicationForm;
