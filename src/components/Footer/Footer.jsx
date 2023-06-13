import "./Footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <SocialIcon
            url="https://www.linkedin.com/in/sarthak-thakkar-6bb1a9229/"
            className="link"
            bgColor="#e0e1dd"
          />
          <SocialIcon
            url="https://github.com/SarthakT7/"
            className="link"
            bgColor="#e0e1dd"
          />
          <SocialIcon
            url="https://www.instagram.com/_sarthak__7/"
            className="link"
            bgColor="#e0e1dd"
          />
          <SocialIcon
            url="mailto:sarthakthakkar752@gmail.com"
            className="link"
            bgColor="#e0e1dd"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
