import React from 'react';

const Skills = () => {
  return (
    <div>
      <div>
        <h1>Skills</h1>
      </div>
      <div className="project-item">
        <h2>Computational skills</h2>
        <h3>Programming languages:</h3>
        <p>C/C++, Fortran, Python, Wolfram Language, Julia, Go</p>
        <h3>Scientific libraries:</h3>
        <p>PETSc, OpenMP, CUDA, NumPy, SciPy, Matplotlib, Pandas</p>
        <h3>CAD/CAE software:</h3>
        <p>Ansys Fluent, Ansys Mechanical, OpenFOAM, Nektar++, COMSOL, SolidWorks, SALOME, GMSH</p>
        <h3>Utilities:</h3>
        <p>Docker, Git</p>
      </div>
      <div className="project-item">
        <h2>Experimental skills</h2>
        <h3>Thermal measurements:</h3>
        <p>Thermocouples, RTDs, infrared thermography, heat flux sensors</p>
        <h3>Fluid mechanics:</h3>
        <p>Flowmeters, pressure sensors, pitot tubes</p>
        <h3>Data acquisition:</h3>
        <p>NI-DAQ, Keysight 34970A, BenchLink, Arduino, LabVIEW</p>
      </div>
    </div>
  );
};

export default Skills;