import React from "react";
import "../css/Internship.css";
import "../css/Publications.css";

const MY_NAME = "Hai-Long Qin";

const programs = [
    {
        type: "Program",
        period: "2023.07 – 2023.08",
        location: "Gimhae, South Korea",
        program: "Summer Program for !nnovative Engineering Design (SP!ED 2023)",
        link: "https://ire-asia.org/ire/spied/index.php/spied2023",
        project: "A Machine Vision-Based Automatic Waste Sorting Device",
        authors: [
            { name: "Hai-Long Qin", role: "advisor", link: "https://ieeexplore.ieee.org/author/150117038422451" },
            { name: "Shangmei Liu" },
            { name: "Koki Kawata" },
            { name: "Eunji Choi" },
            { name: "Dongho Kim" },
        ],
        tags: [
            { label: "Completed", type: "completed" },
            { label: "Grand Award (Rank 1)", type: "award" }
        ],
    },
    {
        type: "Program",
        period: "2022.09 – 2023.11",
        location: "Zhenjiang, China",
        program: "National Undergraduate Training Program for Innovation and Entrepreneurship",
        link: "http://gjcxcy.bjtu.edu.cn/NewLXItemListForStudentDetail.aspx?ItemNo=961978&year=2022",
        project: "Camera, LiDAR, and IMU Based Multi-Sensor Fusion SLAM for Indoor Robot Navigation",
        authors: [
            { name: "Hai-Long Qin", link: "https://ieeexplore.ieee.org/author/150117038422451" },
            { name: "Xingchen Zhang" },
            { name: "Jingting Cai" },
            { name: "Mengjie Zhang" },
            { name: "Yi Zhu", role: "advisor" },
        ],
        tags: [
            { label: "Completed", type: "completed" },
            { label: "Outstanding Program", type: "award" }
        ],
    },
];

function renderAuthors(authors) {
    return authors.map((author, i) => {
        let symbol = "";
        if (author.role === "first")   symbol = "⋆";
        if (author.role === "advisor") symbol = "†";

        const isMe = author.name === MY_NAME;
        const authorName = isMe ? (
            <strong className="author-self">
                {author.name + symbol}
            </strong>
        ) : (
            author.name + symbol
        );

        return (
            <span key={i}>
                {author.link ? (
                    <a
                        href={author.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="author-link"
                    >
                        {authorName}
                    </a>
                ) : (
                    authorName
                )}
                {i < authors.length - 1 && ", "}
            </span>
        );
    });
}

function renderTag(tag, i) {
    if (tag.type === "award") {
        return (
            <span key={i} className="tag-item-show award-tag-all">
                #{tag.label}
            </span>
        );
    }
    if (tag.type === "completed") {
        return (
            <span key={i} className="tag-item-show completed-tag-all">
                #{tag.label}
            </span>
        );
    }
    return (
        <span key={i} className="tag-item-show">
            #{tag.label}
        </span>
    );
}

export default function Programs() {
    return (
        <div className="card" id="programs" style={{ marginTop: "1rem" }}>
            <div className="card-title">Programs</div>
            <div className="timeline-container">
                {programs.map((prog, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-label">
                            <div className={`exp-type ${prog.type.toLowerCase()}`}>
                                {prog.type}
                            </div>
                            <div className="timeline-period-label">{prog.period.replace(' - ', '\n–\n')}</div>
                        </div>

                        <div className="timeline-content">
                            <div className="exp-container">
                                <div className="timeline-header">
                                    <div className="exp-organization">
                                        <a
                                            className="program-title"
                                            href={prog.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >{prog.program}</a>
                                        <div className="program-subtitle">{prog.project}</div>
                                    </div>
                                    <div className="exp-period">
                                        <div>{prog.period}</div>
                                        <div className="exp-location">{prog.location}</div>
                                    </div>
                                </div>
                                <div className="publication-authors">
                                    {renderAuthors(prog.authors)}
                                </div>
                                <div className="publication-tags">
                                    {prog.tags.map((tag, i) => renderTag(tag, i))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
