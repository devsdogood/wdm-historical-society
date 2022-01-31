import { LocationMap } from "@src/types/generated/contentful";
import { Asset } from "contentful-management/dist/typings/export-types";
import GoogleMapReact, { Coords } from "google-map-react";
import LocationMarker from "./LocationMarker";


type PlacesMapProps = {
  entry: LocationMap
};
const PlacesMap: React.FC<React.PropsWithChildren<PlacesMapProps>> = ({
  entry
}) => {
  //console.log(entry)
  const defaultProps = {
    center: {
      lng: -93.7815871,
      lat: 41.5598507,
    }, 
    zoom: 12,
  };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GCP_MAPS_API! }}
        defaultCenter={defaultProps.center as Coords}
        defaultZoom={defaultProps.zoom} 
        >
        { 
          entry.fields?.locations.map((places) => {
            //console.log(places.fields.coordinates)
            return (
            <LocationMarker key={places.sys.id} lat={places.fields.coordinates.lat} lng = {places.fields.coordinates.lon} placeName = {places.fields.title}  mainImage = {places.fields?.mainImage as Asset} id={places.sys.id}/>
            )
          }
           )
        }
      </GoogleMapReact>
    </div>
  );
};
export default PlacesMap;
