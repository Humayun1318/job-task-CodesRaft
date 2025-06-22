import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavLinks = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Works", path: "/works" },
    { name: "Projects", path: "/projects" },
    { name: "About Us", path: "/about" },
    { name: "Tutorials", path: "/tutorials" },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold"
              : "text-gray-600 hover:text-blue-500 transition-colors"
          }
        >
          {link.name}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;
