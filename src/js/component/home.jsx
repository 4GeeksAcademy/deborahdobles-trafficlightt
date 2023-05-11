import React, { useState, useEffect } from "react";

const Home = () => {
  const [selectedLight, setSelectedLight] = useState("red");
  const [showPurple, setShowPurple] = useState(false);

  useEffect(() => {
    const interval = setInterval(cycleLight, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [selectedLight]);

  const cycleLight = () => {
    if (selectedLight === "red") {
      setSelectedLight("yellow");
    } else if (selectedLight === "yellow") {
      setSelectedLight("green");
    } else if (selectedLight === "green") {
      setSelectedLight(showPurple ? "purple" : "red");
    } else if (selectedLight === "purple") {
      setSelectedLight("red");
    }
  };

  const togglePurple = () => {
    setShowPurple((prevState) => !prevState);
  };

  let redLightClass = "light red";
  let yellowLightClass = "light yellow";
  let greenLightClass = "light green";
  let purpleLightClass = "light purple";

  if (selectedLight === "red") {
    redLightClass += " active";
  }
  if (selectedLight === "yellow") {
    yellowLightClass += " active";
  }
  if (selectedLight === "green") {
    greenLightClass += " active";
  }
  if (selectedLight === "purple") {
    purpleLightClass += " active";
  }

  return (
    <div className="text-center">
      <div className="traffic-hanger"></div>
      <div className="traffic-light">
        <div className={redLightClass}></div>
        <div className={yellowLightClass}></div>
        <div className={greenLightClass}></div>
        {showPurple && <div className={purpleLightClass}></div>}
      </div>
      <button onClick={togglePurple}>
        {showPurple ? "Hide Purple" : "Include Purple"}
      </button>
    </div>
  );
};

export default Home;


