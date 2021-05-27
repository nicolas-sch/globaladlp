import React from 'react';
import './expertises.css';
import Expertisestitulo from '../assets/Expertisestitulo.png';
import Expertisestitulomb from '../assets/Tituloexpertisesmb.png';
import Rodapeexpertises from '../assets/Texturarodapeexpertises.png';
import Planejamento from '../assets/Planejamentodigital.png';
import Midia from '../assets/Midiadigital.png';
import Digital from '../assets/Digitalanalytics.png';
import Social from '../assets/Socialmedia.png';
import Criacao from '../assets/Criacaodecampanhas.png';
import Monitoramento from '../assets/Monitoramentodigital.png';
import SEO from '../assets/SEO.png';
import Producao from '../assets/Producaodeconteudo.png';
import Eventos from '../assets/Coberturadeeventos.png';
import Emailmkt from '../assets/Emailmkt.png';
import SAC from '../assets/Sacdigital.png';
import Live from '../assets/Conteudoaovivo.png';
import Web from '../assets/Websites.png';
import Programacao from '../assets/Programacao.png';
import Xabradi from '../assets/Xabradi.png';
import Google from '../assets/Googlepartner.png';
import Facebookmkt from '../assets/Facebookmkt.png';
import Bing from '../assets/Bing.png';
import Linkedinads from '../assets/Linkedinads.png';
import Criteo from '../assets/Criteo.png';


export class Expertises extends React.Component {
    
  render() {
    return (
      <div className="expertisespage" id="expertises">
        <div className="expertises-container">
            <div className="expertises-text">
                <div className="expertises-title">
                    <h2>Expertises</h2>
                    <img src={Expertisestitulo} alt="Expertisestitulo" title="Expertisestitulo" loading="lazy"/>
                </div>
                <div className="expertisesmb-mask">
                    <div>
                        <p>expertisesexpertisesexpertises</p>
                    </div>
                    <div className="expertisesmb-mask-text">
                        <p>expertises</p><h2 className="rosa-exp">expertises</h2><p>expertises</p>
                    </div>
                    <div>
                        <p>expertisesexpertisesexpertises</p>
                    </div>
                </div>
                <div className="expertises-images1">
                    <div className="planejamentoimg">
                        <img src={Planejamento} alt="Expertises" title="Planejamento" loading="lazy"/>
                        <h3>Planejamento<br></br> Digital</h3>
                    </div>
                    <div className="planejamentoimg">
                        <img src={Digital} alt="Expertises" title="Digital" loading="lazy"/>
                        <h3>Digital <br></br>Analytics</h3>
                    </div>
                </div>
                <div className="expertises-images1">
                    <div className="planejamentoimg">
                        <img src={Midia} alt="Expertises" title="Midia" loading="lazy"/>
                        <h3>Mídia<br></br> Digital</h3>
                    </div>
                    <div className="planejamentoimg">
                        <img src={Social} alt="Expertises" title="Social" loading="lazy"/>
                        <h3>Social<br></br> Media</h3>
                    </div>
                </div>
            </div>
            <div className="container2expertises">
                <div className="expertises-images2">
                    <div className="planejamentoimg">
                        <img src={Criacao} alt="Expertises" title="Criacao" loading="lazy"/>
                        <h3>Criação de<br></br> Campanhas</h3>
                    </div>
                    <div className="planejamentoimg">
                        <img src={Monitoramento} alt="Expertises" title="Monitoramento" loading="lazy"/>
                        <h3>Monitoramento<br></br> Digital</h3>
                    </div>
                    <div className="planejamentoimg">
                        <img src={SEO} alt="Expertises" title="SEO" loading="lazy"/>
                        <h3>SEO</h3>
                    </div>
                </div>
                <div className="expertises-images2">
                    <div className="planejamentoimg">
                        <img src={Producao} alt="Expertises" title="Producao" loading="lazy"/>
                        <h3>Produção de<br></br> Conteúdo</h3>
                    </div>
                    <div className="planejamentoimg">
                        <img src={Eventos} alt="Expertises" title="Eventos" loading="lazy"/>
                        <h3>Cobertura de<br></br> Eventos</h3>
                    </div>
                    <div className="planejamentoimg">
                        <img src={Emailmkt} alt="Expertises" title="Emailmkt" loading="lazy"/>
                        <h3>E-mail<br></br> Marketing</h3>
                    </div>
                </div>
                <div className="expertises-images2">
                    <div className="planejamentoimg">
                        <img src={SAC} alt="Expertises" title="SAC" loading="lazy"/>
                        <h3>SAC<br></br> Digital</h3>
                    </div>
                    <div className="planejamentoimg">
                        <img src={Live} alt="Expertises" title="Live" loading="lazy"/>
                        <h3>Conteúdo Ao Vivo<br></br> (Live)</h3>
                    </div>
                    <div className="planejamentoimg">
                        <img src={Web} alt="Expertises" title="Web" loading="lazy"/>
                        <h3>Websites, Landing<br></br> Pages e Aplicativos</h3>
                    </div>
                </div>
            </div>
            <div className="container3expertises">
                <div className="expertises-images3">
                    <div className="planejamentoimg">
                        <img src={Programacao} alt="Expertises" title="Programacao" loading="lazy"/>
                        <h3>Programação</h3>
                    </div>
                </div>
                <div className="expertises-images3">
                    <div className="expertisesimg1" id="rodapetextura">
                        <img src={Rodapeexpertises} alt="Expertises" title="Texturarodape1" loading="lazy"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="badges-container">
            <div className="badges-images-container">
                <div className="badges-images">
                    <span>
                        <img src={Xabradi} alt="Xabradi" title="Xabradi" loading="lazy"/>
                    </span>
                        {/* <img src={Google} alt="Google" title="Google" loading="lazy"/> */}
                        <div class="g-partnersbadge" data-agency-id="2641301998"></div>
                    <span>
                        <img src={Facebookmkt} alt="Facebookmkt" title="Facebookmkt" loading="lazy"/>
                    </span>
                    <span>
                        <img src={Bing} alt="Bing" title="Bing" loading="lazy"/>
                    </span>
                    <span>
                        <img src={Linkedinads} alt="Linkedinads" title="Linkedinads" loading="lazy"/>
                    </span>
                    <span>
                        <img src={Criteo} alt="Criteo" title="Criteo" loading="lazy"/>
                    </span>
                </div>

            </div>
        </div>
      </div>
    );
  }
}

export default Expertises;


