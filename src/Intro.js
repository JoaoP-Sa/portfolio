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
                    <p>
                        Sou um desenvolvedor web com quase 2 anos de atuação
                        na área, e estou constantemente aprendendo coisas novas 
                        relacionadas a minha área de atuação, além de buscar 
                        sempre aprimorar os conhecimentos que já possuo. Posso 
                        prestar serviços de criação e manutenção de aplicações web, 
                        portfólios e landing pages, além de poder ajudar com a 
                        hospedagem e a configuração destes mesmos sistemas. 
                        Caso precise de algo sinta-se livre para entrar em contato 
                        comigo e expressar sua necessidade pelo meu email 
                        disponibilizado no rodapé da página ^^.
                    </p>
                </div>
            </section>
        );
    }
}

export default Intro;
