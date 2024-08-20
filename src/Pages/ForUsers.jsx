import "../styles/forUsers.css";
import bold from "../assets/images/Icons Bold.png";
import search from "../assets/images/fi-br-zoom-in.png";
import contact from "../assets/images/fi-br-user-add.png";
import bag from "../assets/images/fill.png";
import { Link } from "react-router-dom";

const ForUsers = () => {
  return (
    <div className="erm">
      <div>
        <h3 className="book_service" id="booking">
          Booking Service
        </h3>
        <h2 className="users_1">For Users</h2>
      </div>
      <div className="flex">
        <div className="sign_div">
          <div className="force">
            <img src={search} alt="" />
          </div>
          <span className="statement_2">
            Search for specific domestic service you want an we"ll find a
            registered service proviers closest to you.
          </span>
        </div>

        <div className="line"></div>

        <div className="sign_div">
          <div className="force">
            <img src={contact} alt="" />
          </div>
          <span className="statement_2">
            You picked one of the listed service providers and after they accept
            your service request you can contact them to discuss further service
            negotiations.
          </span>
        </div>

        <div className="line"></div>

        <div className="sign_div">
          <div className="force">
            <img src={bold} alt="" />
          </div>
          <span className="statement_2">
            Your assigned service provider arrives at your location and gets the
            job request done.
          </span>
        </div>
      </div>
      <div>
        <h2 className="users_1">For Artisans</h2>
      </div>
      <div className="flex">
        <div className="sign_div">
          <div className="force">
            <img src={bag} alt="" />
          </div>
          <span className="statement_2">
            Register on Arti-Reach as a service provider, then go through the
            onboarding process.
          </span>
        </div>

        <div className="line"></div>

        <div className="sign_div">
          <div className="force">
            <img src={contact} alt="" />
          </div>
          <span className="statement_2">
            Arti-Reach will put you through as a certified service provider,
            users around can request your services.
          </span>
        </div>

        <div className="line"></div>

        <div className="sign_div">
          <div className="force">
            <img src={bold} alt="" />
          </div>
          <p className="statement_2">
            Accept user request, goes and completes tasks then get paid.
          </p>
        </div>
      </div>
      <div className="btn_btn">
        <Link to="/artisanregister">
          <button className="btn_3_">Register Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ForUsers;
