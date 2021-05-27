import React, { Component } from 'react';
import './inform.css';

class Inform extends Component {

    constructor() {
        super()
        this.state={
         showMe:!false
        }
      }
    operation()
    {
      this.setState({
        showMe:!this.state.showMe
      })
    }

    render() {
        return (
            <>
                {
                    this.state.showMe?
                    <div className="inform-page">
                      <div className="inform-title">
                              <p>COVID-19: Estamos trabalhando normalmente em home office, para entrar em contato acesse nosso <a href="https://api.whatsapp.com/send?l=pt&amp;phone=5551980536328&amp;text=Olá,%20gostaria%20de%20conversar%20com%20a%20Global%20AD!" target="_blank">Canal de Whatsapp.</a></p>
                              <div className="btn-modal">
                                  <i class="far fa-times-circle" onClick={()=>this.operation()}/>
                              </div>
                              
                      </div>
                    </div>
                    :null
                }
            </>
          );
    }
  
}

export default Inform;