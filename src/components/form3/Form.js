import React, {useEffect, useState, Component} from "react";
import './Form.css'
import InputMask from 'react-input-mask';



const initialState = {
  name: "",
  email: "",
  telefone: "",
  assunto: "",
  mensagem: "",
  nameError: "",
  emailError: "",
  telefoneError: "",
  assuntoError: "",
  mensagemError: "",
};



export class ValiationForm extends Component {
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://d335luupugsy2.cloudfront.net/js/loader-scripts/21c3b119-62d7-458b-a2ea-867a3342c0a0-loader.js";
    script.async = true;
    document.body.appendChild(script);
  }
  

  state = initialState;


  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let telefoneError = "";
    let assuntoError = "";
    let mensagemError = "";

    if (!this.state.name) {
      nameError = "Preencha seu nome.";
    }

    if (!this.state.telefone) {
      telefoneError = "Preencha seu telefone.";
    }

    if (this.state.assunto == `Assunto`) {
      assuntoError = "Escolha um assunto.";
    }

    if (!this.state.mensagem) {
      mensagemError = "Preencha sua mensagem.";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Email inválido";
    }

    if (emailError || nameError || telefoneError || assuntoError || mensagemError) {
      this.setState({ emailError, nameError, telefoneError, assuntoError, mensagemError });
      return false;
    }

    return true;
  };


  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);

      alert(`Obrigado, em breve entraremos em contato`)
    }
  };

  render() {
    return (
      <form className="form2container" onSubmit={this.handleSubmit}>
        <div className="form-group"> 
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Nome"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label className="form-label">Nome</label>
          <div className="error-message">
            <p>{this.state.nameError}</p>
          </div>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label className="form-label">Email</label>
          <div className="error-message">
            {this.state.emailError}
          </div>
        </div>
        <div className="form-group">
          <InputMask 
          mask="(99) 99999-9999"  
          type="text" 
          className="form-control" 
          placeholder="Telefone" 
          name="telefone"
          onChange={this.handleChange}
          value={this.state.telefone} 
          />
          <label className="form-label">Telefone</label>
          <div className="error-message">
            {this.state.telefoneError}
          </div>
        </div>
        <div className="selectcamp">
          <select
          name="assunto"
          type="text"
        >
              <option selected="selected">Assunto</option>
              <option name="Assunto" type="text" value="Quero contratar a Global AD">Quero contratar a Global AD</option>
              <option name="Assunto" type="text" value="Contato Administrativo / Financeiro">Contato Administrativo / Financeiro</option>
              <option name="Assunto" type="text" value="Quero fazer parte do time">Quero fazer parte do time</option>
              <option name="Assunto" type="text" value="Contato geral">Contato geral</option>
          </select>
          <div className="error-message">
            {this.state.assuntoError}
          </div>
        </div>
        <div className="form-group1">
          <textarea  
          type="text" 
          placeholder="Mensagem" 
          name="mensagem" 
          className="form-control1"
          onChange={this.handleChange}
          value={this.state.mensagem} 
          />
          <label className="form-label">Mensagem</label>
          <div className="error-message1">
            {this.state.mensagemError}
          </div>
        </div>
        <div className="checkbox-container">
          <div className="checkbox-wrapper">
              <label className="checkbox" for="myCheckboxId">
                  <input className="checkbox__input" type="checkbox" id="myCheckboxId"/>
                  <div className="checkbox__box"></div>
                  <p>Quero receber informações por email</p>
              </label>
              {/* <label className="checkbox1" for="myCheckboxId1">
                  <input className="checkbox__input1" type="checkbox" id="myCheckboxId1"/>
                  <div className="checkbox__box1"></div>
                  <p>Concordo com as <a>Políticas de Privacidade</a></p>
              </label> */}
          </div>
          <div className="form-button">
              <button type="submit" class='f-button f-button-slide-up' data-text='Enviar'>
                  <span>E</span>
                  <span>N</span>
                  <span>V</span>
                  <span>I</span>
                  <span>A</span>
                  <span>R</span>
              </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ValiationForm;