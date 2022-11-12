import React from "react";
import Card from "./Card";

function Slide(props) {
  return (
    <div className="cards">
      <Card
        image={props.image}
        profilePicture={props.profilePicture}
        artName={props.artName}
        artistName={props.artistName}
      />
      <Card
        image={props.image2}
        profilePicture={props.profilePicture2}
        artName={props.artName2}
        artistName={props.artistName2}
      />
      <Card
        image={props.image3}
        profilePicture={props.profilePicture3}
        artName={props.artName3}
        artistName={props.artistName3}
      />
      <Card
        image={props.image4}
        profilePicture={props.profilePicture4}
        artName={props.artName4}
        artistName={props.artistName4}
      />
    </div>
  );
}

export default Slide;
