import { useEffect, useState } from 'react';
import arduinoIcon from '../../assets/logos/arduino.svg';
import awsIcon from '../../assets/logos/aws.svg';
import cppIcon from '../../assets/logos/c++.svg';
import cssIcon from '../../assets/logos/css.svg';
import discordIcon from '../../assets/logos/discord.svg';
import dockerIcon from '../../assets/logos/docker.svg';
import figmaIcon from '../../assets/logos/figma.svg';
import firebaseIcon from '../../assets/logos/firebase.svg';
import gcloudIcon from '../../assets/logos/gcloud.svg';
import gitIcon from '../../assets/logos/git.svg';
import githubIcon from '../../assets/logos/github.svg';
import htmlIcon from '../../assets/logos/html.svg';
import jsIcon from '../../assets/logos/js.svg';
import linuxIcon from '../../assets/logos/linux.svg';
import nodejsIcon from '../../assets/logos/nodejs.svg';
import npmIcon from '../../assets/logos/npm.svg';
import phpIcon from '../../assets/logos/php.svg';
import portainerIcon from '../../assets/logos/portainer.svg';
import pycharmIcon from '../../assets/logos/pycharm.svg';
import pythonIcon from '../../assets/logos/python.svg';
import raspberryIcon from '../../assets/logos/raspberry.svg';
import vercelIcon from '../../assets/logos/vercel.svg';
import vscodeIcon from '../../assets/logos/vscode.svg';
import webstormIcon from '../../assets/logos/webstorm.svg';
import windowsIcon from '../../assets/logos/windows.svg';
import tailwindIcon from '../../assets/logos/tailwindcss.svg';

const icons = [
    arduinoIcon, awsIcon, cppIcon, cssIcon, discordIcon,
    dockerIcon, figmaIcon, firebaseIcon, gcloudIcon, gitIcon,
    githubIcon, htmlIcon, jsIcon, linuxIcon, nodejsIcon,
    npmIcon, pycharmIcon, pythonIcon,
    raspberryIcon, vscodeIcon, webstormIcon, windowsIcon, tailwindIcon
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
        <div className="text-white items-center flex flex-col overflow-hidden relative">

            {/* Heading */}
            <div className="flex flex-col items-center justify-center pb-10">
                <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold neon-blue rise-up text-center">
                    &lt;Platforms I'm Familiar With&gt;
                </h2>
            </div>

            {/* Scrollable Icon Container */}
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

                <div id="scrollable-cards-container"
                     className="overflow-x-auto flex gap-5 px-5 py-10 snap-x scroll-smooth">

                    {/* Cards (replace these with your actual cards content) */}
                    <div
                        className="tech-card bg-gradient-to-b from-[#15151b] via-[#15151b] to-[#000000] flex-1 min-w-[300px] mx-auto p-4 rounded-xl shadow-lg border border-gray-700 transition-all hover:scale-105 hover:border-gray-600 transform hover:brightness-125 min-h-[400px] flex flex-col justify-between snap-start">
                        <div className="relative flex justify-center items-center mb-4">
                            <div
                                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="w-40 h-40 blur-lg rounded-full"
                                     style={{background: "radial-gradient(circle, rgba(255,223,51,0.4), rgba(70,130,180,0.3), transparent)"}}></div>
                            </div>
                            <img className="w-32 h-32 rounded-lg object-cover m-4 relative z-10" src={pythonIcon}
                                 alt="Python Logo"/>
                        </div>
                        <hr className="my-4 border-gray-600"/>
                        <div className="font-jetbrains overflow-hidden flex-grow">
                            <h2 className="text-xl"><span className="font-bold underline">Language:</span>
                                <span> Python</span></h2>
                            <ul className="text-[#ffc107] mt-2 space-y-1">
                                <li><span>Features: </span><span className="text-white">High-level, versatile</span>
                                </li>
                                <li><span className="text-[#5A9FD4]">Specialty: </span><span className="text-white">Web & Software Development</span>
                                </li>
                                <li className="text-[#48B1A3] font-semibold">Abilities:
                                    <ul className="pl-4 list-disc text-white">
                                        <li>Web Development</li>
                                        <li>Data Science</li>
                                        <li>Machine Learning</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*C++ Card*/}
                    <div
                        className="tech-card bg-gradient-to-b from-[#15151b] via-[#15151b] to-[#000000] flex-1 min-w-[300px] mx-auto p-4 rounded-xl shadow-lg border border-gray-700 transition-all hover:scale-105 hover:border-gray-600 transform hover:brightness-125 min-h-[400px] flex flex-col justify-between snap-start">
                        <div className="relative flex justify-center items-center mb-4">
                            <div
                                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="w-40 h-40 blur-lg rounded-full"
                                     style={{background: "radial-gradient(circle, rgba(255,223,51,0.4), rgba(70,130,180,0.3), transparent)"}}></div>
                            </div>
                            <img className="w-32 h-32 rounded-lg object-cover m-4 relative z-10" src={cppIcon}
                                 alt="C++ Logo"/>
                        </div>
                        <hr className="my-4 border-gray-600"/>
                        <div className="font-jetbrains overflow-hidden flex-grow">
                            <h2 className="text-xl"><span className="font-bold underline">Language:</span>
                                <span> C++</span></h2>
                            <ul className="text-[#ffc107] mt-2 space-y-1">
                                <li><span>Features: </span><span className="text-white">High-Performance, General-Purpose Programming Language</span>
                                </li>
                                <li><span className="text-[#5A9FD4]">Specialty: </span><span className="text-white">Game Dev, Robotics, Software Development</span>
                                </li>
                                <li className="text-[#48B1A3] font-semibold">Abilities:
                                    <ul className="pl-4 list-disc text-white">
                                        <li>System Programming 💻</li>
                                        <li>Game Development 🎮</li>
                                        <li>Robotics 🤖</li>
                                        <li>Embedded Systems</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="tech-card bg-gradient-to-b from-[#15151b] via-[#15151b] to-[#000000] flex-1 min-w-[300px] mx-auto p-4 rounded-xl shadow-lg border border-gray-700 transition-all hover:scale-105 hover:border-gray-600 transform hover:brightness-125 min-h-[400px] flex flex-col justify-between snap-start">
                        <div className="relative flex justify-center items-center mb-4">
                            <div
                                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="w-40 h-40 blur-lg rounded-full"
                                     style={{background: "radial-gradient(circle, rgba(255,223,51,0.4), rgba(70,130,180,0.3), transparent)"}}></div>
                            </div>
                            <img className="w-32 h-32 rounded-lg object-cover m-4 relative z-10" src={jsIcon}
                                 alt="JavaScript Logo"/>
                        </div>
                        <hr className="my-4 border-gray-600"/>
                        <div className="font-jetbrains overflow-hidden flex-grow">
                            <h2 className="text-xl"><span className="font-bold underline">Language:</span>
                                <span> JavaScript</span></h2>
                            <ul className="text-[#ffc107] mt-2 space-y-1">
                                <li><span>Features: </span><span className="text-white">Dynamic, High-Level Programming Language</span>
                                </li>
                                <li><span className="text-[#5A9FD4]">Specialty: </span><span className="text-white">Web Development, Mobile Apps</span>
                                </li>
                                <li className="text-[#48B1A3] font-semibold">Abilities:
                                    <ul className="pl-4 list-disc text-white">
                                        <li>Client-Side Scripting 🌐</li>
                                        <li>Server-Side Programming 💻</li>
                                        <li>Mobile Development 📱</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="tech-card bg-gradient-to-b from-[#15151b] via-[#15151b] to-[#000000] flex-1 min-w-[300px] mx-auto p-4 rounded-xl shadow-lg border border-gray-700 transition-all hover:scale-105 hover:border-gray-600 transform hover:brightness-125 min-h-[400px] flex flex-col justify-between snap-start">
                        <div className="relative flex justify-center items-center mb-4">
                            <div
                                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="w-40 h-40 blur-lg rounded-full"
                                     style={{background: "radial-gradient(circle, rgba(255,223,51,0.4), rgba(70,130,180,0.3), transparent)"}}></div>
                            </div>
                            <img className="w-32 h-32 rounded-lg object-cover m-4 relative z-10" src={arduinoIcon}
                                 alt="Arduino Logo"/>
                        </div>
                        <hr className="my-4 border-gray-600"/>
                        <div className="font-jetbrains overflow-hidden flex-grow">
                            <h2 className="text-xl"><span className="font-bold underline">Platform:</span>
                                <span> Arduino</span></h2>
                            <ul className="text-[#ffc107] mt-2 space-y-1">
                                <li><span>Features: </span><span
                                    className="text-white">Open-Source Electronics Platform</span></li>
                                <li><span className="text-[#5A9FD4]">Specialty: </span><span className="text-white">Embedded Systems, Prototyping</span>
                                </li>
                                <li className="text-[#48B1A3] font-semibold">Abilities:
                                    <ul className="pl-4 list-disc text-white">
                                        <li>Hardware Programming 🔧</li>
                                        <li>IoT Projects 🌐</li>
                                        <li>Sensor Integration 📡</li>
                                        <li>Robotics 🤖</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="tech-card bg-gradient-to-b from-[#15151b] via-[#15151b] to-[#000000] flex-1 min-w-[300px] mx-auto p-4 rounded-xl shadow-lg border border-gray-700 transition-all hover:scale-105 hover:border-gray-600 transform hover:brightness-125 min-h-[400px] flex flex-col justify-between snap-start">
                        <div className="relative flex justify-center items-center mb-4">
                            <div
                                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="w-40 h-40 blur-lg rounded-full"
                                     style={{background: "radial-gradient(circle, rgba(255,223,51,0.4), rgba(70,130,180,0.3), transparent)"}}></div>
                            </div>
                            <img className="w-32 h-32 rounded-lg object-cover m-4 relative z-10" src={tailwindIcon}
                                 alt="Tailwind CSS Logo"/>
                        </div>
                        <hr className="my-4 border-gray-600"/>
                        <div className="font-jetbrains overflow-hidden flex-grow">
                            <h2 className="text-xl"><span className="font-bold underline">Framework:</span>
                                <span> TailwindCSS</span></h2>
                            <ul className="text-[#ffc107] mt-2 space-y-1">
                                <li><span>Features: </span><span
                                    className="text-white">Utility-First CSS Framework</span></li>
                                <li><span className="text-[#5A9FD4]">Specialty: </span><span className="text-white">Rapid UI Development, Customizable</span>
                                </li>
                                <li className="text-[#48B1A3] font-semibold">Abilities:
                                    <ul className="pl-4 list-disc text-white">
                                        <li>Responsive Design 📱</li>
                                        <li>Custom Themes 🎨</li>
                                        <li>Faster Development ⚡</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="tech-card bg-gradient-to-b from-[#15151b] via-[#15151b] to-[#000000] flex-1 min-w-[300px] mx-auto p-4 rounded-xl shadow-lg border border-gray-700 transition-all hover:scale-105 hover:border-gray-600 transform hover:brightness-125 min-h-[400px] flex flex-col justify-between snap-start">
                        <div className="relative flex justify-center items-center mb-4">
                            <div
                                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="w-40 h-40 blur-lg rounded-full"
                                     style={{background: "radial-gradient(circle, rgba(255,223,51,0.4), rgba(70,130,180,0.3), transparent)"}}></div>
                            </div>
                            <img className="w-32 h-32 rounded-lg object-cover m-4 relative z-10" src={htmlIcon}
                                 alt="HTML Logo"/>
                        </div>
                        <hr className="my-4 border-gray-600"/>
                        <div className="font-jetbrains overflow-hidden flex-grow">
                            <h2 className="text-xl"><span className="font-bold underline">Language:</span>
                                <span> HTML</span></h2>
                            <ul className="text-[#ffc107] mt-2 space-y-1">
                                <li><span>Features: </span><span
                                    className="text-white">Standard Markup Language for Web</span></li>
                                <li><span className="text-[#5A9FD4]">Specialty: </span><span className="text-white">Web Page Structure</span>
                                </li>
                                <li className="text-[#48B1A3] font-semibold">Abilities:
                                    <ul className="pl-4 list-disc text-white">
                                        <li>Page Layout 🖥️</li>
                                        <li>Document Structure 📑</li>
                                        <li>Web Accessibility 🌐</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="tech-card bg-gradient-to-b from-[#15151b] via-[#15151b] to-[#000000] flex-1 min-w-[300px] mx-auto p-4 rounded-xl shadow-lg border border-gray-700 transition-all hover:scale-105 hover:border-gray-600 transform hover:brightness-125 min-h-[400px] flex flex-col justify-between snap-start">
                        <div className="relative flex justify-center items-center mb-4">
                            <div
                                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="w-40 h-40 blur-lg rounded-full"
                                     style={{background: "radial-gradient(circle, rgba(255,223,51,0.4), rgba(70,130,180,0.3), transparent)"}}></div>
                            </div>
                            <img className="w-32 h-32 rounded-lg object-cover m-4 relative z-10" src={cssIcon}
                                 alt="CSS Logo"/>
                        </div>
                        <hr className="my-4 border-gray-600"/>
                        <div className="font-jetbrains overflow-hidden flex-grow">
                            <h2 className="text-xl"><span className="font-bold underline">Language:</span>
                                <span> CSS</span></h2>
                            <ul className="text-[#ffc107] mt-2 space-y-1">
                                <li><span>Features: </span><span
                                    className="text-white">Style Sheets for Web Pages</span></li>
                                <li><span className="text-[#5A9FD4]">Specialty: </span><span className="text-white">Layout, Design, Animation</span>
                                </li>
                                <li className="text-[#48B1A3] font-semibold">Abilities:
                                    <ul className="pl-4 list-disc text-white">
                                        <li>Styling Layouts 📐</li>
                                        <li>Animations 🎨</li>
                                        <li>Responsive Design 📱</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>


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
