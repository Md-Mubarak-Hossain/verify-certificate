import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../../documentation/dashboard/layout/Main';
import Home from '../../documentation/home/Home';
import Error from '../error/Error';
import Verify from '../../documentation/private/Verify';

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
                    element: <Verify/>

                },
            ]
        },
        {
            path: "/*",
            element: <Error/>
        }


    ])
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
};

export default Linking;