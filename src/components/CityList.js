import { City } from "./City";
import "./CityList.css";
import { cityData } from "./data";

const CityList = (props) => {
  return (
    <div className="CityList">
      {cityData.map((city) => (
        <City
          key={city.id}
          img={city.img}
          name={city.name}
          description={city.description}
          info={city.info}
        />
      ))}
    </div>
  );
};

export default CityList;
