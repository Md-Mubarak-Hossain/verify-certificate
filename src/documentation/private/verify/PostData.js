import React, { useContext} from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../context/Context';

const PostData = ({certificateImage}) => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    console.log(certificateImage);   

    const handleUploadData2 = data => {
        const { holder, roll, registration, email, session, author, university, country, contact } = data;

        const postData = {
            user: user.displayName,
            userEmail: user.email,
            name: holder,
            roll: roll,
            registration: registration,
            email: email,
            session: session,
            author: author,
            university: university,
            country: country,
            contact: contact,
            image: certificateImage
        }
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
                    alert(`${holder} is submitted successfully`);
                }
            })
    }
    const verifyForm = [
        { id: 1, type: "text", placeholder: "Enter verify holder name", className: "input input-bordered p-4 my-2", register: "holder" },
        { id: 2, type: "text", placeholder: "Enter verify holder roll", className: "input input-bordered p-4 my-2", register: "roll" },
        { id: 3, type: "text", placeholder: "Enter verify holder registration", className: "input input-bordered p-4 my-2", register: "registration" },
        { id: 4, type: "text", placeholder: "Enter verify holder journal", className: "input input-bordered p-4 my-2", register: "journal" },
        { id: 5, type: "text", placeholder: "Enter verify holder firs author name", className: "input input-bordered p-4 my-2", register: "author" },
        { id: 6, type: "text", placeholder: "Enter verify holder session", className: "input input-bordered p-4 my-2", register: "session" },
        { id: 7, type: "text", placeholder: "Enter verify holder university name", className: "input input-bordered p-4 my-2", register: "university" },
        { id: 8, type: "text", placeholder: "Enter verify holder country", className: "input input-bordered p-4 my-2", register: "country" },
        { id: 9, type: "text", placeholder: "Enter verify holder email", className: "input input-bordered p-4 my-2", register: "email" },
        { id: 10, type: "text", placeholder: "Enter verify holder contact no", className: "input input-bordered p-4 my-2", register: "contact" },
    ]
    return (  
            <>
                {
                    <form
                        onSubmit={handleSubmit(handleUploadData2)} className='w-1/2'>
                        <h1 className='py-5'>Fill Up with post graduation information.</h1>
                        <div className='w-full grid grid-cols-2 gap-1'>
                            {
                                verifyForm?.map(vf => <div key={vf.id} className='w-full grid grid-cols-1'>

                                    <input
                                        type={vf.type}
                                        placeholder={vf.placeholder}
                                        className={vf.className}
                                        {...register(`${vf?.register}`,
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
            </>
        
    );
};

export default PostData;