import React from "react";
import profilePicture from "../../../static/assets/images/auth/bio/image.jpg";

export default function() {
  return (
  <div className="content-page-wrapper">
    <div 
    className="left-column"
    style={{
      background: "url(" + profilePicture + ") no-repeat",
      backdroundSize: "cover",
      backgroundPosition: "center"
      }}
    />
    <div className="right-column">
      My name is Nicholaas Miller. I was born and raised in Oakland, California and I have worked very hard to be where I am. I found my interest in coding when I was in high school. Then when I was hired for my first job as a Recreation Aide for the City of Oakland I began my coding journey. For a short time I learned on my own then I signed up to go through Bottega University's Full-stack Development Program. During my time at Bottega I was prmoted to a Recreation Specialist and began teaching youth how to code. I also improved my own skills as well and built several applications. I worked closely with mentors and teachers to make sure I understood the complexities of everything I worked on.
    </div>

   </div>
  );
}