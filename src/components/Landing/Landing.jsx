import { BiCart } from "react-icons/bi";
import "./Landing.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";

export default function Landing() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="mt-4 relative">
      <div id="section_img"></div>
      <div className="absolute inset-0 p-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 flex flex-col gap-4" data-aos="zoom-out">
            <h1 className="text-gray-900 text-5xl shadow-text">
              Welcome To Our Web Application !
            </h1>
            <p className="text-gray-800 text-xl shadow-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Magni
              nostrum ad rem sit amet consectetur adipisicing elit Magni nostrum
              ad rem.
            </p>
            <Link
              to="/products"
              className="flex items-center gap-2 bg-primary-blue p-2 rounded-md w-1/4 lg:w-1/5 text-white hover:bg-sky-600 transition shadow-md"
            >
              Shop <BiCart size={25} />
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center md:justify-end">
            <img
              src="/images/products/landing-shop.webp"
              alt="Landing Shop Image"
              className="h-[400px] object-contain drop-shadow-2xl"
              data-aos="zoom-in-up"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
