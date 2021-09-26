import { useState } from "react";
import "./City.css";

export const City = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="city">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <img src={props.img} alt="New York" />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>
        {props.info}
        <button onClick={toggleInfo}>
          <i className="fas fa-sort-down"></i>
        </button>
      </p>
      {showInfo && (
        <p className="info">
          Vivamus magna justo, lacinia eget consectetur sed, convallis at
          tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
          sem. Curabitur non nulla sit amet nisl tempus convallis quis ac
          lectus.
        </p>
      )}
    </div>
  );
};
