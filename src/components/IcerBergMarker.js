import { Icon } from "@iconify/react";
import icebergIcon from "@iconify-icons/openmoji/iceberg";

const IcerBergMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={icebergIcon} className="location-icon" />
    </div>
  );
};
export default IcerBergMarker;
