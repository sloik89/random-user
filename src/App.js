import React, { useState, useEffect } from "react";
import UserContainer from "./UserContainer";
function App() {
  const handleValue = (e) => {
    console.log(e.target);
  };
  return (
    <div className="background-container">
      <UserContainer />
      <div className="backround-top"></div>
      <div className="background-bottom"></div>
    </div>
  );
}

export default App;
