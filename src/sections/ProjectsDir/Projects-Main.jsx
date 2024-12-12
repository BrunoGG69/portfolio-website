import { repoData } from "../../constants/index.js";
import { motion } from "motion/react";
import { useState } from "react";

const icons = [
    "https://brunogg69.github.io/icons/repos/chatbot.svg",
    "https://brunogg69.github.io/icons/repos/chatbotPreview.png",
    "https://brunogg69.github.io/icons/repos/portfolio-website.svg",
    "https://brunogg69.github.io/icons/repos/portfolio-websitePreview.png",
    "https://brunogg69.github.io/icons/repos/BankApp.svg",
    "https://brunogg69.github.io/icons/repos/BankAppPreview.png",
    "https://brunogg69.github.io/icons/repos/joystick.svg",
    "https://brunogg69.github.io/icons/repos/joystickPreview.png",
    "https://brunogg69.github.io/icons/repos/Autotyper.svg",
    "https://brunogg69.github.io/icons/repos/AutotyperPreview.png",
];

const logos = [
    "https://brunogg69.github.io/icons/logos/arduino.svg",
    "https://brunogg69.github.io/icons/logos/aws.svg",
    "https://brunogg69.github.io/icons/logos/c++.svg",
    "https://brunogg69.github.io/icons/logos/css.svg",
    "https://brunogg69.github.io/icons/logos/discord.svg",
    "https://brunogg69.github.io/icons/logos/docker.svg",
    "https://brunogg69.github.io/icons/logos/figma.svg",
    "https://brunogg69.github.io/icons/logos/firebase.svg",
    "https://brunogg69.github.io/icons/logos/flask.svg",
    "https://brunogg69.github.io/icons/logos/gcloud.svg",
    "https://brunogg69.github.io/icons/logos/git.svg",
    "https://brunogg69.github.io/icons/logos/github.svg",
    "https://brunogg69.github.io/icons/logos/html.svg",
    "https://brunogg69.github.io/icons/logos/js.svg",
    "https://brunogg69.github.io/icons/logos/linux.svg",
    "https://brunogg69.github.io/icons/logos/nodejs.svg",
    "https://brunogg69.github.io/icons/logos/npm.svg",
    "https://brunogg69.github.io/icons/logos/pycharm.svg",
    "https://brunogg69.github.io/icons/logos/python.svg",
    "https://brunogg69.github.io/icons/logos/raspberry.svg",
    "https://brunogg69.github.io/icons/logos/vscode.svg",
    "https://brunogg69.github.io/icons/logos/webstorm.svg",
    "https://brunogg69.github.io/icons/logos/windows.svg",
    "https://brunogg69.github.io/icons/logos/tailwindcss.svg",
    "https://brunogg69.github.io/icons/logos/react.svg",
    "https://brunogg69.github.io/icons/logos/reactNative.svg",
    "https://brunogg69.github.io/icons/logos/homeassistant.svg",
];

const ProjectsMain = () => {
    const [hoveredRepo, setHoveredRepo] = useState(null);

    return (
        <div
            id="projects"
            className="flex justify-center items-center min-h-screen"
        >
            {/* Box around the content */}
            <div
                className="flex flex-col justify-center items-center min-h-screen w-[95%] md:w-[90%] bg-[#15151b] border-2 border-[#5ec6bb] rounded-3xl p-8 shadow-lg mt-10" // Added mt-10 for margin above the box
            >
                {/* Heading */}
                <div className="heading mt-10"> {/* Added mt-10 for margin above the text */}
                    <h2 className="headingText text-center neon-blue">
                        &lt;My Projects&gt;
                    </h2>
                </div>

                {/* Repositories */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-5 py-10 w-full">
                    {repoData.map((repo) => {
                        const defaultImage = icons.find((icon) =>
                            icon.toLowerCase().includes(repo.id.toLowerCase())
                        );
                        const previewImage = icons.find((icon) =>
                            icon.toLowerCase().includes(`${repo.id.toLowerCase()}preview`)
                        );

                        return (
                            <motion.div
                                key={repo.id}
                                className="bg-gradient-to-b from-[#15151b] via-[#15151b] to-[#010101] rounded-3xl shadow-lg border border-gray-700 transition-all hover:scale-105 hover:border-gray-600 transform p-6 flex flex-col justify-between h-full"
                                whileHover={{
                                    borderColor: "white",
                                    boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.7)",
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }}
                                onMouseEnter={() => setHoveredRepo(repo.id)}
                                onMouseLeave={() => setHoveredRepo(null)}
                            >
                                {/* Repository Image */}
                                <div className="mb-4 relative w-full h-48 rounded-xl overflow-hidden">
                                    <img
                                        src={defaultImage}
                                        alt={`${repo.name} Default`}
                                        className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-300 ${hoveredRepo === repo.id ? "opacity-0" : "opacity-100"}`}
                                    />
                                    <img
                                        src={previewImage}
                                        alt={`${repo.name} Preview`}
                                        className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-300 ${hoveredRepo === repo.id ? "opacity-100" : "opacity-0"}`}
                                    />
                                </div>

                                {/* Repository Details */}
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold underline mb-2">{repo.name}</h3>
                                    <p className="text-gray-400 mb-4">{repo.description}</p>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {repo.technologies.map((tech, index) => {
                                            const logo = logos.find((logo) =>
                                                logo.toLowerCase().includes(tech.toLowerCase())
                                            );
                                            return logo ? (
                                                <img
                                                    key={index}
                                                    src={logo}
                                                    alt={`${tech} Logo`}
                                                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                                                    title={tech}
                                                />
                                            ) : (
                                                <span
                                                    key={index}
                                                    className="text-gray-400 italic text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-2 items-center justify-between w-fulll mt-4">
                                    {/* Repository Link */}
                                    <button
                                        onClick={() => window.open(repo.link, "_blank")}
                                        className="w-full sm:flex-grow text-white bg-[#fa926f] focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
                                    >
                                        Go to Repository
                                    </button>

                                    {/* Demo Button */}
                                    {repo.ifDemo && (
                                        <button
                                            onClick={() => window.open(repo.demoLink, "_blank")}
                                            className="w-full sm:flex-grow text-white bg-[#5dc5bb] focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center mt-3 sm:mt-0"
                                        >
                                            Go to Demo Link
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectsMain;
