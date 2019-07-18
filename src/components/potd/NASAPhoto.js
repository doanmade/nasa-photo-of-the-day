import axios from "axios";
import React, { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";

function NASAPhoto() {
  const [nasaData, setNasaData] = useState([]);
  console.log(nasaData);
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log("it's working:", res.data);
        setNasaData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <PhotoCard
        date={nasaData.date}
        title={nasaData.title}
        url={nasaData.url}
        explanation={nasaData.explanation}
      />
    </div>
  );
}

export default NASAPhoto;
