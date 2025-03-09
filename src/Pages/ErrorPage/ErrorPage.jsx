import React from 'react';
import { useEffect } from 'react';

const ErrorPage = ({setTitle}) => {
  useEffect(() => {
    setTitle("Error")
  }, []);
    return (
        <>
  <div className="flex items-center justify-center h-screen bg-white py-48">
  <div className="flex flex-col">
   <div className="flex flex-col items-center">
      {/* <div className="text-indigo-500 font-bold text-7xl">404</div> */}
      <img className='w-56' src="/assets/img/error.gif" alt="" />
      <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl">
        This page does not exist
      </div>
      <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
        The page you are looking for could not be found.
      </div>
    </div>
   
  </div>
</div>

 
        </>
    );
}

export default ErrorPage;
