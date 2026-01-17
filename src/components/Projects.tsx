"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Projects.module.css";
import { FiExternalLink, FiGithub, FiBookOpen } from "react-icons/fi";

const projects = [
    {
        title: "Stellar VPN App",
        category: "App / Networking",
        description: "High-performance VPN solution focusing on secure, loss-free data transmission and low-latency protocol optimization.",
        tech: ["Kotlin", "C/C++", "QUIC Protocol", "JNI"],
        links: {}, // No code or live link as requested
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
        title: "Flight Delay Prediction",
        category: "Machine Learning",
        description: "ML model to predict flight delays with high accuracy.",
        tech: ["Python", "Machine Learning"],
        links: { github: "https://github.com/namanviber/Flight-Delay-Prediction" },
        type: "Project"
    },
    {
        title: "Image Forgery Detection",
        category: "Deep Learning",
        description: "Developed algorithms for detecting image splicing with a 92% accuracy rate using a dual U-Net model.",
        tech: ["Python", "Deep Learning"],
        links: { github: "https://github.com/namanviber/Image-Forgery-Detection" },
        type: "Project"
    },
    {
        title: "Movie Recommendation Application",
        category: "Machine Learning",
        description: "Built a movie recommendation app using Flutter and collaborative filtering techniques (SVD model).",
        tech: ["Flutter", "Machine Learning", "Flask", "MongoDB"],
        links: { github: "https://github.com/namanviber/Movie-Recommendation-App" },
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
                        {(showAll ? projects : projects.slice(0, 4)).map((project, i) => (
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
                    </AnimatePresence>
                </div>

                <div className={styles.showMoreContainer} style={{ textAlign: "center", marginTop: "40px" }}>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className={styles.primaryBtn}
                        style={{ padding: "12px 24px", fontSize: "1rem", cursor: "pointer" }}
                    >
                        {showAll ? "Show Less" : "See More"}
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
