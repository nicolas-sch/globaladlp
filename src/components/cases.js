import React from 'react';
import './cases.css';
import Titulocases from '../assets/Titulocases.png';
import Titulocasesmb from '../assets/Titulocasesmb.png';
import Casesaque from '../assets/Casesaque.png';
import Casevale from '../assets/Casevale.png';
import Caseccg from '../assets/Caseccg.png';
import Casemiolo from '../assets/Casemiolo.png';
import Casegerdau from '../assets/Casegerdau.png';
import Casetextura from '../assets/Casetextura.png';

export class Cases extends React.Component {

  render() {
    return (
      <div className="casespage" id="trabalhos">
        <div className="cases-container">
            <div className="cases-text">
                <div className="cases-title">
                    <img src={Titulocases} alt="Casestitulo" />
                </div>
                <div className="cases-titlemb">
                    <img src={Titulocasesmb} alt="Casestitulomb" />
                </div>
            </div>
            <div className="cases-images">
                <img src={Casesaque} alt="Saque" />
                <img src={Casevale} alt="Vale" />
                <img src={Caseccg} alt="CCG" />
                <img src={Casemiolo} alt="Miolo" />
                <img src={Casegerdau} alt="Gerdau" />
                <img src={Casetextura} alt="Textura2" id="textura2"/>
            </div>
            {/* <div className="casessbtnmb">
                <a href="">Ver Mais</a>
            </div> */}
        </div>
      </div>
    );
  }
}

export default Cases;