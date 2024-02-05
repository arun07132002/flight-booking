import React, { useState } from "react";
//icon import
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
//image import
import logoImg from "../../assets/logo.png";

import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  //icons
  const [icon, setIcons] = useState(false);

  const handle = () => {
    setIcons(!icon);
  };


  const closeSideDrawer = () => {
    setIcons(false);
  };
  //add background color to secound navbar =======>
  const [addBg, setAddBg] = useState("navBarTwo");

  const addColor = () => {
    if (window.scrollY >= 10) {
      setAddBg("navBarTwo navBar_with_bg");
    } else {
      setAddBg("navBarTwo");
    }
  };
  window.addEventListener("scroll", addColor);

  

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <SiConsul className="icon-1" />
        <div className="flex">
          <li className="flex">
            <BsPhoneVibrate className="icon-s" />
            Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon-s" />
            Languages
          </li>
        </div>
        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>

      <div className={addBg}>
        <img src={logoImg} alt="logodiv" onClick={closeSideDrawer} className="logo1" />

        {icon ? (
          <FaTimes onClick={handle} className="icon-line"></FaTimes>
        ) : (
          <CgMenuGridR onClick={handle} className="icon-line" />
        )}

        <div className="navBarMenu" onClick={handle}>
          <ul className={icon ? "nav-menu active" : "nav-menu"}>
            <li  onClick={closeSideDrawer}  className="listItem">
              Home
            </li>
            <li onClick={closeSideDrawer}   className="listItem">
              About
            </li>
            <li  onClick={closeSideDrawer}  className="listItem">
              Offers
            </li>
            <li onClick={closeSideDrawer}  className="listItem">
              Seats
            </li>
            <li onClick={closeSideDrawer}  className="listItem">
              Destinations
            </li>
            <li>
              <button onClick={closeSideDrawer}    className=" btn3 listItem ">contact</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
