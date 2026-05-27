import React from 'react';
import "../css/All.css"

function About() {
    return (
        <div className="about" id="about">
            <div className="intro-text">
                <p>
                    I'm now a <strong>master's student</strong> at the School of Artificial Intelligence,{" "}
                    <a href="https://www.bupt.edu.cn/" target="_blank" rel="noopener noreferrer">
                        Beijing University of Posts and Telecommunications (BUPT)
                    </a>, where I conduct research within the Key Laboratory of Universal Wireless Communications (Ministry of Education).
                </p>
                <p>
                    I received my B.S. degree in <strong>Communication Engineering</strong>, with a minor in <strong>Data Science</strong>, from{" "}
                    <a href="https://www.ujs.edu.cn/" target="_blank" rel="noopener noreferrer">
                        Jiangsu University
                    </a>{" "}
                    in June 2024. As an undergraduate, I received research training in <strong>Robotics</strong> under Prof. Yi Zhu and studied at the Elite College of Jiangsu University, where I engaged in interdisciplinary learning. I was then admitted to BUPT <strong>without the entrance examination</strong> to pursue my M.S. degree under the supervision of Prof.{" "}
                    <a href="https://scholar.google.com/citations?user=0I_YtFsAAAAJ" target="_blank" rel="noopener noreferrer">
                        Jincheng Dai
                    </a>.
                </p>
                <p>
                    My research interests lie in <strong>Machine Intelligence</strong> and <strong>Cognitive Communication</strong>, with a current focus on <strong>Generative World Modeling</strong>. I aim to develop generative world models that allow machines to understand, convey, and interact with human intent more efficiently. My longer-term goal is to work toward <strong>Symbiotic Intelligence</strong> that supports human-machine collaboration.
                </p>

                <div className="callout">I am open to research assistant and collaboration opportunities. Please feel free to reach out about any potential openings <strong>: )</strong></div>
            </div>
        </div>
    );
}

export default About;