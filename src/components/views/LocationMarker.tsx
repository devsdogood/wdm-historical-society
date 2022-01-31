import { Asset } from "contentful-management/dist/typings/export-types";


type LocationMarkerProps = {
    placeName: String;
    mainImage: Asset;
    lat: number;
    lng: number;
    id: string;
}
const LocationMarker: React.FC<React.PropsWithChildren<LocationMarkerProps>> = ({placeName, mainImage, id}) => {
    const K_WIDTH = 100;
    const K_HEIGHT = 40;
    const K_SIZE = 40;
    const greatPlaceStyleHover = {
        position: 'absolute',
        width: K_SIZE,
        height: K_SIZE,
        left: -K_SIZE / 2,
        top: -K_SIZE / 2,
        borderRadius: K_SIZE,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 16,
        padding: 4,
        cursor: 'pointer',
        border: '5px solid #3f51b5',
        color: '#f44336'      
      };
    return (
      <a href={"#" + id}>
        <div
        style={{
            position: 'absolute',
            width: K_WIDTH,
            height: K_HEIGHT,
            left: -K_WIDTH / 2,
            top: -K_HEIGHT / 2,
          
            border: '5px solid #f44336',
            borderRadius: K_HEIGHT,
            backgroundColor: 'white',
            textAlign: 'center',
            color: '#3f51b5',
            fontSize: 10,
            fontWeight: 'bold',
            padding: 4   
          }}
      >
        {placeName}
        {/*<img src = {mainImage.fields.file.url} alt = {mainImage.fields.title} />*/}
      </div>
      </a>
    )
}
export default LocationMarker