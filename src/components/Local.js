import React from 'react';
import '../App.css';

const Local = () => {
  return (
    <div>
      <h1>Where to find us?</h1>
      <div class="local-item">
        <h2>E-mail and social media</h2>
        <p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <a href="mailto:latermouff1@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/logo_email.png")} alt="E-mail" style={{ width: 'auto', height: '30px', marginRight: '5px' }} />
            </a>
            latermouff1@gmail.com<br />
          </div>
        </p>
        <p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <a href="https://www.youtube.com/@latermo2641" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/logo_youtube.png")} alt="YouTube" style={{ width: 'auto', height: '25px', marginRight: '5px', verticalAlign: 'middle' }} />
            </a>
            @latermo2641<br />
          </div>
        </p>
        <p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <a href="https://www.linkedin.com/company/laborat%C3%B3rio-de-termoci%C3%AAncias-latermo/" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/logo_linkedin.png")} alt="LinkedIn" style={{ width: 'auto', height: '30px', marginRight: '5px', verticalAlign: 'middle' }} />
            </a>
            @laboratório-de-termociências-latermo<br />
          </div>
        </p>
        <p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <a href="https://www.instagram.com/latermo_uff/" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/logo_instagram.png")} alt="Instagram" style={{ width: 'auto', height: '30px', marginRight: '5px', verticalAlign: 'middle' }} />
            </a>
            @latermo_uff<br />
          </div>
        </p>
        <p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <a href="https://github.com/latermouff/" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/logo_github.png")} alt="GitHub" style={{ width: 'auto', height: '30px', marginRight: '5px', verticalAlign: 'middle' }} />
            </a>
            @latermouff<br />
          </div>
        </p>
      </div>
      <div class="local-item">
        <p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={require("../images/logo_location.png")} alt="Address" style={{ width: 'auto', height: '30px', marginRight: '5px' }} />
          Rua Passo da Pátria 156<br />
          Bl. E, room 206-D<br />
          São Domingos, Niterói, RJ<br />
          ZIP: 24210-240<br />
          Brazil
          </div>
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.007906764762!2d-43.1314192!3d-22.9052984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9981004eaaab8d%3A0x65d824011bf9818a!2sLaborat%C3%B3rio%20de%20Termoci%C3%AAncias%20-%20LATERMO!5e0!3m2!1spt-BR!2sbr!4v1697041234567!5m2!1spt-BR!2sbr"
          style={{ border: 0, height: "350px", width: "95%" }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Local;