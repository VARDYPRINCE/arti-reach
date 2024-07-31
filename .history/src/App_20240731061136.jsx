import "./App.css";
import AboutUs from "./Pages/AboutUs";
import LandingPage from "./Pages/LandingPage";
import RegistrationForm from "./Pages/RegistrationForm";
import LoginForm from "./Pages/LoginForm";
import Service from "./Pages/Service";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register"  element={<RegistrationForm/>} />
        <Route path="/login" element={<LoginForm/>} />
        </Routes>
      </BrowserRouter>
      <AboutUs />
      <Service />
    </>
  );
}

export default App;
