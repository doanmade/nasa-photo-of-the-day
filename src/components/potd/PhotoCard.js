import React from "react";

const PhotoCard = props => {
  return (
    <div>
      <h1>NASA Photos of the day</h1>
      <h2>{props.title}</h2>

      <img src={props.url} alt="I come in peace" />
      <span>{props.date}</span>
      <p>{props.explanation}</p>
    </div>
  );
};

export default PhotoCard;
