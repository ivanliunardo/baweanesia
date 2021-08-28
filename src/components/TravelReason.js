import React, { useState, useEffect} from 'react';
import 'aos/dist/aos.css';
import '../App.css';
import './TravelReason.css';
import {axios} from './axios';

function TravelReason() {
    const[reasons, setReasons] = useState([]);

    useEffect(() => {
        axios
        .get("/reasons")
        .then(response => {
            console.log("Response:", response)
            setReasons(response.data)
        })
        .catch((err) => {
            console.log("Error:", err)
        })
    }, []);
    
    return(
            <div className='content'> 
            {
                reasons.map(rsns=>
                    <>
                    <div data-aos='fade-up' className='content-title'>
                        <h1 class='title'>{rsns.title}</h1>
                    </div>
                    
                    <div className='content-container'>
                    <div className='text-container'>
                    {
                        rsns.reason.map(rsn =>
                                
                                    <div data-aos='fade-up' className='text-content'>
                                        <div className='icon-container'>
                                            <div className='icon-circle'>
                                                <div className='icon-number'>
                                                {rsn.number}
                                                </div>
                                            </div>
                                        </div>
                                        <h2>{rsn.text}</h2>
                                    </div>
                        )
                    }
                    </div>
                        <div data-aos='fade-up' className='img-container'>
                            <img src={rsns.img} />
                        </div>
                    </div>
                    </>
                )
            }
            </div>               
    )
}

export default TravelReason
