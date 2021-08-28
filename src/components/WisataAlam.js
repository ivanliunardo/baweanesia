import {axios} from "./axios";
import React, {useState, useEffect} from "react";
import '../App.css';
import './WisataAlam.css';
import Popup from './Popup';
import {Button} from './Button';
import SearchBar from "./SearchBar";

function WisataAlam(){

    const [isOpen, setIsOpen] = useState(false);
    const [popupIndex, setPopupIndex] = useState(0);
    const [wisatacards, setWisataCards] = useState([]);

    const togglePopup = (index) => {
    setIsOpen(!isOpen);
    setPopupIndex(index);
    }

    useEffect(() =>{
        axios
        .get("/wisatacards")
        .then(response => {
            console.log("Response:", response)
            setWisataCards(response.data)
        })
        .catch((err) => {
            console.log("Error:", err)
        })
    }, []);

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filterCards = (wisatacards, query) => {
        if (!query) {
            return wisatacards;
        }
    
        return wisatacards.filter((post) => {
            const postName = post.name.toLowerCase();
            return postName.includes(query);
        });
    };
    
    const filteredCards = filterCards(wisatacards, searchQuery.toLocaleLowerCase());

    return(
        <div className='wisata-container'>
            <h1 data-aos='fade-up'>Wisata Pulau Bawean!</h1>
            <div className='wisata-card-container'>
                <div className='wisata-card-wrapper'>
                    <div className='searchbox' data-aos='fade-up'>
                        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeholder="Cari Wisata..."/>
                    </div>
                    <ul data-aos="fade-up" className='wisata-card'>
                        {filteredCards.map((props, index) =>(
                            <>
                            <li onClick={() => togglePopup(index)} data-aos='fade-up' className='wisata-cards-item'>
                            <div className='wisata-card-link'>
                              <figure className='wisata-card-pic-wrap' data-category={props.label}>
                                <img
                                  className='wisata-card-img'
                                  alt={props.label}
                                  src={props.img}
                                />
                              </figure>
                              <div  className='wisata-card-info'>
                                <h5 className='wisata-card-name'>{props.name}</h5>
                                <h6 className='wisata-card-location'>{props.location}</h6>
                                <h5 className='wisata-card-price'>{props.price}</h5>
                              </div>
                            </div>
                            
                          </li>
                          </>
                        ))}
                    </ul>
                    {isOpen &&
                    <Popup
                        content={<>
                            <div className='wisata-popup-name'>{filteredCards[popupIndex].name}</div>
                            <img className='wisata-popup-image' src={filteredCards[popupIndex].img} />
                            <div className='wisata-popup-desc'>{filteredCards[popupIndex].desc}</div>
                            <div className='wisata-popup-price'>{filteredCards[popupIndex].price}</div>
                            <div className='wisata-popup-location'>{filteredCards[popupIndex].location}</div>
                            <div className='gmaps-link'>
                            <Button className='btns' buttonStyle='btn--primary' buttonSizae='btn--medium'>
                            <a  href={filteredCards[popupIndex].link} target='_blank' className='btns'>Buka Google Maps</a></Button>
                            </div>
                        </>}
                        handleClose={togglePopup}
                        />}
                </div>

            </div>
        </div>
      );
    }



export default WisataAlam;