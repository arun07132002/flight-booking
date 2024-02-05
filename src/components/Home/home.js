import React,{useEffect} from "react";


//import assets ==========
import video from '../../assets/logo-video.mp4';
// import image from '../../assets/logo.png';

//import aos ======
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
//useEffect  to use set animation duration

useEffect(()=>{
  Aos.init({duration:2000})
},[])

    return (
        <>
        <div className="home flex container">
            <div className="mainText">
              <h2 data-aos='fade-up' data-aos-duration='25000'>Create Ever-lasting Memories With Us</h2>
            </div>
            <div className="homeImages flex">
              <div className="videoDiv">
                <video src={video} autoPlay  muted loop className="video"></video>
              </div>
              {/* <img src={image} alt="" className="plane"></img> */}
            </div>
        </div>
        </>
    )
}
export default Home;