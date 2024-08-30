import landingpicture from "../assets/images/portrait-man-working-as-engineer_23-2151229979 (1) 1.png";
import gensys from "../assets/images/Group 24.png";
import tenece from "../assets/images/tenece_main-removebg-preview 2.png";
import sandra from "../assets/images/Frame 500.png";
import stars from "../assets/images/Frame 503.png";
import star from "../assets/images/Frame 504.png";
import "../styles/landPage.css";
import { Link } from "react-router-dom";
import logo2 from "../assets/images/Frame352.png";
// import icons3 from "../assets/images/Iconstel.png";

const LandingPage = () => {
  return (
    <>
      <div className="update_1">
        {/* <div>Emergency Response Service</div>
        <div>In case of an emergency, call this line </div>
        <div className="update_2"><img src={icons3} alt="" />09137274377</div> */}
      </div>
      <div className="view">
        <div className="nav_bar">
          {" "}
          <img src={logo2} alt="App Logo" className="logo_1" />
          <div className="nav">
            <a href="#aboutUs">About</a>
            <a href="#service">Services</a>
            <a href="#booking">Booking</a>
            <a href="#review">Review</a>
            <a href="#contactUs">Contacts</a>
          </div>
          <div className="button">
            <Link to="/register">
              <button className="btn_1">Sign Up</button>
            </Link>
            <Link to="/login" className="link_transparent">
              <button className="btnx1">Log In</button>
            </Link>
          </div>
        </div>
        <div className="main2">
          <div className="mini_img">
            <img src={stars} alt="" />
          </div>
          <div className="mini">
            <img src={sandra} alt="" />
          </div>
          <div className="imgs">
            <img src={star} alt="" />
          </div>
          <div className="paragraph">
            <div className="sub_1">
              <span className="sub">Professional Artisan service Website</span>
            </div>
            <h1 className="header">
              <span className="artisan_1"> Trusted and Relaible </span>Artisan{" "}
              Services.
            </h1>
            <p className="statement">
              Get access to reliable and top notch professional services across
              the entire city, we are about innovative transformation of
              buisness ensuring convenience for our clients.
            </p>

            <div className="button1">
              <button className="btn_2">Hire Service</button>
              {/* <button className="btn_3">View Services</button> */}
            </div>
          </div>
          <img
            src={landingpicture}
            alt="A man working as an enginerr"
            className="photo"
          />
        </div>
        <div className="company">
          <h2 className="companies">Partners With</h2>
          <div className="sponsors">
            <img src={gensys} alt="" />
            <img src={tenece} alt="" className="tenece" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
