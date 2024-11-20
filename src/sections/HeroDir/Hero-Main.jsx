import HeroText from "./Hero-Text.jsx";
import HeroProfilePic from "./Hero-ProfilePic.jsx";

const HeroMain = () => {
    return (
        <div
            id="hero"
            className="bg-transparent text-white flex items-center justify-center min-h-screen overflow-x-hidden"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <HeroText/>
                    <HeroProfilePic/>
                </div>
            </div>
        </div>
    );
};

export default HeroMain;
