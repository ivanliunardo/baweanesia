import {axios} from './axios';
import React, {useEffect, useState} from 'react';
import '../App.css';
import './ImageBanner.css';
import 'aos/dist/aos.css';

function ImageBanner(){
  const [imageBanner, setimageBanner] = useState([]);

    useEffect(() =>{
        axios
        .get("/imagebanner")
        .then(response => {
            console.log("Response:", response)
            setimageBanner(response.data)
        })
        .catch((err) => {
            console.log("Error:", err)
        })
    }, []);
  
    return (
      <div>
        {
          imageBanner.map(pic =>
            <div data-aos = "fade-up" className='banner-container'>
              <img src={pic.image}/>
            </div>
            )
        }
      </div>
    );
  }

export default ImageBanner;