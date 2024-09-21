import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = ({data, goToProjects}) => {
    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context('../images', true, /\.(png|jpe?g|svg)$/)).filter(image => image.includes(data.imageFolder));

    const settings = {
        dots: true,
        infinite: images.length > 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: images.length > 1,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
    };

    return (
        <div style={{marginTop: "100px"}}>
            <div><h1>{data.title}</h1></div>
            <button className="backButton" onClick={goToProjects}>Back to R&D projects</button>
            <div className="project-item">
                <p style={{textAlign: "left"}}><b>Project site:</b> {data.laboratory}</p>
                <p style={{textAlign: "left"}}><b>Sponsor:</b> {data.company}</p>
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
            <button className="backButton" onClick={goToProjects}>Back to R&D projects</button>
            <div className="project-item">
                <p style={{textAlign: "left"}}><b>Description:</b></p>
                <p style={{textAlign: "left"}}>{data.abstract}</p>
            </div>
            <button className="backButton" onClick={goToProjects}>Back to R&D projects</button>
            <div className="project-item">
                <Slider {...settings}>
                    {
                        images.map((image, index) => {
                            return (
                                <div key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "400px" }}>
                                    <img src={image} alt={`Slide ${index}`} style={{ maxWidth: "100%", maxHeight: "100%", margin: "0 auto"}} />
                                </div>
                            );
                        })
                    }
                </Slider>
            </div>
            <button className="backButton" onClick={goToProjects}>Back to R&D projects</button>
        </div>
    );
}

export default Project;