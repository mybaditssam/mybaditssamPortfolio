import React, { useState } from 'react';
import '../Assets/contact.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    description: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission
  const [errors, setErrors] = useState({}); // Track input field errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error message when the user starts typing in the field
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Check if required fields are empty
    if (formData.fullName.trim() === '') {
      newErrors.fullName = 'Full Name is required';
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    }
    if (formData.description.trim() === '') {
      newErrors.description = 'Description is required';
    }

    if (formData.email.trim() !== '' && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }


    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);
  };

  // Email validation function
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <div className="contact-container">
      <h2>Contact</h2>
      {isSubmitted ? (
        <div className="alert alert-success" role="alert">
          Your contact form has been submitted successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleChange} 
              required
            />
            {errors.fullName && <div className="error-message">{errors.fullName}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleChange} 
              required
              pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              onBlur={handleChange} 
              required
            ></textarea>
            {errors.description && <div className="error-message">{errors.description}</div>}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
