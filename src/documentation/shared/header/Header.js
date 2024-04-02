import { Link } from 'react-router-dom';
import certificate from "../../components/svg/certificate.svg"
const Header = () => {
  const headerTopics = [
    { id: 1, topic: "Home", path: "/" },
    { id: 1, topic: "Verify", path: "/verify" },
    { id: 2, topic: "Certificate", path: "/certificate" },
    { id: 3, topic: "About", path: "/" },
    { id: 4, topic: "Blog", path: "/" },
    { id: 5, topic: "Profile", path: "/" }
  ]

  return (
    <>
      <header className="bg-base-300 fixed w-full">
        <div className="container mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
          <Link to="/" className="flex  items-center  mb-4 md:mb-0">
            <img src={certificate} alt="logo" 
            className='w-10 h-10'
            />
            <span className="ml-3 text-xl">Verify Certificate</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {headerTopics.map(h => <span key={h.id}>
              <Link
                to={`${h.path}`}
                className="mr-5 hover:">{h.topic}</Link>
            </span>)}
          </nav>
          <button className="inline-flex items-center bg-base-200 border-0 py-1 px-3 focus:outline-none hover: rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}
export default Header;