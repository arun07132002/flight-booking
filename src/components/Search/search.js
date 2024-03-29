import React from "react";
import { useEffect } from "react";

//import aos
import Aos from 'aos'
import 'aos/dist/aos.css'

// icon import

import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import { RxCalendar } from 'react-icons/rx';

const Search = () => {
    
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

    return (
        <div data-aos='fade-up' data-aos-duration='25000' className="search container section">
            <div className="searchContainer grid">
                <div className="btns flex">
                    <div className="singleBtn">
                        <span>Economy</span>
                    </div>

                    <div className="singleBtn">
                        <span>Business Class</span>
                    </div>

                    <div className="singleBtn">
                        <span>First Class</span>
                    </div>

                </div>
                <br></br>
                <div className="searchInputs flex">
                    {/* single inputs */}
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <HiOutlineLocationMarker className='icon' />
                        </div>
                        <div className="texts">
                            <h4>Location</h4>
                            <input type="text" className="input" placeholder="where do you want to go ?" />
                        </div>
                    </div>
                </div>

                <div className="searchInputs flex">
                    {/* single inputs */}
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RiAccountPinCircleLine className='icon' />
                        </div>
                        <div className="texts">
                            <h4>Travelars</h4>
                            <input type="text" className="input" placeholder="Add guests" />
                        </div>
                    </div>
                </div>

                <div className="searchInputs flex">
                    {/* single inputs */}
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RxCalendar className='icon' />
                        </div>
                        <div className="texts">
                            <h4>Check In</h4>
                            <input type="text" className="input" placeholder="where do you want to go ?" />
                        </div>
                    </div>
                </div>

                <div className="searchInputs flex">
                    {/* single inputs */}
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RxCalendar className='icon' />
                        </div>
                        <div className="texts">
                            <h4>Check Out</h4>
                            <input type="text" className="input" placeholder="where do you want to go ?" />
                        </div>
                    </div>
                </div><br></br>

                <button className="btn btnBlock flex">Search Flight</button>

            </div>

        </div>
    )
}
export default Search;