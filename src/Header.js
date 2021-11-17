import React from 'react';
import toggle from './toggle';
import {Link} from 'react-scroll'

class Header extends React.Component{
    componentDidMount(){
        const wordsInsert = document.getElementById('insert');
        const wordsStringList = wordsInsert.getAttribute('data-words');
        const wordsList = JSON.parse(wordsStringList);
        let selector = 0;
        let i = 0;


//função que será convertida em objeto que fará a adição ou remoção dos caracteres na tela
        let TxtWrite = function(list){
            this.list = list;
            this.isDeleting = false;
            this.writedTxt = '';
            this.write();
        }
        

/*definindo nosso write como uma função e dentro dela estabelecendo as condições para que os caracteres possam
ser inseridos ou removidos da tela, e o intervalo no qual isso irá acontecer*/
        TxtWrite.prototype.write = function(){
            const myObject = this;
            const myTxt = this.list[selector];
            let wordLength = myTxt.length;
            let delay = 140;
            
//abaixo estamos selecionando o local onde faremos a inserção dos caracteres
            wordsInsert.innerText = this.writedTxt;
            
            if(this.writedTxt !== myTxt && !this.isDeleting){
                this.writedTxt = myTxt.substr(0, i);
            }
            else if(this.writedTxt === myTxt && !this.isDeleting){
                this.isDeleting = true;
                delay = 1500;
                i = 0;
            }
            else if(this.writedTxt !== '' && this.isDeleting){
                this.writedTxt = myTxt.substr(0, wordLength - i);
            }else{
                this.isDeleting = false;
                i = 0;
                selector < this.list.length - 1 ? selector++ : selector = 0;
            }

            i <= wordLength - 1 ? i++ : i = 1;
        
            setTimeout(() => {
                myObject.write();
            }, delay);
        }

         new TxtWrite(wordsList);

//função que dará o efeito de pisca pisca na nossa última linha do texto na tela
        function blink(){
            wordsInsert.classList.toggle('visible');
        }

        setInterval(blink, 400);
    }

    render(){
        return(
            <header>
                <img className="header-wallpaper" src="img/programmingWallPaper.jpg" alt="header background" />
                
                <div className="menu">
                    <ul>
                        <li><Link to="introduction" smooth={true} duration={1000} offset={350}>Apresentação</Link></li>
                        <li><Link to="tecnologies" smooth={true} duration={1000}>Tecnologias</Link></li>
                        <li><Link to="projects" smooth={true} duration={1100} offset={-50}>Projetos</Link></li>
                        <li><Link to="contact" smooth={true} duration={1200}>Contatos e Repositório</Link></li>
                    </ul>
                </div>

                <div className="mob-icon">
                    <i onClick={() => toggle('menuMobList')} className="fas fa-bars"></i>
                </div>
                
                <div className="header-title">
                    <span 
                       data-words='["Front End", "HTML", "CSS", "JavaScript", "React js", "PHP", "MySql"]' 
                       id="insert" className="visible"></span>
                </div>
            </header>
        );
    }
}

export default Header;