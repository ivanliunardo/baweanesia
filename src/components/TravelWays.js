import React, {useState, useEffect} from 'react';
import 'aos/dist/aos.css';
import './TravelWays.css';
import CardItem from './CardItem';
import {axios} from './axios';
import Axios from 'axios';

function TravelWays(){
  const [getTexts, setText] = useState([{}]);
  const [getImage, setImage] = useState([{}]);

  const fetchData = () => {
    const API ='https://intense-peak-53882.herokuapp.com/travelways'
    const getText = Axios.get(API)
    const getImg = Axios.get(API)
    Axios.all([getText, getImg]).then(
        Axios.spread((...allData) => {
            const allDataText = allData[0].data
            const allDataImg = allData[1].data[0].cards_img
            setText(allDataText)
            setImage(allDataImg)
            console.log(allDataText)
            console.log(allDataImg)
        })
    )
}

    useEffect(() =>{
        fetchData()
    }, []);

    return (
      <div>
            <div className='cards'>
              <h1 class='title' data-aos='fade-up'>Cara menuju pulau bawean</h1>
              <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul data-aos='fade-up' className='cards__items'>
                {
          getTexts.map(ways=>
                    <CardItem
                    src= {`https://intense-peak-53882.herokuapp.com${getImage[0].url}`}
                    text={ways.cards_desc}
                  />
                  )}
                </ul>
                </div>
              </div>
            </div>
        </div>
    );
  }

export default TravelWays;
