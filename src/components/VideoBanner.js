import {axios} from './axios';
import Axios from 'axios';
import React, {useEffect,useState} from 'react';
import '../App.css';
import { Button } from './Button';
import './VideoBanner.css';

function VideoBanner() {
  const [getTexts, setText] = useState([{}]);
  const [getVideo, setVideo] = useState([{}]);

  const fetchData = () => {
    const API ='https://intense-peak-53882.herokuapp.com/videobanner'
    const getText = Axios.get(API)
    const getVid = Axios.get(API)
    Axios.all([getText, getVid]).then(
        Axios.spread((...allData) => {
            const allDataText = allData[0].data
            const allDataVid = allData[1].data.video;

            setText(allDataText)
            setVideo(allDataVid)
            console.log(allDataText)
            console.log(allDataVid)
        })
    )
}

    useEffect(() =>{
      fetchData()
    }, []);

    return (
      <div>
  
            <div className='hero-container'>
              <video src={`https://intense-peak-53882.herokuapp.com${getVideo.url}`} autoPlay loop muted />
                <h1>{getTexts.title}</h1>
                <p>{getTexts.desc}</p>
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
      </div>
    )
  }

export default VideoBanner;
