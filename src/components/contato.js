import React from 'react';
import './contato.css';
import Form from './form3/Form'
import Contatotitulo from '../assets/Titulocontato.png';
import Contatotitulomb from '../assets/Titulocontatomb.webp';



export class Contato extends React.Component {

  render() {
    return (
      <div className="contatopage" id="contato">
        <div className="contato-container">
            <div className="contato-text">
                <div className="contato-wrapper1">
                    <div className="contato-title">
                        <h2>Entre em contato e vamos fazer coisas incríveis, juntos.</h2>
                        <img src={Contatotitulo} alt="Contatotitulo" title="Contatotitulo" loading="lazy"/>
                    </div>
                    <div className="contato-infos">
                        <div className="contato-infos-details">
                            <h3>Porto Alegre</h3>
                            <p>Av. Farrapos, 3857<br></br> Bairro Floresta<br></br> CEP 90220-007</p>
                            <a href="tel: +55 51 3237 6773">Telefone: <span> +55 51 3237 6773</span></a><br></br>
                            <a href="https://api.whatsapp.com/send?l=pt&amp;phone=5551980536328&text=Olá,%20gostaria%20de%20conversar%20com%20a%20Global%20AD!"target="_blank"> WhatsApp: <span> +55 51 98053 6328</span></a>

                            <h4>contato@globalad.com.br</h4>
                        </div>
                        <div className="contato-infos-details">
                            <h3>São Paulo</h3>
                            <p>Rua Capitão Ântonio Rosa, 409<br></br> Bairro Jardim Paulista<br></br> CEP 01443-010</p>
                            <a href="tel: +55 11 2888 2381">Telefone: <span> +55 11 2888 2381</span></a><br></br>
                            <span><br></br></span>
                            <h4>contato@globalad.com.br</h4>
                        </div>
                    </div>
                    <div className="contato-btn">
                        <a href="https://globalad.solides.jobs/" target="_blank" class='t-button t-button-slide-up' type="submit" data-text='Trabalhe Conosco'>
                          <span>T</span>
                          <span>R</span>
                          <span>A</span>
                          <span>B</span>
                          <span>A</span>
                          <span>L</span>
                          <span>H</span>
                          <span>E</span>
                          <span> </span>
                          <span>C</span>
                          <span>O</span>
                          <span>N</span>
                          <span>O</span>
                          <span>S</span>
                          <span>C</span>
                          <span>O</span>
                        </a>
                    </div>
                </div>
                
                <div className="form">
                <div className="expertisesmb-mask">
                    <div>
                        <p>contatocontatocontatocontatocontato</p>
                    </div>
                    <div className="expertisesmb-mask-text">
                        <p>contatocontato</p><h2 className="branco-cli">Contato</h2><p>contatocontato</p>
                    </div>
                    <div>
                        <p>contatocontatocontatocontatocontato</p>
                    </div>
                </div>
                    <Form />
                </div>
            </div>

        </div>
      </div>
    );
  }
}

export default Contato;