import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";

import Aos from "aos";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [location]);

  return (
    <>
      <header
        className={`max-w-[1600px]  mx-auto bg-[#F8F9FF] mb-12 ${
          location.pathname !== "/" ? "pb-12" : ""
        }`}
      >
        <Header />
        {location.pathname === "/" ? <Banner></Banner> : ""}
        {location.pathname === "/works" ? (
          <>
            <h3 className="sm:text-lg md:text-4xl font-bold text-center my-12">
              Our Works
            </h3>
          </>
        ) : (
          ""
        )}
        {location.pathname === "/contact" ? (
          <>
            <div className="text-center my-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Let's Build Something Great
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have a project in mind? Get in touch with our team today.
              </p>
            </div>
          </>
        ) : (
          ""
        )}
        {location.pathname === "/tutorials" ? (
          <>
            <div className="text-center my-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Development and Design Resources
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Elevate your skills with our curated collection of tutorials and
                learning materials
              </p>
            </div>
          </>
        ) : (
          ""
        )}
        {location.pathname === "/about" ? (
          <>
            <div className="text-center my-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Crafting Digital Excellence
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're a passionate team of designers and developers creating
                meaningful digital experiences since 2012.
              </p>
            </div>
          </>
        ) : (
          ""
        )}
      </header>
      <main className="">
        <Outlet></Outlet>
      </main>
      <footer className="mt-12" id="footer">
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLayout;
