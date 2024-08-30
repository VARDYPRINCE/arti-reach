// import { useState } from "react";
// import ClientSection from "./BothSections/ClientSection";
// import ArtisanSection from "./BothSections/ArtisanSection";
// import "../AdminStyling/Allnotification.css";

// const Allnotification = () => {
//   const [activeTab, setActiveTab] = useState("client");

//   return (
//     <div className="notif_btn">
//       <div className="tabs">
//         <button
//           className={activeTab === "client" ? "active" : ""}
//           onClick={() => setActiveTab("client")}
//         >
//           Client
//         </button>
//         <button
//           className={activeTab === "artisan" ? "active" : ""}
//           onClick={() => setActiveTab("artisan")}
//         >
//           Artisan
//         </button>
//       </div>
//       <div className="tab-content">
//         {activeTab === "client" ? <ClientSection /> : <ArtisanSection />}
//       </div>
//     </div>
//   );
// };

// export default Allnotification;


import React from 'react'

const Allnotification = () => {
  return (
    <div>Allnotification</div>
  )
}

export default Allnotification