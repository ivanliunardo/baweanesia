import React, {useState,useEffect} from 'react';
import 'aos/dist/aos.css';
import '../App.css';
import { Button } from './Button';
import './HomestayBanner.css';
import {axios} from './axios';

function Homestay(){
    const [homestay, setHomestay] = useState([]);

    useEffect(() =>{
        axios
        .get("/homestay")
        .then(response => {
            console.log("Response:", response)
            setHomestay(response.data)
        })
        .catch((err) => {
            console.log("Error:", err)
        })
    }, []);

    return(
        <div className='homestay'>
            {
                homestay.map(hmsty =>
                    <div>
                    <div data-aos='fade-up' className='homestay-title'>
                        <h1 className='title'>{hmsty.title}</h1>
                    </div>
                    <div className='homestay-container'>
                        <div data-aos='fade-right' className='homestayimg-container'>
                            <img src={hmsty.img} />
                        </div>
                        <div data-aos='fade-left' className='text-container'>
                            <div className='text-content'>
                                <h3>{hmsty.text}</h3>
                            </div>
                            <div className='homestay-btn'>
                            <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'>
                                Pesan Sekarang
                            </Button>
                             </div>
                         </div>
                    </div>
                    </div>
                )
            }
            </div>
    )
}

export default Homestay