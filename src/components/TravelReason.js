import React, { useState, useEffect} from 'react';
import 'aos/dist/aos.css';
import '../App.css';
import './TravelReason.css';
import {axios} from './axios';
import Axios from 'axios';

function TravelReason() {
    const[reasons, setReasons] = useState([{}]);
    const[imgsbnnr, setImage] = useState([{}]);

    const fetchData = () => {
        const API ='https://intense-peak-53882.herokuapp.com/reasons'


        const getReason = Axios.get(API)
        const getImg = Axios.get(API)
        Axios.all([getReason, getImg]).then(
            Axios.spread((...allData) => {
                const allDataReason = allData[0].data
                const allDataImg = allData[1].data[0].img;

                setReasons(allDataReason)
                setImage(allDataImg)
                console.log(allDataReason)
                console.log(allDataImg)
            })
        )
    }

    useEffect(() => {
        fetchData()
    }, []);
    
    return(
            <div className='content'> 
                    <div data-aos='fade-up' className='content-title'>
                        <h1 class='title'>Alasan Pergi ke Bawean!</h1>
                    </div>
                    <div className='content-container'>
                    <div className='text-container'>
                    {
                        reasons.map(rsn =>
                                    <div data-aos='fade-up' className='text-content'>
                                        <div className='icon-container'>
                                            <div className='icon-circle'>
                                                <div className='icon-number'>
                                                {rsn.number}
                                                </div>
                                            </div>
                                        </div>
                                        <h2>{rsn.reason}</h2>
                                    </div>
                        )}
                        </div>
                                <div data-aos='fade-up' className='img-container'>
                                <img src={`https://intense-peak-53882.herokuapp.com${imgsbnnr[0].url}`} />
                            </div>
                    </div>
            </div>           
    )
}

export default TravelReason