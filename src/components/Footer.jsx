import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.webp";
import { useNavigate } from "react-router";

const Footer = () => {
      const navigate = useNavigate();
  return (
    <footer className="bg-green text-white py-10 px-4 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Contact Info */}
        <div>
          <div onClick={() => navigate("/")} className="cursor-pointer bg-white w-[150px] mb-4 ">
            <img className="w-[150px]  rounded-2xl" src={logo} alt="logo" />
          </div>
          <h3 className="text-xl font-bold mb-2">Contact Info</h3>
          <p>Email: hello@gardenhub.com</p>
          <p>Phone: +880 1711-000000</p>
          <p>Address: Dhanmondi, Dhaka, Bangladesh</p>
        </div>

        {/* Terms */}
        <div>
          <h3 className="text-xl font-bold mb-2">Terms</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Safety Guidelines
              </a>
            </li>
          </ul>
        </div>
        {/* Terms */}
        <div>
          <h3 className="text-xl font-bold mb-2">Terms</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Safety Guidelines
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-2">Social Links</h3>
          <div className="flex justify-center md:justify-start gap-4 text-2xl mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-green-600">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-green-600">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-green-600">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8 text-green-700">
        © {new Date().getFullYear()} GardenHub - Spread the love for greenery 🌱
      </div>
    </footer>
  );
};

export default Footer;
