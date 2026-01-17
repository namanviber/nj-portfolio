"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./TechStack.module.css";
import {
    SiKotlin, SiCplusplus, SiPython, SiGo, SiDart, SiPostgresql,
    SiAndroid, SiFlutter, SiReact, SiWordpress, SiOpenai,
    SiDocker, SiGit, SiJenkins, SiAmazon
} from "react-icons/si";
import { FaNetworkWired, FaServer, FaRobot, FaJava } from "react-icons/fa";

const techStack = [
    {
        category: "Core Technologies",
        items: [
            { name: "Kotlin", icon: <SiKotlin />, color: "#7F52FF" },
            { name: "C/C++", icon: <SiCplusplus />, color: "#00599C" },
            { name: "Python", icon: <SiPython />, color: "#3776AB" },
            { name: "Go", icon: <SiGo />, color: "#00ADD8" },
            { name: "Java", icon: <FaJava />, color: "#007396" },
            { name: "Dart", icon: <SiDart />, color: "#0175C2" },
            { name: "SQL", icon: <SiPostgresql />, color: "#336791" },
        ]
    },
    {
        category: "Protocols & Networking",
        items: [
            { name: "QUIC Protocol", icon: <FaNetworkWired />, color: "#00f2ff" },
            { name: "TCP/IP & UDP", icon: <FaNetworkWired />, color: "#00f2ff" },
            { name: "JNI", icon: <FaNetworkWired />, color: "#00f2ff" },
            { name: "Multi-path", icon: <FaNetworkWired />, color: "#00f2ff" },
        ]
    },
    {
        category: "Frameworks & Arch",
        items: [
            { name: "Android SDK", icon: <SiAndroid />, color: "#3DDC84" },
            { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
            { name: "React", icon: <SiReact />, color: "#61DAFB" },
            { name: "WordPress", icon: <SiWordpress />, color: "#21759B" },
            { name: "Gen AI (LLMs)", icon: <SiOpenai />, color: "#412991" },
        ]
    },
    {
        category: "Tools & Automation",
        items: [
            { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
            { name: "Git", icon: <SiGit />, color: "#F05032" },
            { name: "Jenkins", icon: <SiJenkins />, color: "#D24939" },
            { name: "AWS", icon: <SiAmazon />, color: "#FF9900" },
            { name: "QEMU", icon: <FaServer />, color: "#FF9900" },
            { name: "AI Agents", icon: <FaRobot />, color: "#FF9900" },
        ]
    }
];

const TechStack = () => {
    return (
        <section className={styles.section} id="tech">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className={styles.title}>Professional <span>Tech Stack</span></h2>
                <p className={styles.subtitle}>A collection of technologies I use to build robust, high-performance systems.</p>

                <div className={styles.grid}>
                    {techStack.map((group, groupIdx) => (
                        <div key={group.category} className={styles.group}>
                            <h3 className={styles.groupTitle}>{group.category}</h3>
                            <div className={styles.itemsGrid}>
                                {group.items.map((tech, i) => (
                                    <motion.div
                                        key={tech.name}
                                        className={styles.techCard}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <div className={styles.icon} style={{ color: tech.color }}>
                                            {tech.icon}
                                        </div>
                                        <span className={styles.name}>{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default TechStack;
