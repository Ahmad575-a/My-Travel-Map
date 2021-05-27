import { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Room, Star } from "@material-ui/icons";
import "./app.css"
import axios from "axios";
import { Fragment } from 'react';


const App = () => {
  const [pins, setPins] = useState([]);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 46,
    longitude: 17,
    zoom: 4
  });

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get("/pins");
        setPins(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapStyle="mapbox://styles/ahmad757-a/ckp7dbkxl0e6d17oa2rbtiz4x"
      >
        {pins.map(p => (
          <>
        <Marker
          latitude={51.756310}
          longitude={14.332868}
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
            <h4 className="place">{p.title}</h4>
            <label>Review</label>
            <p className="desc">{p.desc}</p>
            <label>Rating</label>
            <div className="stars">
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
            </div>
            <label>Information </label>
            <span className="username">
                Created by <b>{p.username}</b>
            </span>
            <span className="date"> 1 hour ago</span>
          </div>
        </Popup></>
        ))}
      </ReactMapGL>
    </div>
  )
}

export default App
