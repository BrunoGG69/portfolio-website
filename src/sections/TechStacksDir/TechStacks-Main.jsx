import { useEffect, useState } from "react";
import { techData } from "../../constants/index.js";
import {motion} from "motion/react";

const icons = [
  "https://brunogg69.github.io/icons/logos/arduino.svg",
  "https://brunogg69.github.io/icons/logos/aws.svg",
  "https://brunogg69.github.io/icons/logos/c++.svg",
  "https://brunogg69.github.io/icons/logos/css.svg",
  "https://brunogg69.github.io/icons/logos/discord.svg",
  "https://brunogg69.github.io/icons/logos/docker.svg",
  "https://brunogg69.github.io/icons/logos/figma.svg",
  "https://brunogg69.github.io/icons/logos/firebase.svg",
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

const TechStacksMain = () => {
  const [scrollPosition, setScrollPosition] = useState("start");

  const scroll = (direction) => {
    const container = document.getElementById("scrollable-cards-container");
    const cardWidth = container.querySelector(".tech-card").offsetWidth;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
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
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, []);

  return (
      <div
          id="techStacks"
          className="text-white items-center flex flex-col justify-center overflow-hidden relative pt-10"
      >
        {/* Heading */}
        <div className="flex flex-col items-center justify-center pb-10">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold neon-blue rise-up text-center">
            &lt;Languages and Tools I am Familiar With&gt;
          </h2>
        </div>

        {/* Icons */}
        <div className="scroll-wrapper relative">
          <div className="scroll-container">
            {icons.concat(icons, icons).map((icon, index) => (
                <img
                    key={index}
                    src={icon}
                    alt="logo"
                    className="w-12 h-12 md:w-16 md:h-16 fill-white object-contain max-w-none transition-transform duration-200 hover:scale-110"
                />
            ))}
          </div>
        </div>


        {/* Scrollable Cards Section */}
        <div className="relative w-full mt-8">
          {/* Left Scroll Button */}
          <div
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 ${scrollPosition === "start" ? "hidden" : ""}`}
          >
            <button
                onClick={() => scroll("left")}
                className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 focus:outline-none "
            >
              <span className="text-xl">{"<"}</span>
            </button>
          </div>

          {/* Scrollable Cards */}
          <div
              id="scrollable-cards-container"
              className="overflow-x-auto flex gap-5 px-5 py-10 snap-x scroll-smooth"
          >
            {techData.map((tech) => (
                <motion.div
                    key={tech.id}
                    id={tech.id}
                    className="tech-card bg-gradient-to-b from-[#15151b] via-[#15151b] to-[#000000] flex-1 min-w-[300px] mx-auto p-4 rounded-xl shadow-lg border border-gray-700 transition-all hover:scale-105 hover:border-gray-600 min-h-[300px] flex flex-col items-center justify-center snap-start"
                    whileHover={{
                      borderColor: "white",
                      boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.7)",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                >
                  <div className="relative flex flex-col items-center">
                    <div className="relative flex items-center justify-center mb-4">
                      <div
                          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      >
                        <div
                            className="w-40 h-40 blur-lg rounded-full"
                            style={{
                              background:
                                  "radial-gradient(circle, rgba(255,223,51,0.4), rgba(70,130,180,0.3), transparent)",
                            }}
                        ></div>
                      </div>
                      <img
                          className="w-32 h-32 rounded-lg object-cover relative z-10 transition-all hover:scale-110 hover:border-gray-600"
                          src={icons.find((icon) => icon.includes(tech.id))}
                          alt={`${tech.name} Logo`}
                      />
                    </div>
                    <hr className="my-4 border-gray-600 w-[150%]" />
                    <div className="font-jetbrains text-center">
                      <h2 className="text-xl">
                        <span>{tech.name}</span>
                      </h2>
                    </div>
                  </div>
                </motion.div>
            ))}


          </div>

          {/* Right Scroll Button */}
          <div
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 ${scrollPosition === "end" ? "hidden" : ""}`}
          >
            <button
                onClick={() => scroll("right")}
                className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 focus:outline-none"
            >
              <span className="text-xl">{">"}</span>
            </button>
          </div>
        </div>
      </div>
  );
};

export default TechStacksMain;

