import { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

type MapProps = {
  markers: mapIntel[];
};

const Map = ({markers }: MapProps) => {
  const [position, setPosition] = useState([34.639944, 50.875942]); //set to Qom
  const [zoom, setZoom] = useState(3);
  const [center, setCenter] = useState({ lat: 40.7831, lng: -73.9712 });

  
  const iranBounds = [
    [25.078237, 44.050136], // Southwest coordinates
    [39.774769, 63.316634] // Northeast coordinates
  ];// set initial map center position
  
  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} style={{height: '100vh'}} bounds={iranBounds}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map((marker, index) => (
      <Marker key={index} position={marker.position}>
          <Popup>
            <div>
              <h3>{marker.schoolName}</h3>
              <p>City: {marker.cityName}</p>
              <p>Province: {marker.provinceName}</p>
              <p>Symptoms: {marker.symptoms.join(', ')}</p>
              {marker.photos?.map((photo, index) => (
                <img key={index} src={photo} alt={`Photo ${index}`} />
              ))}
              <p>Related Links:</p>
              <ul>
                {marker.relatedLinks?.map((link, index) => (
                  <li key={index}>
                    <a href={link}>{link}</a>
                  </li>
                ))}
              </ul>
              <p>Reported Attack Date: {marker.reportedAttackDate}</p>
            </div>
          </Popup>
      </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
