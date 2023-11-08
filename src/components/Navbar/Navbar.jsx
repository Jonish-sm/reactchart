import React, { useRef, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo/logo.webp";
import user from "../../assets/profile/user.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { BiSolidDownArrow } from "react-icons/bi";

function Navbar() {
  const inputRef = useRef();
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <div className="navbar">
      <div className="navbar_content">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <div className="search">
            <input
              type="text"
              ref={inputRef}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <AiOutlineSearch
              className={`search_icons ${isInputFocused ? "focused" : ""}`}
            />
          </div>
          <div className="notification">
            <IoMdNotifications className="notification_icons" />
            <div className="dot"></div>
          </div>
          <div className="profile">
            <div className="profile_img">
              <img src={user} alt="" />
            </div>

            <div className="drop_down">
              <BiSolidDownArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
