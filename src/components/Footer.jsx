import '../styles/footer.css';

import facebookIcon from '../images/facebookIcon.png';
import githubIcon from '../images/githubIcon.png';
import linkedinIcon from '../images/linkedinIcon.png';
import twitterIcon from '../images/twitterIcon.png';
import youtubeIcon from '../images/youtubeIcon.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="socialMedia ">
        <div className="iconSocialMedia ">
          <a href="www.Facebook.com">
            <img src={facebookIcon} alt="Logo Facebook" />
          </a>
          <a href="www.facebook.com">
            <p className="text-black">Facebook</p>
          </a>
        </div>
        <div className="iconSocialMedia">
          <a href="www.youtube.com">
            <img src={youtubeIcon} alt="Logo Youtube" />
          </a>
          < a href="www.youtube.com">
            <p className="text-black">YouTube</p>
          </a>
        </div>
        <div className="iconSocialMedia">
          <a href="www.Github.com">
            <img src={githubIcon} alt="Logo Github" />
          </a> <a href="www.github.com">
            <p className="text-black">Github</p>
          </a>
        </div>
        <div className="iconSocialMedia">
          <a href="www.Linkedin.com">
            <img src={linkedinIcon} alt="Logo LinkedIn" />
          </a>
          <a href="www.linkedin.com">
            <p className="text-black">Linkedin</p>
          </a>
        </div>
        <div className="iconSocialMedia">
          <a href="www.Twitter.com">
            <img src={twitterIcon} alt="Logo Twitter" />
          </a>
          <a href="www.twitter.com">
            <p className="text-black">Twitter</p>
          </a>
        </div>
      </div>
      <hr id="lineFooter" />
      <div className="linksFooter">
        <a id="ContactoLink" href="/">Contacto</a>
        <a id="soporteLink" href="/">Servicios</a>
        <a id="terminosYcondicionesLink" href="/">Información Útil</a>
        <a id="privacidadLink" href="/">Política de Privacidad</a>
        <a id="pfLink" href="/">Preguntas Frecuentes</a>
      </div>
      <div  className="footerText">
        <p>© Cody Creative 2023 Copyright. Todos los Derechos Reservados </p>
      </div>
    </footer>
  )
}
export default Footer


