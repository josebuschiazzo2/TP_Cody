import Footer from './Footer';
import Navbar from './Navbar';
import InfoBase from './InfoBase';

function BaseCarlini() {

  
  return (
    <div>
      <Navbar/> 
      <InfoBase 
          imagenInfoBase = "https://resizer.glanacion.com/resizer/v2/la-base-carlini-se-encuentra-en-la-peninsula-G3CPTW23HBEDLC5X4Z7MJHVYOE.jpg?auth=29acb879a31fca150d385a711985bd20474179db9badeaad848944abe63c6600&width=880&height=586&quality=70&smart=false"
          tituloInfoBase = {"BASE CARLINI"}
          textoInfoBase = {"BASE CARLINIIIIIIIIIIIIIII"}
          />
      <Footer/>
    </div>
  );
}

export default BaseCarlini;

