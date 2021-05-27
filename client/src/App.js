import { useState } from 'react';
import ReactMapGL, {Marker, Popup}  from 'react-map-gl';
import { Room , Star} from "@material-ui/icons";
import "./app.css"


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
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/ahmad757-a/ckp7dbkxl0e6d17oa2rbtiz4x"
      >
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
      <Popup
          latitude={51.756310}
          longitude={14.332868}
          closeButton={true}
          closeOnClick={false}
          anchor="left" >
          <div className="card">
                  <label>Place</label>
                  <h4 className="place">Cottbus</h4>
                  <label>Review</label>
                  <p className="desc">Awesome place</p>
                  <label>Rating</label>
                  <div className="stars">
                    <Star className="star"/>
                    <Star className="star"/>
                    <Star className="star"/>
                    <Star className="star"/>
                    <Star className="star"/>
                  </div>
                  <label>Information </label>
                  <span className="username">
                    Created by <b>Ahmad</b>
                  </span>
                  <span className="date"> 1 hour ago</span>
                </div>
        </Popup>
      </ReactMapGL>
    </div>
  )
}

export default App
