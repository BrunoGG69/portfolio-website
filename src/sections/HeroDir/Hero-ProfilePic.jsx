import profilePic from "../../assets/profilePic-noBackground.png";
import {motion} from "motion/react";

const HeroProfilePic = () => {
    return (
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center"
             style={{animationDelay: '0.5s'}}>
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
    );
};

export default HeroProfilePic;