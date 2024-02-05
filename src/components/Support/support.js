import React from "react";
import { useEffect } from "react";
//import image
import Outsite from '../../assets/gridImage.png';

//import aos ======
import Aos from 'aos'
import 'aos/dist/aos.css'

const Support = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

    return (
        <div className="support container section">
            <div  className="sectionContainer">

                <div data-aos='fade-up' data-aos-duration='25000' className="titlesDiv">
                    <small className="small">Travel support</small>
                    <h2>Plan your travel with confidence</h2>
                    <p>Fine help with booking and travel plans, see what
                        to expect along the journey !</p>
                </div>

                <div data-aos='fade-up' data-aos-duration='25000' className="infoDiv grid">
                    
                    <div className="textDiv grid">
                        
                        <div className="singleInfo">
                            <span className="number">01</span>
                            <h1 className="h1">travel requirements for Singapore</h1>
                            <p>Fine help with booking and travel plans, see what to expect along
                                the journey to your favourite destinations !</p>
                        </div>

                        <div className="singleInfo">
                            <span className="number colorOne">02</span>
                            <h1 className="h1"> Chauffeur services at youe arrival</h1>
                            <p>Fine help with booking and travel plans, see what to expect along
                                the journey to your favourite destinations !</p>
                        </div>

                        <div className="singleInfo">
                            <span className="number colorTwo">03</span>
                            <h1 className="h1">Multi-risk travel Insurence</h1>
                            <p>Fine help with booking and travel plans, see what to expect along
                                the journey to your favourite destinations !</p>
                        </div>
                    
                    </div>
                   
                   <div data-aos='fade-up' data-aos-duration='25000' className="imgDiv">

                    <img className="image" src={Outsite}alt='gridImage'></img>

                   </div>

                </div>

            </div>

        </div>
    )
}
export default Support;