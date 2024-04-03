import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Verified = () => {
    const certificateData=useLoaderData()
    console.log(certificateData);
    const verifyForm = [
        { id: 1, verified:"verified", placeholder: certificateData?.name, className: "input input-bordered p-4 my-2", register: "name" },
        { id: 2, verified:"verified", placeholder: certificateData?.roll, className: "input input-bordered p-4 my-2", register: "roll" },
        { id: 3, verified:"verified", placeholder: certificateData?.registration, className: "input input-bordered p-4 my-2", register: "registration" },
        { id: 4, verified:"verified", placeholder: certificateData?.journal, className: "input input-bordered p-4 my-2", register: "journal" },
        { id: 5, verified:"verified", placeholder: certificateData?.author, className: "input input-bordered p-4 my-2", register: "author" },
        { id: 6, verified:"verified", placeholder: certificateData?.session, className: "input input-bordered p-4 my-2", register: "session" },
        { id: 7, verified:"verified", placeholder: certificateData?.university, className: "input input-bordered p-4 my-2", register: "university" },
        { id: 8, verified:"verified", placeholder: certificateData?.country, className: "input input-bordered p-4 my-2", register: "country" },
        { id: 9, verified:"verified", placeholder: certificateData?.email, className: "input input-bordered p-4 my-2", register: "email" },
        { id: 10, verified:"verified", placeholder: certificateData?.contact, className: "input input-bordered p-4 my-2", register: "contact" },
    ]
    return (       
            <form
                className='w-9/10 mx-auto'>
                <h1 className='py-5'>Fill Up with post graduation information.</h1>
                <div className='w-full grid grid-cols-2 gap-1'>
                    {
                        verifyForm?.map(vf => <div key={vf.id} className='w-full'>
                            <p className={vf.className}>{vf.placeholder}<span className='text-green-600'>{vf.verified}</span></p>                            

                        </div>)
                    }
                </div>
                <button className='btn p-4 w-full'>Download</button>
            </form>        
    );
};

export default Verified;