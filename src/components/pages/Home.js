import React, { useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../App.css';
import VideoBanner from '../VideoBanner';
import Demografi from '../Demografi';
import TravelReason from '../TravelReason';
import TravelWays from '../TravelWays';
import Homestay from '../HomestayBanner';
import Footer from '../Footer';
import FrequentlyAskedQuestions from '../FAQS';



function Home() {
  useEffect(() => {
    Aos.init({duration: 2000});
}, []);
  return (
    <>
    <VideoBanner />
    <Demografi />
    <TravelReason />
    <TravelWays />
    <Homestay />
    <FrequentlyAskedQuestions />
    <Footer />
    </>
  );
}

export default Home;
