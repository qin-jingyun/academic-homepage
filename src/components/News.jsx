import React from 'react';
import "../css/All.css"

function News() {
    const news = [
        {
            time: "2026.05",
            content: <>My first-authored tutorial paper was published in <a href="#comst" className="news-ref">IEEE Communications Surveys &amp; Tutorials</a>.</>
        },
        {
            time: "2025.12",
            content: <>I presented my first-authored paper <a href="#nehad" className="news-ref">NeHaD</a> at <a href="https://asia.siggraph.org/2025" className="news-ref" target="_blank" rel="noopener noreferrer">SIGGRAPH Asia 2025</a> in Hong Kong, China. Feel free to reach out!</>
        },
        {
            time: "2025.11",
            content: <>My first-authored survey paper (in Chinese) was published in the <a href="#thu2025" className="news-ref">Journal of Tsinghua University (Science and Technology)</a>.</>
        },
        {
            time: "2025.08",
            content: <>My first-authored paper was published in <a href="#semcod" className="news-ref">IEEE Communications Standards Magazine</a>.</>
        },
        {
            time: "2025.07",
            content: <>My first-authored paper (in Chinese) was published in <a href="#zte2025" className="news-ref">ZTE Technology Journal</a>.</>
        },
        {
            time: "2025.04",
            content: <>I attended <a href="https://iclr.cc/Conferences/2025" className="news-ref" target="_blank" rel="noopener noreferrer">ICLR 2025</a> in Singapore. Feel free to reach out!</>
        },
        {
            time: "2024.10",
            content: <>My <a href="#undergraduate" className="news-ref">undergraduate dissertation</a> received the Excellent Undergraduate Thesis Award of Jiangsu Province.</>
        },
        {
            time: "2024.06",
            content: <>I graduated from Jiangsu University and received the Outstanding Graduate Scholarship. Next stop, BUPT!</>
        },
    ]

    return (
        <div className="News" id="news">
            <div className="card-title">News</div>
            <ul className="news-list">
                {news.map((item, index) => (
                    <li key={index}>
                        <div className="news-time">{item.time}</div>
                        <div className="news-content">{item.content}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default News;