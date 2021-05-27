import React from 'react';
import './blog.css';
import Blogtitulo from '../assets/Tituloblog.png';
import Blogtitulomb from '../assets/Tituloblogmb.webp';
import Blog1 from '../assets/blog3.jpg';
import Blog2 from '../assets/blog4.png';


export class Blog extends React.Component {

  render() {
    return (
      <div className="blogpage" id="blog">
        <div className="blog-container">
            <div className="blog-text">
                <div className="blog-title">
                    <h3>Blog</h3>
                    <img src={Blogtitulo} alt="Blogtitulo" title="Titleblog" loading="lazy"/>
                </div>
                <div className="expertisesmb-mask">
                    <div>
                        <p>blogblogblogblogblogblogblogblogblog</p>
                    </div>
                    <div className="expertisesmb-mask-text">
                        <p>blogblogblogblog</p><h2 className="rosa-exp">Blog</h2><p>blogblogblogblog</p>
                    </div>
                    <div>
                        <p>blogblogblogblogblogblogblogblogblog</p>
                    </div>
                </div>

                <div className="blog-card-container">
                    <div className="blogimg">
                      <div className="blog-image-container">
                        <a href="https://globalad.com.br/blog/esg-o-que-e/" rel="noreferrer" target="_blank"><img src={Blog1} alt="Blog" title="Blog1" loading="lazy" /></a>
                      </div>
                        <a href="https://globalad.com.br/blog/esg-o-que-e/" rel="noreferrer" target="_blank"><h4>O que é ESG e por que é tão importante?</h4></a>
                        <a href="https://globalad.com.br/blog/esg-o-que-e/" rel="noreferrer" target="_blank"><p>ESG: Você muito provavelmente já deve ter ouvido diferentes pessoas mencionarem essas três letras...</p></a>
                        <a href="https://globalad.com.br/blog/esg-o-que-e/" rel="noreferrer" target="_blank" data-text='Leia Mais' className="leiamaisbtn leiamais-slide-up">
                          <span>L</span>
                          <span>E</span>
                          <span>I</span>
                          <span>A</span>
                          <span> </span>
                          <span>M</span>
                          <span>A</span>
                          <span>I</span>
                          <span>S</span>
                        </a>
                    </div>
                    
                </div>
                <div className="blog-card-container">
                    <div className="blogimg">
                      <div className="blog-image-container">
                        <a href="https://globalad.com.br/blog/guia-de-redes-sociais-colaboradores-nexa-resources/" target="_blank"><img src={Blog2} alt="Blog" title="Blog2" loading="lazy"/></a>
                      </div>
                        <a href="https://globalad.com.br/blog/guia-de-redes-sociais-colaboradores-nexa-resources/" target="_blank"><h4>Guia de Redes Sociais para Colaboradores</h4></a>
                        <a href="https://globalad.com.br/blog/guia-de-redes-sociais-colaboradores-nexa-resources/" target="_blank"><p>Em uma ação conjunta para enaltecer e guiar Embaixadores da Marca, criamos um Guia de Boas Práticas nas Redes Sociais...</p></a>
                        <a href="https://globalad.com.br/blog/guia-de-redes-sociais-colaboradores-nexa-resources/" target="_blank" data-text='Leia Mais' className="leiamaisbtn leiamais-slide-up">
                          <span>L</span>
                          <span>E</span>
                          <span>I</span>
                          <span>A</span>
                          <span> </span>
                          <span>M</span>
                          <span>A</span>
                          <span>I</span>
                          <span>S</span>
                        </a>
                    </div>
                    <a href="https://globalad.com.br/blog/" target="_blank" className="blogbtnmb">Ir para o blog</a>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Blog;