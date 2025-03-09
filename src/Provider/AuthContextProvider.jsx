 
import React ,{ createContext ,  useState , useEffect  }from "react";
import { ToastContainer, toast } from 'react-toastify';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";
 
 

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const toastPush = (message)=>{
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
      if(loggedInUser){
        setIsLogged(true);
      }
      setLoading(false)
    });
    return () => {
      unSubscribe();
  
    };
  }, []);

  const authInfo = { registerUser, user, logOut, loginUser , isLogged, setIsLogged ,toastPush}  ;
  return (
    <AuthContext.Provider value={authInfo}>{!loading && children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;