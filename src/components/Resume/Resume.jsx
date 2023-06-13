import resumePdf from "../../assets/Sarthak_Resume.pdf";
import { FaDownload } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Resume.css";
const Resume = () => {
  return (
    <>
      <div className="resume__container">
    
      <div className="download__container">
        <IconContext.Provider value={{ color: "#e0e1dd", size: "20px" }}>
          <a href={resumePdf} target="_blank" className="download__button">
            <FaDownload className="download__button__icon" /> &nbsp; Download CV
          </a>
        </IconContext.Provider>
      </div>
      <div className="__iframe">
        <p align="center">
          <iframe
            src="https://drive.google.com/file/d/1o4-B27bCRV_mNEyydj6XUQ4WYArLQsU2/preview"
            width="800"
            height="1000"   
            allow="autoplay"
          ></iframe>
        </p>
      </div>
      </div>
    </>

  );
};

export default Resume;
