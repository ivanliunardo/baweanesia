import {axios} from './axios';
import React, {useEffect,useState} from 'react';
import '../App.css';
import { Button } from './Button';
import './VideoBanner.css';

function VideoBanner() {
  const [videoBanner, setvideoBanner] = useState([]);

    useEffect(() =>{
        axios
        .get("/videobanner")
        .then(response => {
            console.log("Response:", response)
            setvideoBanner(response.data)
        })
        .catch((err) => {
            console.log("Error:", err)
        })
    }, []);

    return (
      <div>
        {
          videoBanner.map(vid =>
            <div className='hero-container'>
              <video src={vid.video} autoPlay loop muted />
                <h1>{vid.title}</h1>
                <p>{vid.text}</p>
              <div className='hero-btns'>
              <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
              >
                KUNJUNGI BAWEAN
              </Button>
              </div>
            </div>
            )
        }
      </div>
    )
  }

export default VideoBanner;
