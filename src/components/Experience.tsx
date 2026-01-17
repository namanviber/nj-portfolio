"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";

const Experience = () => {
    const experiences = [
        {
            company: "Starten Systems Pvt. Ltd.",
            role: "Member of Technical Staff",
            period: "Aug 2024 -- Present",
            description: "Driving core system architectures and performance optimizations for high-performance VPN applications.",
            highlights: [
                "Built core components of a high-performance VPN Application using MVVM architecture and Retrofit.",
                "Developed a secure JNI-based bridge to integrate QUIC Protocol with Android, improving efficiency.",
                "Designed custom scheduling algorithms, reducing packet loss by 40% and improving speed by 25%.",
                "Worked on QEMU build environments and system image support for cross-platform compatibility.",
                "Streamlined the end-to-end Release Management process for stable deployments."
            ]
        },
        {
            company: "Sidh Organics Pvt Ltd",
            role: "Web Development Intern",
            period: "Jun 2024 -- Aug 2024",
            description: "Revamped corporate web infrastructure and security.",
            highlights: [
                "Modernized the WordPress platform and fixed critical security vulnerabilities."
            ]
        },
        {
            company: "V2 Infotech",
            role: "Software Development Intern",
            period: "Jun 2023 -- Jul 2023",
            description: "Improved mobile application stability and responsiveness.",
            highlights: [
                "Resolved key bugs and optimized UI components using Flutter."
            ]
        }
    ];

    return (
        <section className={styles.section} id="experience">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className={styles.title}>Professional <span>Experience</span></h2>

                <div className={styles.timeline}>
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.role}
                            className={styles.card}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <div className={styles.header}>
                                <div className={styles.roleInfo}>
                                    <h3>{exp.role}</h3>
                                    <h4>{exp.company}</h4>
                                </div>
                                <span className={styles.period}>{exp.period}</span>
                            </div>
                            <p className={styles.desc}>{exp.description}</p>
                            <ul className={styles.highlights}>
                                {exp.highlights.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
