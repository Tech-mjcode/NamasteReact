// import food from "../Images/burger-image.png";
import imgurl from "../images/food.avif";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
        </h1>
        <h4>
          "Better you will feel if you eat a Food<span>Fire</span> healthy meal"
        </h4>
      </div>
      <div className="about-right">
        <img src={imgurl} alt="Food Image" />
      </div>
    </div>
  );
};

export default About;
