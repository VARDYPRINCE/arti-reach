import "./App.css";
import AboutUs from "./Pages/AboutUs";
import LandingPage from "./Pages/LandingPage";
import Service from "./Pages/Service";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
      <AboutUs />
      <Service />
    </>
  );
}

export default App;
