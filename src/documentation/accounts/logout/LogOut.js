import React, { useContext } from 'react';
import { AuthContext } from '../../../context/Context';
import { Link } from 'react-router-dom';

const LogOut = () => {
    const{user,logOut}=useContext(AuthContext);
    const signOut=()=>{
        logOut()
        .then(()=>alert("log out"))
      }
    return (
        <>
          {user?.uid?<Link className='btn' onClick={()=>signOut()}>log Out</Link>:<span className='hidden'></span>}  
        </>
    );
};

export default LogOut;