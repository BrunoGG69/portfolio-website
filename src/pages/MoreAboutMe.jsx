import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from "../components/Nav.jsx";
import { timelineData } from "../constants/index.js";
import { FooterMain } from "../sections/index.js";
import { motion } from "motion/react";

const MoreAboutMe = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, [location]);

    return (
        <main className="px-6 bg-black min-h-screen pt-20">
            <Nav />
            {/* Introduction Section */}
            <motion.section
                className="sm:px-16 px-8 py-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h1 className="py-5 flex items-center justify-start font-bold underline font-jetbrains text-white text-2xl sm:text-4xl lg:text-5xl">
                    Introduction
                </h1>
                <p className="font-jetbrains text-white text-md sm:text-xl lg:text-2xl">
                    Hey! I am Prathamesh, but you can call me BrunoGG. I am just a high schooler who totally loves tech. I have been messing around with coding since 2018 and I&#39;m always down to check out new tech stuff. Other than programming, I&#39;m also into playing guitar, coming up with new ideas, and 3D modeling. Currently, I&#39;m getting into software and web development. I really try to level up my skills as I keep learning. I always hunt for fresh challenges and chances to learn something new.
                </p>
            </motion.section>

            {/* Timeline Section */}
            <motion.section
                className="sm:px-16 px-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h1 className="py-5 flex items-center justify-start font-bold underline font-jetbrains text-white text-2xl sm:text-4xl lg:text-5xl">
                    BrunoGG&#39;s Ultimate Tech Roadmap:
                </h1>

                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-white">
                    {timelineData.map((item, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            {item.align === "start" && (
                                <div className="timeline-start mb-10 md:text-end">
                                    <time className="font-mono italic">{item.year}</time>
                                    <div className="timeline-box">
                                        <div className="text-lg font-black">{item.title}</div>
                                        {item.description}
                                    </div>
                                </div>
                            )}
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            {item.align === "end" && (
                                <div className="timeline-end mb-10">
                                    <time className="font-mono italic">{item.year}</time>
                                    <div className="timeline-box">
                                        <div className="text-lg font-black">{item.title}</div>
                                        {item.description}
                                    </div>
                                </div>
                            )}
                            <hr />
                        </motion.li>
                    ))}
                </ul>
            </motion.section>

            {/* Footer Section */}
            <motion.section
                className="border-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <FooterMain />
            </motion.section>
        </main>
    );
};

export default MoreAboutMe;
