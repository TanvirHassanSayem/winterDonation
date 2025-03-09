import { useState, createContext } from 'react'
import RouteHandle from './Config/RouteHandle';
import AuthContextProvider from './Provider/AuthContextProvider';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = "/"

function App() {
  return (
    <>
      <AuthContextProvider>
        <RouteHandle />
        <ToastContainer 
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          limit={1}
        />
      </AuthContextProvider>
    </>
  )
}

export default App