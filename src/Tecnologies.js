import React from 'react';
import tecnologiesList from './tecnologiesList';

class Tecnologies extends React.Component{
    render(){
        const tecnolist = tecnologiesList;

        return(
            <section className="tec-section" id="tecnologies">
                <div className="tec-card">
                    <div className="card-title">
                        <h1>Tecnologias que Utilizo</h1>
                    </div>

                    <div className="tec-container">
                        {tecnolist.map((item) => (
                                <ItemBox key={item.id}
                                         name={item.name}
                                         img={item.img}
                                         height={item.height}
                                         dimension={item.dimension} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

function ItemBox(props){
    return(
        <div className="item-box">
            <div className="icon">
                <img src={props.img} alt={props.alt} style={props.dimension} />    
            </div>
        </div>
    );
}

export default Tecnologies;