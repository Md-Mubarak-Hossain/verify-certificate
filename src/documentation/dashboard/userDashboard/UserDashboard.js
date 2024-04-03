import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../shared/header/Header';
import Footer from '../../shared/footer/Footer';
import { AuthContext } from '../../../context/Context';
import LogOut from '../../accounts/logout/LogOut';

const UserDashboard = () => {
    const{user}=useContext(AuthContext);
    
    return (
        <>
        <Header/>
        <div className='flex w-full  z-10 pt-16'>
            <div className='w-1/4 px-2 bg-base-200 pt-4 min-h-96 fixed'>
                <div><Link>Edit</Link></div>
                <div>
                    <img src="" alt="profile" className='w-10 h-10 rounded-full' />
                </div>
                <p>Name:{user.displayName}</p>
                <p>Email:{user.email}</p>
                <p>Contact</p>
                <p>Facebook</p>
                <p>Github</p>
                <LogOut/>
            </div>
            <div className='w-3/4 px-2 h-96'></div>
        </div>
        <Footer/>
        </>
    );
};

export default UserDashboard;