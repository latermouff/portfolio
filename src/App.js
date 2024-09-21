import React, { useState } from 'react';
import Header from './components/Header';
import Team from './components/Team';
import Projects from './components/Projects';
import Project from "./components/Project";
import Skills from './components/Skills';
// import Partners from './components/Partners';
import Local from './components/Local';
import Footer from './components/Footer';
import './App.css';

document.body.style.backgroundColor = "white";

function App() {
  const [showTeam, setShowTeam] = useState(false);
  const [showProjects, setShowProjects] = useState(true);
  const [showProject, setShowProject] = useState(false);
  const [projectData, setProjectData] = useState(null);
  const [showSkills, setShowSkills] = useState(false);
  // const [showPartners, setShowPartners] = useState(false);
  const [showLocal, setShowLocal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const goToTeam = () => {
    setShowTeam(true);
    setShowProjects(false);
    setShowProject(false);
    setShowSkills(false);
    // setShowPartners(false);
    setShowLocal(false);
    setShowDropdown(false);
    window.scrollTo(0, 0);
  };

  const goToProjects = () => {
    setShowTeam(false);
    setShowProjects(true);
    setShowProject(false);
    setShowSkills(false);
    // setShowPartners(false);
    setShowLocal(false);
    setShowDropdown(false);
    window.scrollTo(0, 0);
  };

  const goToProject = (data) => {
    setProjectData(data);
    setShowTeam(false);
    setShowProjects(false);
    setShowProject(true);
    setShowSkills(false);
    // setShowPartners(false);
    setShowLocal(false);
    setShowDropdown(false);
    window.scrollTo(0, 0);
  };

  const goToSkills = () => {
    setShowTeam(false);
    setShowProjects(false);
    setShowProject(false);
    setShowSkills(true);
    // setShowPartners(false);
    setShowLocal(false);
    setShowDropdown(false);
    window.scrollTo(0, 0);
  };

  // const goToPartners = () => {
  //   setShowTeam(false);
  //   setShowProjects(false);
  //   setShowProject(false);
  //   setShowSkills(false);
  //   setShowPartners(true);
  //   setShowLocal(false);
  //   setShowDropdown(false);
  //   window.scrollTo(0, 0);
  // };

  const goToLocal = () => {
    setShowTeam(false);
    setShowProjects(false);
    setShowProject(false);
    setShowSkills(false);
    // setShowPartners(false);
    setShowLocal(true);
    setShowDropdown(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 999 }}>
        <Header/>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0px', background: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '5px' }}>
            <img src={require('./images/logo_latermo.png')} alt="Logo Latermo" style={{ width: 'auto', height: '50px' }} />
          </div>
          <div className="custom-dropdown" style={{ position: 'relative', alignItems: 'center', margin: '5px' }}>
            <div class="dropdown-toggle" onClick={toggleDropdown}>
              <img className="iconButton" src={require('./images/menu.png')} alt="Menu" style={{ width: 'auto', height: '34px' }} />
            </div>
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={goToProjects}>R&D Projects</button>
                <button onClick={goToTeam}>Our Team</button>
                <button onClick={goToSkills}>Skills</button>
                {/* <button onClick={goToPartners}>Partners</button> */}
                <button onClick={goToLocal}>Where to find us?</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div style={{ marginTop: '100px' }}>
        {showTeam && <Team />}
        {showProjects && <Projects goToProject={goToProject} />}
        {showProject && <Project data={projectData} goToProjects={goToProjects} />}
        {showSkills && <Skills />}
        {/* {showPartners && <Partners />} */}
        {showLocal && <Local />}
        <Footer />
      </div>
    </div>
  );
}

export default App;