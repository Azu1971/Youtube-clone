import React from "react";
import "./Navbar.css";
import assets from "../assets/assets.js";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa6";
import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { setSelectedCategory } = useContext(GlobalContext);

  const handleSearch = (e) => {
    e.preventDefault();
    setSelectedCategory(searchQuery);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.YTLogoIcon} alt="YouTube Logo" />
      </Link>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          <CiSearch />
        </button>
      </form>
      <div className="right">
        <FaBell />
        <button className="profile-button">A</button>
      </div>
    </div>
  );
};

export default Navbar;
