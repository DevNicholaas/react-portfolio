import React from "react";
import profilePicture from "../../../static/assets/images/auth/bio/image.jpg";

export default function() {
  return (
  <div className="content-page-wrapper">
    <div 
    classname="left-column"
    style={{
      background: "url(" + profilePicture + ") no-repeat",
      backdroundSize: "cover",
      backgroundPosition: "center"
      }}
    />
    <div classname="right-column">
      Bio goes here
    </div>

   </div>
  );
}