import Typewriter from "typewriter-effect";
import "./Home.css";
import Background from "../Background/Background";
import Footer from "../Footer/Footer";
const Home = () => {

  return (
    <>

    <div className="home">
      <Background/>
      <div className="container">
      <div className="headline">Hi I'm</div>
        <div className="title">Sarthak Thakkar</div>
        <div className="sub_title">
          <Typewriter
            options={{
              strings: ["I am a Software Engineer...", "Let's Connect!"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        {/* <Lottie
          animationData={animation}
          loop={true}
          className="background__image"
        /> */}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
