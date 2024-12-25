import { repoData } from "../../constants/index.js";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import CustomButtonOrange from "../../components/CustomButtonOrange.jsx";
import CustomButtonBlue from "../../components/CustomButtonBlue.jsx";

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
    "https://brunogg69.github.io/icons/repos/BrunoWave.svg",
    "https://brunogg69.github.io/icons/repos/BrunoWavePreview.png",
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
    const [selectedRepo, setSelectedRepo] = useState(null);

    const closeModal = () => {
        setSelectedRepo(null);
    };

    return (
        <div
            id="projects"
            className="flex justify-center items-center min-h-screen"
        >
            <div className="flex flex-col justify-center items-center min-h-screen w-[95%] md:w-[90%] bg-[#15151b] border-2 border-[#5ec6bb] rounded-3xl p-8 shadow-lg mt-10">
                <div className="heading mt-10">
                    <h2 className="headingText text-center neon-blue">
                        &lt;My Projects&gt;
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-5 py-10 w-full">
                    {repoData.map((repo) => {

                        const defaultImage = icons.find((icon) =>
                            icon.toLowerCase().includes(repo.id.toLowerCase()),
                        );
                        const previewImage = icons.find((icon) =>
                            icon.toLowerCase().includes(`${repo.id.toLowerCase()}preview`),
                        );

                        return (
                            <motion.div
                                key={repo.id}
                                className="bg-gradient-to-b from-[#15151b] via-[#15151b] to-[#010101] rounded-3xl shadow-lg border border-gray-700 transition-all hover:scale-105 hover:border-gray-600 transform p-6 flex flex-col justify-between h-full relative overflow-hidden"
                                whileHover={{
                                    borderColor: "white",
                                    boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.7)",
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }}
                                onMouseEnter={() => setHoveredRepo(repo.id)} // Set hovered repo on mouse enter
                                onMouseLeave={() => setHoveredRepo(null)} // Reset hovered repo on mouse leave
                                onClick={() => setSelectedRepo(repo)} // Set the selected repo when clicked
                            >
                                <div className="mb-4 relative w-full h-56 rounded-xl overflow-hidden">
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

                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold text-center underline mb-2">
                                        {repo.name}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {repo.technologies.map((tech, index) => {
                                            const logo = logos.find((logo) =>
                                                logo.toLowerCase().includes(tech.toLowerCase()),
                                            );
                                            return logo ? (
                                                <img
                                                    key={index}
                                                    src={logo}
                                                    alt={`${tech} Logo`}
                                                    className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-full"
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

                                {hoveredRepo === repo.id && (
                                    <motion.div
                                        className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-lg font-semibold rounded-xl"
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        transition={{duration: 0.3}}
                                    >
                                        Click for more info
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <AnimatePresence>
                {selectedRepo && (
                    <motion.dialog
                        open
                        className="modal backdrop-blur-xl"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                closeModal();
                            }
                        }}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3}}
                    >
                        <motion.div
                            className="modal-box bg-[#15151b] border-2 border-[#9067c6] text-white max-w-4xl w-[90%] sm:w-3/5 h-[80vh] p-8 rounded-3xl flex flex-col shadow-2xl"
                            initial={{scale: 0.8}}
                            animate={{scale: 1}}
                            exit={{scale: 0.8}}
                            transition={{duration: 0.3}}
                        >
                            <div className="mb-4 relative w-full h-96 rounded-xl overflow-hidden">
                                <img
                                    src={icons.find((icon) =>
                                        icon
                                            .toLowerCase()
                                            .includes(`${selectedRepo.id.toLowerCase()}preview`),
                                    )}
                                    alt={`${selectedRepo.name} Preview`}
                                    className="absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-300"
                                />
                            </div>
                            <h3 className="text-2xl font-bold">{selectedRepo.name}</h3>
                            <p className="py-4">{selectedRepo.description}</p>
                            <div className="flex-grow"></div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {selectedRepo.technologies.map((tech, index) => {
                                    const logo = logos.find((logo) =>
                                        logo.toLowerCase().includes(tech.toLowerCase()),
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

                            <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full">
                                <CustomButtonOrange
                                    href={selectedRepo.link}
                                    label="Go to Repository"
                                    colorClass="bg-[#fa926f]"
                                />

                                {selectedRepo.ifDemo && (
                                    <CustomButtonBlue
                                        href={selectedRepo.demoLink}
                                        label="Go to Demo Link"
                                        colorClass="bg-[#5dc5bb]"

                                    />
                                )}
                            </div>

                        </motion.div>
                    </motion.dialog>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectsMain;




