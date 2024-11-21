import { repoData } from "../../constants/index.js";
import { motion } from "motion/react";

import chatbot_image from "/repos/chatbot.svg";
import joystick_image from "/repos/joystick.svg";
import portfolio_image from "/repos/portfolio-website.svg";

const icons = [chatbot_image, joystick_image, portfolio_image];

const ProjectsMain = () => {
  return (
    <div
      id="projects"
      className="text-white items-center flex flex-col justify-center relative "
    >
      {/* Heading */}
      <div className="flex flex-col items-center justify-center pb-10">
        <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold neon-blue rise-up text-center">
          &lt;My GitHub Repositories&gt;
        </h2>
      </div>

      {/* Repositories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 py-10 w-full">
        {repoData.map((repo) => (
          <motion.div
            key={repo.id}
            className="bg-gradient-to-b from-[#15151b] via-[#15151b] to-[#010101] rounded-xl shadow-lg border border-gray-700 transition-all hover:scale-105 hover:border-gray-600 transform  p-6 flex flex-col justify-between"
            whileHover={{
              borderColor: "white", // Border color turns white on hover
              boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.7)", // Adds a glowing effect
            }}
            transition={{
              duration: 0.3, // Smooth transition for the effect
              ease: "easeInOut",
            }}
          >
            {/* Repository Image */}
            <div className="mb-4">
              <img
                src={icons.find((icon) => icon.includes(repo.id))}
                alt={`${repo.name} Preview`}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            {/* Repository Details */}
            <div>
              <h3 className="text-xl font-bold underline mb-2">{repo.name}</h3>
              <p className="text-gray-400 mb-4">{repo.description}</p>
              <ul className="neon-blue space-y-1">
                {repo.technologies.map((tech, index) => (
                  <li key={index}>- {tech}</li>
                ))}
              </ul>
            </div>

            {/* Repository Link */}

            <button
              onClick={() => window.open(repo.link, "_blank")} // Open the link in a new tab
              className="text-white bg-[#fb7070] focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-5 mb-2"
            >
              Go to Repository
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
