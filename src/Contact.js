import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <section className="contact-section" id="contact">
                    <h2>Contatos e Repositório</h2>
                    <div className="contatos-container">
                        <br /><br /><br />
                        <div className="contato-box">
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-de-s%C3%A1-oliveira-46b73018b/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        </div>

                        <div className="contato-box">
                            <a href="/#" onClick={emailCopy}><i className="far fa-envelope"></i></a>
                            <input type="text" value="joao.pdesa@hotmail.com" id="myemail" readOnly />
                            
                            <div className="baloon">
                                <span id="baloon">Email Copiado!</span>
                            </div>
                        </div>

                        <div className="contato-box">
                            <a href="https://github.com/JoaoP-Sa" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
            </section>
        );
    };
}

function emailCopy(e){
    e.preventDefault();
    const email = document.getElementById('myemail');

    email.style.display = 'block';
    email.select();
    document.execCommand('copy');
    email.style.display = 'none';

    const baloon = document.getElementById('baloon');
    baloon.style.display = 'inline';
    baloon.style.opacity = 1.0;

    setTimeout(() => {
        baloon.style.opacity = 0;
    }, 500);

    baloon.addEventListener('transitionend', function opacity(){
        baloon.style.display = 'none';
        baloon.removeEventListener('transitionend', opacity);
    });
}

export default Contact