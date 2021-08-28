import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css'
import '../App.css';
import './Demografi.css';
import {axios} from './axios';

function Demografi() {
    const [demografi, setDemografi] = useState([]);

    useEffect(() =>{
        axios
        .get("/demografi")
        .then(response => {
            console.log("Response:", response)
            setDemografi(response.data)
        })
        .catch((err) => {
            console.log("Error:", err)
        })
    }, []);

    return(
        <div>
            {
                demografi.map(dem =>
                    <div key={dem.id}>
                        <div className='mapdesc-container'>
                            <div data-aos='fade-right'  className='map'>
                                <video src={dem.video} autoPlay loop muted />
                            </div>
                            <div  data-aos='fade-left'  className='desc'>
                                <h1 class='title'>{dem.title}</h1>
                                <h3>{dem.text}</h3>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Demografi