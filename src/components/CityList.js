import { City } from './City';
import './CityList.css';
import London from '../assets/London.jpg';
import NewYork from '../assets/NewYork.jpg';
import Shanghai from '../assets/Shanghai.jpg';
import Tokyo from '../assets/Tokyo.jpg';

const CityList = (props) => {
  return(
    <div className="CityList">
      <City city={NewYork} name='NewYork' description='New York Travel Guide' info='Info' />
      <City city={London} name='London' description='Discover London' info='Info' />
      <City city={Shanghai} name='Shanghai' description='Visit Shanghai' info='Info' />
      <City city={Tokyo} name='Tokyo' description='Tokyo in a glance' info='Info' />
    </div>
  )
}

export default CityList;