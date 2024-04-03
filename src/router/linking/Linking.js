import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../../documentation/dashboard/layout/Main';
import Home from '../../documentation/home/Home';
import Error from '../error/Error';
import Verify from '../../documentation/private/verify/Verify';
import Verified from '../../documentation/private/verify/Verified';
import Login from '../../documentation/accounts/signin/Login';
import SignUp from '../../documentation/accounts/signup/SignUp';
import UserDashboard from '../../documentation/dashboard/userDashboard/UserDashboard';

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
                    element: <Verify />,

                },
                {
                    path: "/verified",
                    element: <Verified />,

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