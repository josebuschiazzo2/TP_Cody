import '../styles/homeUser.css';

import CardsContent from './CardsContent';
import Carousel from './Carousel';
import Footer from './Footer';
import Navbar from './Navbar';
import Hero from "./InfoBase"
function Home() {

  return (
    <div id='Home'>
        <Navbar/> 
        <Carousel/>
        <div>
          <Hero
          imagenHero = "https://images.theconversation.com/files/512875/original/file-20230301-28-m0jcor.jpeg?ixlib=rb-1.1.0&rect=0%2C1%2C998%2C663&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
          tituloHero = {"TITULO BASE 1"}
          textoHero = {"holahoalhaohsnoaosnoadlnaslkndfknawdf"}
          />
        </div>
        <CardsContent/>
        <Footer/>
    </div>
  );
}

export default Home;