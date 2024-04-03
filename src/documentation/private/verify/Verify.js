import React, {useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import arrow from "../../components/svg/arrow.svg";
import {Link} from "react-router-dom";
const Verify = () => {
    const [certificate,setData]=useState()
    const [postData,setPostData]=useState()
    console.log(certificate);
    console.log(postData);
   
    useEffect(()=>{
    fetch("https://verify-certificate-server-2024.vercel.app/certificate")
    .then(res=>res.json())
    .then(data=>{setData(data)
    console.log(data)})
   },[])
  
   useEffect(()=>{
    fetch("https://verify-certificate-server-2024.vercel.app/post")
    .then(res=>res.json())
    .then(data=>{setPostData(data)
    console.log(data)})
   },[])
   
   const [certificateImage,setValue]=useState();
    const { register, handleSubmit} = useForm();
    const imageHostKey = "dfaf988d2949563367b37e46912e3da6";
    const handleUploadData = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(photo => {
                if (photo.success) {
                    console.log(photo);
                    setValue(photo.data.url);                   
                    console.log(photo.data.url);
                   
                }
            })
    }

    const handleUploadData2=data=>{
    const postData = {
        name: data.name,
        roll: data.roll,
        registration: data.registration,
        email: data.email,
        session: data.session,
        author: data.author,
        university: data.university,
        country: data.country,
        contact: data.contact,
        image: certificate
    }

    // save project information to the database
    fetch(`https://verify-certificate-server-2024.vercel.app/post`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if (result.acknowledged) {
                alert(`${data.name} is submitted successfully`);
            }
        })
    }

    const verifyForm = [
        { id: 1, type: "text", placeholder: "Enter verify holder name", className: "input input-bordered p-4 my-2",register:"name"},
        { id: 2, type: "text", placeholder: "Enter verify holder roll", className: "input input-bordered p-4 my-2",register:"roll"},
        { id: 3, type: "text", placeholder: "Enter verify holder registration", className: "input input-bordered p-4 my-2",register:"registration"},
        { id: 4, type: "text", placeholder: "Enter verify holder journal", className: "input input-bordered p-4 my-2",register:"journal"},
        { id: 5, type: "text", placeholder: "Enter verify holder firs author name", className: "input input-bordered p-4 my-2",register:"author"},
        { id: 6, type: "text", placeholder: "Enter verify holder session", className: "input input-bordered p-4 my-2",register:"session"},
        { id: 7, type: "text", placeholder: "Enter verify holder university name", className: "input input-bordered p-4 my-2",register:"university"},
        { id: 8, type: "text", placeholder: "Enter verify holder country", className: "input input-bordered p-4 my-2",register:"country"},
        { id: 9, type: "text", placeholder: "Enter verify holder email", className: "input input-bordered p-4 my-2" ,register:"email"},
        { id: 10, type: "text", placeholder: "Enter verify holder contact no", className: "input input-bordered p-4 my-2",register:"contact"},
    ]
    return (
        <div className='py-20 mx-5 w-9/10 flex'>
            <div className='w-1/2 flex flex-col justify-center items-stretch'>
                {
                    1>0?<div className='h-96'>
                        <img  src={certificateImage} alt="Certificate" className='h-72'/>
                    </div> : <div className='h-96 flex justify-center items-center'>Certificate is not available. Please upload your certificate for preview.</div>
                }
                <div>
                    {
                        certificateImage?.length > 0 ? <div className='w-full flex flex-col justify-center items-center'><p className='py-5 text-green-500 text-center w-full'>Upload Completed</p></div> 
                        :  
                        <form 
                        onSubmit={handleSubmit(()=>handleUploadData())} 
                         className='flex justify-center items-center'>
                          
                          <input   type='file' 
                            {...register("image",
                            {
                                required: true
                            }
                            )}
                            className='input input-bordered' />
                          
                            
                            <button className='btn'>Upload Certificate</button>
                           
                        </form>
                    }
                </div>
            </div>
            {
                4>3? <div className='mt-20 flex flex-col justify-center items-center card shadow-lg w-1/3 mx-auto'><h1 className='text-green-500'>Certificate verification is Successful</h1><Link to="/verified" className='flex justify-center items-center border-b-2 border-blue-500 focus:text-orange-400 text-blue-400'>Go for download / copy link<img src={arrow} className='w-4 h-6' /></Link></div> 
                : 
                <form 
                onSubmit={handleSubmit(()=>handleUploadData2())} className='w-1/2'>
                    <h1 className='py-5'>Fill Up with post graduation information.</h1>
                   <div className='w-full grid grid-cols-2 gap-1'>
                   {
                        verifyForm?.map(vf => <div key={vf.id} className='w-full grid grid-cols-1'>

                            <input
                                type={vf.type}
                                placeholder={vf.placeholder}
                                className={vf.className}
                                {...register(`${vf.register}`,
                            {
                                required: true
                            }
                            )}
                            />

                        </div>)
                    }
                   </div>
                    <button className='btn p-4 w-full'>Submit</button>
                </form>
            }
        </div>
    );
};

export default Verify;