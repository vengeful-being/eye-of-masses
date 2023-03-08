import { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

function Map(){
  const [position, setPosition] = useState([34.639944, 50.875942]); //set to Qom

  const iranBounds = [
    [25.078237, 44.050136], // Southwest coordinates
    [39.774769, 63.316634] // Northeast coordinates
  ];// set initial map center position
  
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} bounds={iranBounds}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
