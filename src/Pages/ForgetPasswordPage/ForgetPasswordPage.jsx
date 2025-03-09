import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const ForgetPasswordPage = ({ setTitle }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setTitle('Forgot Password');
    // Check if email was passed via state
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [setTitle, location.state]);

  const auth = getAuth(app);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email');
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsSuccess(true);
        setMessage('Password reset email sent. Please check your inbox.');
        setTimeout(() => {
          // Redirect to Gmail or email provider
          window.location.href = 'https://mail.google.com';
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        if (error.code === 'auth/user-not-found') {
          setMessage('No user found with this email address');
        } else {
          setMessage('Error sending password reset email. Please try again.');
        }
      });
  };

  return (
    <section className="w-full flex justify-center items-center px-4 md:px-0 mt-12">
      <div className="flex flex-col gap-5 max-w-md w-full">
        <div className="flex text-2xl font-semibold items-center">
          <h1 className="border-b-4 border-[#4406CB] py-2">Reset Password</h1>
        </div>
        
        {isSuccess ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            <p>{message}</p>
            <p className="mt-2">Redirecting to your email...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <p className="text-gray-600">Enter your email address and we'll send you a link to reset your password.</p>
            
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setMessage('');
              }}
              placeholder="Enter Your Email"
              className="p-2 rounded-lg text-black border"
            />
            
            {message && <p className="text-red-600">{message}</p>}
            
            <button className="btn btn-primary">Reset Password</button>
            
            <Link to="/login" className="text-blue-800 text-center">
              Back to Login
            </Link>
          </form>
        )}
      </div>
    </section>
  );
};

export default ForgetPasswordPage;