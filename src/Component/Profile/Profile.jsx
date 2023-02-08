import React from "react";
import "./style.css";
import Items from "./Items";

function Profile({ data, handleName }) {
  return (
    <div className="Profile">
      {handleName("girl")}
      {data.map((elt, index) => (
        <Items {...elt} key={index}></Items>
      ))}
    </div>
  );
}

export default Profile;
