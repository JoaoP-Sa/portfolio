import React from 'react';
import Header from './Header.js';
import Intro from './Intro.js';
import Tecnologies from './Tecnologies';
import Projects from './Projects';
import Contact from './Contact.js';
import Footer from './Footer.js';
import './css/style.css';
import './css/all.min.css';

class App extends React.Component{
    componentDidMount(){
        const body = document.getElementById('root');

        body.addEventListener('click', function(){
            const menuMobList = document.getElementById('menuMobList');
            const menuMobHeight = menuMobList.clientHeight;

            if(menuMobList.classList.contains('active') && menuMobHeight !== 0){
                let thisHeight = menuMobList.clientHeight + 'px';
                menuMobList.style.height = thisHeight;

                setTimeout(() => {
                    menuMobList.style.height = 0;
                }, 0);
                menuMobList.addEventListener('transitionend', function transitionend(){
                    menuMobList.classList.remove('active');
                    

                    menuMobList.removeEventListener('transitionend', transitionend);
                });
            }
        });
    }

    render(){
        return(
            <div>
                <Header />
                <Intro />
                <Tecnologies />
                <Projects />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default App;