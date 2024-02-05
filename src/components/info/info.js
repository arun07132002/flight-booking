import React from "react";
import { useEffect } from "react";
// import icons   ---------------------------
import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";

//import aos
import Aos from 'aos'
import 'aos/dist/aos.css'


const Info = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

    return (
        <div className="info section ">
            <div data-aos='fade-up' data-aos-duration='25000' className="infoContainer container">
                <div className="titleDiv flex">
                    <h2>Travel to make memories all around the world</h2>
                    <button type="button" className="btn">View All</button>
                </div>
                <div className="cardsDiv grid">
                    <div data-aos='fade-up' data-aos-duration='25000' className="singleCard grid">
                        <div className="iconDiv flex ">
                            <RxCalendar className="icon" />
                        </div>
                        <span className="cardTitle">Book and Relax</span>
                        <p>You can also call airline from your phone and booking your flight ticket !</p>
                    </div>

                    <div data-aos='fade-up' data-aos-duration='25000' className="singleCard grid">
                        <div className="iconDiv colorOne flex">
                            <BsShieldCheck className="icon" />
                        </div>
                        <span className="cardTitle">Smart Checklist</span>
                        <p>You can also call airline from your phone and booking your flight ticket !</p>
                    </div>

                    <div data-aos='fade-up' data-aos-duration='25000' className="singleCard grid">
                        <div className="iconDiv colorTwo flex">
                            <BsBookmarkCheck className="icon" />
                        </div>
                        <span className="cardTitle">save & More</span>
                        <p>You can also call airline from your phone and booking your flight ticket !</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Info;