// import React, { useState } from "react";
import { useEffect } from "react";

//import aos
import Aos from "aos";
import "aos/dist/aos.css";

//import image
import logo from "../../assets/logo.png";

//icon import
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { SlArrowUpCircle } from "react-icons/sl";

const Footer = () => {

  // bottome to top scroll

  // const [visible,setVisible]=useState(false)

  const toggleVisible=()=>{
    let scrolled=document.documentElement.scrollTop;
     scrolled=300
  }

  const scrollToTop=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth .10s'
    });
  }

  window.addEventListener('scroll',toggleVisible)



  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <div className="footer">
      
      <div
        data-aos="fade-up"
        data-aos-duration="25000"
        className="sectionContainer container grid"
      >
        <div className="gridOne">
          <SlArrowUpCircle  onClick={scrollToTop} className="icontop"/>
          <div className="logoDiv">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <p className="p">
            Your mind should be stronger then you feelings, fly!
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="25000"
            className="socialIcon flex"
          >
            <TiSocialFacebook className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillYoutube className="icon" />
            <FaPinterestP className="icon" />
          </div>
        </div>
        <div className="footer-flex">
          <div
            data-aos="fade-up"
            data-aos-duration="25000"
            className="footerLinks"
          >
            <span className="linkTitle">Information</span>
            <li className="li">
              <a className="a" href="">
                {" "}
                Home
              </a>
            </li>
            <li className="li">
              <a className="a" href="">
                {" "}
                Explore
              </a>
            </li>
            <li className="li">
              <a className="a" href="">
                Flight Status
              </a>
            </li>
            <li className="li">
              <a className="a" href="">
                Travel
              </a>
            </li>
            <li className="li">
              <a className="a" href="">
                check-In
              </a>
            </li>
            <li className="li">
              <a className="a" href="">
                Manage your booking
              </a>
            </li>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="25000"
            className="footerLinks"
          >
            <span className="linkTitle">Quike Guide</span>
            <li className="li">
              <a className="a" href="#">
                FAQ
              </a>
            </li>
            <li className="li">
              <a className="a" href="#">
                How to
              </a>
            </li>
            <li className="li">
              <a className="a" href="#">
                Features
              </a>
            </li>
            <li className="li">
              <a className="a" href="#">
                Baggege
              </a>
            </li>
            <li className="li">
              <a className="a" href="#">
                Road Map
              </a>
            </li>
            <li className="li">
              <a className="a" href="#">
                Out Communicate
              </a>
            </li>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="25000"
            className="footerLinks"
          >
            <span className="linkTitle">Information</span>
            <li className="li">
              <a className="a" href="#">
                Chuffeurs
              </a>
            </li>
            <li className="li">
              <a className="a" href="#">
                Our Patners
              </a>
            </li>
            <li className="li">
              <a className="a" href="#">
                Destination
              </a>
            </li>
            <li className="li">
              <a className="a" href="#">
                Careers
              </a>
            </li>
            <li className="li">
              <a className="a" href="#">
                Transportation
              </a>
            </li>
            <li className="li">
              <a className="a" href="#">
                Program Rules
              </a>
            </li>
          </div>
        </div>
      </div>
      <div className="copyRightDiv flex">
        <p>
          Courtesy Design | Developed by{" "}
          <a href="https://emailto-arunpandik2002@gmail.com" target="_blank">
            @run
          </a>{" "}
        </p>
      </div>
    </div>
  );
};
export default Footer;
