import React, {Component} from 'react';
import './newsletter.css';
import News from '../assets/Newstitulo.png';
import Newsmb from '../assets/Titulonewsmb.png';

const initialState = {
  name: "",
  email: "",
  nameError: "",
  emailError: "",
};

export class Newsletter extends Component {
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

    if (!this.state.name) {
      nameError = "Preencha seu nome.";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Email inválido";
    }

    if (emailError || nameError ) {
      this.setState({ emailError, nameError });
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

      alert(`Obrigado por assinar nossa Newsletter.`)
    }
  };

  render() {
    return (
      <div className="newspage">
        <div className="news-container">
            <form onSubmit={this.handleSubmit} className="news-text">
                    <div className="news-title">
                        <h3>Newsletter</h3>
                        <img src={News} alt="Newstextura" title="Newstextura" loading="lazy"/>
                    </div>
                    <div className="expertisesmb-mask">
                        <div>
                            <p>newsletternewsletternewsletter</p>
                        </div>
                        <div className="expertisesmb-mask-text">
                            <p>newsletter</p><h2 className="branco-cli">newsletter</h2><p>newsletter</p>
                        </div>
                        <div>
                            <p>newsletternewsletternewsletter</p>
                        </div>
                    </div>
                    <div className="news-inputs">
                        <input 
                        className="form-control-news" 
                        type="text" 
                        name="name" 
                        placeholder="Nome"
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                        <label className="form-label-news">Nome</label>
                        <div className="error-message2">
                          <p>{this.state.nameError}</p>
                        </div>
                    </div>
                    <div className="news-inputs">
                        <input 
                        className="form-control-news" 
                        type="text" name="email" 
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                        <label className="form-label-news">Email</label>
                        <div className="error-message2">
                          {this.state.emailError}
                        </div>
                    </div>
                    <div className="btn-news">
                        <button class='n-button' type="submit" data-text='Assinar'>
                          <span>A</span>
                          <span>S</span>
                          <span>S</span>
                          <span>I</span>
                          <span>N</span>
                          <span>A</span>
                          <span>R</span>
                        </button>
                    </div>
                    
            </form>

        </div>
      </div>
    );
  }
}

export default Newsletter;