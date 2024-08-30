import "../styles/choose.css";
import cap from "../assets/images/Frame 533.png";
import tool from "../assets/images//Frame 534.png";
import trusted from "../assets/images/Frame 535.png";

const Choose = () => {
  return (
    <div className="main_choose">
      <h1 className="title_1">Why Choose Arti-Reach</h1>

      <div className="choose_box">
        <div className="p_workers">
          <img src={cap} alt="" />
          <h2 className="j_description">Professional workers</h2>
          <p className="statement_box">
            We have service providers who are professionals in the service they
            render to our clients bringing satisfaction to the customers.
          </p>
        </div>
        <div className="p_workers">
          <img src={tool} alt="" />
          <h2 className="j_description">Years of Experience</h2>
          <p className="statement_box">
            Our service providers have good years of experience in the services
            they render leaving clients in good hands.
          </p>
        </div>
        <div className="p_workers">
          <img src={trusted} alt="" />
          <h2 className="j_description">Trusted and Reliable</h2>
          <p className="statement_box">
            We offer trusted and reliable services to clients which reflects in
            our values and the satisfaction our clients get from our services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
