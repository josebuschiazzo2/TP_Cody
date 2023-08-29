import '../styles/carousel.css';

import Carousel1 from '../images/Carousel1.jpg';
import Carousel2 from '../images/Carousel2.jpg';
import Carousel3 from '../images/Carousel3.jpg';
import Carousel4 from '../images/Carousel4.jpg';
import Carousel5 from '../images/Carousel5.jpg';
import Carousel6 from '../images/Carousel6.jpg';

function Carousel() {
  return (
    <div id="bg-image">
      <div id="carouselExampleInterval" className="carousel slide mb-4" data-bs-ride="carousel">
        <div className="carousel-inner" >
          <div className="carousel-item active" data-bs-interval="3000" >
            <img src={Carousel1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={Carousel2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={Carousel3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={Carousel4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={Carousel5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={Carousel6} className="d-block w-100" alt="..." />
          </div>
        </div>

        <button className="carousel-control-next" 
        type="button" data-bs-target="#carouselExampleInterval" 
        data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        {/* overlay shadow on carousel */}
        <div className="overlay">
            <div className="container">
              <div className="row align-items-center">
                <div className="  text-md-right">
                  <h1 className="titleOverlay">Bievenidos a Cody Web</h1>
                  <p className="textOverlay d-none d-md-block">
                    En esta pagina encontras información sobre las bases de la Antartida Argentina!! que disfrutes la experiencia!
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Carousel
