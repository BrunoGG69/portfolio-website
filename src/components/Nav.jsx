import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profilePic from "../assets/profilePic-noBackground.png";
import "boxicons";
import { socialLinks } from "../constants/index.js";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Check if the current path starts with "/blog<number>"
    const isBlogPage = /^\/blog\d+$/.test(location.pathname);

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar absolute top-0 left-0 right-0 z-10 bg-transparent flex justify-between items-center px-4">
            <Link
                to={isBlogPage ? "/Blog" : "/"}
                className="flex items-center btn btn-ghost blur-in"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(250,146,112,1) 0%, rgba(94,197,188,1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                {location.pathname === "/" && (
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                )}

                {location.pathname !== "/" ? (
                    <span className="text-2xl font-bold">
            <Link
                to={isBlogPage ? "/Blog" : "/"}
                className="flex items-center text-white"
            >
              <i
                  className="bx bx-arrow-back mr-2"
                  style={{ fontSize: "1.5rem" }}
              ></i>
                {isBlogPage ? "Go to Blog List" : "Go to Main Page"}
            </Link>
          </span>
                ) : (
                    <span className="text-2xl font-bold">BrunoGG</span>
                )}
            </Link>

            {/* For Large Devices */}
            <div className="flex-none lg:block">
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    {socialLinks.map(({ href, icon, id }) => (
                        <li key={id}>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center blur-in"
                            >
                                <i className={`${icon} text-white mr-2`}></i>
                                {id}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* For Mobiles */}
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-white">
                    <i
                        className={`bx ${isOpen ? "bx-x" : "bx-menu"}`}
                        style={{ fontSize: "1.5rem" }}
                    ></i>
                </button>
            </div>

            <div
                className={`lg:hidden absolute top-16 right-4 bg-[#15141d] text-white p-4 rounded-lg ${
                    isOpen ? "block" : "hidden"
                }`}
            >
                <ul className="menu">
                    {socialLinks.map(({ href, icon, id }) => (
                        <li key={id}>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center rise-down"
                            >
                                <i className={`${icon} text-white mr-2`}></i>
                                {id}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Nav;
