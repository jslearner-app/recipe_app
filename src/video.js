import React from "react";

import "./App.css";
import Powerslap from "./cook.mp4";

const App = () => {
  return (
    <div className="App">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={Powerslap} type="video/mp4" />
      </video>
      <h1>Features</h1>
    </div>
  );
};
export default App;
