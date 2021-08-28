import React, {useState, useEffect} from 'react';
import 'aos/dist/aos.css';
import './TravelWays.css';
import CardItem from './CardItem';
import {axios} from './axios';

function TravelWays(){
  const [travelways, settravelWays] = useState([]);

    useEffect(() =>{
        axios
        .get("/travelways")
        .then(response => {
            console.log("Response:", response)
            settravelWays(response.data)
        })
        .catch((err) => {
            console.log("Error:", err)
        })
    }, []);

    return (
      <div>
        {
          travelways.map(ways=>
            <div className='cards'>
              <h1 class='title' data-aos='fade-up'>{ways.title}</h1>
              <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul data-aos='fade-up' className='cards__items'>
                {
                  ways.cards.map(way => (
                    <CardItem
                    src= {way.img}
                    text={way.text}
                  />
                ))}
                </ul>
                </div>
              </div>
            </div>
            )
          }
        </div>
    );
  }

export default TravelWays;
