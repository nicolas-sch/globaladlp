import React from 'react';
import './footer.css';
import Logofooter from '../assets/Logofooter.png';


export class Footer extends React.Component {

  render() {
    return (
      <div className="footerpage">
        <div className="footer-container">
            <div className="footer-text">
                    <div className="footer-social">
                      <a href="https://br.linkedin.com/company/globalad" target="_blank"><i class="fab fa-linkedin-in"/></a>
                      <a href="https://www.instagram.com/globalad/" target="_blank"><i class="fab fa-instagram"/></a>
                      <a href="https://www.facebook.com/globalad/" target="_blank"><i class="fab fa-facebook-f"/></a>
                      <a href="https://twitter.com/global_ad" target="_blank"><i class="fab fa-twitter"/></a>
                      <a href="https://www.youtube.com/channel/UCeI5WGdWQ-DahQ4MdukxXCA" target="_blank"><i class="fab fa-youtube"/></a>
                    </div>
                    <div className="footer-title">
                        <p>Copyright © 2021. Global AD – Todos os direitos reservados.</p>
                        {/* <a href="/Privaci">Políticas de Privacidade</a> */}
                    </div>
                    <div className="footer-logo">
                    <img src={Logofooter} alt="Logofooter" title="Logofooter" loading="lazy"/>
                    </div>
            </div>
            <div className="footer-textmb">
              <div className="footer-socialmb">
                <a href="https://br.linkedin.com/company/globalad" target="_blank"><i class="fab fa-linkedin-in"/></a>
                <a href="https://www.instagram.com/globalad/" target="_blank"><i class="fab fa-instagram"/></a>
                <a href="https://www.facebook.com/globalad/" target="_blank"><i class="fab fa-facebook-f"/></a>
                <a href="https://twitter.com/global_ad" target="_blank"><i class="fab fa-twitter"/></a>
                <a href="https://www.youtube.com/channel/UCeI5WGdWQ-DahQ4MdukxXCA" target="_blank"><i class="fab fa-youtube"/></a>
              </div>
              <div className="footer-logomb">
                <img src={Logofooter} alt="Logofooter" title="Logofooter" loading="lazy"/>
              </div>
              <div className="footer-titlemb">
                  <p>Copyright © 2021. Global AD Todos os direitos reservados.</p>
                  {/* <a href="/Privaci">Políticas de Privacidade</a> */}
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;