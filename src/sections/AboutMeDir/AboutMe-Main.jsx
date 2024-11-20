import profilePic from "../../assets/profilePic-noBackground.png";
import ReactTypingEffect from "react-typing-effect";

const AboutMeMain = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center min-h-screen">
            {/* Profile Picture Section */}
            <div
                className="w-full md:w-2/5 flex justify-center md:justify-start items-center"
                style={{animationDelay: "0.5s"}}
            >
                <div className="z-10">
                    <img
                        src={profilePic}
                        alt="Profile Picture"
                        className="max-w-full h-auto"
                    />
                </div>
            </div>

            {/* About Me Text Section */}
            <div className="w-full md:w-3/5 flex flex-col md:ml-8 mt-4 md:mt-0">
                <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold neon-orange">
                    &lt;About Me&gt;
                </h1>
                <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold neon-blue mt-2">
                    &lt;
                    <ReactTypingEffect
                        text={["Student", "Coder", "Tinkerer", "Innovator", "3D Modeller", "Software Developer", "Web Developer", "Learner"]}
                        speed={75}
                        eraseSpeed={50}
                        typingDelay={500}
                        eraseDelay={1000}
                    />
                    &gt;
                </h1>
                <div className="flex flex-col text-white pt-10 text-xl">
                    <p className="gap-y-5 text-sm sm:text-lg lg:text-xl">
                        <span>
                            <span>I am a </span>
                            <span className="text-[#5ec6bb]">
                                Class {11 + (new Date().getMonth() >= 2 ? new Date().getFullYear() - 2024 : new Date().getFullYear() - 2024)}th
                            </span>
                            <span> student who enjoys tinkering and experimenting with technology.</span>
                        </span>
                        <br/>
                        <p className="pt-5">
                            <span>
                                I have a passion for software and web development, with skills in Python, JavaScript, C++, HTML, CSS, and ReactJS.
                            </span>
                        </p>
                        <br/>
                        <p>
                            <span>
                                I am also a <a href="#techStacks" className="font-bold underline">Robotics Enthusiast</a>, aiming to integrate my software knowledge with hardware.
                            </span>
                        </p>
                        <p className="pt-5">
                            <span>
                                My laziness led me to convert my room into a smart room, controlled with just a touch of a button with automations that would make anyone's life easier.
                            </span>
                        </p>
                        <br/>
                        <p>
                            <span className="font-bold underline text-lg sm:text-xl lg:text-2xl">
                                I love taking things apart to understand how they work. My motto is, "If it ain't broke, I'm going to mess with it anyway!"
                            </span>
                        </p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMeMain;