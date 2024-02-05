import React from "react";

const Subscribers = ()=>{
    return(
        <div className="subscribe section">
            <div className="sectionContainer container">
              <h2>Subscribe NewsLetter & get Latest News</h2>
              <div className="inputDiv flex">
                <input type="text" className="input" placeholder="Enter your email address"/>
                <button className="btn">Subscribe</button>
              </div>  
            </div>
            
        </div>
    )
}
export default Subscribers;