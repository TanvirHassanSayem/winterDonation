import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Newsletter subscription functionality
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  
  // Function to validate email format
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    
    // Check if email is empty
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    // Validate email format
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Clear any previous errors
    setError('');
    
    // Show success toast
    toast.success(`Successfully subscribed !`, {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    
    // Reset the form
    setEmail('');
  };
  
  return (
    <>
      <ToastContainer />
      <footer className="bg-gradient-to-b from-blue-800 to-blue-900 text-white">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and About */}
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full p-1 flex items-center justify-center">
                  <img src="Donate1.jpg" alt="Logo" className="max-w-full max-h-full rounded-full" />
                </div>
                <div className="ml-2 text-xl font-bold">
                  <span className="text-blue-200">Winter</span>
                  <span> Donation</span>
                </div>
              </div>
              <p className="text-blue-100 text-sm mt-2 mb-4">
                Making a difference in our community through the spirit of giving, especially during the winter months when help is needed most.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-4 text-blue-200 border-b border-blue-700 pb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-blue-100 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/donation_campaigns" className="text-blue-100 hover:text-white transition-colors">Donation Campaigns</Link></li>
                <li><Link to="/how_to_help" className="text-blue-100 hover:text-white transition-colors">How to Help</Link></li>
                <li><Link to="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/blog" className="text-blue-100 hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/privacy_policy" className="text-blue-100 hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-4 text-blue-200 border-b border-blue-700 pb-2">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-blue-100">Dhaka, Bangladesh</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@wintergiving.org" className="text-blue-100 hover:text-white transition-colors">tanvirsayem431@gmail.com</a>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+1234567890" className="text-blue-100 hover:text-white transition-colors">+8801943724499</a>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-blue-100">Monday - Friday: 9am - 5pm</span>
                </li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-4 text-blue-200 border-b border-blue-700 pb-2">Stay Connected</h3>
              <p className="text-blue-100 text-sm mb-4">
                Subscribe to our newsletter to receive updates on our campaigns and how you can help.
              </p>
              <form className="space-y-2" onSubmit={handleSubscribe}>
                <div>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address" 
                    className={`w-full p-2 rounded bg-blue-700 border ${error ? 'border-red-400' : 'border-blue-600'} text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400`}
                  />
                  {error && <p className="text-red-300 text-xs mt-1">{error}</p>}
                </div>
                <button 
                  type="submit" 
                  className="bg-blue-100 text-blue-900 font-medium px-4 py-2 rounded hover:bg-white transition-colors duration-300 w-full"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer - Copyright */}
        <div className="bg-blue-950 py-4">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300 text-sm text-center md:text-left">
              &copy; {currentYear} Winter Clothing Donation . All rights reserved.
            </p>
            <div className="mt-2 md:mt-0">
              <ul className="flex space-x-4 text-sm">
                <li><Link to="/terms" className="text-blue-300 hover:text-white transition-colors">Terms</Link></li>
                <li><Link to="/privacy" className="text-blue-300 hover:text-white transition-colors">Privacy</Link></li>
                <li><Link to="/cookies" className="text-blue-300 hover:text-white transition-colors">Cookies</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;