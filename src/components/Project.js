import React from 'react';

const Project = ({data, goToProjects}) => {
    return (
        <div style={{marginTop: "100px"}}>
            <div><h1>{data.title}</h1></div>
            <button className="backButton" onClick={goToProjects}>Back to R&D projects</button>
            <div className="project-item">
                <p style={{textAlign: "left"}}><b>Project site:</b> {data.laboratory}</p>
                <p style={{textAlign: "left"}}><b>Company:</b> {data.company}</p>
                <p style={{textAlign: "left"}}><b>TRL:</b> {data.trl}</p>
                <p style={{textAlign: "left"}}><b>Period:</b> {data.date}</p>
                <p style={{textAlign: "left"}}><b>Coordinator:</b> {data.coordinator}</p>
                <p style={{textAlign: "left"}}><b>Members from Latermo:</b> {data.latermoMember}</p>
                <p style={{textAlign: "left"}}><b>Team members:</b> {data.teamMembers}</p>
                <p style={{textAlign: "left"}}><b>Main deliverables:</b><br />
                    <ul>
                        {
                            data.deliverables.map(deliverable => {
                                return (
                                    <li>{deliverable}</li>
                                );
                            })
                        }
                    </ul>
                </p>
            </div>
            <div className="project-item">
                <p style={{textAlign: "left"}}><b>Description:</b></p>
                <p style={{textAlign: "left"}}>{data.abstract}</p>
            </div>
            <button className="backButton" onClick={goToProjects}>Back to R&D projects</button>
        </div>
    );
}

export default Project;