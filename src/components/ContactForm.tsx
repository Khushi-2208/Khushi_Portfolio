"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  botcheck: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    botcheck: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Access key for Web3Forms.
  // In Next.js, public client side environment variables are prefixed with NEXT_PUBLIC_
  const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email address';
    }
    
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error on keystroke
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Prevent submissions if honeypot is filled
    if (formData.botcheck) {
      console.warn("Spam detected.");
      setStatus('success');
      setStatusMessage('Message sent successfully!');
      return;
    }

    if (!validateForm()) return;

    if (ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY") {
      setStatus('error');
      setStatusMessage('Please configure your Web3Forms Access Key as NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in a .env file to enable email delivery.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Khushi Kumari Portfolio'
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setStatusMessage('Your message has been sent. Thank you for reaching out!');
        setFormData({ name: '', email: '', subject: '', message: '', botcheck: '' });
      } else {
        setStatus('error');
        setStatusMessage(data.message || 'Something went wrong. Please try again later.');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className="w-full max-w-xl">
      <h3 className="font-serif text-3xl mb-6 text-brand-text font-normal tracking-wide">
        Get in Touch
      </h3>
      <p className="text-brand-muted font-sans text-sm mb-8 leading-relaxed">
        Have a project idea, feedback on Goonj, or want to collaborate? Write me a message, 
        and I'll get back to you directly.
      </p>

      {/* Access Key Warning Alert (Only visible if not configured) */}
      {ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY" && (
        <div className="mb-6 p-4 border border-amber-200 bg-amber-50/50 rounded-sm text-xs text-amber-800 font-sans leading-relaxed">
          <p className="font-semibold mb-1">💡 Web3Forms Key Setup Required:</p>
          <p>
            To activate this form: Go to <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="underline font-medium hover:text-brand-accent">web3forms.com</a>, enter your email to get a free key, and add it to your project as <code>NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY</code> in a <code>.env</code> file.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 font-sans">
        {/* Honeypot field (hidden from users, bot protection) */}
        <input
          type="text"
          name="botcheck"
          value={formData.botcheck}
          onChange={handleChange}
          className="hidden"
          autoComplete="off"
        />

        {/* Name Field */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="name" className="label-text">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`bg-transparent border-b py-2 focus:outline-none transition-colors duration-300 font-sans text-sm ${
              errors.name 
                ? 'border-red-400 focus:border-red-500 text-red-900' 
                : 'border-brand-border focus:border-brand-accent'
            }`}
          />
          {errors.name && (
            <span className="text-[11px] text-red-500 font-mono mt-1">{errors.name}</span>
          )}
        </div>

        {/* Email Field */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="label-text">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={`bg-transparent border-b py-2 focus:outline-none transition-colors duration-300 font-sans text-sm ${
              errors.email 
                ? 'border-red-400 focus:border-red-500 text-red-900' 
                : 'border-brand-border focus:border-brand-accent'
            }`}
          />
          {errors.email && (
            <span className="text-[11px] text-red-500 font-mono mt-1">{errors.email}</span>
          )}
        </div>

        {/* Subject Field */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="subject" className="label-text">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project proposal, collaboration, etc."
            className={`bg-transparent border-b py-2 focus:outline-none transition-colors duration-300 font-sans text-sm ${
              errors.subject 
                ? 'border-red-400 focus:border-red-500 text-red-900' 
                : 'border-brand-border focus:border-brand-accent'
            }`}
          />
          {errors.subject && (
            <span className="text-[11px] text-red-500 font-mono mt-1">{errors.subject}</span>
          )}
        </div>

        {/* Message Field */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="message" className="label-text">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className={`bg-transparent border-b py-2 resize-none focus:outline-none transition-colors duration-300 font-sans text-sm ${
              errors.message 
                ? 'border-red-400 focus:border-red-500 text-red-900' 
                : 'border-brand-border focus:border-brand-accent'
            }`}
          ></textarea>
          {errors.message && (
            <span className="text-[11px] text-red-500 font-mono mt-1">{errors.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="group relative flex items-center justify-center space-x-2 border border-brand-text px-6 py-3 text-xs uppercase tracking-widest font-mono text-brand-text bg-transparent hover:text-brand-bg transition-colors duration-500 overflow-hidden disabled:opacity-50"
        >
          <span className="absolute inset-0 w-0 bg-brand-text transition-all duration-300 ease-out group-hover:w-full -z-10 animate-fill-button"></span>
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="h-3.5 w-3.5" />
              <span>Send Message</span>
            </>
          )}
        </button>

        {/* Status Messaging */}
        {status === 'success' && (
          <div className="flex items-start space-x-2 p-4 bg-brand-accent-light border border-brand-accent/20 text-brand-accent-dark rounded-sm">
            <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <span className="text-sm font-sans leading-relaxed">{statusMessage}</span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-start space-x-2 p-4 bg-red-50 border border-red-200 text-red-800 rounded-sm">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <span className="text-sm font-sans leading-relaxed">{statusMessage}</span>
          </div>
        )}
      </form>
    </div>
  );
}
