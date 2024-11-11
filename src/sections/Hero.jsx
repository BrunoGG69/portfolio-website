import profilePic from "../assets/profilePic-noBackground.png";

const Hero = () => {
    return (
        <div id="hero" className="bg-transparent text-white flex items-center justify-center min-h-screen overflow-x-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="flex flex-col items-center lg:items-center text-center lg:text-center font-jetbrains w-full lg:w-1/2 mb-8 lg:mb-0">
                        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold neon-blue rise-up">
                            &lt;BrunoGG&gt;
                        </h1>

                        <p className="text-2xl sm:text-4xl lg:text-6xl mt-2 rise-up" style={{ animationDelay: '0.2s' }}>
                            <span className="neon-orange typing-effect">&lt;Coder/&gt;</span>
                            <span className="neon-white typing-effect ml-2">&lt;Tinkerer/&gt;</span>
                        </p>

                        <div className="border-t border-white mt-4 w-1/2 lg:w-full rise-up" style={{ animationDelay: '0.4s' }}></div>

                        <div className="flex flex-wrap justify-center lg:justify-center space-x-4 mt-4 text-sm sm:text-lg rise-up" style={{ animationDelay: '0.6s' }}>
                            <a href="https://github.com/BrunoGG69" className="flex items-center space-x-1 transition-transform duration-200 transform hover:scale-105 hover:underline">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.35-3.35-1.35-.45-1.15-1.1-1.46-1.1-1.46-.9-.6.07-.6.07-.6 1 .07 1.52 1.04 1.52 1.04.9 1.5 2.34 1.1 2.93.82.1-.65.35-1.1.63-1.36-2.2-.25-4.52-1.1-4.52-4.82 0-1.07.37-1.94 1-2.63-.1-.26-.44-1.28.1-2.63 0 0 .84-.26 2.76 1a9.65 9.65 0 015 0c1.92-1.25 2.76-1 2.76-1 .54 1.35.2 2.37.1 2.63.63.7 1 1.57 1 2.63 0 3.73-2.32 4.57-4.52 4.82.35.3.65.87.65 1.8v2.67c0 .26.2.56.68.47C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
                                </svg>
                                <span>BrunoGG69</span>
                            </a>

                            <span> / </span>

                            <a href="https://discordapp.com/users/785186372369252372" className="flex items-center space-x-1 transition-transform duration-200 transform hover:scale-105 hover:underline">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.2 4.94A19.67 19.67 0 0015.91 4c-.23.4-.49.92-.68 1.33a19.27 19.27 0 00-6.46 0c-.2-.4-.46-.94-.68-1.33a19.67 19.67 0 00-4.3.94C2.3 9.33 1.65 13.55 2.07 17.68a19.4 19.4 0 004.86 2.43c.37-.5.7-1.04 1-1.6a12.3 12.3 0 01-1.88-.9c.16-.12.3-.25.45-.38 3.64 1.7 7.6 1.7 11.2 0 .15.13.3.26.45.38-.6.35-1.23.66-1.88.9.3.55.63 1.1 1 1.6a19.47 19.47 0 004.86-2.43c.42-4.13-.23-8.35-2.94-12.74zm-11.7 9.06c-1.15 0-2.1-1.04-2.1-2.32 0-1.27.93-2.32 2.1-2.32 1.17 0 2.12 1.04 2.1 2.32 0 1.27-.93 2.32-2.1 2.32zm7.1 0c-1.15 0-2.1-1.04-2.1-2.32 0-1.27.93-2.32 2.1-2.32 1.17 0 2.12 1.04 2.1 2.32 0 1.27-.93 2.32-2.1 2.32z" />
                                </svg>
                                <span>brunogg69</span>
                            </a>

                            <span> / </span>

                            <a href="https://twitter.com/BrunoGG69" className="flex items-center space-x-1 transition-transform duration-200 transform hover:scale-105 hover:underline">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6.03c-.77.34-1.6.56-2.46.66a4.28 4.28 0 001.87-2.36 8.5 8.5 0 01-2.71 1.04A4.23 4.23 0 0016.5 4c-2.38 0-4.3 1.92-4.3 4.3 0 .33.03.65.1.95a12.1 12.1 0 01-8.77-4.45 4.25 4.25 0 00-.58 2.16c0 1.48.75 2.8 1.9 3.56a4.21 4.21 0 01-1.94-.53v.05c0 2.07 1.47 3.8 3.42 4.2-.36.1-.74.16-1.12.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.95 3.95 2.99a8.5 8.5 0 01-5.26 1.82c-.34 0-.68-.02-1.02-.06a12.02 12.02 0 006.49 1.9c7.8 0 12.07-6.46 12.07-12.07l-.01-.55a8.62 8.62 0 002.13-2.2z" />
                                </svg>
                                <span>@BrunoGG69</span>
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center rise-up"
                         style={{animationDelay: '0.5s'}}>
                        <div className="z-10">
                            <img
                                src={profilePic}
                                alt="Profile Picture"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
