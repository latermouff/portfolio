import React from 'react';

const Local = () => {
  return (
    <div>
      <h1>Where to find us?</h1>
      <p>
        <b>E-mail:</b> kmlisboa@id.uff.br<br />
      </p>
      <p>
        <b>Phone:</b> +55 21 2629-9617<br />
      </p>
      <p>
        <b>Address:</b><br />
        Rua Passo da Pátria 156<br />
        Bl. E, room 206-D<br />
        São Domingos, Niterói, RJ<br />
        ZIP: 24210-240<br />
        Brazil
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.007906764762!2d-43.1314192!3d-22.9052984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9981004eaaab8d%3A0x65d824011bf9818a!2sLaborat%C3%B3rio%20de%20Termoci%C3%AAncias%20-%20LATERMO!5e0!3m2!1spt-BR!2sbr!4v1697041234567!5m2!1spt-BR!2sbr"
        width="350"
        height="263"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Local;