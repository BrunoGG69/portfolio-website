import { useRef, useState } from "react";
import profilePic from "../assets/profilePic-noBackground.png";
import "boxicons";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);  // To handle the mobile dropdown menu
    const brunoButtonRef = useRef(null);

    // Function to reload the page
    const handleBrunoButtonClick = (e) => {
        e.preventDefault(); // Prevent the default link behavior (navigation)
        window.location.reload(); // Reload the page
    };

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar fixed top-0 left-0 right-0 z-10 bg-[#15141d] flex justify-between items-center px-4">
            <div className="flex items-center btn btn-ghost blur-in">
                <a
                    ref={brunoButtonRef}
                    onClick={handleBrunoButtonClick}
                    className="flex items-center text-2xl font-bold"
                    style={{
                        background: "linear-gradient(90deg, rgba(250,146,112,1) 0%, rgba(94,197,188,1) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}
                >
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    BrunoGG
                </a>
            </div>
            <div className="flex-none lg:block">  {/* For larger screens */}
                {/* These buttons will be hidden on mobile */}
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    <li>
                        <div className="blur-in">
                            <i className="bx bxl-github text-white"></i>
                            <a href="https://github.com/BrunoGG69" target="_blank">Github</a>
                        </div>
                    </li>
                    <li>
                        <div className="blur-in">
                            <i className="bx bxl-twitter text-white"></i>
                            <a href="https://twitter.com/BrunoGG69" target="_blank">Twitter</a>
                        </div>
                    </li>
                    <li>
                        <div className="blur-in">
                            <i className="bx bxl-discord-alt text-white"></i>
                            <a href="https://discordapp.com/users/785186372369252372" target="_blank">Discord</a>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-white">
                    <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`} style={{ fontSize: '1.5rem' }}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden absolute top-16 right-4 bg-[#15141d] text-white p-4 rounded-lg ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="menu">
                    <li>
                        <div className="blur-in">
                            <i className="bx bxl-github text-white"></i>
                            <a href="https://github.com/BrunoGG69" target="_blank">Github</a>
                        </div>
                    </li>
                    <li>
                        <div className="blur-in">
                            <i className="bx bxl-twitter text-white"></i>
                            <a href="https://twitter.com/BrunoGG69" target="_blank">Twitter</a>
                        </div>
                    </li>
                    <li>
                        <div className="blur-in">
                            <i className="bx bxl-discord-alt text-white"></i>
                            <a href="https://discordapp.com/users/785186372369252372" target="_blank">Discord</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
