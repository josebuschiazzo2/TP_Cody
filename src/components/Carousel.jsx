import "../styles/carousel.css";

import Carousel1 from "./../images/Carousel1.jpg"
import Carousel2 from "./../images/Carousel2.jpg"
import Carousel3 from "./../images/Carousel3.jpg"
function Carousel() {
  return (
    <div id="bg-image">
      <div id="carouselExampleInterval" class="carousel slide mb-4" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={Carousel1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={Carousel2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={Carousel3} class="d-block w-100" alt="..." />
          </div>
        </div>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>

        {/* overlay shadow on carousel */}
        <div class="overlay">
            <div class="container">
              <div class="row align-items-center">
                <div class="  text-md-right">
                  <h1 className="titleOverlay">Bievenidos a Cody Web</h1>
                  <p class="textOverlay d-none d-md-block">
                    En esta pagina encontras información sobre la Antartida
                  </p>
                 <button id="contact" type="button" class="btn btngreen" data-toggle="modal" data-target="#modalCatalogo">Contacto</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Carousel
