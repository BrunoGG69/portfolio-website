import profilePic from "../../assets/profilePic-noBackground.png";
import ReactTypingEffect from "react-typing-effect";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const AboutMeMain = () => {
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div
                id="aboutMe"
                className="flex flex-col md:flex-row justify-center items-center min-h-screen w-[95%] md:w-[90 bg-[#15151b] border-2 border-[#5ec6bb] rounded-3xl p-8 shadow-lg"
            >
                <div
                    className="w-full md:w-2/5 flex justify-center md:justify-start items-center"
                    style={{ animationDelay: "0.5s" }}
                >
                    <motion.div
                        className="z-10"
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <img
                            src={profilePic}
                            alt="Profile Picture"
                            className="max-w-full h-auto"
                        />
                    </motion.div>
                </div>

                <div className="w-full md:w-3/5 flex flex-col md:ml-8 mt-4 md:mt-0">
                    <div className="transition-all hover:scale-110 hover:brightness-110 hover:translate-x-10">
                        <h1 className="headingText neon-orange">&lt;About Me&gt;</h1>

                        <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold neon-blue mt-2">
                            &lt;
                            <ReactTypingEffect
                                text={[
                                    "Student",
                                    "Coder",
                                    "Tinkerer",
                                    "Guitarist",
                                    "Innovator",
                                    "3D Modeller",
                                    "Software Developer",
                                    "Web Developer",
                                    "Learner",
                                ]}
                                speed={75}
                                eraseSpeed={50}
                                typingDelay={500}
                                eraseDelay={1000}
                            />
                            &gt;
                        </h1>
                    </div>
                    <div className="flex flex-col text-white pt-10 text-xl">
                        <ul className="list-disc pl-5 space-y-4 text-sm sm:text-lg lg:text-xl">
                            <li>
                                <span className="text-[#5ec6bb]">
                                    Class{" "}
                                    {11 +
                                        (new Date().getMonth() >= 2
                                            ? new Date().getFullYear() - 2024
                                            : new Date().getFullYear() - 2024)}
                                    th
                                </span>{" "}
                                student
                            </li>
                            <li>Enjoys tinkering and experimenting with technology</li>
                            <li>
                                Have a passion for{" "}
                                <span className="font-bold">
                                    Software Dev, Web Dev and Robotics
                                </span>
                            </li>
                            <li>
                                Proficient in{" "}
                                <span className="font-bold">
                                    Python, JavaScript, C++, HTML, CSS, React
                                </span>
                            </li>
                        </ul>
                        <div className="mt-8 flex ">
                            <Link
                                to="/more-about-me"
                                className="bg-[#5ec6bb] text-white py-2 px-6 rounded-full text-xl font-bold hover:bg-[#4fb29b] transition duration-300"
                            >
                                Learn More About Me
                            </Link>
                        </div>
                        <div
                            className="mt-8 relative p-4 border-2 border-[#5ec6bb] bg-[#1a1a1a] rounded-full shadow-[0_0_15px_#5ec6bb]">
                            <div
                                className="absolute -top-4 -left-4 w-20 h-10 bg-[#5ec6bb] rounded-full flex items-center justify-center shadow-lg"
                                style={{clipPath: "ellipse(100% 50% at 50% 50%)"}}
                            >
                                <p className="text-xs font-bold text-[#1a1a1a]">My Motto</p>
                            </div>

                            <p className="flex items-center justify-center font-bold text-lg sm:text-xl lg:text-2xl text-[#5ec6bb] text-center mt-4">
                                &quot;If it ain&apos;t broke, I&apos;m going to mess with it anyway!&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeMain;
