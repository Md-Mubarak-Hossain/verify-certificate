import { Link } from 'react-router-dom';
import certificate from "../../components/svg/certificate.svg"
import { useContext } from 'react';
import { AuthContext } from '../../../context/Context';
import ThreeDot from '../../accounts/threeDot/ThreeDot';
// import Ripple from 'react-waves-effect';
const Header = () => {
  const { user } = useContext(AuthContext);
  const headerTopics = [
    { id: 1, topic: "Home", path: "/" },
    { id: 1, topic: "Verify", path: "/verify" },
    user?.uid ?
      { id: 2, topic: "Certificate", path: "/certificate" } : { id: 3, class: "hidden" },

    { id: 3, topic: "About", path: "/" },
    { id: 4, topic: "Blog", path: "/" },

    user?.uid ? { id: 5, topic: "Dashboard", path: "/userDashboard" } : { id: 6, class: "hidden" },

  ]
  return (
    <>
      <header className="bg-base-300 fixed w-full z-20 top-0 min-h-16 right-0">
        <div className="container mx-auto flex flex-wrap pl-5 py-3 flex-col md:flex-row items-center">
          <Link to="/" className="flex  items-center  mb-4 md:mb-0">
            <img src={certificate} alt="logo"
              className='w-10 h-10'
            />
            <span className="ml-3 text-xl">Verify Certificate</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {headerTopics.map(h => <span key={h.id}>
              {/* <Ripple
                color="green"
                animationDuration={1600}
                animationEasing="ease-out"
                className="rounded-badge"
                onClick={() => {
                  console.log("clicked");
                }}
              > */}
                <Link
                  to={`${h.path}`}
                  className={`mr-5 hover:border-b-2 border-gray-300 focus:border-orange-400 focus:border-b-2 ${h?.class}`}>{h.topic}</Link>
              {/* </Ripple> */}

            </span>)}
            {user?.uid ? <img src={user?.photoURL} className='rounded-full w-10 h-10 bg-white' /> : <span className='hidden'></span>}
            <ThreeDot />
          </nav>
        </div>
      </header>
    </>
  )
}
export default Header;