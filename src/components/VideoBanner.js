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
                <a  href='https://www.google.com/travel/things-to-do?dest_src=ut&tcfs=EhMKCS9tLzA2cGI2cxIGQmF3ZWFu&dest_mid=%2Fm%2F06pb6s&hl=en-ID&gl=id&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4306835%2C4317915%2C4371335%2C4401769%2C4419364%2C4429192%2C4515404%2C4545890%2C4596364%2C4597339%2C4605834%2C4610908%2C4617390%2C4270859%2C4284970%2C4291517#ttdm=-5.812992_112.714447_12&ttdmf=%252Fg%252F11clzr3tm7' target='_blank' className='btns'>
                KUNJUNGI BAWEAN
                </a>
              </Button>
              </div>
            </div>
            )
      </div>
    )
  }

export default VideoBanner;
