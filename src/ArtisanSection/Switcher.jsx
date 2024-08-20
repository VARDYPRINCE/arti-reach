import React, { useState } from 'react';
import "../ArtisanSectionStyling/switcher.css"; // Optional: For custom styling

function Switcher() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="switcher">
      <span> {isOn ? 'Online' : 'Offline'}</span>
      <div
        className={`switch ${isOn ? 'switch-on' : 'switch-off'}`}
        onClick={handleToggle}
      >
        <div className="switch-circle"></div>
      </div>
    </div>
  );
}

export default Switcher;