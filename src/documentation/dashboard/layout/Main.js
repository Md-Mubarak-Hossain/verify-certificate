import React from 'react';
import Header from '../../shared/header/Header';
import Footer from '../../shared/footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
           <div className='pb-16'><Header/> </div>
           <Outlet/>
           <Footer/>
        </>
    );
};

export default Main;