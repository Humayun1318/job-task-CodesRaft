import { Outlet, useLocation } from "react-router-dom";
import NavLinks from "../components/NavLinks/NavLinks";
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

  return (
    <>
      <header className="max-w-[1600px]  mx-auto bg-[#F8F9FF] mb-12 ">
        <Header />
        {location.pathname === "/" ? <Banner></Banner> : ""}
      </header>
      <main className="w-11/12 mx-auto border">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLayout;
