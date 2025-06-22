import React, { useState } from "react";
import NavLinks from "../NavLinks/NavLinks";
import menuBarGif from "./../../assets/icons8-menu.gif";
import XGif from "./../../assets/icons8-x.gif";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="relative w-11/12 mx-auto">
      <div className="bg-white  p-4 flex justify-between items-center rounded-bl-4xl rounded-br-4xl">
        <h2 className="text-xl font-bold cursor-pointer">
          <a href="/">Agency</a>
        </h2>
        <div className="hidden md:flex gap-4">
          <NavLinks />
        </div>
        <button onClick={() => setMenu(!menu)} className="cursor-pointer">
          <span className="fixed top-4 right-8 sm:right-16">
            <div className="flex gap-2">
              Menu
              <img
                src={menu ? XGif : menuBarGif}
                alt={menu ? "Close Menu" : "Open Menu"}
                className="w-5"
              />
            </div>
          </span>
        </button>
      </div>

      {/* NavLiks */}
      {menu && (
        <div
          className="fixed inset-0 z-50 flex "
          data-aos={menu ? "fade-left" : "fade-right"}
        >
          {/* Black backdrop */}
          <div
            className="w-1/2 bg-black/50"
            onClick={() => setMenu(false)}
          ></div>
          <div
            className="w-full sm:w-1/2 bg-white p-6 shadow-lg"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <button
              className="fixed right-4 top-4 cursor-pointer"
              onClick={() => setMenu(false)}
            >
              <img src={XGif} alt="Menu Close" className="w-5" />
            </button>

            <div className="sm:flex gap-[30%]  pl-[10%] pt-[20%]">
              <div
                className="mb-4 sm:mb-0 "
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <p className="opacity-30 mb-4 sm:mb-12">Social Media</p>
                <nav className="flex flex-col gap-2 sm:gap-6 opacity-70">
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="hover:text-blue-600 transition">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-600 transition">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-600 transition">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-600 transition">
                        YouTube
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-600 transition">
                        Instagram
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="" data-aos="fade-left" data-aos-delay="300">
                <p className="opacity-30 mb-4 sm:mb-12">Menu</p>
                <nav className="flex flex-col gap-2 sm:gap-6 text-lg md:text-3xl">
                  <NavLinks />
                </nav>
              </div>
            </div>

            <div
              className="fixed  sm:bottom-24 left-[10%]"
              data-aos="fade-up"
              //   data-aos-delay="200"
            >
              <p className="opacity-30 mb-4 mt-12 sm:mt-0">Get In Touch</p>
              <p className="underline">info@Agency.com</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
