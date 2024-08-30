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
import AdminLayout from "./Admin/AdminLayout";
import AdminDashboard from "./Admin/AdminDashboard";
import Allnotification from "./Admin/allnotification";
import ArtisanSection from "./Admin/BothSections/ArtisanSection";
import ClientSection from "./Admin/BothSections/ClientSection";
import Service from "./Admin/Service";
import AdminProfile from "./Admin/AdminProfile";
import AdminDashboradLayaout from "./AdminDashboradLayaout";
import ClientService from "./components/ClientService";

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
            <Route path="/serviceforclients" element={<ClientService />} />
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

          {/* <Route path="/" element={<AdminDashboradLayaout />}>
            <Route path="/" element={<AdminDashboradLayaout />}></Route>
          </Route> */}

          <Route path="/" element={<AdminLayout />}>
            <Route path="/admindashboard" element={<AdminDashboard />} />
            {/* <Route path="/" element={<AdminLayout />}></Route> */}
            <Route path="/allnotification" element={<Allnotification />} />
            <Route path="/adminservice" element={<Service />} />
            <Route path="/profile" element={<AdminProfile />} />
          </Route>
          <Route path="/artisansection" element={<ArtisanSection />} />
          <Route path="/clientsection" element={<ClientSection />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
