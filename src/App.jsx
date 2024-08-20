import "./App.css";
import RegistrationForm from "./Pages/RegistrationForm";
import LoginForm from "./Pages/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Home from "./Pages/Home";
import React from "react";
import HireNow from "./components/HireNow";
import ServiceInformation from "./components/ServiceInformation";
import DashboardNavBar from "./components/DashboardNavBar";
import ServiceById from "./components/ServiceById";
import Layout from "./components/Layout";
import BookingSuccessPage from "./components/BookingSuccess";
import ArtisanLayouts from "./ArtisanSection/ArtisanLayouts";
import ArtisanDashboard from "./ArtisanSection/ArtisanDashboard";
import ArtisanNotification from "./ArtisanSection/ArtisanNotification";
import ArtisanService from "./ArtisanSection/ArtisanService";
import ArtisanPayment from "./ArtisanSection/ArtisanPayment";
import ArtisanLogin from "./ArtisanSection/ArtisanLogin";
import ArtisanRegisterion from "./ArtisanSection/ArtisanRegistration";
import Onboarding from "./ArtisanSection/Onboarding";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/hireNow" element={<HireNow />} />

          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/hireNoww" element={<HireNow />} />
            <Route path="/dashboard" element={<DashboardNavBar />} />
            <Route
              path="/booking/:artisanId"
              element={<ServiceInformation />}
            />
            <Route path="/artisans/:serviceId" element={<ServiceById />} />
            <Route path="/success" element={<BookingSuccessPage />} />
          </Route>

          <Route path="/" element={<ArtisanLayouts />}>
            <Route path="/artisandashboard" element={<ArtisanDashboard />} />
            <Route
              path="/artisannotification"
              element={<ArtisanNotification />}
            />
            <Route path="/artisanservice" element={<ArtisanService />} />
            <Route path="/artisanpayment" element={<ArtisanPayment />} />
          </Route>

          <Route path="/artisanlogin" element={<ArtisanLogin />} />
          <Route path="/artisanregister" element={<ArtisanRegisterion />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
