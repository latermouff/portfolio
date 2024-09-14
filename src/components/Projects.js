import React from 'react';
import PetrobrasIcon from "../images/logo_petrobras.png";
import TenarisIcon from "../images/logo_tenaris.png";
import EletronuclearIcon from "../images/logo_eletronuclear.png";
import GALPIcon from "../images/logo_galp.png";
import TotalIcon from "../images/logo_total.png";

import timelineElements from "./TimelineElements";

import {
  VerticalTimeline, VerticalTimelineElement
} from 'react-vertical-timeline-component';

import "react-vertical-timeline-component/style.min.css";

const Projects = () => {
  return (
    <div>
      <h1>R&D Projects</h1>
      <VerticalTimeline lineColor={'#1b89ff51'}>
        {
          timelineElements.map(element => {
            let isPetrobras = element.icon === "logo_petrobras";
            let isTenaris = element.icon === "logo_tenaris";
            let isEletronuclear = element.icon === "logo_eletronuclear";
            let isGALP = element.icon === "logo_galp";

            let showButton = element.buttonText !== undefined;

            return (
              <VerticalTimelineElement
                contentStyle={{ background: '#1b89ff', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #1b89ff' }}
                key={element.id}
                date={<span style={{ color: '#000' }}><b>{element.date}</b></span>}
                iconStyle= {{ display: 'flex', justifyContent: 'center', background: '#fff', alignItems:'center', boxShadow: '0 0 0 4px #1b89ff', borderRadius: '50%' }}
                icon={isPetrobras ? <img src={PetrobrasIcon} alt="Petrobras" width='25px' /> : isTenaris ? <img src={TenarisIcon} alt="Tenaris" width='25px' /> : isEletronuclear ? <img src={EletronuclearIcon} alt="Eletronuclear" width='35px' /> : isGALP ? <img src={GALPIcon} alt="GALP" width='35px' /> : <img src={TotalIcon} alt="Total" width='30px' />}
              >
                <h2 className="vertical-timeline-element-title" style={{color: '#fff'}}>{element.title}</h2>
                <h4 className="vertical-timeline-element-subtitle">{element.location}</h4>
                <h4 className="vertical-timeline-element-subtitle">{element.company}</h4>
                <h4 className="vertical-timeline-element-subtitle">TRL{element.trl}</h4>
                <p><b>Objectives:</b> {element.description}</p>
                {showButton && (
                  <a className={`button ${isPetrobras ? 'petrobras' : isTenaris ? 'tenaris' : 'eletronuclear'}`} href={element.buttonLink}>
                    {element.buttonText}
                  </a>
                )}
              </VerticalTimelineElement>
            );
          })
        }
      </VerticalTimeline>
    </div>
  );
};

export default Projects;