import { useState } from "react";
import ClientService from "./BothServices/ClientServices";
import ArtisanService from "./BothServices/ArtisanServices";
import "../AdminStyling/Service.css";

function Service() {
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
        {activeTab === "client" ? <ClientService /> : <ArtisanService />}
      </div>
    </div>
  );
}

export default Service;
