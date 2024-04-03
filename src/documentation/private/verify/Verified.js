import React, { useEffect, useState } from 'react';

const Verified = () => {
    const [certificateData, setData] = useState([])
    useEffect(() => {
        fetch(`https://verify-certificate-server-2024.vercel.app/post`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(certificateData);
    return (
        <div className='w-full px-2 flex'>
            <div className='w-3/4 p-5'>
                {certificateData.map(cd =><section className='relative bg-orange-100 text-black shadow-lg border-2 border-dashed w-9/12 text-center py-10 mx-auto'>
                    <h1 className='text-2xl pt-5'>Lorem ipsum dolor sit amet.</h1>
                    <p className='text-xl m-10 py-5'>Lorem ipsum dolor {cd.name}sit amet consectetur adipisicing elit.{cd.roll} Veniam animi tenetur nam. Voluptate dignissimos dolor atque! {cd.registration}Mollitia eos harum quis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dicta recusandae,{cd.university} exercitationem distinctio vitae eligendi tenetur doloribus itaque aspernatur laboriosam. Facere saepe in vero {cd.country}consequuntur placeat sit vitae {cd.session}vel officiis?</p>
                    <p className='text-xl ml-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='flex flex-col justify-center items-center absolute opacity-100 left-8 text-red-800 w-32 h-32 border-4 border-red-600 rounded-full top-8 text-2xl font-serif font-bold -rotate-45 bg-orange-200 '>Online Verified</div>
                </section>)}
            </div>
            <div className='w-1/4'>
                <form>
                    <h1 className='py-5'>Fill Up with post graduation information.</h1>
                    <div className='w-full'>
                        {
                            certificateData.map(vf => <div key={vf?._id} className='w-full'>
                                <p className="input input-bordered p-4 my-2 flex gap-2">{vf?.roll}<span className='text-green-600'>verified</span></p>
                                <p className="input input-bordered p-4 my-2 flex gap-2">{vf?.registration}<span className='text-green-600'>verified</span></p>
                                <p className="input input-bordered p-4 my-2 flex gap-2">{vf?.name}<span className='text-green-600'>verified</span></p>
                                <p className="input input-bordered p-4 my-2 flex gap-2">{vf?.session}<span className='text-green-600'>verified</span></p>
                                <p className="input input-bordered p-4 my-2 flex gap-2">{vf?.university}<span className='text-green-600'>verified</span></p>
                                <p className="input input-bordered p-4 my-2 flex gap-2">{vf?.country}<span className='text-green-600'>verified</span></p>
                                <p className="input input-bordered p-4 my-2 flex gap-2">{vf?.author}<span className='text-green-600'>verified</span></p>
                                <p className="input input-bordered p-4 my-2 flex gap-2">{vf?.journal}<span className='text-green-600'>verified</span></p>

                            </div>)
                        }
                    </div>
                    <button className='btn p-4 w-full'>Download</button>
                </form>
            </div>
        </div>
    );
};

export default Verified;