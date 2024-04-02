import React from 'react';
import Header from '../../shared/header/Header';
import Footer from '../../shared/footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
           <Header/> 
           <Outlet/>
           <Footer/>
        </>
    );
};

export default Main;