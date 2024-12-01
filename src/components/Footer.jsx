import PropTypes from 'prop-types';

const FooterMain = ({ profileImage, footerMessage, links }) => {
  return (
    <footer className="footer bg-black text-neutral-content p-10 font-jetbrains">
      <aside className="grid-flow-col items-center">
        <img src={profileImage} alt="Profile Picture" width={50} height={50} />
        <p>
          BrunoGG
          <br />
          <p>
            Copyright © {new Date().getFullYear()} - {footerMessage}
          </p>
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <h6 className="footer-title">Socials</h6>
        <div className="grid grid-flow-col gap-4">
          {links.map(( socialLinks ) => (
            <a
              href={socialLinks.href}
              key={socialLinks.id}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110 hover:font-bold"
            >
              <i className={`bx ${socialLinks.icon} bx-sm`}></i>
            </a>
          ))}
        </div>
      </nav>
    </footer>
  );
};

FooterMain.propTypes = {
  profileImage: PropTypes.string.isRequired,
  footerMessage: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
};

export default FooterMain;