import { Link } from 'react-router-dom';
import certificate from "../../components/svg/certificate.svg"
const Header = () => {
  const headerTopics = [
    { id: 1, topic: "Home", path: "/" },
    { id: 1, topic: "Verify", path: "/verify" },
    { id: 2, topic: "Certificate", path: "/certificate" },
    { id: 3, topic: "About", path: "/" },
    { id: 4, topic: "Blog", path: "/" },
    { id: 5, topic: "Dashboard", path: "/userDashboard" },
    { id: 5, topic: "Login", path: "/login" },
    { id: 5, topic: "SignUp", path: "/signup" }
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
        </div>
      </header>
    </>
  )
}
export default Header;