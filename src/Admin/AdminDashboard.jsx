import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import "../AdminStyling/AdminDashboard.css";
import s from "../assets/images/fill (4).png";
import person from "../assets/images/person.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// Register the elements you need
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const userData = useSelector((state) => state.user);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (userData) {
      setUser(userData.user);
    } else {
      navigate("/login");
    }
  }, [userData]);

  // console.log(userData);
  // console.log(token);

  return (
    <div>
      <div className="AdminBody">
        <div className="admindiv_1">
          Welcome to <span>{user ? user.name : ""}</span>.
        </div>
        <div className="vv">What do you want to achieve here today?</div>
        <p className="overview">Overview Records</p>
      </div>

      <div className="records">
        <div className="records_1">
          <div className="records_1_1">
            <div className="records_1_3">
              <div className="records_1_4">
                <div className="records_1_5">
                  <img src={s} alt="" className="rec_ords" />
                  <div>
                    <div className="uest">22</div>
                    <div className="req">Service Request</div>
                  </div>
                </div>
                <div className="records_1_5">
                  <img src={person} alt="" className="rec_ords" />
                  <div>
                    <div className="uest">8642</div>
                    <div className="req">Registered Clients</div>
                  </div>
                </div>
              </div>
              <div className="records_1_4">
                <div className="records_1_5">
                  <img src={s} alt="" className="rec_ords" />
                  <div>
                    <div className="uest">134</div>
                    <div className="req">Available Artisans</div>
                  </div>
                </div>
                <div className="records_1_5">
                  <img src={person} alt="" className="rec_ords" />
                  <div>
                    <div className="uest">4750</div>
                    <div className="req">Registered Artisans</div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="records_2">
          <div className="records1.2"></div>
        </div>
      </div>

      <div className="charts_container">
        <div className="Doughnut_container1">
          <Bar
            className="dd"
            data={{
              labels: ["pending", "ongoing", "completed"],
              datasets: [
                {
                  label: "Work Status",
                  data: [12, 19, 3],
                  backgroundColor: ["#CCA20E", "#d84c4c", "#008080"],
                  // borderColor: "#000000", // Border color of bars
                  borderWidth: 1, // Width of bar borders
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  display: false,
                  position: "bottom",
                  align: "center",
                  labels: {
                    color: "black", // Text color for legend
                  },
                },
                tooltip: {
                  callbacks: {
                    label: function (tooltipItem) {
                      return tooltipItem.label + ": " + tooltipItem.raw;
                    },
                  },
                  bodyColor: "black", // Color of the tooltip text
                },
              },
              scales: {
                x: {
                  ticks: {
                    color: "black", // X-axis tick color
                  },
                },
                y: {
                  ticks: {
                    color: "black", // Y-axis tick color
                  },
                },
              },
            }}
          />
        </div>

        <div className="Doughnut_container">
          <Doughnut
            data={{
              labels: ["Electrical", "Carpentry", "Plumbing", "Painting"],
              datasets: [
                {
                  label: "Sales",
                  data: [12, 19, 3, 6],
                  backgroundColor: ["#08457E", "#CCA20E", "#14E9D0", "#BB1111"],
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  display: true,
                  position: "bottom",
                  align: "center",
                  labels: {
                    color: "black", // Text color for legend
                  },
                },
                tooltip: {
                  callbacks: {
                    label: function (tooltipItem) {
                      return tooltipItem.label + ": " + tooltipItem.raw;
                    },
                  },
                  // bodyColor: 'white', // Color of the tooltip text
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
