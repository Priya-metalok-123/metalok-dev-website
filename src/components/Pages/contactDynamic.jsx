import React, { useState } from 'react';

const initialFormState = {
  name: '',
  email: '',
  number: '',
  message: '',
};

const ContactDynamic = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.';
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address.';
        isValid = false;
      }
    }

    if (!formData.number.trim()) {
      errors.number = 'Please enter your number.';
      isValid = false;
    } else {
      const numberRegex = /^[0-9]+$/;
      if (!numberRegex.test(formData.number)) {
        errors.number = 'Please enter a valid number.';
        isValid = false;
      }
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform your form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {formErrors.name && <span className="error_nmae">{formErrors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <span className="error_nmae">{formErrors.email}</span>}
        </div>
        <div>
          <label>Number:</label>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
          />
          {formErrors.number && <span className="error_nmae">{formErrors.number}</span>}
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactDynamic;
