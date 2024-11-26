import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/profilePic-noBackground.png";
import "boxicons";
import { socialLinks } from "../constants/index.js";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // To handle the mobile dropdown menu
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
    <div className="navbar absolute top-0 left-0 right-0 z-10 bg-transparent flex justify-between items-center px-4">
      <div className="flex items-center btn btn-ghost blur-in">
        <a
          ref={brunoButtonRef}
          onClick={handleBrunoButtonClick}
          className="flex items-center text-2xl font-bold"
          style={{
            background:
              "linear-gradient(90deg, rgba(250,146,112,1) 0%, rgba(94,197,188,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
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

      {/* For Large Devices */}
      <div className="flex-none lg:block">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          {socialLinks.map(({ href, icon, id }) => (
            <li key={id}>
              <div className="blur-in">
                <i className={`${icon} text-white`}></i>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {id}
                </a>
              </div>
            </li>
          ))}

          {/* Add a Link to the MoreAboutMe page */}
          <li>
            <div className="blur-in">
              <Link to="/more-about-me" className="text-white">
                More About Me
              </Link>
            </div>
          </li>
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
        className={`lg:hidden absolute top-16 right-4 bg-[#15141d] text-white p-4 rounded-lg ${isOpen ? "block" : "hidden"}`}
      >
        <ul className="menu">
          {socialLinks.map(({ href, icon, id }) => (
            <li key={id}>
              <div className="rise-down">
                <i className={`${icon} text-white`}></i>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {id}
                </a>
              </div>
            </li>
          ))}
          {/* Add a Link to the MoreAboutMe page in mobile menu */}
          <li>
            <div className="rise-down">
              <Link to="/more-about-me" className="text-white">
                More About Me
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
