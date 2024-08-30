import { useState } from "react";
import ClientProfile from "./BothServices/ClientServices";
import ArtisanProfile from "./BothServices/ArtisanServices";
import "../AdminStyling/Service.css";

function AdminProfile() {
  const [activeTab, setActiveTab] = useState("client");
  return (
    <div className="Sevice_bnt">
      <div className="tabbs">
        <button
          className={activeTab === "client" ? "active" : ""}
          onClick={() => setActiveTab("client")}
        >
          Client
        </button>
        <button
          className={activeTab === "artisan" ? "active" : ""}
          onClick={() => setActiveTab("artisan")}
        >
          Artisan
        </button>
      </div>
      <div className="tabb-content">
        {activeTab === "client" ? <ClientProfile /> : <ArtisanProfile />}
      </div>
    </div>
  );
}

export default AdminProfile;
