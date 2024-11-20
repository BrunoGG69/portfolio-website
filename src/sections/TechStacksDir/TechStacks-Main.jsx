import { useEffect, useState } from 'react';
import arduinoIcon from '/logos/arduino.svg';
import awsIcon from '/logos/aws.svg';
import cppIcon from '/logos/c++.svg';
import cssIcon from '/logos/css.svg';
import discordIcon from '/logos/discord.svg';
import dockerIcon from '/logos/docker.svg';
import figmaIcon from '/logos/figma.svg';
import firebaseIcon from '/logos/firebase.svg';
import gcloudIcon from '/logos/gcloud.svg';
import gitIcon from '/logos/git.svg';
import githubIcon from '/logos/github.svg';
import htmlIcon from '/logos/html.svg';
import jsIcon from '/logos/js.svg';
import linuxIcon from '/logos/linux.svg';
import nodejsIcon from '/logos/nodejs.svg';
import npmIcon from '/logos/npm.svg';
import pycharmIcon from '/logos/pycharm.svg';
import pythonIcon from '/logos/python.svg';
import raspberryIcon from '/logos/raspberry.svg';
import vscodeIcon from '/logos/vscode.svg';
import webstormIcon from '/logos/webstorm.svg';
import windowsIcon from '/logos/windows.svg';
import tailwindIcon from '/logos/tailwindcss.svg';
import reactIcon from '/logos/react.svg';
import reactNativeIcon from '/logos/reactNative.svg';
import homeassistantIcon from '/logos/homeassistant.svg';

import { techData } from "../../constants/index.js";

const icons = [
    arduinoIcon, awsIcon, cppIcon, cssIcon, discordIcon,
    dockerIcon, figmaIcon, firebaseIcon, gcloudIcon, gitIcon,
    githubIcon, htmlIcon, jsIcon, linuxIcon, nodejsIcon,
    npmIcon, pycharmIcon, pythonIcon, raspberryIcon, vscodeIcon,
    webstormIcon, windowsIcon, tailwindIcon, reactIcon, reactNativeIcon, homeassistantIcon
];

const TechStacksMain = () => {
    const [scrollPosition, setScrollPosition] = useState("start");

    const scroll = (direction) => {
        const container = document.getElementById("scrollable-cards-container");
        const cardWidth = container.querySelector(".tech-card").offsetWidth;
        const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    const handleScroll = () => {
        const container = document.getElementById("scrollable-cards-container");
        const scrollLeft = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (scrollLeft === 0) {
            setScrollPosition("start");
        } else if (scrollLeft === maxScroll) {
            setScrollPosition("end");
        } else {
            setScrollPosition("middle");
        }
    };

    useEffect(() => {
        const container = document.getElementById("scrollable-cards-container");
        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        handleScroll();
    }, []);

    return (
        <div id = "techStacks" className="text-white items-center flex flex-col min-h-screen justify-center overflow-hidden relative">

            {/* Heading */}
            <div className="flex flex-col items-center justify-center pb-10">
                <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold neon-blue rise-up text-center">
                    &lt;Platforms I am Familiar With&gt;
                </h2>
            </div>

            {/* Icons */}
            <div className="flex overflow-hidden items-center justify-center">
                <div className="scroll-container flex space-x-8 md:space-x-16">
                    {/* Concatenate the icons multiple times for a smoother loop */}
                    {icons.concat(icons, icons).map((icon, index) => (
                        <img
                            key={index}
                            loading="lazy"
                            src={icon}
                            alt="logo"
                            className="w-12 h-12 md:w-16 md:h-16 object-contain max-w-none transition-transform duration-200 hover:scale-110"
                        />
                    ))}
                </div>
            </div>

            {/* Scrollable Cards Section */}
            <div className="relative w-full mt-8">
                {/* Left Scroll Button */}
                <div
                    className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 ${scrollPosition === "start" ? "hidden" : ""}`}>
                    <button
                        onClick={() => scroll("left")}
                        className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 focus:outline-none ">
                        <span className="text-xl">{"<"}</span>
                    </button>
                </div>

                {/* Scrollable Cards */}
                <div id="scrollable-cards-container"
                     className="overflow-x-auto flex gap-5 px-5 py-10 snap-x scroll-smooth">

                    {techData.map((tech) => (
                        <div
                            id={tech.id}
                            className="tech-card bg-gradient-to-b from-[#15151b] via-[#15151b] to-[#000000] flex-1 min-w-[300px] mx-auto p-4 rounded-xl shadow-lg border border-gray-700 transition-all hover:scale-105 hover:border-gray-600 transform hover:brightness-125 min-h-[400px] flex flex-col justify-between snap-start"
                        >
                            <div className="relative flex justify-center items-center mb-4">
                                <div
                                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                >
                                    <div
                                        className="w-40 h-40 blur-lg rounded-full"
                                        style={{
                                            background:
                                                'radial-gradient(circle, rgba(255,223,51,0.4), rgba(70,130,180,0.3), transparent)',
                                        }}
                                    ></div>
                                </div>
                                <img
                                    className="w-32 h-32 rounded-lg object-cover m-4 relative z-10"
                                    src = {icons.find((icon) => icon.includes(tech.id))}
                                    alt={`${tech.name} Logo`}
                                />
                            </div>
                            <hr className="my-4 border-gray-600" />
                            <div className="font-jetbrains overflow-hidden flex-grow">
                                <h2 className="text-xl">
                                    <span className="font-bold underline">{tech.type}:</span>
                                    <span> {tech.name}</span>
                                </h2>
                                <ul className="text-[#ffc107] mt-2 space-y-1">
                                    <li>
                                        <span>Features: </span>
                                        <span className="text-white">{tech.features}</span>
                                    </li>
                                    <li>
                                        <span className="text-[#5A9FD4]">Specialty: </span>
                                        <span className="text-white">{tech.specialty}</span>
                                    </li>
                                    <li className="text-[#48B1A3] font-semibold">
                                        Abilities:
                                        <ul className="pl-4 list-disc text-white">
                                            {tech.abilities.map((ability, index) => (
                                                <li key={index}>{ability}</li>
                                            ))}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    ))}

                </div>

                {/* Right Scroll Button */}
                <div
                    className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 ${scrollPosition === "end" ? "hidden" : ""}`}>
                    <button
                        onClick={() => scroll("right")}
                        className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 focus:outline-none">
                        <span className="text-xl">{">"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TechStacksMain;
