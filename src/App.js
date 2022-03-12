import "./App.css";

import React, { useEffect } from "react";
import User from "./components/User";
import { useState } from "react";

const App = () => {
  const [userToggle, setUserToggle] = useState(true);
  const [users, setusers] = useState([]);
  const name = "Bharath";
  const isNameShowing = false;

  const handleUserDisplay = () => {
    setUserToggle(!userToggle);
  };

  useEffect(() => {
    (async() => {
      let response = await fetch("http://localhost:5000/subscribers");
      let data = await response.json();
      setusers(data);
    })();
  }, []);

  return (
    <div className="App">
      {userToggle && users.map((e) => <User key={e._id} user={e} />)}
      <h1>Hello, {isNameShowing ? name : "Someone"}!</h1>
      <button onClick={handleUserDisplay}>
        {userToggle ? "disable" : "enable"} user info
      </button>
    </div>
  );
};

export default App;
