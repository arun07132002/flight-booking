import React from "react";

//imported destination image =======

import london from '../../assets/london.jpg';
import australia from '../../assets/australia.jpg';
import singapore from '../../assets/singapore.jpg';
import jerman from '../../assets/jerman.jpg';


//imported travelars image =========== >
import service_2 from '../../assets/service_2.jpg';

//we are going to use high order array   
// method called to Map to display all the data

const travelars = [
    {
        id: 1,
        destinationImage: london,
        travelarImage: service_2,
        travelarName: 'Itech Alexa',
        socialLink: '@itechalexa8'
    },
    {
        id: 2,
        destinationImage: australia,
        travelarImage: service_2,
        travelarName: 'hyperAshol',
        socialLink: '@hyperashol7'
    },
    {
        id: 3,
        destinationImage: singapore,
        travelarImage: service_2,
        travelarName: 'albert',
        socialLink: '@albert5'
    },
    {
        id: 4,
        destinationImage: jerman,
        travelarImage: service_2,
        travelarName: 'alexa',
        socialLink: '@alex13'
    }

]

const Travelars = () => {
    return (
        <div className="travelars container section">
            <div className="sectionContainer">
                <h2>Top travelars of this<br></br>month !</h2>
                <div className="travelarsContainer grid">


                    {
                        travelars.map(({ id, destinationImage, travelarName, travelarImage, socialLink }) => {
                            return (
                               
                                // {/* single passenger card */}


                                <div key={id} className="singelTravelars">
                                    <img src={destinationImage} className="destinationImage" alt="destination"></img>
                                    <div className="travelarsDetails">
                                        <div className="travelarsPicture">
                                            <img src={travelarImage} className="travelarImage" alt="Travelars"></img>

                                        </div>

                                    </div>
                                    <div className="travelarName">
                                        <span className="span">{travelarName}</span>
                                        <p className="p">{socialLink}</p>
                                    </div>
                                </div>

                            )
                        })
                    }




                </div>
            </div>

        </div>
    )
}
export default Travelars;