"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Hero = () => {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.grid}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.content}
                >
                    <motion.p
                        className={styles.greeting}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hi there, I'm
                    </motion.p>

                    <motion.h1
                        className="gradient-text"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Naman Jain<span>.</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        Member of Technical Staff
                    </motion.h2>

                    <motion.p
                        className={styles.bio}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        Professional Software Developer specializing in
                        <span className={styles.highlight}> App & Protocol-level Development</span>,
                        <span className={styles.highlight}> System Design</span>, and
                        <span className={styles.highlight}> AI Agent Workflows</span>.
                        I architect scalable, high-performance solutions and accelerate project lifecycles using advanced AI tools.
                    </motion.p>

                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <a href="#projects" className={styles.primaryBtn}>
                            View My Work
                        </a>
                        <div className={styles.socials}>
                            <a href="https://github.com/namanviber" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
                            <a href="https://linkedin.com/in/namanviber" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
                            <a href="mailto:namanviber@gmail.com"><FiMail /></a>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.visual}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className={styles.blob}></div>
                    <div className={styles.avatarContainer} style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 10,
                        width: '180px',
                        height: '180px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '4px solid var(--accent)'
                    }}>
                        <img
                            src="/avatar.png"
                            alt="Naman Jain"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <motion.div
                        className={styles.techCircle}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        {["QUIC", "KMM", "KOTLIN", "C++", "DOCKER", "AI"].map((tech, i) => (
                            <span key={tech} style={{ transform: `rotate(${i * 60}deg) translateY(-140px)` }}>
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className={styles.scrollDown}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <FiArrowDown />
            </motion.div>
        </section>
    );
};

export default Hero;
