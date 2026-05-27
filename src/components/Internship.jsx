import React, {useState} from "react";
import "../css/Internship.css";
import mit from "../assets/logo/MIT.png"
import nus from "../assets/logo/NUS.png"

export default function Internship() {
    const experiences = [
        {
            type: "Research",
            organization: {
                name: "Massachusetts Institute of Technology (MIT)",
                link: "https://www.csail.mit.edu/",
                logo: mit
            },
            period: "2022.08 – 2023.04",
            role: "Research Intern, Computer Science and Artificial Intelligence Laboratory (CSAIL)",
            location: "Cambridge MA, USA",
            details: [
                <span><name>Highlights:</name> Conducted research on <strong>medical image segmentation</strong> (brain MRI lesion segmentation). Proposed a deep neural network architecture that integrates a CNN encoder and Swin Transformer in a cascaded manner to form a coarse-to-fine encoder for capturing multi-scale semantic and fine-grained features; designed an asymmetric skip connection mechanism that densely connects shallow encoder features to multiple decoder layers for enhanced spatial detail recovery; adopted a GhostNet-based lightweight decoder to improve segmentation efficiency.</span>,
            ]
        },
        {
            type: "Research",
            organization: {
                name: "National University of Singapore (NUS)",
                link: "https://cde.nus.edu.sg/ece/",
                logo: nus,
                logoClass: "org-nus-container"
            },
            period: "2021.01 – 2021.02",
            role: "Visiting Student, Department of Electrical and Computer Engineering (ECE)",
            location: "Singapore",
        },
    ];

    const [selectedTag, setSelectedTag] = useState("");

    const handleTagClick = (tag) => {
        setSelectedTag(selectedTag === tag ? "" : tag);
    };
    const handleSelectChange = (event) => {
        const newTag = event.target.value;
        handleTagClick(newTag);
    };

    const filteredExperiences = selectedTag
        ? experiences.filter(exp => exp.type === selectedTag)
        : experiences;

    return (
        <div className="card" id="internship" style={{marginTop:"1rem"}}>
            <div className="publications-select">
                <div className="card-title">Internship</div>
                <select
                    className="tag-select-filter"
                    value={selectedTag}
                    onChange={handleSelectChange}
                >
                    <option value="">All</option>
                    <option key={"Work"} value={"Work"}>Work</option>
                    <option key={"Research"} value={"Research"}>Research</option>
                    {/*<option key={"Project"} value={"Project"}>Project</option>*/}
                </select>
            </div>
            <div className="timeline-container">
            {filteredExperiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-label">
                            <div className={`exp-type ${exp.type.toLowerCase()}`}>
                                {exp.type}
                            </div>
                            <div className="timeline-period-label">{exp.period.replace(' - ', '\n–\n')}</div>
                        </div>

                        <div className="timeline-content">

                            {exp.organization.logo && (
                                <div className={exp.organization.logoClass || "org-logo-container"}>
                                    <img src={exp.organization.logo} alt={`${exp.organization.name} Logo`}
                                         className="org-logo"/>
                                </div>
                            )}

                            <div className="exp-container">
                                    <div className="timeline-header">
                                        <div className="exp-organization">
                                            <a
                                                className="exp-organization-name"
                                                href={exp.organization.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >{exp.organization.name}</a>
                                            <div className="exp-role">{exp.role}</div>
                                        </div>

                                        <div className="exp-period">
                                            <div>{exp.period}</div>
                                            <div className="exp-location">{exp.location}</div>
                                        </div>
                                    </div>


                                {exp.details && (
                                    <ul className="exp-details">
                                        {exp.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                )}

                                {exp.projects && (
                                    <ul className="exp-projects">
                                        {exp.projects.map((proj, i) => (
                                            <li key={i}>

                                                <div className="project-roles">
                                                    {proj.name}
                                                    {proj.roles.map((role, idx) => (
                                                        <span key={idx} className="role-tag">
                                                            {role}
                                                        </span>
                                                    ))}
                                                    {proj?.link?.map((link) => (
                                                        <span className="role-link">{link}</span>
                                                    ))}
                                                </div>

                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            </div>
                        </div>
                        ))}
            </div>
        </div>
    );
}
