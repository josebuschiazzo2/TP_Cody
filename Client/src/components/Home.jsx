import CardsContent from './CardsContent';
import Carousel from './Carousel';
import Footer from './Footer';
import Navbar from './Navbar';

function Home() {
  return (
    <div id='Home'>
        <Navbar claseHome="hidden"/> 
        <Carousel/>
        <img id="mapa" src="/TP_cody2/TP_Cody/Client/src/styles/mapa.jpg" alt="" />
        <CardsContent/>
        <Footer/>
    </div>
  );
}

export default Home;
