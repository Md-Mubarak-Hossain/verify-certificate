import React from 'react';
import certificate from "../../components/svg/certificate.svg"
import facebook from "../../components/svg/facebook.svg"
import instagram from "../../components/svg/instagram.svg"
import twitter from "../../components/svg/twitter.svg"
import linkedIn from "../../components/svg/linkedIn.svg"
import { Link } from 'react-router-dom';
const Footer = () => {

  const footerTopics = [
    [
      { id: 1, heading: "Company" },
      { id: 2, path: "/", title: "Country list Here Details" },
      { id: 3, path: "/", title: "Country list Here Details" },
      { id: 4, path: "/", title: "Country list Here Details" },
      { id: 5, path: "/", title: "Country list Here Details" }
      
    ],
    [
      { id: 1, heading: "Company" },
      { id: 2, path: "/", title: "Country list Here Details" },
      { id: 3, path: "/", title: "Country list Here Details" },
      { id: 4, path: "/", title: "Country list Here Details" },
      { id: 5, path: "/", title: "Country list Here Details" }
      
    ],
    [
      { id: 1, heading: "Company" },
      { id: 2, path: "/", title: "Country list Here Details" },
      { id: 3, path: "/", title: "Country list Here Details" },
      { id: 4, path: "/", title: "Country list Here Details" },
      { id: 5, path: "/", title: "Country list Here Details" }
      
    ]

  ];

  const socialIcons = [
    { id: 1, svg: facebook, path: "/" },
    { id: 2, svg: instagram, path: "/" },
    { id: 3, svg: twitter, path: "/" },
    { id: 4, svg: linkedIn, path: "/" }
  ]

  return (
    <div>
      <footer className="bg-base-200 mt-10">
        <div className="container px-5 pt-10 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            {
              footerTopics.map(ft => <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                {
                  ft?.map(ht => <h1 key={ht.id}
                    className="text-xl font-medium  tracking-widest">
                      <span className='border-b-2'>{ht?.heading}</span>
                      </h1>)
                }
                <nav className="list-none mb-5">
                  {
                    ft?.map(fc => <li key={fc.id} className='py-5'>
                      <Link to={fc.path} className=" hover:">{fc.title}</Link>
                    </li>)
                  }
                </nav>
              </div>)
            }
            <div className="lg:w-1/4 md:w-1/2 w-full px-2">
              <div className="bg-base-200">
                <div className="">
                  <div>
                    <Link to="/" className="flex gap-2 font-medium items-center  justify-start ">
                      <img src={certificate} alt="c" className='w-10 h-10' />
                      <span className="text-2xl">Verify Certificate</span>
                    </Link>
                  </div>

                  <div className="inline-flex  my-10 justify-between">
                    {
                      socialIcons.map(si => <Link to="/" key={si.id}>
                        <img src={`${si.svg}`} alt="social" className="w-8 h-8 px-2" />
                      </Link>)
                    }
                  </div>
                </div>
              </div>
              <h2 className=" font-medium  tracking-widest text-sm">SUBSCRIBE</h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label for="footer-field" className="leading-7 text-sm ">Placeholder</label>
                  <input type="text" id="footer-field" name="footer-field" className="w-full bg-base-200 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex  bg-base-100 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
              </div>
              <p className=" text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
                <br className="lg:block hidden" />waistcoat green juice
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;