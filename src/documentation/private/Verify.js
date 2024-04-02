import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../components/svg/arrow.svg';
const Verify = () => {
    const image = 1;
    const verifyForm = [
        { id: 1, type: "text", placeholder: "Enter verify holder name", className: "input input-bordered p-4 my-2" },
        { id: 2, type: "text", placeholder: "Enter verify holder name", className: "input input-bordered p-4 my-2" },
        { id: 3, type: "text", placeholder: "Enter verify holder name", className: "input input-bordered p-4 my-2" },
        { id: 4, type: "text", placeholder: "Enter verify holder name", className: "input input-bordered p-4 my-2" },
        { id: 5, type: "text", placeholder: "Enter verify holder name", className: "input input-bordered p-4 my-2" },
        { id: 6, type: "text", placeholder: "Enter verify holder name", className: "input input-bordered p-4 my-2" },
        { id: 7, type: "text", placeholder: "Enter verify holder name", className: "input input-bordered p-4 my-2" },
        { id: 8, type: "text", placeholder: "Enter verify holder name", className: "input input-bordered p-4 my-2" }
    ]
    return (
        <div className='py-20 mx-5 w-9/10 flex'>
            <div className='w-1/2 flex flex-col justify-center items-stretch'>
                {
                    image > 0 ? <div className='h-96'>
                        <img src="" alt="Certificate" />
                    </div> : <div className='h-96'>Certificate is not available.Please upload your certificate for preview</div>
                }
                <form>
                    {
                        image > 0 ? <div className='w-full flex flex-col justify-center items-center'><p className='py-5 text-green-500 text-center w-full'>Upload Completed</p></div> : <div className='flex justify-center items-center'>
                            <input type='file' className='input input-bordered' />
                            <button className='btn' role='button'>Upload Certificate</button>
                        </div>
                    }
                </form>
            </div>
            {
                image > 0 ? <div className='mt-20 flex flex-col justify-center items-center card shadow-lg w-1/3 mx-auto'><h1 className='text-green-500'>Certificate verification is Successful</h1><Link to="/" className='flex justify-center items-center border-b-2 border-blue-500 focus:text-orange-400 text-blue-400'>Go for download / copy link<img src={arrow} className='w-4 h-6' /></Link></div> : <form className='w-1/2'>
                    {
                        verifyForm?.map(vf => <div key={vf.id} className='w-full grid grid-cols-1'>

                            <input
                                type={vf.type}
                                placeholder={vf.placeholder}
                                className={vf.className}
                            />

                        </div>)
                    }
                </form>
            }
        </div>
    );
};

export default Verify;