import logo from "../assets/logo.webp";
import { useNavigate, Link } from "react-router";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className=" bg-green dark:bg-black dark:border-t-2 dark:border-white  text-white py-10 px-4 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer bg-white w-[150px] mb-4 md:ml-0 mx-auto "
          >
            <img className="w-[150px]  rounded-2xl" src={logo} alt="logo" />
          </div>
          <p className="text-sm text-gray-400">
            Discover and manage your favorite subsciription boxes in one place
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white">
                Subcriptoins
              </Link>
            </li>
            <li>
              <Link to="/developer" className="hover:text-white">
                Local Businesses
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/terms" className="hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/developer" className="hover:text-white">
                Developer Resources
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="flex justify-center md:justify-normal space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 dark:border-white mt-10 pt-4 text-center text-sm ">
        © {new Date().getFullYear()} GardenHub - Spread the love for greenery 🌱
      </div>
    </footer>
  );
};

export default Footer;
