import React from 'react';

const Verified = () => {
    const verifyForm = [
        { id: 1, verified:"verified", placeholder: "Enter verify holder name", className: "input input-bordered p-4 my-2", register: "name" },
        { id: 2, verified:"verified", placeholder: "Enter verify holder roll", className: "input input-bordered p-4 my-2", register: "roll" },
        { id: 3, verified:"verified", placeholder: "Enter verify holder registration", className: "input input-bordered p-4 my-2", register: "registration" },
        { id: 4, verified:"verified", placeholder: "Enter verify holder journal", className: "input input-bordered p-4 my-2", register: "journal" },
        { id: 5, verified:"verified", placeholder: "Enter verify holder firs author name", className: "input input-bordered p-4 my-2", register: "author" },
        { id: 6, verified:"verified", placeholder: "Enter verify holder session", className: "input input-bordered p-4 my-2", register: "session" },
        { id: 7, verified:"verified", placeholder: "Enter verify holder university name", className: "input input-bordered p-4 my-2", register: "university" },
        { id: 8, verified:"verified", placeholder: "Enter verify holder country", className: "input input-bordered p-4 my-2", register: "country" },
        { id: 9, verified:"verified", placeholder: "Enter verify holder email", className: "input input-bordered p-4 my-2", register: "email" },
        { id: 10, verified:"verified", placeholder: "Enter verify holder contact no", className: "input input-bordered p-4 my-2", register: "contact" },
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