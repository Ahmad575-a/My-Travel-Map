import { useState } from 'react';
import ReactMapGL, {Marker}  from 'react-map-gl';
import { Room } from "@material-ui/icons";


const App = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 46,
    longitude: 17,
    zoom: 4
  });
  return (
    <div>
      <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={nextViewport => setViewport(nextViewport)}>
        <Marker 
        latitude={51.756310}
        longitude={	14.332868}
        offsetLeft={-20}
        offsetTop={-10}>
          <Room
                style={{
                  fontSize: 6 * viewport.zoom,
                  color: "lime"
                }}
                
              />
      </Marker>
      </ReactMapGL>
    </div>
  )
}

export default App
