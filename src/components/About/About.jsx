import { useState, useEffect } from "react";
import "./About.css";
import Footer from "../Footer/Footer";
import Background from "../Background/Background"
import animation from "../../assets/animation.json";
import Lottie from "lottie-react";
const About = () => {
  const [animationWidth, setAnimationWidth] = useState(700);

  useEffect(() => {
    const handleResize = () => {
      const maxWidth = 1200; 
      const currentWidth = Math.min(window.innerWidth, maxWidth);
      setAnimationWidth(currentWidth * 0.5);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    <Background/>
      <div className="about__container">
        <div className="about__text">
          <p className="about__title">
            Hello, I am <span>Sarthak Thakkar</span>
          </p>
          <p className="about__subTitle">
            I am a CSE graduate from <span>Nirma University.</span>
          </p>
          <div className="about__info">
            When I'm not coding, you can find me playing table tennis or chess.
            <br /><br/>
            I love staying up-to-date with the latest technologies and I'm
            always eager to learn more about the field.
            <br /><br/>
            So if you're looking for a talented developer who also knows how to
            have a good time, let's connect!
          </div>
        </div>
        <div className="about__animation">
          <Lottie
            loop={true}
            animationData={animation}
            style={{ height: "600px", width: `${animationWidth}px` }}

          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
