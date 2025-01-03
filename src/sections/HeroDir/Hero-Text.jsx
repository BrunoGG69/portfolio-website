import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { socialLinks } from "../../constants/index.js";

const HeroText = () => {
    return (
        <div
            className="flex flex-col items-center lg:items-center text-center lg:text-center font-jetbrains w-full lg:w-1/2 mb-8 lg:mb-0"
        >
            <h1
                className="typewriter text-4xl lg:text-7xl font-bold neon-blue flex items-center justify-center"
                style={{ whiteSpace: "nowrap" }}
            >
                &lt;
                <span className="inline-block">
                    <ReactTypingEffect
                        text={["BrunoGG", "Prathamesh"]}
                        speed={100}
                        eraseSpeed={50}
                        typingDelay={500}
                        eraseDelay={1500}
                    />
                </span>
                &gt;
            </h1>

            <p className="text-2xl sm:text-4xl lg:text-6xl mt-2" style={{ animationDelay: '0.2s' }}>
                <span className="neon-orange typing-effect">&lt;Coder/&gt;</span>
                <span className="neon-white typing-effect ml-2">&lt;Tinkerer/&gt;</span>
            </p>

            <div className="border-t border-white mt-4 w-1/2 lg:w-full" style={{ animationDelay: '0.4s' }}></div>

            <div
                className="flex flex-wrap justify-center lg:justify-center mt-4 text-sm sm:text-lg"
                style={{ animationDelay: '0.6s' }}
            >
                {socialLinks.map(({ href, icon, label }, index) => (
                    <React.Fragment key={index}>
                        <a
                            href={href}
                            className="flex items-center space-x-1 transition-transform duration-200 transform hover:scale-110 hover:font-bold"
                        >
                            <i className={`${icon} text-white bx-sm`}></i>
                            <span>{label}</span>
                        </a>
                        {index < socialLinks.length - 1 && <span className="mx-4">/</span>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default HeroText;
