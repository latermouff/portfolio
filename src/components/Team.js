import React from 'react';
import teamElements from './TeamElements';

const Team = () => {
  return (
    <section className="section-white">
      <h1>Our Team</h1>
      <div className="container">
        <div className="row">
        {  
          teamElements.map(element => {
            return(
              <div className="col-sm-6 col-md-4">
                <div className="team-item">
                  <img src={element.photo} style={{ width: 'auto', height: '120px' }} alt="Team member" className="img-responsive" />
                  <h3><b>{element.name}</b></h3>
                  <p><b>{element.position}</b></p>
                  <p><b>Research interests:</b> {element.researchInterests}</p>

                  <ul className="team-icon">

                    <li><a href={element.email} className="mail" target="_blank" rel="noopener noreferrer"><i className="fab fa-mail">
                      <img src={require("../images/logo_email.png")} alt="E-mail" style={{ width: 'auto', height: '30px' }} />
                    </i></a></li>

                    <li><a href={element.lattes} className="lattes" target="_blank" rel="noopener noreferrer"><i className="fab fa-lattes">
                      <img src={require("../images/logo_lattes.png")} alt="Lattes" style={{ width: 'auto', height: '30px' }} />
                    </i></a></li>

                    <li><a href={element.linkedin} className="linkedin" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin">
                      <img src={require("../images/logo_linkedin.png")} alt="LinkedIn" style={{ width: 'auto', height: '30px' }} />
                    </i></a></li>

                    <li><a href={element.scopus} className="scopus" target="_blank" rel="noopener noreferrer"><i className="fab fa-scopus">
                      <img src={require("../images/logo_scopus.png")} alt="Scopus" style={{ width: 'auto', height: '30px' }} />
                    </i></a></li>

                    <li><a href={element.orcid} className="orcid" target="_blank" rel="noopener noreferrer"><i className="fab fa-orcid">
                      <img src={require("../images/logo_orcid.png")} alt="ORCID" style={{ width: 'auto', height: '30px' }} />
                    </i></a></li>

                  </ul>
                </div>

              </div>
            )
          })
        }

        </div>
      </div>
    </section>
  );
};

export default Team;