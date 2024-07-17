import Aos from "aos";
import { useEffect } from "react";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";

export default function Services() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="container mx-auto mb-16">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-primary-light p-4 rounded-lg shadow-md">
          <div className="flex flex-col items-center gap-8">
            <FaTruckFast
              className="text-primary-blue"
              data-aos="flip-left"
              size={50}
            />
            <h3 className="text-primary-dark text-xl">Recive Fast</h3>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div className="bg-primary-light p-4 rounded-lg shadow-md">
          <div className="flex flex-col items-center gap-8">
            <MdOutlineSupportAgent
              className="text-primary-blue"
              data-aos="flip-left"
              size={50}
            />
            <h3 className="text-primary-dark text-xl">Support Team</h3>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div className="bg-primary-light p-4 rounded-lg shadow-md">
          <div className="flex flex-col items-center gap-8">
            <TiShoppingCart
              className="text-primary-blue"
              data-aos="flip-left"
              size={50}
            />
            <h3 className="text-primary-dark text-xl">Online Shop</h3>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
