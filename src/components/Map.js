import GoogleMapReact from "google-map-react";
import FireMarker from "./FireMarker";

const Map = ({ eventData, center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDBHNIHDwdHw0X_qkOTib9_7DXjuZHqwgE" }}
        defaultCenter={center}
        defaultZoom={zoom}
        >
            <FireMarker lat={center.lat} lng={center.lng}/>
        </GoogleMapReact>
    </div>
  );
};
Map.defaultProps = {
  center: {
    lat: 42.4265,
    lng: -122.8756,
  },
  zoom: 6,
};
export default Map;
