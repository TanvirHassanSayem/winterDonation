import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthContextProvider';
import ActiveLink from '../../Component/ActiveLink/ActiveLink';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langBtn, setLangBtn] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [imgDetails, setImgDetails] = useState(false);
  
  const { registerUser, user, logOut, loginUser, isLogged, setIsLogged } = useContext(AuthContext);
  
  const navItems = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Donation Campaigns",
      link: "/donation_campaigns"
    },
    {
      name: "How to Help",
      link: "/how_to_help"
    }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Snowflake animation
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // Create initial snowflakes
    const initialSnowflakes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 5 + 5}s`,
      animationDelay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.7 + 0.3,
      size: `${Math.random() * 8 + 5}px`,
    }));
    
    setSnowflakes(initialSnowflakes);
    
    // Refresh snowflakes periodically
    const interval = setInterval(() => {
      setSnowflakes(prev => {
        const newFlake = {
          id: Date.now(),
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 5 + 5}s`,
          animationDelay: '0s',
          opacity: Math.random() * 0.7 + 0.3,
          size: `${Math.random() * 8 + 5}px`,
        };
        
        // Remove one old flake when adding a new one to avoid too many elements
        if (prev.length > 30) {
          return [...prev.slice(1), newFlake];
        }
        return [...prev, newFlake];
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* Snowflake container */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-[9999]">
        {snowflakes.map(flake => (
          <div
            key={flake.id}
            className="absolute top-0 text-white animate-fall"
            style={{
              left: flake.left,
              animationDuration: flake.animationDuration,
              animationDelay: flake.animationDelay,
              opacity: flake.opacity,
              fontSize: flake.size,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <div className="navbar px-2 md:px-[5%] z-[999999] bg-gradient-to-b from-blue-900 to-blue-800 shadow-md border-b border-blue-300/30">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button onClick={toggleMobileMenu} className="btn btn-ghost btn-circle text-white hover:bg-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {mobileMenuOpen && (
              <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-blue-900 text-white rounded-box w-52 absolute left-0 border border-blue-400/30 backdrop-blur-sm">
                {navItems.map((e, index) => (
                  <li key={index} onClick={() => setMobileMenuOpen(false)}>
                    <ActiveLink to={e.link} className="hover:bg-blue-700">{e.name}</ActiveLink>
                  </li>
                ))}
                {user && (
                  <li onClick={() => setMobileMenuOpen(false)}>
                    <ActiveLink to="/dashboard" className="hover:bg-blue-700">Dashboard</ActiveLink>
                  </li>
                )}
              </ul>
            )}
          </div>
          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white rounded-full p-1">
            <img src="Donate1.jpg" alt="Logo" className="max-w-full max-h-full rounded-full" />
          </div>
          <div className="ml-2 text-xl font-bold text-white hidden sm:block">
            <span className="text-blue-200">Winter</span>
            <span>Donation</span>
          </div>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            {navItems.map((e, index) => (
              <li key={index}>
                <ActiveLink to={e.link} className="hover:bg-blue-700 mx-1 font-medium">{e.name}</ActiveLink>
              </li>
            ))}
            {user && (
              <li>
                <ActiveLink to="/dashboard" className="hover:bg-blue-700 mx-1 font-medium">Dashboard</ActiveLink>
              </li>
            )}
          </ul>
        </div>
        
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-2 border-blue-300">
                <div className="w-8 md:w-10 rounded-full">
                  <img src={user.photoURL} alt="User" />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-blue-900 text-white rounded-box w-52 z-50 border border-blue-400/30 backdrop-blur-sm">
                <li>
                  <a className="justify-between hover:bg-blue-700">
                    Profile
                    <span className="badge bg-blue-300 text-blue-900 border-none">New</span>
                  </a>
                </li>
                <li><a className="hover:bg-blue-700">Settings</a></li>
                <li><button onClick={logOut} className="hover:bg-blue-700">Logout</button></li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="bg-blue-100 text-center text-blue-900 font-semibold text-sm md:text-base px-4 md:px-8 py-1.5 md:py-2 rounded-3xl hover:bg-white transition-colors duration-300 shadow-md">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

// CSS Animation
const css = `
@keyframes fall {
  0% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(100vh);
  }
}

.animate-fall {
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
`;

// Add style tag for animations
const styleTag = document.createElement('style');
styleTag.type = 'text/css';
styleTag.appendChild(document.createTextNode(css));
document.head.appendChild(styleTag);

export default Header;