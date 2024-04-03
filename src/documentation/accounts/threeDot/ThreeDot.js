import React, { useContext } from 'react';
import { AuthContext } from '../../../context/Context';
import LogOut from '../logout/LogOut';
import threeDot from "../../components/svg/threeDot.svg";
import { Link } from 'react-router-dom';
const ThreeDot = () => {
    const { user } = useContext(AuthContext);
    return (       
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="m-2"><img src={threeDot} alt="" className='w-5 h-4 right-0' /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    {user?.uid?<li className='px-1'><LogOut/></li>:
                    <>
                    <li className='flex fex-col justify-center items-center'><Link to="/login">Login</Link></li>
                    <li className='flex fex-col justify-center items-center'><Link to="/signup">SignUp</Link></li>
                    </>}
                </ul>
            </div>
    );
};

export default ThreeDot;