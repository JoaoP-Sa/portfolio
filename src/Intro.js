import React from 'react';
import {Link} from 'react-scroll';

class Intro extends React.Component{
    render(){
        return(
            <section className="intro" id="introduction">
                <div className="menu-list" id="menuMobList">
                    <ul>
                        <li><Link to="introduction" smooth={true} duration={1000} offset={250}>Apresentação</Link></li>
                        <li><Link to="tecnologies" smooth={true} duration={1000} offset={50}>Tecnologias</Link></li>
                        <li><Link to="projects" smooth={true} duration={1100} offset={-20}>Projetos</Link></li>
                        <li><Link to="contact" smooth={true} duration={1200}>Contatos e Repositório</Link></li>
                    </ul>
                </div>

                <div className="intro-background">
                    <div className="mypicture">
                        <img src="img/my_picture.png" alt="minha foto" />
                    </div>

                    <div className="titulo-cargo">
                        <h1><strong>Desenvolvedor </strong> Web</h1>
                        <div className="subtitulo">
                            <h4>João Pedro de Sá Oliveira</h4>
                        </div>
                    </div>
                </div>

                <div className="myintro-title">
                    <div className="intro-title">
                        <h2>Apresentação</h2>
                    </div>

                    <div className="line"></div>
                </div>

                <div className="mydescription">
                    <p>Sou um desenvolvedor nível júnior, tenho mais de 1 ano de atuação na área, e estou 
                       constantemente aprendendo coisas novas relacionadas a desenvolvimento web, além de buscar sempre 
                       aprimorar os conhecimentos que já possuo. Possuo conhecimentos sólidos em <strong>HTML</strong>
                       , <strong>CSS</strong>, <strong>Javascript</strong>, <strong>Typescript</strong>
                       , <strong>Angular</strong>, <strong>React js</strong> e <strong>Vue js</strong>,
                       e meu objetivo a longo prazo é me tornar um profissional fullstack, embora eu
                       possua um foco maior no front end, e busco desenvolver cada vez mais projetos e postá-los no meu github 
                       para aumentar meu repertório e adquirir cada vez mais experiência prática.
                    </p>
                </div>
            </section>
        );
    }
}

export default Intro;