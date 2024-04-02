import React from 'react';

const VerifyRequire = () => {
    const verifyProcess = [
        { id: 1, category: "Graduate Holder", heading: "For Verifing certificate Requirement of Graduate Holder", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, et consequatur aut aliquam ab enim quos iste explicabo atque vitae beatae ipsum molestias sint a, debitis ut. Amet, voluptatibus suscipit!" },
        { id: 2, category: "Organization", heading: "For Verifing certificate Requirement of Organization", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, et consequatur aut aliquam ab enim quos iste explicabo atque vitae beatae ipsum molestias sint a, debitis ut. Amet, voluptatibus suscipit!" },
        { id: 3, category: "Other/Third Party", heading: "For Verifing certificate Requirement of Third Party", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, et consequatur aut aliquam ab enim quos iste explicabo atque vitae beatae ipsum molestias sint a, debitis ut. Amet, voluptatibus suscipit!" }

    ]
    return (
        <section className="overflow-hidden">
            <h1 className='px-5 text-3xl'>How can you verify a certificate???</h1>
            <div className="container px-5 py-10 mx-auto">
                <div className="-my-8">
                    {verifyProcess.map(vp => <div
                        key={vp.id}
                        className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold  ">{vp.category}</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium mb-2">{vp.heading}</h2>
                            <p className="leading-relaxed">{vp.description}</p>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>);
};
export default VerifyRequire;