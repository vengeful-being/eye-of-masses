import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Map from "./components/Map";
function App() {
  
const markerData = [  {    schoolName: 'Example School',    cityName: 'New York City',    provinceName: 'New York',    position: [36.6, 51.6167],
    symptoms: ['Unknown'],
    photos: [      'https://example.com/photo1.jpg',      'https://example.com/photo2.jpg',    ],
    relatedLinks: ['https://example.com/link1', 'https://example.com/link2'],
    reportedAttackDate: '2023-03-07',
  },
];
  return (
    <div className="container" style={{borderColor: 'black', borderRadius: '2px'}}>
      <div>
        <Map markers={markerData} />
      </div>
    </div>
  );
}

export default App;
// <div>
//   <a href="https://vitejs.dev" target="_blank">
//     <img src="/vite.svg" className="logo" alt="Vite logo" />
//   </a>
//   <a href="https://reactjs.org" target="_blank">
//     <img src={reactLogo} className="logo react" alt="React logo" />
//   </a>
// </div>
// <h1>Vite + React</h1>
// <div className="card">
//   <button onClick={() => setCount((count) => count + 1)}>
//     count is {count}
//   </button>
//   <p>
//     Edit <code>src/App.tsx</code> and save to test HMR
//   </p>
// </div>
// <p className="read-the-docs">
//   Click on the Vite and React logos to learn more
// </p>
