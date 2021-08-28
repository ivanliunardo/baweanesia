import React, { useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../App.css';
import ImageBanner from '../ImageBanner.js';
import Footer from '../Footer';
import ProdukCards from '../ProdukCards';

function Produk() {
  useEffect(() => {
    Aos.init({duration: 2000});
}, []);
  return (
    <>
    <ImageBanner />
    <ProdukCards />
    <Footer />
    </>
  );
}

export default Produk;
