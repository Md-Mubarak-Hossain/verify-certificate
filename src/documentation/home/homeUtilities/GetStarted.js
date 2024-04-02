import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
    return (
        <div className='w-full flex flex-row justify-center items-center py-5'>
            <Link to="/verify" className='btn mr-5' role='button'>Get Started</Link>
            <Link to="/">Download or copy link</Link>
        </div>
    );
};

export default GetStarted;