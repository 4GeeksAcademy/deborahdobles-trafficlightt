import React, { useState } from "react";

const Home = () => {
  const [selectedLight, setSelectedLight] = useState("");

  const redLightClassNames = ["light", "red"];
  if (selectedLight === "red") {
    redLightClassNames.push("active");
  }

  const yellowLightClassNames = ["light", "yellow"];
  if (selectedLight === "yellow") {
    yellowLightClassNames.push("active");
  }

  const greenLightClassNames = ["light", "green"];
  if (selectedLight === "green") {
    greenLightClassNames.push("active");
  }

  return (
    <div className="text-center">
	  <div className="traffic-hanger"></div>
      <div className="traffic-light">
        <div className={redLightClassNames.join(" ")} onClick={() => setSelectedLight("red")}></div>
        <div className={yellowLightClassNames.join(" ")} onClick={() => setSelectedLight("yellow")}></div>
        <div className={greenLightClassNames.join(" ")} onClick={() => setSelectedLight("green")}></div>
      </div>
    </div>
  );
};

export default Home;