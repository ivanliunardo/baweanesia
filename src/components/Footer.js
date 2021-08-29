import React, { useState, useEffect} from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {axios} from './axios';
import Axios from 'axios'

function Footer() {
  const [socmeds, setSocmeds] = useState([]);
  const [feedback, setFeedback] = useState({});
  const [formkey, setFormkey] = useState(10);

  const fetchData = () => {
    const socmedsAPI ='https://intense-peak-53882.herokuapp.com/socmeds'
    const getSocmeds = Axios.get(socmedsAPI)
    Axios.all([ getSocmeds]).then(
        Axios.spread((...allData) => {
            const allDataSocmeds =  allData[0].data;
            setSocmeds(allDataSocmeds)
            console.log(allDataSocmeds)
        })
    )
}
  useEffect(() =>{
    fetchData()
}, []);

  function submit(e){
    e.preventDefault();
    axios.post('/feedback',{
      name: feedback.name,
      text: feedback.text
    })
    .then(response =>{
      console.log("Feedback:", response)
    });
    setFormkey(formkey+1);
  }

  return (
          <div>
          <section className='wave' />
          <div className='footer-container'>
          <div className='footer-main'>
          <div data-aos='fade-up' className='footer-form'>
            <p className='footer-form-heading'>
              Bagikan Pengalamanmu Berkunjung di Pulau Bawean!
            </p>
            <div className='input-areas'>
              <form onSubmit={(e) => submit(e)}>
                <input
                  className='footer-input-name'
                  name='name'
                  type='name'
                  placeholder='Nama'
                />
                <br/>
                <textarea name='text' className='footer-input-text' placeholder='Ceritakan Pengalamanmu!' cols="30" rows="5">
                </textarea>
                <br/>
                <Button buttonStyle='btn--primary'>Kirim</Button>
              </form>
            </div>
            </div>
            <div data-aos='fade-up' class='footer-links'>
              <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                  <Link to='/wisata'><h2>Wisata</h2></Link>
                  <Link to='/produk'><h2>Produk</h2></Link>
                  <Link to='/budaya'><h2>Budaya</h2></Link>
                </div>
                <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                  <Link to='/blog'><h2>Blog</h2></Link>
                  <Link to='/sign-in'><h2>Masuk</h2></Link>
                </div>
                </div>
              </div>
            </div>
            </div>
              <section class='social-media'>
                <div class='social-media-wrap'>
                  <div class='footer-logo'>
                    <Link to='/' className='navbar-logo'>
                    Baweanesia
                    </Link>
                  </div>
                  <small class='website-rights'>KKN PPM UGM © 2021</small>
                  <div class='social-icons'>
                    <Link
                      class='social-icon-link facebook'
                      to={socmeds.facebook}
                      target='_blank'
                      aria-label='Facebook'
                    >
                      <i class='fab fa-facebook-f' />
                    </Link>
                    <Link
                      class='social-icon-link instagram'
                      to={socmeds.instagram}
                      target='_blank'
                      aria-label='Instagram'
                    >
                      <i class='fab fa-instagram' />
                    </Link>
                    <Link
                      class='social-icon-link youtube'
                      to={socmeds.youtube}
                      target='_blank'
                      aria-label='Youtube'
                    >
                      <i class='fab fa-youtube' />
                    </Link>
                    {/* <Link
                      class='social-icon-link twitter'
                      to={socmeds.twitter}
                      target='_blank'
                      aria-label='Twitter'
                    >
                      <i class='fab fa-twitter' />
                    </Link> */}
                    </div>
                </div>
              </section>
            </div>
            </div>
  )
                  }

export default Footer
