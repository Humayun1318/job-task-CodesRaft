import { NavLink, Outlet, useLocation } from "react-router-dom";
import NavLinks from "../components/NavLinks/NavLinks";
import Header from "../components/Header/Header";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  
  useEffect(() => {
    Aos.init({
      duration: 800, // Animation duration (ms)
      easing: "ease-in-out", // Easing type
      // once: true,          // Only animate once
      mirror: false, // Don't mirror on scroll up
    });
  }, []);

  return (
    <>
      <header className="max-w-[1600px] h mx-auto bg-[#F8F9FF]">
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
