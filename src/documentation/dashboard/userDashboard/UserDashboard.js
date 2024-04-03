import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../shared/header/Header';
import Footer from '../../shared/footer/Footer';
import { AuthContext } from '../../../context/Context';
import LogOut from '../../accounts/logout/LogOut';
import edit from "../../components/svg/edit.svg";
const UserDashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <Header />
            <div className='flex w-full  z-10 pt-16'>
                <div className='w-1/4 pl-2 bg-base-200 pt-0 fixed min-h-screen'>
                    <div className='w-full flex justify-end items-center'><Link><img src={edit} className='w-6 h-6  bg-gray-800' /></Link></div>
                    <div>
                        <img src={user?.photoURL} alt="profile" className='w-10 h-10 rounded-full' />
                    </div>
                    <div className='py-10 min-h-72'>
                        <p>Name:{user?.displayName}</p>
                        <p>Email:{user?.email}</p>
                        <p>Contact</p>
                        <p>Facebook</p>
                        <p>Github</p>
                    </div>
                    <div className='my-4 w-full pr-5'><span><LogOut /></span></div>
                </div>
                <div className='w-3/4 px-2 h-96'></div>
            </div>
            <Footer />
        </>
    );
};

export default UserDashboard;