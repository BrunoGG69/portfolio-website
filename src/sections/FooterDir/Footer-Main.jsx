import { Footer } from "../../components";
import profilePic from "../../assets/profilePic-noBackground.png";
import { socialLinks } from "../../constants/index.js";

const FooterMain = () => {
  const footerContent = {
    profileImage: profilePic,
    Message: "All Rights Reserved By BrunoGG",
    links: socialLinks,
  };
  return (
    <div>
      <Footer
        profileImage={footerContent.profileImage}
        footerMessage={footerContent.Message}
        links={footerContent.links}
      />
    </div>
  );
};

export default FooterMain;