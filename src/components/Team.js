import React from 'react';

const Team = () => {
  return (
    <section className="section-white">
      <h1>Our Team</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={require("../images/cesarpacheco.png")} style={{ width: 'auto', height: '120px' }} alt="Team member" className="img-responsive" />
              <h3><b>Cesar Cunha Pacheco</b></h3>
              <p><b>Assistant Professor and Department Head</b></p>
              <p><b>Research areas:</b> Inverse problems, artificial intelligence, bioheat transfer</p>

              <ul className="team-icon">

                <li><a href="mailto:cesarp@id.uff.br" className="mail" target="_blank" rel="noopener noreferrer"><i className="fab fa-mail">
                  <img src={require("../images/logo_email.png")} alt="E-mail" style={{ width: 'auto', height: '30px' }} />
                </i></a></li>

                <li><a href="http://lattes.cnpq.br/4977724521165246" className="lattes" target="_blank" rel="noopener noreferrer"><i className="fab fa-lattes">
                  <img src={require("../images/logo_lattes.png")} alt="Lattes" style={{ width: 'auto', height: '30px' }} />
                </i></a></li>

                <li><a href="https://www.linkedin.com/in/cesarp-uff/" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin">
                  <img src={require("../images/logo_linkedin.png")} alt="LinkedIn" style={{ width: 'auto', height: '30px' }} />
                </i></a></li>

                <li><a href="https://www.scopus.com/authid/detail.uri?authorId=56694119600" className="scopus" target="_blank" rel="noopener noreferrer"><i className="fab fa-scopus">
                  <img src={require("../images/logo_scopus.png")} alt="Scopus" style={{ width: 'auto', height: '30px' }} />
                </i></a></li>

                <li><a href="https://orcid.org/0000-0003-4935-8655" className="orcid" target="_blank" rel="noopener noreferrer"><i className="fab fa-orcid">
                  <img src={require("../images/logo_orcid.png")} alt="ORCID" style={{ width: 'auto', height: '30px' }} />
                </i></a></li>

              </ul>
            </div>

          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={require("../images/isabelaflorindo.png")} style={{ width: 'auto', height: '120px' }} alt="Team member" className="img-responsive" />
              <h3><b>Isabela Florindo Pinheiro</b></h3>
              <p><b>Assistant Professor</b></p>
              <p><b>Research areas:</b> Hybrid numerical-analytica methods, gasification, hydrogen, refrigeration, microfluidics</p>

              <ul className="team-icon">

                <li><a href="mailto:isabelaflorindo@id.uff.br" className="mail" target="_blank" rel="noopener noreferrer"><i className="fab fa-mail">
                  <img src={require("../images/logo_email.png")} alt="E-mail" style={{ width: 'auto', height: '30px' }} />
                </i></a></li>

                <li><a href="http://lattes.cnpq.br/4244258573417514" className="lattes" target="_blank" rel="noopener noreferrer"><i className="fab fa-lattes">
                  <img src={require("../images/logo_lattes.png")} alt="Lattes" style={{ width: 'auto', height: '30px' }} />
                </i></a></li>

                <li><a href="https://www.linkedin.com/in/isabela-florindo-5a4a2555/" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin">
                  <img src={require("../images/logo_linkedin.png")} alt="LinkedIn" style={{ width: 'auto', height: '30px' }} />
                </i></a></li>

                <li><a href="https://www.scopus.com/authid/detail.uri?authorId=57200374882" className="scopus" target="_blank" rel="noopener noreferrer"><i className="fab fa-scopus">
                  <img src={require("../images/logo_scopus.png")} alt="Scopus" style={{ width: 'auto', height: '30px' }} />
                </i></a></li>

                <li><a href="https://orcid.org/0000-0002-2954-1869" className="orcid" target="_blank" rel="noopener noreferrer"><i className="fab fa-orcid">
                  <img src={require("../images/logo_orcid.png")} alt="ORCID" style={{ width: 'auto', height: '30px' }} />
                </i></a></li>

              </ul>
            </div>

          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={require("../images/kleberlisboa.png")} style={{ width: 'auto', height: '120px' }} alt="Team member" className="img-responsive" />
              <h3><b>Kleber Marques Lisboa</b></h3>
              <p><b>Assistant Professor</b></p>
              <p><b>Research areas:</b> Electrochemical cells, hydrogen, membrane distillation, microfluidics, hybrid analytical-numerical methods</p>

              <ul className="team-icon">

                <li><a href="mailto:kmlisboa@id.uff.br" className="mail" target="_blank" rel="noopener noreferrer"><i className="fab fa-lattes">
                  <img src={require("../images/logo_email.png")} alt="E-mail" style={{ width: 'auto', height: '30px' }} />
                </i></a></li>

                <li><a href="http://lattes.cnpq.br/3734240256988290" className="lattes" target="_blank" rel="noopener noreferrer"><i className="fab fa-lattes">
                  <img src={require("../images/logo_lattes.png")} alt="Lattes" style={{ width: 'auto', height: '30px' }} />
                </i></a></li>

                <li><a href="https://br.linkedin.com/in/kleber" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin">
                  <img src={require("../images/logo_linkedin.png")} alt="LinkedIn" style={{ width: 'auto', height: '30px' }} />
                </i></a></li>

                <li><a href="https://www.scopus.com/authid/detail.uri?authorId=56473617600" className="scopus"><i className="fab fa-scopus">
                  <img src={require("../images/logo_scopus.png")} alt="Scopus" style={{ width: 'auto', height: '30px' }} />
                </i></a></li>

                <li><a href="https://orcid.org/0000-0003-0736-5996" className="orcid"><i className="fab fa-orcid">
                  <img src={require("../images/logo_orcid.png")} alt="ORCID" style={{ width: 'auto', height: '30px' }} />
                </i></a></li>

              </ul>
            </div>

          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={require("../images/leandrosphaier.png")} style={{ width: 'auto', height: '120px' }} alt="Team member" className="img-responsive" />
              <h3><b>Leandro Alcoforado Sphaier</b></h3>
              <p><b>Associate Professor and Head of Latermo</b></p>
              <p><b>Research areas:</b> Adsorption, gasification, alcoholic fermentation, hybrid analytical-numerical methods</p>

              <ul className="team-icon">

                <li><a href="mailto:lasphaier@id.uff.br" className="mail" target="_blank" rel="noopener noreferrer"><i className="fab fa-lattes">
                  <img src={require("../images/logo_email.png")} alt="E-mail" style={{ width: 'auto', height: '30px' }} />
                </i></a></li>

                <li><a href="http://lattes.cnpq.br/8948736724490274" className="lattes" target="_blank" rel="noopener noreferrer"><i className="fab fa-lattes">
                  <img src={require("../images/logo_lattes.png")} alt="Lattes" style={{ width: 'auto', height: '30px' }} />
                </i></a></li>

                <li><a href="https://www.linkedin.com/in/leandro-sphaier-a229212a/?originalSubdomain=br" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin">
                  <img src={require("../images/logo_linkedin.png")} alt="LinkedIn" style={{ width: 'auto', height: '30px' }} />
                </i></a></li>

                <li><a href="https://www.scopus.com/authid/detail.uri?authorId=6506755450" className="scopus" target="_blank" rel="noopener noreferrer"><i className="fab fa-scopus">
                  <img src={require("../images/logo_scopus.png")} alt="Scopus" style={{ width: 'auto', height: '30px' }} />
                </i></a></li>

                <li><a href="https://orcid.org/0000-0003-3698-1077" className="orcid" target="_blank" rel="noopener noreferrer"><i className="fab fa-orcid">
                  <img src={require("../images/logo_orcid.png")} alt="ORCID" style={{ width: 'auto', height: '30px' }} />
                </i></a></li>

              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;