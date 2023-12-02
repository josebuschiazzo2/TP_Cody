import '../styles/footer.css';

import { Link } from 'react-router-dom';

import facebookIcon from '../images/facebookIcon.png';
import githubIcon from '../images/githubIcon.png';
import linkedinIcon from '../images/linkedinIcon.png';
import twitterIcon from '../images/twitterIcon.png';
import youtubeIcon from '../images/youtubeIcon.png';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="socialMedia ">
        <div className="iconSocialMedia ">
          <a href="https://www.Facebook.com">
            <img src={facebookIcon} alt="Logo Facebook" />
          </a>
          <a href="https://www.facebook.com">
            <p className="text-black">Facebook</p>
          </a>
        </div>
        <div className="iconSocialMedia">
          <a href="https://www.youtube.com">
            <img src={youtubeIcon} alt="Logo Youtube" />
          </a>
          < a href="https://www.youtube.com">
            <p className="text-black">YouTube</p>
          </a>
        </div>
        <div className="iconSocialMedia">
          <a href="https://github.com/josebuschiazzo2/TP_Cody">
            <img src={githubIcon} alt="Logo Github" />
          </a> <a href="https://github.com/josebuschiazzo2/TP_Cody">
            <p className="text-black">Github</p>
          </a>
        </div>
        <div className="iconSocialMedia">
          <a href="https://www.Linkedin.com">
            <img src={linkedinIcon} alt="Logo LinkedIn" />
          </a>
          <a href="https://www.linkedin.com">
            <p className="text-black">Linkedin</p>
          </a>
        </div>
        <div className="iconSocialMedia">
          <a href="https://www.Twitter.com">
            <img src={twitterIcon} alt="Logo Twitter" />
          </a>
          <a href="https://www.twitter.com">
            <p className="text-black">Twitter</p>
          </a>
        </div>
      </div>
      <hr id="lineFooter" />
      <div className="linksFooter">
            <li className='lista'>
              <Link id="graficosLink" className={`nav-link active ${props.claseGraficas}`} to="/graficasClimaticas">Gráficas</Link>
            </li>
            <li className='lista'>
              <Link id="noticiasLink" className={`nav-link active ${props.claseNoticias}`} to="/noticias">Noticias</Link>
            </li>
            <li className='lista'>
              <Link id="comunidadLink" className={`nav-link active ${props.claseComunidad}`} to="/comunidad">Comunidad</Link>
            </li>
            <li className='lista'>
              <Link id="nosotrosLink" className={`nav-link active ${props.claseSobreNosotros}`} to="/sobrenosotros">Contactenos</Link>
            </li>
      </div>
      <div  className="footerText">
        <p>© Cody Creative 2023 Copyright. Todos los Derechos Reservados </p>
      </div>
    </footer>
  )
}
export default Footer


