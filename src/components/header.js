import React from 'react';
import './header.css';
import Video from '../assets/banner.mp4'
// import Topo from '../assets/Topo.webp';
// import Topomb from '../assets/Headerimgmb.webp';

export class Header extends React.Component {

  render() {
    return (
      <div>
        <header id="header">
            <div className="header-video">
              <video autoPlay muted loop>
                <source src={Video} type="video/mp4"/>
              </video>
            </div>
            <div className="header-imagemb">
              {/* <img src={Topomb} alt="imagemdeheadermb" title="imagemdeheadermb" loading="lazy"/> */}
            </div>
        </header>
      </div>
    );
  }
}

export default Header;
