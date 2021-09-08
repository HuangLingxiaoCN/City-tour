import { useState } from "react";
import "./City.css";

export const City = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo((prevState) => {
      return !prevState;
    })
  };

  return (
    <div className="city">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
        crossorigin="anonymous"
      />
      <img src={props.city} alt="New York" />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>
        {props.info}
        <button onClick={toggleInfo}>
          <i class="fas fa-sort-down"></i>
        </button>
      </p>
      {showInfo && (
        <p className="info">
          Vivamus magna justo, lacinia eget consectetur sed, convallis at
          tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
          sem. Curabitur non nulla sit amet nisl tempus convallis quis ac
          lectus. Proin eget tortor risus. Vestibulum ac diam sit amet quam
          vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget
          tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Mauris
          blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget
          tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh
          pulvinar a.
        </p>
      )}
    </div>
  );
};
