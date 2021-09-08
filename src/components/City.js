import './City.css';

export const City = (props) => {
  return (
    <div className="city">
      <img src={props.city} alt='New York'/>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>{props.info}</p>
    </div>
  )
}
