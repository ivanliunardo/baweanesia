import React, {useState,useEffect} from 'react';
import 'aos/dist/aos.css';
import '../App.css';
import { Button } from './Button';
import './HomestayBanner.css';
import {axios} from './axios';
import Axios from 'axios';

function Homestay(){
    const [getTexts, setText] = useState([{}]);
    const [getImage, setImg] = useState([{}]);

    const fetchData = () => {
        const API ='https://intense-peak-53882.herokuapp.com/homestays'
        const getText = Axios.get(API)
        const getImg = Axios.get(API)
        Axios.all([getText, getImg]).then(
            Axios.spread((...allData) => {
                const allDataText = allData[0].data
                const allDataImg = allData[1].data[0].img;
    
                setText(allDataText)
                setImg(allDataImg)
                console.log(allDataText)
                console.log(allDataImg)
            })
        )
    }

    useEffect(() =>{
        fetchData()
    }, []);

    return(
        <div className='homestay'>
                <div data-aos='fade-up' className='homestay-title'>
                    <h1 className='title'>{getTexts[0].title}</h1>
                </div>
                <div className='homestay-container'>
                    <div data-aos='fade-right' className='homestayimg-container'>
                        <img src={`https://intense-peak-53882.herokuapp.com${getImage[0].url}`} />
                    </div>
                    <div data-aos='fade-left' className='text-container'>
                        <div className='text-content'>
                            <h3>{getTexts[0].desc}</h3>
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

export default Homestay