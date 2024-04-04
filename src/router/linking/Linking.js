import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../../documentation/dashboard/layout/Main';
import Home from '../../documentation/home/Home';
import Error from '../error/Error';
import Verify from '../../documentation/private/verify/Verify';
import Login from '../../documentation/accounts/signin/Login';
import SignUp from '../../documentation/accounts/signup/SignUp';
import UserDashboard from '../../documentation/dashboard/userDashboard/UserDashboard';
import Protect from '../protect/Protect';
import GetStarted from '../../documentation/home/homeUtilities/GetStarted';
import Certificate from '../../documentation/private/certificate/Certificate';

const Linking = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,

            children: [
                {
                    path: "/",
                    element: <Home />


                },
                {
                    path: "/verify",
                    element: <Protect><Verify /></Protect>,

                },
                {
                    path: "/verify/:id",
                    element: <Protect><Verify /></Protect>,
                    loader:async({params})=>fetch(`https://verify-certificate-server-2024.vercel.app/certificate/${params.id}`)
                },
                {
                    path: "/certificate",
                    element: <Protect><Certificate /></Protect>,
                    

                },
                {
                    element:<Protect><GetStarted/></Protect>
                },

                // account
                {
                    path: "/login",
                    element: <Login />,

                },
                {
                    path: "/signup",
                    element: <SignUp />,

                },
            ]
        },
        // Dashboard
        {
            path: "/userDashboard",
            element: <UserDashboard />
        },

        {
            path: "/*",
            element: <Error />
        }


    ])
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
};

export default Linking;