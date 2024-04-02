import React from 'react';
import graduate from "../../components/svg/graduate.svg";
import organization from "../../components/svg/organization.svg";
import other from "../../components/svg/other.svg";
import certificate from "../../components/svg/certificate.svg";
import GetStarted from './GetStarted';

const VerifyHolder = () => {
    const cardTopics = [
        { id: 1, title: "Graduate Holder", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, et consequatur aut aliquam", svg: graduate },
        { id: 2, title: "Organization", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, et consequatur aut aliquam", svg: organization },
        { id: 3, title: "Other", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, et consequatur aut aliquam", svg: other }
    ];
    return (<section>
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
                <h2 className="text-xs  tracking-widest font-medium  mb-1">Have you not verify certificate?!!!</h2>
                <h1 className="sm:text-3xl text-2xl font-medium  flex flex-row justify-center items-center gap-2">Verify Post Graduation Certificate
                    <img src={certificate} alt="c" className='w-8 h-8' />!!!</h1>
            </div>
            <div>
                <GetStarted/>
            </div>
            <div className="flex flex-wrap -m-4">
                {cardTopics.map(ct => <div key={ct.id} className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full bg-base-200 p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-base-100  flex-shrink-0">
                                <img src={ct.svg} alt="logo" className='w-8 h-8' />
                            </div>
                            <h2 className="text-lg  font-medium">{ct.title}</h2>
                        </div>
                        <div className="flex-grow">
                            <p className="leading-relaxed">{ct.description}</p>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    </section>);
};
export default VerifyHolder;