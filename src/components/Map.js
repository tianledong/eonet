import GoogleMapReact from "google-map-react";
import FireMarker from "./FireMarker";
import CycloneMarker from "./CycloneMarker";
import IcerBergMarker from "./IcerBergMarker";
import InfoBox from "./InfoBox";
import { useState } from "react";
import VolcanoMarker from "./VolcanoMarker";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const cleanInfo = () => {
    setLocationInfo(null);
  };

  const mapMarkers = eventData.map((data, index) => {
    switch (data.categories[0].id) {
      case 8:
        return (
          <FireMarker
            key={index + "fire"}
            lat={data.geometries[0].coordinates[1]}
            lng={data.geometries[0].coordinates[0]}
            onClick={() =>
              setLocationInfo({
                id: data.id,
                title: data.title,
                date: data.geometries[0].date,
              })
            }
          />
        );
      case 10:
        return data.geometries.map((c, i) => {
          return (
            <CycloneMarker
              key={index + i + "cyclone"}
              lat={c.coordinates[1]}
              lng={c.coordinates[0]}
              onClick={() =>
                setLocationInfo({
                  id: data.id,
                  title: data.title,
                  date: c.date,
                })
              }
            />
          );
        });
      case 12:
        // geometries data form is werid for this case
        if (data.id === "EONET_354") {
          return null;
        }
        return data.geometries.map((c, i) => {
          return (
            <VolcanoMarker
              key={index + i + "volcano"}
              lat={c.coordinates[1]}
              lng={c.coordinates[0]}
              onClick={() =>
                setLocationInfo({
                  id: data.id,
                  title: data.title,
                  date: c.date,
                })
              }
            />
          );
        });
      case 15:
        return data.geometries.map((c, i) => {
          return (
            <IcerBergMarker
              key={index + i + "ice"}
              lat={c.coordinates[1]}
              lng={c.coordinates[0]}
              onClick={() =>
                setLocationInfo({
                  id: data.id,
                  title: data.title,
                  date: c.date,
                })
              }
            />
          );
        });
      default:
        return null;
    }
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDBHNIHDwdHw0X_qkOTib9_7DXjuZHqwgE" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {mapMarkers}
      </GoogleMapReact>
      {locationInfo !== null && (
        <InfoBox info={locationInfo} cleanInfo={cleanInfo} />
      )}
    </div>
  );
};
Map.defaultProps = {
  center: {
    lat: 34.0522,
    lng: -118.2437,
  },
  zoom: 6,
};
export default Map;
