"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiBriefcase } from "react-icons/fi";

const Contact = () => {
    return (
        <section className={styles.section} id="contact">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={styles.container}
            >
                <h2 className={styles.title}>Let's <span>Connect</span></h2>
                <p className={styles.subtitle}>Currently open to interesting collaborations in Networking, AI, and Protocol development.</p>

                <div className={styles.content}>
                    <div className={styles.info}>
                        <div className={styles.infoItem}>
                            <FiBriefcase className={styles.icon} />
                            <div>
                                <h4>Current Role</h4>
                                <p>Member of Technical Staff</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <FiMapPin className={styles.icon} />
                            <div>
                                <h4>Location</h4>
                                <p>Remote / Global</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <FiMail className={styles.icon} />
                            <div>
                                <h4>Email</h4>
                                <a href="mailto:name@domain.com">name@domain.com</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.socialGrid}>
                        <a href="#" className={styles.socialLink} style={{ "--color": "#0077b5" } as any}>
                            <FiLinkedin />
                            <span>LinkedIn</span>
                        </a>
                        <a href="#" className={styles.socialLink} style={{ "--color": "#333" } as any}>
                            <FiGithub />
                            <span>GitHub</span>
                        </a>
                        <a href="#" className={styles.resumeBtn}>
                            Download Resume
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
