import React from "react";
import "./Sidebar.css"; // Assuming you have a CSS file for styling
import { IoIosHome } from "react-icons/io";
import { IoCodeSharp } from "react-icons/io5";
import { IoIosMusicalNote } from "react-icons/io";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { IoGameControllerOutline } from "react-icons/io5";
import { BiCameraMovie } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { setSelectedCategory } = useContext(GlobalContext);
  return (
    <div className="sidebar">
      <ul>
        <Link to="/">
          <li onClick={() => setSelectedCategory("New")}>
            <IoIosHome />
            Home
          </li>
        </Link>
        <Link to="/">
          <li onClick={() => setSelectedCategory("Code")}>
            <IoCodeSharp />
            Code
          </li>
        </Link>
        <Link to="/">
          <li onClick={() => setSelectedCategory("Music")}>
            <IoIosMusicalNote />
            Music
          </li>
        </Link>
        <Link to="/">
          <li onClick={() => setSelectedCategory("Gaming")}>
            <IoGameControllerOutline />
            Gaming
          </li>
        </Link>
        <Link to="/">
          <li onClick={() => setSelectedCategory("Movies")}>
            <BiCameraMovie />
            Movies
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
