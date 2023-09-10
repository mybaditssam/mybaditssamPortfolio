import React, { useState } from 'react';
import '../Assets/contact.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    description: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a backend API) if needed

    // Set the form as submitted
    setIsSubmitted(true);
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
              required
            />
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
              required
            />
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
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
  
      {/* Contact details */}
      <div className="contact-details">
        <p>Email: samix454@gmail.com</p>
        <p>Github: mybaditssam</p>
        <p>Twitter: mybaditssnotsam</p>
      </div>
    </div>
  );

}

export default ContactForm;
