import React, { useState } from 'react';
import { contactFormSchema } from '../lib/formSchema'; // adjust path
import { z } from 'zod';
import ReCAPTCHA from 'react-google-recaptcha';



const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' }); // clear individual error
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = contactFormSchema.safeParse(formData);
    setLoading(true);
    setStatus('');

    if (!captchaToken) {
      setStatus('Please verify reCAPTCHA');
      setLoading(false);
      return;
    }
    if (!result.success) {
      const newErrors = {};
      result.error.errors.forEach(err => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    try {
      const res = await fetch('https://piyushhh786-web-server.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...formData, captcha: captchaToken} )
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong.');
    } finally {
        setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            placeholder="Your email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
          placeholder="Subject"
        />
        {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
        <textarea
          id="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
          placeholder="Your message"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>

      <ReCAPTCHA
        sitekey="6LeD5BUrAAAAANXINksKLyz7kAJ5AesmrH2mcGGz" // Replace with your site key
        onChange={(token) => setCaptchaToken(token)}
      />

      <button
        type="submit" disabled={loading}
        className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
      >
        {loading?'Sending':'Send Message'}
      </button>

      {status && <p className="text-green-500 mt-2">{status}</p>}
    </form>
  );
};

export default ContactForm;
