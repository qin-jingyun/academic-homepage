import React, { useState } from "react";
import "../css/Publications.css";

import teaser_jsac              from "../assets/paper_image/vgtt.svg";
import teaser_ou                from "../assets/paper_image/ou.svg";
import teaser_comst             from "../assets/paper_image/comst.svg";
import teaser_nehad             from "../assets/paper_image/nehad.svg";
import teaser_semcod            from "../assets/paper_image/semcod.svg";
import teaser_thu               from "../assets/paper_image/thu.svg";
import teaser_zte               from "../assets/paper_image/zte.svg";
import teaser_undergraduate     from "../assets/paper_image/undergraduate_thesis.svg";
import abs                      from "../assets/thesis/undergraduate_abstract.pdf";

const MY_NAME = "Hai-Long Qin";
const acceptanceTags = new Set(["Oral", "Spotlight", "Highlight", "Poster", "Survey", "Tutorial", "Magazine", "Trans.", "Dissertation"]);

const publications = [
    {
        id: "vgtt",
        title: "VGTT: Feed-Forward Visual Geometry Token Transmission for 6G Immersive Communication",
        abstract: "Synchronizing the 3D physical world with its digital counterparts is a fundamental real-to-sim task of digital twin networks (DTNs), which support real-time and application-aware services for 6G immersive communication. To build such a digital twin, the receiver requires multiple geometric attributes that downstream 3D tasks use together. Existing methods separate the representation and transmission of these attributes: occupancy-unit paradigm sends raw 3D primitives in one specific format such as point clouds, while pixel-feature paradigm sends compressed 2D views without conveying geometry, leaving the receiver to recover it. To address these limitations, we propose Visual Geometry Token Transmission (VGTT), a new paradigm that transmits geometry-aware semantic tokens as a unified representation through cross-view spatial reasoning at the transmitter, and predicts multiple 3D attributes from these tokens at the receiver in a single feed-forward pass. Under bandwidth and channel constraints, VGTT treats geometric semantics and spatial details as two complementary levels and integrates three channel-aware components built upon neural joint source-channel coding to handle bandwidth allocation, channel protection, and feature recovery in an end-to-end manner. Experiments confirm that VGTT achieves a favorable bandwidth-latency-fidelity trade-off while maintaining channel robustness and task versatility. VGTT thus offers a scalable foundation for closed-loop DTNs in 6G immersive communication.",
        authors: [
            { name: "Hai-Long Qin", link: "https://ieeexplore.ieee.org/author/150117038422451" },
            { name: "Jincheng Dai", role: "advisor", link: "https://scholar.google.com/citations?user=0I_YtFsAAAAJ" },
            { name: "Sixian Wang", link: "https://scholar.google.com/citations?user=f9s8H6UAAAAJ" },
            { name: "Guo Lu", link: "https://guolusjtu.github.io/guoluhomepage" },
            { name: "Lei Luo", link: "https://scholar.google.com/citations?user=jvrxePoAAAAJ" },
            { name: "Ce Zhu", link: "https://scholar.google.com/citations?user=C7iZbYMAAAAJ" },
            { name: "Wenjun Zhang", link: "https://ieeexplore.ieee.org/author/37278428800" },
            { name: "Ping Zhang", link: "https://ieeexplore.ieee.org/author/37274503400" },
        ],
        venues: [
            { name: "Under Review", type: "journal" },
        ],
        links: {
            msg: "🚧 Preprint coming soon...",
            web:   "https://qin-jingyun.github.io/VGTT",
        },
        image: teaser_jsac,
        tags: ["Selected", "In Submission", "Immersive Communication", "Digital Twin", "Computer Vision"],
    },
    {
        id: "ou",
        title: "Diffusion Guidance as Ornstein-Uhlenbeck Noise",
        abstract: "Diffusion guidance is the mechanism that steers reverse sampling toward desired conditions in conditional diffusion generation. Existing guidance methods, despite their diverse formulations, share a rigid design: the guidance term is computed pointwise from the current state at every step and applied as a deterministic drift toward the target, with no information carried across the sampling trajectory. We argue that this rigid design is the structural cause of mode collapse, oversaturation, and the misleading artifacts widely observed under strong or noisy conditioning, since it offers no mechanism to absorb the uncertainty inherent in the conditioning signals from which guidance is computed. We propose modeling diffusion guidance as Ornstein-Uhlenbeck (OU) noise, an elastic alternative endowing guidance with temporal memory through mean-reversion and bounded fluctuation: it tracks the target on average while permitting structured deviation around it. Under four mild assumptions of target tracking, bounded variance, temporal coherence, and Markovianity, we prove that the OU process is the unique canonical form, whether the target is fixed or state-dependent. This perspective unifies classifier, reward, measurement, and classifier-free guidance, and exposes their implicit rigidity as the deterministic limit of OU guidance. Experiments across conditional image generation, offline reinforcement learning, inverse problems, and out-of-distribution detection confirm its consistent gains in the diversity-fidelity trade-off and robustness under imperfect conditioning.",
        authors: [
            { name: "Hai-Long Qin", link: "https://ieeexplore.ieee.org/author/150117038422451" },
            { name: "Sixian Wang", link: "https://scholar.google.com/citations?user=f9s8H6UAAAAJ" },
            { name: "Guo Lu", link: "https://guolusjtu.github.io/guoluhomepage" },
            { name: "Jincheng Dai", role: "advisor", link: "https://scholar.google.com/citations?user=0I_YtFsAAAAJ" },
        ],
        venues: [
            { name: "Under Review", type: "conference" },
        ],
        links: {
            msg: "🚧 Preprint coming soon...",
        },
        image: teaser_ou,
        tags: ["In Submission", "Machine Learning", "Generative Models", "Stochastic Dynamics"],
    },
    {
        id: "comst",
        title: "Generative AI Meets 6G and Beyond: Diffusion Models for Semantic Communications",
        abstract: "Semantic communications mark a paradigm shift from bit-accurate transmission toward meaning-centric communication, essential as wireless systems approach theoretical capacity limits. The emergence of generative AI has catalyzed generative semantic communications, where receivers reconstruct content from minimal semantic cues by leveraging learned priors. Among generative approaches, diffusion models stand out for their superior generation quality, stable training dynamics, and rigorous theoretical foundations. However, the field currently lacks systematic guidance connecting diffusion techniques to communication system design, forcing researchers to navigate disparate literatures. This article provides the first comprehensive tutorial on diffusion models for generative semantic communications. We present score-based diffusion foundations and systematically review three technical pillars: conditional diffusion for controllable generation, efficient diffusion for accelerated inference, and generalized diffusion for cross-domain adaptation. In addition, we introduce an inverse problem perspective that reformulates semantic decoding as posterior inference, bridging semantic communications with computational imaging. Through analysis of human-centric, machine-centric, and agent-centric scenarios, we illustrate how diffusion models enable extreme compression while maintaining semantic fidelity and robustness. By bridging generative AI innovations with communication system design, this article aims to establish diffusion models as foundational components of next-generation wireless networks and beyond.",
        authors: [
            { name: "Hai-Long Qin", link: "https://ieeexplore.ieee.org/author/150117038422451" },
            { name: "Jincheng Dai", role: "advisor", link: "https://scholar.google.com/citations?user=0I_YtFsAAAAJ" },
            { name: "Guo Lu", link: "https://guolusjtu.github.io/guoluhomepage" },
            { name: "Shuo Shao", link: "https://ieeexplore.ieee.org/author/37086424888" },
            { name: "Sixian Wang", link: "https://scholar.google.com/citations?user=f9s8H6UAAAAJ" },
            { name: "Tongda Xu", link: "https://tongdaxu.github.io" },
            { name: "Wenjun Zhang", link: "https://ieeexplore.ieee.org/author/37278428800" },
            { name: "Ping Zhang", link: "https://ieeexplore.ieee.org/author/37274503400" },
            { name: "Khaled B. Letaief", link: "https://eekhaled.home.ece.ust.hk" },
        ],
        venues: [
            { name: "IEEE COMST", type: "journal" },
        ],
        links: {
            acm:   "https://ieeexplore.ieee.org/document/11506355",
            arxiv: "https://arxiv.org/pdf/2511.08416",
            web:   "https://qin-jingyun.github.io/Awesome-DiffComm",
            code:  "https://github.com/qin-jingyun/Awesome-DiffComm",
        },
        image: teaser_comst,
        tags: ["Tutorial", "Semantic Communication", "Generative Models", "Inverse Problems"],
    },
    {
        id: "nehad",
        title: "Neural Hamiltonian Deformation Fields for Dynamic Scene Rendering",
        abstract: "Representing and rendering dynamic scenes with complex motions remains challenging in computer vision and graphics. Recent dynamic view synthesis methods achieve high-quality rendering but often produce physically implausible motions. We introduce NeHaD, a neural deformation field for dynamic Gaussian Splatting governed by Hamiltonian mechanics. Our key observation is that existing methods using MLPs to predict deformation fields introduce inevitable biases, resulting in unnatural dynamics. By incorporating physics priors, we achieve robust and realistic dynamic scene rendering. Hamiltonian mechanics provides an ideal framework for modeling Gaussian deformation fields due to their shared phase-space structure, where primitives evolve along energy-conserving trajectories. We employ Hamiltonian neural networks to implicitly learn underlying physical laws governing deformation. Meanwhile, we introduce Boltzmann equilibrium decomposition, an energy-aware mechanism that adaptively separates static and dynamic Gaussians based on their spatial-temporal energy states for flexible rendering. To handle real-world dissipation, we employ second-order symplectic integration and local rigidity regularization as physics-informed constraints for robust dynamics modeling. Additionally, we extend NeHaD to adaptive streaming through scale-aware mipmapping and progressive optimization. Extensive experiments demonstrate that NeHaD achieves physically plausible results with a rendering quality-efficiency trade-off. To our knowledge, this is the first exploration leveraging Hamiltonian mechanics for neural Gaussian deformation, enabling physically realistic dynamic scene rendering with streaming capabilities.",
        authors: [
            { name: "Hai-Long Qin", link: "https://ieeexplore.ieee.org/author/150117038422451" },
            { name: "Sixian Wang", link: "https://scholar.google.com/citations?user=f9s8H6UAAAAJ" },
            { name: "Guo Lu", link: "https://guolusjtu.github.io/guoluhomepage" },
            { name: "Jincheng Dai", role: "advisor", link: "https://scholar.google.com/citations?user=0I_YtFsAAAAJ" },
        ],
        venues: [
            { name: "SIGGRAPH Asia 2025", type: "conference" },
        ],
        links: {
            acm:    "https://dl.acm.org/doi/10.1145/3757377.3764000",
            arxiv:  "https://arxiv.org/pdf/2512.10424",
            web:    "https://qin-jingyun.github.io/NeHaD/",
            code:   "https://github.com/qin-jingyun/NeHaD",
            poster: "https://qin-jingyun.github.io/NeHaD/assets/poster.pdf",
            slide:  "https://qin-jingyun.github.io/NeHaD/assets/slide.pdf",
            video:  "https://www.youtube.com/watch?v=5MwP_wGIUVA",
        },
        image: teaser_nehad,
        tags: ["Selected", "Oral", "Computer Graphics", "Computer Vision", "Physics Modeling"],
    },
    {
        id: "semcod",
        title: "Neural Coding Is Not Always Semantic: Toward the Standardized Coding Workflow in Semantic Communications",
        abstract: "Semantic communication, leveraging advanced deep learning techniques, emerges as a new paradigm that meets the requirements of next-generation wireless networks. However, current semantic communication systems, which employ neural coding for feature extraction from raw data, have not adequately addressed the fundamental question: Is general feature extraction through deep neural networks sufficient for understanding semantic meaning within raw data in semantic communication? This article is thus motivated to clarify two critical aspects: semantic understanding and general semantic representation. This article presents a standardized definition on semantic coding, an extensive neural coding scheme for general semantic representation that clearly represents underlying data semantics based on contextual modeling. With these general semantic representations obtained, both human- and machine-centric end-to-end data transmission can be achieved through only minimal specialized modifications, such as fine-tuning and regularization. This article contributes to establishing a commonsense that semantic communication extends far beyond mere feature transmission, focusing instead on conveying compact semantic representations through context-aware coding schemes.",
        authors: [
            { name: "Hai-Long Qin", link: "https://ieeexplore.ieee.org/author/150117038422451" },
            { name: "Jincheng Dai", role: "advisor", link: "https://scholar.google.com/citations?user=0I_YtFsAAAAJ" },
            { name: "Sixian Wang", link: "https://scholar.google.com/citations?user=f9s8H6UAAAAJ" },
            { name: "Xiaoqi Qin", link: "https://scholar.google.com/citations?user=mrEeosAAAAAJ" },
            { name: "Shuo Shao", link: "https://ieeexplore.ieee.org/author/37086424888" },
            { name: "Kai Niu", link: "https://scholar.google.com/citations?user=Dm9tNxoAAAAJ" },
            { name: "Wenjun Xu", link: "https://scholar.google.com/citations?user=NC-ZeKAAAAAJ" },
            { name: "Ping Zhang", role: "advisor", link: "https://ieeexplore.ieee.org/author/37274503400" },
        ],
        venues: [
            { name: "IEEE COMSTD", type: "journal" },
        ],
        links: {
            acm:   "https://ieeexplore.ieee.org/document/11145020",
            arxiv: "https://arxiv.org/pdf/2505.18637",
            web:   "https://qin-jingyun.github.io/SemCod/",
            code:  "https://github.com/qin-jingyun/SemCod",
        },
        image: teaser_semcod,
        tags: ["Magazine", "Semantic Communication", "Representation Learning", "Computer Vision"],
    },
    {
        id: "thu2025",
        title: "Diffusion Model-Empowered Generative Visual Semantic Communication",
        abstract: "End-to-end semantic communication extracts semantic features via deep learning to enable intent-driven transmission with markedly higher efficiency. However, discriminative-model paradigms rely on symbol-level rate-distortion optimization and maximum likelihood estimation over received signals alone, falling short of users' perceptual needs. The generative visual semantic communication paradigm addresses this by adopting a rate-distortion-perception framework that aligns transmission with human perception through maximum a posteriori estimation, with diffusion models becoming a key tool for their controllable visual generation. Given the lack of a systematic account of how diffusion models empower semantic communication, this survey models the communication process as a mathematical inverse problem and presents a general methodology for solving semantic compression and transmission via posterior sampling. It shows that diffusion-based decoders can achieve efficient compression while maintaining transmission resilience under adverse channel conditions, and outlines future directions for this paradigm.",
        authors: [
            { name: "Hai-Long Qin", link: "https://ieeexplore.ieee.org/author/150117038422451" },
            { name: "Jincheng Dai", role: "advisor", link: "https://scholar.google.com/citations?user=0I_YtFsAAAAJ" },
            { name: "Sixian Wang", link: "https://scholar.google.com/citations?user=f9s8H6UAAAAJ" },
            { name: "Shengshi Yao", link: "https://ieeexplore.ieee.org/author/37088692565" },
            { name: "Kai Niu", link: "https://scholar.google.com/citations?user=Dm9tNxoAAAAJ" },
            { name: "Wenjun Xu", link: "https://scholar.google.com/citations?user=NC-ZeKAAAAAJ" },
        ],
        venues: [
            { name: "Journal of Tsinghua University (Science and Technology)", type: "journal" },
        ],
        links: {
            acm:  "https://jst.tsinghuajournals.com/CN/10.16511/j.cnki.qhdxxb.2025.27.046",
            cnki: "https://kns.cnki.net/kcms2/article/abstract?v=MXvIvFkaDQwhOzwN7JsrDd5w6LR4SbjsX-YmXVr2xskqWyH4WgqWKwHSMZZ6vU49bh3ooLfDFdd4dzVwXV9HoiHnE_Y5Zihybg4BmjPWXczSKuykDSHCYWRq-UvAqoV4eGR_-GYwehuv3EnaxJQKDFPTUdv1aZUGtZxyDm5--5U=&uniplatform=NZKPT",
        },
        image: teaser_thu,
        tags: ["Popular Paper", "Survey", "Semantic Communication", "Generative Models", "Inverse Problems"],
    },
    {
        id: "zte2025",
        title: "Intent-Driven Intelligent and Concise Communications",
        abstract: "As communication evolves into the 6G era, traditional paradigms relying on physical resource expansion are increasingly struggling to meet the burgeoning demand for intelligent and ubiquitous connectivity. An intent-driven intelligent and concise communications system is proposed, which seamlessly integrates insights from cognitive psychology, information theory, and artificial intelligence. Using semantic tokens as the basic representation units, the system establishes a communication framework centered on information utility. It incorporates intelligent agents with perception, cognition, and feedback capabilities to achieve context-aware semantic modeling and compressed transmission of heterogeneous data. The system's key enabling technologies comprehensively include semantic encoding, intent parsing, robust transmission, and reliable decoding. The proposed architecture supports differentiated communication needs, including high-fidelity human-human interaction, efficient human-machine control, and collaborative multi-agent systems. It is particularly effective and robust under bandwidth-limited and dynamically varying channel conditions. This study reviews the development trajectory and technical foundations of intelligent and concise communication, providing theoretical and practical guidance for building efficient, general-purpose, and sustainable communication systems.",
        authors: [
            { name: "Jincheng Dai", link: "https://scholar.google.com/citations?user=0I_YtFsAAAAJ" },
            { name: "Xiaoqi Qin", link: "https://scholar.google.com/citations?user=mrEeosAAAAAJ" },
            { name: "Hai-Long Qin", link: "https://ieeexplore.ieee.org/author/150117038422451" },
            { name: "Ping Zhang", role: "advisor", link: "https://ieeexplore.ieee.org/author/37274503400" },
        ],
        venues: [
            { name: "ZTE Technology Journal", type: "journal" },
        ],
        links: {
            acm:  "https://zxtx.cbpt.cnki.net/portal/journal/portal/client/paper/69360b28df5497261898bbaab6dd2d20",
            cnki: "https://kns.cnki.net/kcms2/article/abstract?v=FFXUSKHsLlapQ9Bw_Ag-v8NVjhn7Z__CJUhbKE4j9iBZodoea7Qn6fdVqyLa7vGGlH6yiiCn8VviW6-57hvy9jrB8LWIwEtipq-U_dHwuds-votRffEj2tcY2w4-3IO4pej9W9MB9v_TQ1YUelPo7J23bVM4xv3eOQMWKdZOJxJ9Hh8fUEE2ww==&uniplatform=NZKPT",
        },
        image: teaser_zte,
        tags: ["Magazine", "Semantic Communication", "Representation Learning", "Interdisciplinary Basic Research"],
    },
    {
        id: "undergraduate",
        title: "Research on Context-Aware Continuous Generative Modeling",
        abstract: "Mainstream generative models often rely on discrete latent modeling, where quantization causes information loss and weak semantic awareness, ultimately limiting the realism and semantic consistency of generated images. This dissertation addresses this bottleneck through context-aware continuous generative modeling, and introduces three continuous visual modeling approaches unified by a Transformer-based contextual semantic self-feedback mechanism: H2ST, a decoder-only Transformer over a quantization-free latent space for sequence-based generation; TDPS, which integrates Transformer attention with adaptive layer normalization into the diffusion denoising process; and HTAG, a hierarchical Transformer generator trained under the GAN paradigm with implicit neural representations for high-resolution synthesis. All three proposed models achieve lower FID scores than compared baselines on ImageNet and FFHQ benchmarks, and are shown to follow scaling-law behavior, suggesting a viable path toward large vision models.",
        authors: [
            { name: "Hai-Long Qin", link: "https://ieeexplore.ieee.org/author/150117038422451" },
            { name: "Yi Zhu", role: "advisor" },
            { name: "Jincheng Dai", link: "https://scholar.google.com/citations?user=0I_YtFsAAAAJ", role: "advisor" },
        ],
        venues: [
            { name: "Undergraduate Thesis", type: "thesis" },
        ],
        links: {
            abstract: abs,
        },
        image: teaser_undergraduate,
        tags: ["Dissertation", "Generative Models", "Computer Vision", "Representation Learning"],
    },
];


const tagColors = {
    conference: "conference",
    journal: "journal",
    workshop: "workshop",
    wip: "wip",
    thesis: "thesis",
    exhibition: "exhibition",
};

const tagStyleMap = {
    "Computer Vision": "#555555",
    "Generative Models": "#555555",
    "Computer Graphics": "#555555",
    "Embodied Robotics": "#555555",
    "Representation Learning": "#555555",
    "Semantic Communication": "#555555",
};

export default function Publications() {
    const [selectedTag, setSelectedTag] = useState("");

    const filteredPublications = selectedTag
        ? publications.filter((p) => p.tags.includes(selectedTag))
        : publications;

    const handleTagClick = (tag) => {
        setSelectedTag(selectedTag === tag ? "" : tag);
    };
    const handleSelectChange = (event) => {
        const newTag = event.target.value;
        handleTagClick(newTag);
    };

    return (
        <div className="publications" id="publications" style={{marginTop:"1rem"}}>
            <div className="publications-select">
                <div className="card-title">
                    Publications
                </div>

                <select
                    className="tag-select-filter"
                    value={selectedTag}
                    onChange={handleSelectChange}
                >
                    <option value="">All</option>
                    {Object.keys(tagStyleMap).map((tag) => (
                        <option key={tag} value={tag}>
                            {tag}
                        </option>
                    ))}
                </select>
            </div>

            <div className="publications-info">
                <div className="publications-info-small">* indicates equal contribution, and † denotes the corresponding author.</div>
            </div>

            <div className="publications-list">
                {filteredPublications.map((paper, index) => (
                    <div key={index} className="publication-card" id={paper.id}>
                        {paper.image && (
                            <img
                                src={paper.image}
                                alt={paper.title}
                                className="publication-image"
                            />
                        )}

                        <div className="publication-content">

                            <div className="publication-venue">
                                {paper.venues.map((v, vi) => (
                                    <span
                                        key={vi}
                                        className={`venue-tag ${tagColors[v.type] || ""}`}
                                    >
                                        {v.name}
                                    </span>
                                ))}
                            </div>

                            <div className="publication-title-wrapper">
                                <div className="publication-title">{paper.title}</div>
                                {paper.abstract && (
                                    <div className="abstract-popup">{paper.abstract}</div>
                                )}
                            </div>

                            <div className="publication-authors">
                                {paper.authors.map((author, i) => {
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
                                            {i < paper.authors.length - 1 && ", "}
                                        </span>
                                    );
                                })}
                            </div>

                            <div className="publication-tags">
                                {paper.tags.map((tag, i) => {
                                    if (tag === "Selected") {
                                        return (
                                            <span key={i} className="tag-item-show rainbow-tag-all">
                                                #{tag}
                                            </span>
                                        );
                                    } else if (tag === "In Submission") {
                                        return (
                                            <span key={i} className="tag-item-show submission-tag-all">
                                                #{tag}
                                            </span>
                                        );
                                    } else if (tag === "Popular Paper") {
                                        return (
                                            <span key={i} className="tag-item-show popular-tag-all">
                                                #{tag}
                                            </span>
                                        );
                                    } else if (acceptanceTags.has(tag)) {
                                        return (
                                            <span key={i} className="tag-item-show oral-tag-all">
                                                #{tag}
                                            </span>
                                        );
                                    } else return (
                                        <span key={i} className="tag-item-show">
                                            #{tag}
                                        </span>
                                    );
                                })}
                            </div>

                            <div className="publication-links">
                                {paper.links.acm && (
                                    <a href={paper.links.acm} target="_blank" rel="noopener noreferrer">
                                        Paper
                                    </a>
                                )}
                                {paper.links.arxiv && (
                                    <a href={paper.links.arxiv} target="_blank" rel="noopener noreferrer">
                                        arXiv
                                    </a>
                                )}
                                {paper.links.web && (
                                    <a href={paper.links.web} target="_blank" rel="noopener noreferrer">
                                        Project Page
                                    </a>
                                )}
                                {paper.links.code && (
                                    <a href={paper.links.code} target="_blank" rel="noopener noreferrer">
                                        GitHub Repository
                                    </a>
                                )}
                                {paper.links.pdf && (
                                    <a href={paper.links.pdf} target="_blank" rel="noopener noreferrer">
                                        PDF
                                    </a>
                                )}
                                {paper.links.cnki && (
                                    <a href={paper.links.cnki} target="_blank" rel="noopener noreferrer">
                                        CNKI
                                    </a>
                                )}
                                {paper.links.poster && (
                                    <a href={paper.links.poster} target="_blank" rel="noopener noreferrer">
                                        Poster
                                    </a>
                                )}
                                {paper.links.slide && (
                                    <a href={paper.links.slide} target="_blank" rel="noopener noreferrer">
                                        Slide
                                    </a>
                                )}
                                {paper.links.video && (
                                    <a href={paper.links.video} target="_blank" rel="noopener noreferrer">
                                        Video
                                    </a>
                                )}
                                {paper.links.msg && (
                                    <div className="publications-msg">{paper.links.msg}</div>
                                )}
                                {paper.links.abstract && (
                                    <a href={paper.links.abstract} target="_blank" rel="noopener noreferrer">
                                        Abstract
                                    </a>
                                )}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
