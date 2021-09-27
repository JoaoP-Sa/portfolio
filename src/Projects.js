import React from 'react';
import toggle from './toggle';
import myProjects from './myProjects.js';

class Projects extends React.Component{
    render(){
        const projectcard = myProjects.map((item) => (
            <ProjectCard key={item.id}
                         id={item.id}
                         img={item.img}
                         alt={item.alt} 
                         pagelink={item.pagelink}
                         repositorylink = {item.repositorylink}
                         projectdescription = {item.projectdescription}
                         />
        ));

        return(
            <section className="project-section" id="projects">
                <div className="projects-title">
                    <h2>Meus Projetos</h2>
                </div>

                <div className="line"></div>

                <div className="projects-container">
                    {projectcard}
                </div>
            </section>
        );
    }
}


function ProjectCard(props){
    return(
        <div className="project-card">
            <div className="project-img">
                <img src={props.img} alt={props.alt} />
            </div>
            <div className="project-infos">
                <div className="project-attributes">
                    <a target="_blank" rel="noreferrer" href={props.pagelink}><h4><i className="far fa-file"></i> Página do Projeto</h4></a>
                    <br />
                    <a target="_blank" rel="noreferrer" href={props.repositorylink}><h4><i className="fab fa-github"></i> Repositório</h4></a>
                    <br />
                </div>
                <br />
                <p className="detail-btn" onClick={() => toggle(props.id)}>Mais Detalhes</p>
                <div className="project-details" id={props.id}>
                    <p>
                        {props.projectdescription}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Projects;