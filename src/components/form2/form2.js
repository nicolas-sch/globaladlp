import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import './form2.css';

const Form2 = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [assunto, setAssunto] = useState('Assunto')
    const [mensagem, setMensagem] = useState('')

    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://d335luupugsy2.cloudfront.net/js/loader-scripts/21c3b119-62d7-458b-a2ea-867a3342c0a0-loader.js";
      script.async = true;
      document.body.appendChild(script);
    }, [])
  
    const handleSubmit = (e) => {
        this.setState({
            nome: e.target.value
        })
        this.setEmail({
            email: e.target.value
        })
        this.setAssunto({
            assunto: e.target.value
        })
        this.setTelefone({
            telefone: e.target.value
        })
        this.setMensagem({
            mensagem: e.target.value
        })
    }


    return (
        <form className="form2container" onSubmit={handleSubmit}>
            <div className="form-group">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Nome" 
                name="nome" 
                onChange={event => setNome(event.target.value)}
                value={nome}
                />
                <label className="form-label">Nome</label>
                <label className="form-label">Nome</label>
                <div className="error-message">
                    <p>{this.state.nameError}</p>
                </div>

            </div>
            <div className="form-group">
                <input
                type="email" 
                id="email"
                className="form-control" 
                placeholder="Email" 
                name="email"
                onChange={event => setEmail(event.target.value)}
                value={email}
                />
                <label className="form-label">Email</label>
                
            </div>
            <div className="form-group">
                <InputMask 
                mask="(99) 99999-9999"  
                type="text" 
                className="form-control" 
                placeholder="Telefone" 
                name="telefone"
                onChange={event => setTelefone(event.target.value)}
                value={telefone} 
                />
                <label className="form-label">Telefone</label>
            </div>
            <div className="selectcamp">
            <select
            name="Assunto" 
            value={assunto}
            onChange={event => setAssunto(event.target.value)}
            >
                <option selected="selected">Assunto</option>
                <option onChange={event => setAssunto(event.target.value)} value="Quero contratar a Global AD">Quero contratar a Global AD</option>
                <option onChange={event => setAssunto(event.target.value)} value="Contato Administrativo / Financeiro">Contato Administrativo / Financeiro</option>
                <option onChange={event => setAssunto(event.target.value)} value="Quero fazer parte do time">Quero fazer parte do time</option>
                <option onChange={event => setAssunto(event.target.value)} value="Contato geral">Contato geral</option>
            </select>
            </div>
            <div className="form-group1">
                <textarea  
                type="text" 
                placeholder="Mensagem" 
                name="Mensagem" 
                className="form-control1"
                onChange={event => setMensagem(event.target.value)}
                value={mensagem} 
                />
                <label className="form-label">Mensagem</label>
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
                        <button type="submit" class='f-button' data-text='Enviar'>
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

export default Form2;