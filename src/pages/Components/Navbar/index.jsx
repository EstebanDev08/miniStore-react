import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import React from "react";


const Navbar = () => {
  const activeStyle = "underline underline-offset-4 ";

  const {carCount} = React.useContext(GlobalContext)

  const categories = [

    { to: "/", text: "All" },
    { to: "/clothes", text: "Clothes" },
    { to: "/furniture", text: "Furniture" },
    { to: "/toys", text: "Toys" },
  ];

  const routes = [
    { to: "/my-orders", text: "My Orders" },
    { to: "/my-account", text: "My Account" },
    { to: "/sign-in", text: "Sign In" },
  ];
  return (
    <nav className="flex justify-between fixed bg-white items-center border-b-2 z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">

        <NavLink to='/' className='font-semibold text-lg' >
        Shopi
        </NavLink>
        {categories.map((category, index) => (
          <li key={index} >
            <NavLink
              to={category.to}
              className={({ isActive }) => ` ${isActive ? activeStyle : ""}`}
            >
              {category.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">rosario@testing.com</li>
        {routes.map((route, index) => (
          <li key={index}>
            <NavLink
              to={route.to}
              className={({ isActive }) => ` ${isActive ? activeStyle : ""}`}
            >
              {route.text}
            </NavLink>
          </li>
        ))}
        <li>🛒{carCount}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
