import React from "react";
import { useEffect } from "react";

//import aos
import Aos from 'aos'
import 'aos/dist/aos.css'



// imported image
import service from '../../assets/service_2.jpg';
import service_1 from '../../assets/service_1.jpg';

const Lounge = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

    return (
        <div className="lounge container section">
            <div className="sectionContainer grid">
                <div className="imageDiv grid">
                    <img src={service} alt="service" className="service"></img>
                    <img src={service_1} alt="service_1" className="service_1"></img>
                </div>

                <div className="textDiv">
                    <h2>Unaccompanied Minor Lounge</h2>
                </div>

                <div className="grids grid">
                    
                    <div data-aos='fade-up' data-aos-duration='25000' className="singelGrid">
                        <span className="gridTitle">
                            Help through the airpot
                        </span>
                        <p>You can also call airline from your phone and booking your flight
                        ticket  to one of your favorite destintions.!
                        </p>
                    </div>

                    <div data-aos='fade-up' data-aos-duration='25000' className="singelGrid">
                        <span className="gridTitle">
                          Priority Boarding
                        </span>
                        <p>You can also call airline from your phone and booking your flight
                        ticket  to one of your favorite destintions.!
                        </p>
                    </div>

                    <div data-aos='fade-up' data-aos-duration='25000' className="singelGrid">
                        <span className="gridTitle">
                           Care on the flight
                        </span>
                        <p>You can also call airline from your phone and booking your flight
                        ticket  to one of your favorite destintions.!
                        </p>
                    </div>

                    <div data-aos='fade-up' data-aos-duration='25000' className="singelGrid">
                        <span className="gridTitle">
                            Chuffeur drive service
                        </span>
                        <p>You can also call airline from your phone and booking your flight
                        ticket  to one of your favorite destintions.!
                        </p>
                    </div>
                
                </div>

            </div>

        </div>
    )
}
export default Lounge;