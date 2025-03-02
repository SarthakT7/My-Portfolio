import resumePdf from "../../assets/Sarthak_Resume.pdf";
import { FaDownload } from "react-icons/fa";
import { IconContext } from "react-icons";
import Background from "../Background/Background";
import { useEffect, useRef, useState } from "react";
import "./Resume.css";
const Resume = () => {
  const iframeRef = useRef();
  const [iconSize, setIconSize] = useState(20);

  useEffect(() => {
    const resizeIframe = () => {
      const iframe = iframeRef.current;
      const container = iframe.parentNode;
      const width = container.offsetWidth*800/1500;
      const height = (width * 1000) / 800; 
      iframe.style.width = `${width}px`;
      iframe.style.height = `${height}px`;
      const containerWidth = container.offsetWidth;
      const newSize = containerWidth / 20; 
      setIconSize(newSize);

    };

    window.addEventListener("resize", resizeIframe);
    resizeIframe(); // Set initial size

    return () => {
      window.removeEventListener("resize", resizeIframe);
    };
  }, []);

  return (
    <>
      <Background />
      <div className="resume__container">
        <div className="download__container">
          <IconContext.Provider value={{ color: "#e0e1dd", size:`${iconSize}px` }}>
            <a href={resumePdf} target="_blank" className="download__button">
              <FaDownload className="download__button__icon" /> &nbsp; Download
              CV
            </a>
          </IconContext.Provider>
        </div>
        <div className="__iframe" id="iframeContainer">
          <p align="center">
            <iframe
              src="https://drive.google.com/file/d/1g4gJcZDrbKFIHuEotjTvDAR35X4idmG5/preview"
              ref={iframeRef}
              allow="autoplay"
            ></iframe>
          </p>
        </div>
      </div>
    </>
  );
};

export default Resume;
