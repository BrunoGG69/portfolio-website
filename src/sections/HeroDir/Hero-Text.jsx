import React from 'react';

const socialLinks = [
    {
        href: "https://github.com/BrunoGG69",
        icon: "bxl-github",
        label: "BrunoGG69"
    },

    {
        href: "https://discordapp.com/users/785186372369252372",
        icon: "bxl-discord-alt",
        label: "brunogg69"
    },
    {
        href: "https://twitter.com/BrunoGG69",
        icon: "bxl-twitter",
        label: "@BrunoGG69"
    },

];

const HeroText = () => (
    <div className="flex flex-col items-center text-center font-jetbrains w-full lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold neon-blue rise-up">&lt;BrunoGG&gt;</h1>

        <p className="text-2xl sm:text-4xl lg:text-6xl mt-2 rise-up" style={{animationDelay: '0.2s'}}>
            <span className="neon-orange">&lt;Coder/&gt;</span>
            <span className="neon-white ml-2">&lt;Tinkerer/&gt;</span>
        </p>

        <div className="border-t border-white mt-4 w-1/2 lg:w-full rise-up" style={{animationDelay: '0.4s'}}></div>

        <div className="flex justify-center space-x-4 mt-4 text-sm sm:text-lg rise-up" style={{animationDelay: '0.6s'}}>
            {socialLinks.map(({href, icon, label}, index) => (
                <React.Fragment key={href}>
                    <a href={href}
                       className="flex items-center space-x-1 transition-transform transform hover:scale-110 hover:font-bold">
                        <i className={`bx ${icon} text-white bx-sm`}></i>
                        <span>{label}</span>
                    </a>
                    {index < socialLinks.length - 1 && <span> | </span>}
                </React.Fragment>
            ))}
        </div>
    </div>
);

export default HeroText;
