import React from 'react';
import "../css/All.css"

export default function SelectedAwards() {
    const awards = [
        {
            text: "[2025] National Scholarship for Master Graduate Students ",
            highlight: "(Top 2%)",
        },
        {
            text: "[2024 – 2025] Academic Excellence Scholarship in Beijing University of Posts and Telecommunications ",
            highlight: "(Top 5%)",
        },
        {
            text: "[2024] Excellent Undergraduate Thesis Award of Jiangsu Province ",
            highlight: "(Top 1%)",
        },
        {
            text: "[2023] National College Students Market Research and Analysis Competition ",
            highlight: "(Digital Economy Track, Bronze Award)",
        },
        {
            text: "[2022 – 2023] China University Intelligent Robot Creative Contest ",
            highlight: "(Machine Vision Track, Silver & Bronze Awards)",
        },
        {
            text: "[2022] China University Business Elite Challenge ",
            highlight: "(Innovation & Entrepreneurship Track, Silver Award)",
        },
        {
            text: "[2022] China Robot Competition & RoboCup China Open ",
            highlight: "(Machine Vision Track, Bronze Award)",
        },
        {
            text: "[2020 – 2024] Academic Excellence Scholarship in Jiangsu University ",
            highlight: "(Top 5%)",
        },
    ];


    return (
        <div className="card" id="awards" style={{marginTop:"1rem"}}>
            <div className="card-title">Selected Awards</div>
            <div className="awards-list">
                {awards.map((award, index) => (
                    <div key={index} className="award-item">
                        <span className="award-icon">✦ </span>
                        <span className="award-text">
                            {award.text}
                            <span className="award-highlight">{award.highlight}</span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
