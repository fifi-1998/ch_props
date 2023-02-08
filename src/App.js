import React from "react";
import "./App.css";
import Profile from "./Component/Profile/Profile";

function App() {
  const data = [
    {
      fullname: " Mejri Feriel ",
      bio: " study in gomycode",
      profession: " student ",
      
    },
    {
      fullname: " Fares Mejri ",
      bio: " work in his own garage",
      profession: " mecanic ",
    },
  ];
  const handleName = (name) => {
    alert(`Welcome ${name}`);
  };
  return (
    <div className="App">
      <Profile data={data} handleName={handleName} />
    </div>
  );
}

export default App;
