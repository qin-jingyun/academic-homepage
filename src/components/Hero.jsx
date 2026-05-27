import React from 'react';
import qhl from '../assets/qhl.png';
import qhlFontHuawen from '../assets/qhl_font_huawen.png';
import wechatQr from '../assets/wechat-qr.jpg';
import "../css/Hero.css"
import { FaGithub, FaWeixin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGoogleScholar, FaOrcid } from "react-icons/fa6";
import cv from "../assets/en_cv.pdf"

function Hero() {
    const links = [
        { icon: <MdEmail />, url: "mailto:hailong.qin@bupt.edu.cn" },
        { icon: <FaGithub />, url: "https://github.com/qin-jingyun" },
        { icon: <FaGoogleScholar />, url: "https://scholar.google.com/citations?user=N33wbdEAAAAJ" },
        { icon: <FaOrcid />, url: "https://orcid.org/0009-0002-9114-9881" },
        { icon: <FaWeixin />, url: wechatQr },
    ];

    return (
        <div className="hero-grid">
            <div className="hero-left">
                <img
                    src={qhl}
                    alt="Profile"
                    className="profile-pic"
                />
                <div className="hero-meta">
                    <img src={qhlFontHuawen} alt="Hailong Qin" className="name-font-img" />
                    <div className="meta-subtitle">Master Candidate @ BUPT-AI</div>
                    <div className="meta-description">
                        <div>📖 Lifelong Learner</div>
                        <div>💻 AIGC Researcher</div>
                        <div>🤖 Robot Enthusiast</div>
                    </div>
                    <div className="meta-link">
                        <a
                            className="meta-linkitem"
                            href={cv}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            My Résumé
                        </a>
                    </div>
                    <div className="contact-small">
                        {links.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-link"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                    <div className="small-text">Last Updated Date: 2026/05/28</div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
