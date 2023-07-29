import '../styles/homeUser.css';

import CardsContent from './CardsContent';
import Carousel from './Carousel';
import Footer from './Footer';
import Navbar from './Navbar';

function Home() {

  return (
    <div>
        <Navbar/> 
        <Carousel/>
        <CardsContent/>
        <Footer/>
    </div>
  );
}

export default Home;