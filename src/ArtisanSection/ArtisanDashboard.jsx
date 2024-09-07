import { useEffect, useState } from "react";
import "../ArtisanSectionStyling/artisandashboard.css";
import box from "../assets/images/notificationBox.png";
import smallbag from "../assets/images/Vector (4).png";
import Switcher from "./Switcher";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import Loading from "../components/Loading"; // Import the Loading component

const ArtisanDashboard = () => {
  const { artisanId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [artisandId, setArtisandId] = useState(""); // Add a loading state
  const [artisanReview, setArtisanbyReview] = useState(null);

  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);
  const token = useSelector((state) => state.user.token);
  const id = useSelector((state) => state.user.user._id);

  useEffect(() => {
    if (userData) {
      setUser(userData.user);
    } else {
      navigate("/login");
    }
  }, [userData]);

  // console.log(userData);
  console.log(token);
  console.log(userData);
  console.log(id);

  const fetchUserByIdData = async (id) => {
    try {
      const res = await axios.get(
        `https://artireach.onrender.com/api/v1/review/artisans/${id}`
      );
      console.log(res.data.data); // Check the structure of res.data
      setArtisanbyReview(res.data.data); // Assuming res.data.data is the array containing reviews and other data
    } catch (error) {
      console.error("Error fetching data", error.message);
    }
  };

  useEffect(() => {
    if (id) {
      fetchUserByIdData(id);
    }
  }, [id]);

  // if (loading) {
  //   return <Loading />; // Show loading component while fetching data
  // }

  return (
    <>
      <div className="ad_1">
        <div className="togs">
          {" "}
          <Switcher className="tog" />
        </div>
        <div>
          <div className="toggle_section">
            <h1>Welcome {user ? user.name : ""}!</h1>
            <div className="dotted_line">This is your Artisan Dashboard.</div>
          </div>
        </div>

        <div className="main_line_done">
          <div className="first_linejob">
            <div className="lineejob_1">Jobs Done</div>
            <div className="twelves">12</div>
          </div>
          <div className="second_linejob">
            <div className="lineejob_1">Customer Ratings</div>
            <div className="twelves1">{artisanReview?.averageRating}</div>
            <div className="twelvess">Ratings</div>
          </div>
        </div>
        <div className="boxesnotification">
          <div className="boxesnotification2">
            <img src={box} alt="" className="boxesnot" />
            <div className="bxnot">
              <Link to="/artisannotification">
                <button className="boxesnotification3">
                  Open Notification
                </button>
                <img src={smallbag} alt="" className="vv" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtisanDashboard;
