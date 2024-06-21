import React, { useRef, useState } from 'react';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import { sendEmail, resetForm } from '../../utils/form';
import { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await sendEmail(formRef);
      if (response.status === 200) {
        resetForm(event, setFormData);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <Toaster />
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>
          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="user_name"
            placeholderText="Your Name"
            ariaLabelName="Name"
            value={formData.user_name}
            onChange={handleChange}
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="user_email"
            placeholderText="Your email"
            ariaLabelName="Email"
            value={formData.user_email}
            onChange={handleChange}
          />
          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-amber-500 hover:bg-amber-600 focus:ring-1 focus:ring-amber-900 rounded-lg mt-6 duration-500">
            <Button
              title="Send Message"
              type="submit"
              aria-label="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
