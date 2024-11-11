const HeroText = () => {
    return (
        <div className="flex flex-col items-center lg:items-center text-center lg:text-center font-jetbrains w-full lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold neon-blue rise-up">
                &lt;BrunoGG&gt;
            </h1>

            <p className="text-2xl sm:text-4xl lg:text-6xl mt-2 rise-up" style={{animationDelay: '0.2s'}}>
                <span className="neon-orange typing-effect">&lt;Coder/&gt;</span>
                <span className="neon-white typing-effect ml-2">&lt;Tinkerer/&gt;</span>
            </p>

            <div className="border-t border-white mt-4 w-1/2 lg:w-full rise-up" style={{animationDelay: '0.4s'}}></div>

            <div className="flex flex-wrap justify-center lg:justify-center space-x-4 mt-4 text-sm sm:text-lg rise-up"
                 style={{animationDelay: '0.6s'}}>
                <a href="https://github.com/BrunoGG69"
                   className="flex items-center space-x-1 transition-transform duration-200 transform hover:scale-110 hover:font-bold">
                    <i className="bx bxl-github text-white bx-sm"></i>
                    <span>BrunoGG69</span>
                </a>

                <span> / </span>

                <a href="https://discordapp.com/users/785186372369252372"
                   className="flex items-center space-x-1 transition-transform duration-200 transform hover:scale-110 hover:font-bold">
                    <i className = "bx bxl-discord-alt text-white bx-sm"></i>
                    <span>brunogg69</span>
                </a>

                <span> / </span>

                <a href="https://twitter.com/BrunoGG69"
                   className="flex items-center space-x-1 transition-transform duration-200 transform hover:scale-110 hover:font-bold">
                    <i className="bx bxl-twitter text-white bx-sm"></i>
                    <span>@BrunoGG69</span>
                </a>
            </div>
        </div>
    );
};

export default HeroText;