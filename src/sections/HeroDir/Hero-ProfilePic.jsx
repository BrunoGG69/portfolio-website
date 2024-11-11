import profilePic from "../../assets/profilePic-noBackground.png";

const HeroProfilePic = () => {
    return (
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
    );
};

export default HeroProfilePic;