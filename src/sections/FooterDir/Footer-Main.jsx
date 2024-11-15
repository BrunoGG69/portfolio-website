import profilePic from "../../assets/profilePic-noBackground.png";

const socialLinks = [
    {
        href: "https://github.com/BrunoGG69",
        icon: "bxl-github",
        label: "BrunoGG69"
    },

    {
        href: "https://discordapp.com/users/785186372369252372",
        icon: "bxl-discord-alt",
        label: "brunogg69"
    },
    {
        href: "https://twitter.com/BrunoGG69",
        icon: "bxl-twitter",
        label: "@BrunoGG69"
    },

];

const FooterMain = () => {
    return (
        <footer className="footer bg-black text-neutral-content p-10 font-jetbrains">
            <aside className= "grid-flow-col items-center">
                <img
                    src={profilePic}
                    alt="Profile Picture"
                    width = {50}
                    height = {50}
                />
                <p>
                    BrunoGG
                    <br/>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by BrunoGG</p>
                </p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <h6 className="footer-title">Socials</h6>
                <div className="grid grid-flow-col gap-4">
                    {socialLinks.map(({href, icon}) => (
                        <a href={href} key = "Key" target="_blank"
                           className="transition-transform transform hover:scale-110 hover:font-bold">
                            <i className={`bx ${icon} bx-sm`}></i>
                        </a>
                    ))}
                </div>
            </nav>
        </footer>
    );
};

export default FooterMain;
