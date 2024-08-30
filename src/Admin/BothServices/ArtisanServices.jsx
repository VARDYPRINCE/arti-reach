import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ArtisanServices() {
  return (
    <div className="input-wrapper_art">
      <input type="text" placeholder="Search" className="input" />
      <button type="submit" className="artisan_btu">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default ArtisanServices;
