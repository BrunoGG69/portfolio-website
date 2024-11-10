import profilePic from "../assets/profilePic-noBackground.png";
import "boxicons";

const Nav = () => {
    return (
        <div className="navbar bg-transparent flex justify-between items-center px-4">
            <div className="flex items-center btn btn-ghost blur-in">
                <a
                    href="#"
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
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <div className="blur-in">
                            <i className = "bx bxl-github text-white"></i>
                            <a href="#">Github</a>
                        </div>

                    </li>
                    <li className="blur-in">
                        <details>
                            <summary>Contact Me</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a href="#">Discord</a></li>
                                <li><a href="#">E-Mail</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
