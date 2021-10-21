import { useReducer } from "react";
import "./City.css";

function reducer_function(state, action) {
  switch (action.type) {
    case 'toggle':
      return { showInfo: state.showInfo ? false : true };
    default:
      return state;
  }
}


export const City = (props) => {
  const [state, dispatch] = useReducer(reducer_function, {showInfo: false});

  const toggleInfo = () => {
    dispatch({ type: 'toggle'});
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
          <i className={state.showInfo ? 'fa fa-sort-up' : 'fas fa-sort-down'}></i>
        </button>
      </p>
      {state.showInfo && (
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
