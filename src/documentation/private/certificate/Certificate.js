import React, { useEffect, useState } from 'react';


const Certificate = () => {
    const [certificateData, setData] = useState([])
    useEffect(() => {
        fetch(`https://verify-certificate-server-2024.vercel.app/post`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(certificateData);
    return (
        <div>
            {certificateData.map(cd =><div key={cd._id}
            className='w-full px-2 flex'>
            <div className='w-3/4 p-5 flex flex-col justify-center items-center'>
                <section className='relative bg-orange-100 text-black shadow-lg border-2 border-dotted  w-9/12 text-center py-10 mx-auto'>
                    <h1 className='text-2xl pt-5'>Lorem ipsum dolor sit amet.</h1>
                    <p className='text-xl m-10 py-5'>Lorem ipsum dolor {cd.name}sit amet consectetur adipisicing elit.{cd.roll} Veniam animi tenetur nam. Voluptate dignissimos dolor atque! {cd.registration}Mollitia eos harum quis! Lorem ipsum dolor, sit amet consectetur adipisicing elit.recusandae,{cd.university} exercitationem distinctio vitae eligendi tenetur doloribus itaque aspernatur laboriosam. Facere saepe in vero {cd.country}consequuntur placeat sit vitae {cd.session}vel officiis?</p>
                    <p className='text-xl ml-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='flex flex-col justify-center items-center absolute opacity-100 left-8 text-red-600 w-32 h-32 border-8 border-dotted border-red-600 rounded-full top-8 text-2xl -rotate-45 bg-orange-100 '>Online Verified</div>
                </section>
                
                <button className='btn p-4 w-full  mt-5'>Download</button>
                
            </div>
            <div className='w-1/4'>
                    <h1 className='py-3 text-sm'>Verified post graduation information.</h1>
                <form>
                    <div className='w-full'>
                        <div  className='w-full'>
                                <p className="input input-bordered p-4 my-2 flex gap-2">roll:{cd?.roll}<span className='text-green-600'>verified</span></p>
                                <p className="input input-bordered p-4 my-2 flex gap-2">registration:{cd?.registration}<span className='text-green-600'>verified</span></p>
                                <p className="input input-bordered p-4 my-2 flex gap-2">name:{cd?.name}<span className='text-green-600'>verified</span></p>
                                <p className="input input-bordered p-4 my-2 flex gap-2">session:{cd?.session}<span className='text-green-600'>verified</span></p>
                                <p className="input input-bordered p-4 my-2 flex gap-2">university:{cd?.university}<span className='text-green-600'>verified</span></p>
                                <p className="input input-bordered p-4 my-2 flex gap-2">country:{cd?.country}<span className='text-green-600'>verified</span></p>
                                <p className="input input-bordered p-4 my-2 flex gap-2">author:{cd?.author}<span className='text-green-600'>verified</span></p>
                                <p className="input input-bordered p-4 my-2 flex gap-2">journal:{cd?.journal}<span className='text-green-600'>verified</span></p>

                            </div>
                        
                    </div>
                    
                </form>
            </div>
        </div>)}
        </div>
    );
};

export default Certificate;