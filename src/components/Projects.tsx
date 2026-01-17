"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Projects.module.css";
import { FiExternalLink, FiGithub, FiBookOpen, FiChevronDown } from "react-icons/fi";

const projects = [
    {
        title: "Stellar VPN App",
        category: "App / Networking",
        description: "High-performance VPN solution focusing on secure, loss-free data transmission and low-latency protocol optimization.",
        tech: ["Kotlin", "C/C++", "QUIC Protocol", "JNI"],
        links: {},
        type: "Project"
    },
    {
        title: "Sidh Organics Platform",
        category: "Web Development",
        description: "Modernized organizational web presence, prioritizing security hardening and performance scalability.",
        tech: ["WordPress", "Security", "Performance"],
        links: { demo: "https://sidhorganics.com" },
        type: "Project"
    },
    {
        title: "Cross-Cultural Animated Storytelling",
        category: "Research",
        description: "A Multimodal and Multilingual Framework for Educational and Entertainment Narratives. Accepted at ICAIN 2025 -- Springer.",
        tech: ["AI", "Multimodal Framework", "Research"],
        links: { paper: "#" },
        type: "Research"
    },
    {
        title: "Multilingual Animation Generator",
        category: "Generative AI",
        description: "Engineered a system to generate short, high-quality videos within 5 minutes from textual input with multi-language support.",
        tech: ["ReactJS", "Python", "Generative AI"],
        links: { github: "https://github.com/namanviber/Multilingual_Animation_Generator_Platform" },
        type: "Project"
    },
    {
        title: "Legal Document Summarizer",
        category: "Natural Language Processing",
        description: "Fine-tuned LLMs for summarizing legal documents from UK and India with high accuracy.",
        tech: ["Python", "NLP", "LLMs"],
        links: {
            github: "https://github.com/namanviber/Legal-AI-Summarizer",
            demo: "https://huggingface.co/spaces/namanviber/LegalAISummarizer"
        },
        type: "Project"
    },
    {
        title: "Flight Delay Prediction",
        category: "Machine Learning",
        description: "Weather-based flight delay prediction using Random Forest and multiple ML models.",
        tech: ["Python", "Machine Learning", "Random Forest"],
        links: {
            github: "https://github.com/namanviber/Flight-Delay-Prediction",
            demo: "https://huggingface.co/spaces/namanviber/Flight_Delay_Prediction"
        },
        type: "Project"
    },
    {
        title: "Movigo",
        category: "Mobile Development",
        description: "Movie recommendation application using collaborative filtering and collaborative techniques.",
        tech: ["Flutter", "Machine Learning", "Firebase"],
        links: {
            github: "https://github.com/namanviber/movigo",
            demo: "https://bit.ly/43dUUEs"
        },
        type: "Project"
    },
    {
        title: "Game Ghoul",
        category: "Web Development",
        description: "Dynamic gaming website for reviews, blogs, and merchandise accessories.",
        tech: ["HTML/CSS", "JavaScript", "E-commerce"],
        links: {
            github: "https://github.com/namanviber/Game-Ghoul-Website",
            demo: "https://namanviber.github.io/"
        },
        type: "Project"
    },
    {
        title: "Image Forgery Detection",
        category: "Computer Vision",
        description: "System for analyzing and identifying manipulation signs in images using digital image processing.",
        tech: ["Python", "Deep Learning", "DIP"],
        links: {
            github: "https://github.com/namanviber/Image-Forgery-Detection-DIP",
            demo: "https://detectimagetampering.streamlit.app/"
        },
        type: "Project"
    },
    {
        title: "ConnectNow",
        category: "Web Development",
        description: "Modern video conferencing app with real-time communication, screen sharing, and recording features.",
        tech: ["WebRTC", "Socket.io", "Node.js"],
        links: {
            github: "https://github.com/namanviber/ConnectNow",
            demo: "https://connectnow.onrender.com"
        },
        type: "Project"
    },
    {
        title: "Grill & Chill",
        category: "Desktop Application",
        description: "Restaurant management system for order processing, menu management, and employee tracking.",
        tech: ["Java", "Swing", "MySQL"],
        links: {
            github: "https://github.com/namanviber/Grill-Chill-Restaurant-Management-App",
            demo: "https://www.youtube.com/watch?v=pI08d6-rERY"
        },
        type: "Project"
    },
    {
        title: "AI Snake Game",
        category: "Reinforcement Learning",
        description: "Intelligent Snake game featuring an agent using Deep Q-Learning to play autonomously.",
        tech: ["Python", "PyTorch", "Deep Q-Learning"],
        links: {
            github: "https://github.com/namanviber/AI-Snake-Game"
        },
        type: "Project"
    },
    {
        title: "Movigo Recommendation API",
        category: "Machine Learning",
        description: "High-performance movie recommendation API using Collaborative Filtering and SVD algorithms.",
        tech: ["Python", "Flask", "SVD", "ML"],
        links: {
            github: "https://github.com/namanviber/Movigo-recommendation"
        },
        type: "Project"
    },
    {
        title: "ConnecTeam Server Recommender",
        category: "Machine Learning",
        description: "ML-powered recommendation system suggesting community servers based on user interests.",
        tech: ["Python", "Machine Learning", "Flask"],
        links: {
            github: "https://github.com/namanviber/ConnecTeam-Server-Recommendation"
        },
        type: "Project"
    },
    {
        title: "CareerBuddy",
        category: "Mobile Development",
        description: "Gamified career guidance app with interactive questionnaires and visual roadmap tracking.",
        tech: ["Flutter", "Dart", "Firebase"],
        links: {
            github: "https://github.com/namanviber/careerbuddy"
        },
        type: "Project"
    }
];

const Projects = () => {
    const [showAll, setShowAll] = React.useState(false);

    return (
        <section className={styles.section} id="projects">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className={styles.title}>Featured <span>Works & Research</span></h2>

                <div className={styles.grid}>
                    <AnimatePresence mode="popLayout">
                        {(showAll ? projects : projects.slice(0, 3)).map((project, i) => (
                            <motion.div
                                layout
                                key={project.title}
                                className={`${styles.card} ${project.type === 'Research' ? styles.researchCard : ''}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={styles.categoryBadge}>
                                    {project.type === 'Research' ? <FiBookOpen /> : null}
                                    {project.category}
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className={styles.techTags}>
                                    {project.tech.map(t => <span key={t}>{t}</span>)}
                                </div>

                                <div className={styles.links}>
                                    {project.links.github && (
                                        <a href={project.links.github} target="_blank" rel="noreferrer">
                                            <FiGithub /> Code
                                        </a>
                                    )}
                                    {project.links.demo && (
                                        <a href={project.links.demo} target="_blank" rel="noreferrer">
                                            <FiExternalLink /> Live
                                        </a>
                                    )}
                                    {project.links.paper && (
                                        <a href={project.links.paper} target="_blank" rel="noreferrer">
                                            <FiExternalLink /> View Paper
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}

                        <motion.div
                            layout
                            key="toggle-card"
                            className={`${styles.card} ${styles.fullWidthCard}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setShowAll(!showAll)}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                minHeight: "100px",
                                gap: "1rem"
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "0" }}>
                                {showAll ? "Show Less" : "See More"}
                            </h3>
                            <FiChevronDown
                                style={{
                                    fontSize: "2rem",
                                    color: "#fff",
                                    transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
                                    transition: "transform 0.3s ease"
                                }}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
