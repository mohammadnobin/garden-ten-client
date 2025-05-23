import logo from "../assets/logo.webp";
import { useNavigate, Link } from "react-router";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-green text-white py-10 px-6 mt-16 dark:bg-black dark:border-t-2 dark:border-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Logo & About */}
        <div>
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer w-[160px] bg-white p-1 rounded-2xl mb-4 mx-auto md:mx-0"
          >
            <img src={logo} alt="logo" className="rounded-2xl" />
          </div>
          <p className="text-sm text-gray-300">
            GardenHub – A place to connect, grow, and share your love for plants 🌿
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: support@gardenhub.com</li>
            <li>Phone: +123-456-7890</li>
            <li>Address: Green Lane, Garden City</li>
          </ul>
        </div>

        {/* Terms */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Terms</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Social Links</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 dark:border-white mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} GardenHub — Cultivating Green Connections 🌱
      </div>
    </footer>
  );
};

export default Footer;
