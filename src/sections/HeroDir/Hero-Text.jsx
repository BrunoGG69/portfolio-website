import React from "react";
import { socialLinks } from "../../constants/index.js";

const HeroText = () => {
    return (
        <div className="flex flex-col items-center lg:items-center text-center lg:text-center font-jetbrains w-full lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold neon-blue rise-up">
                &lt;BrunoGG&gt;
            </h1>

            <p className="text-2xl sm:text-4xl lg:text-6xl mt-2 rise-up" style={{ animationDelay: '0.2s' }}>
                <span className="neon-orange typing-effect">&lt;Coder/&gt;</span>
                <span className="neon-white typing-effect ml-2">&lt;Tinkerer/&gt;</span>
            </p>

            <div className="border-t border-white mt-4 w-1/2 lg:w-full rise-up" style={{ animationDelay: '0.4s' }}></div>

            <div className="flex flex-wrap justify-center lg:justify-center mt-4 text-sm sm:text-lg rise-up" style={{ animationDelay: '0.6s' }}>
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