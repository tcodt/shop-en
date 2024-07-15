import { BiCart } from "react-icons/bi";
import "./Landing.css";

export default function Landing() {
  return (
    <section className="h-[100vh] relative w-full">
      <div className="absolute inset-0 bg-cover bg-center">
        <img
          src="/images/shapes/World Map.svg"
          alt="Background"
          className="h-full w-full object-cover blur-sm"
        />
      </div>

      <div className="z-[999] absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col sm:flex-row items-center p-4">
          <div className="flex flex-col gap-4 flex-1">
            <h1 className="text-gray-900 text-5xl shadow-text">
              Welcome To Our Web Application !
            </h1>
            <p className="text-gray-800 text-xl shadow-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Magni
              nostrum ad rem sit amet consectetur adipisicing elit Magni nostrum
              ad rem.
            </p>
            <button className="flex items-center gap-2 bg-primary-blue p-2 rounded-md w-1/4 text-white hover:bg-sky-600 transition">
              Shop <BiCart size={25} />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src="/images/products/landing-shop.webp"
              alt="Landing Shop Image"
              className="h-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
