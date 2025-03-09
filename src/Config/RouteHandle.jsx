import React, { createContext, useContext } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Layout from '../Layout/Layout';
import axios from 'axios';
import LoginPage from '../Pages/LoginPage/LoginPage';
import HomePage from '../Pages/HomePage/HomePage';
import { AuthContext } from '../Provider/AuthContextProvider';
import PrivateRoute from './PrivateRoute';
import RestictedPublicRoute from './RestictedPublicRoute';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import DonationCampigns from '../Pages/DonationCampigns/DonationCampigns';
import DonationDetailsPage from '../Pages/DonationDetailsPage/DonationDetailsPage';
import HowToHelp from '../Pages/HowToHelp/HowToHelp';
import Dashboard from '../Pages/Dashboard/Dashboard';
import UpdateProfile from '../Pages/UpdateProfile/UpdateProfile';
import ForgetPasswordPage from '../Pages/ForgetPasswordPage/ForgetPasswordPage';

const RouteHandle = () => {
  const { registerUser, user, logOut, loginUser, isLogged, setIsLogged } = useContext(AuthContext);
  const setTitle = (title) => {
    document.title = `Winter Clothing Donation| ${title}`
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout setTitle={setTitle} />,
      children: [
        {
          path: "/",
          element: <HomePage setTitle={setTitle} />,
        },
        {
          path: "/donation_campaigns",
          element: <DonationCampigns setTitle={setTitle} />,
        },
        {
          path: "/donation_campaigns/:id",
          element: <PrivateRoute><DonationDetailsPage setTitle={setTitle} /></PrivateRoute>,
        },
        {
          path: "/dashboard",
          element: <PrivateRoute><Dashboard setTitle={setTitle} /></PrivateRoute>,
        },
        {
          path: "/updateprofile",
          element: <PrivateRoute><UpdateProfile setTitle={setTitle} /></PrivateRoute>,
        },
        {
          path: "/how_to_help",
          element: <><HowToHelp setTitle={setTitle} /></>,
        },
        {
          path: "/login",
          element: <RestictedPublicRoute><LoginPage setTitle={setTitle} /></RestictedPublicRoute>,
        },
        {
          path: "/forgot-password",
          element: <RestictedPublicRoute><ForgetPasswordPage setTitle={setTitle} /></RestictedPublicRoute>,
        }
      ]
    },
    {
      path: "/register",
      element: <RestictedPublicRoute><RegisterPage setTitle={setTitle} /></RestictedPublicRoute>,
    },
    {
      path: "*",
      element: <ErrorPage setTitle={setTitle} />,
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default RouteHandle;