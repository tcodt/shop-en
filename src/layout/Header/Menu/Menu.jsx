import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { FaHeadset, FaRegHeart } from "react-icons/fa";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  PiStorefrontDuotone,
  PiUserDuotone,
  PiPhoneCallDuotone,
} from "react-icons/pi";

export default function Menu() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="bg-white rounded-b-3xl p-4 shadow-lg grid grid-cols-12 items-center gap-4"
      data-aos="fade-down"
    >
      {/* Mobile Menu */}
      {/* <MobileMenu /> */}
      {/* Mobile Menu */}
      <div className="col-span-3 md:col-span-1">
        <Link to="/" className="flex items-center justify-start">
          <img
            src="/images/tcod-logo-white.jpg"
            alt="Logo"
            className="h-16 object-contain"
          />
        </Link>
      </div>

      <div className="col-span-8 md:col-span-6">
        <div className="flex items-center justify-center">
          <button className="bg-primary-blue text-white p-2 rounded-s-xl h-[40px] hover:bg-sky-600 transition">
            <FiSearch className="text-xl" />
          </button>
          <input
            type="search"
            placeholder="Search..."
            className="bg-primary-light p-2 rounded-xl rounded-s-none outline-none text-gray-900 w-full h-[40px] focus:shadow-md"
          />
        </div>
      </div>

      <div className="col-span-2 hidden md:block">
        <div className="flex items-center justify-center gap-2">
          <p className="text-primary-dark text-base">Likes</p>
          <FaRegHeart className="text-2xl text-primary-dark cursor-pointer" />
        </div>
      </div>

      <div className="col-span-2 hidden md:block">
        <div className="flex items-center justify-center gap-2 cursor-pointer">
          <div className="flex flex-col">
            <span className="text-base text-primary-dark">Cart</span>
            <span className="text-sm text-primary-blue">$0</span>
          </div>
          <div>
            <BsCart3 className="text-2xl text-primary-dark" />
          </div>
        </div>
      </div>

      <div className="col-span-1">
        <div className="flex justify-end">
          <img
            src="/images/57.jpg"
            alt="User Profile"
            className="h-12 object-cover md:object-contain rounded-full border-2 border-primary-blue"
          />
        </div>
      </div>

      <div className="col-span-full hidden md:block">
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-4">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary-blue hover:text-white transition"
              >
                Account <PiUserDuotone className="text-xl" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary-blue hover:text-white transition"
              >
                Products <PiStorefrontDuotone className="text-xl" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary-blue hover:text-white transition"
              >
                Support <FaHeadset className="text-xl" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary-blue hover:text-white transition"
              >
                Contact us <PiPhoneCallDuotone className="text-xl" />
              </a>
            </li>
          </ul>

          <div>
            <button className="p-2 bg-primary-blue opacity-60 rounded-lg hover:opacity-100 transition text-white">
              Login / Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
