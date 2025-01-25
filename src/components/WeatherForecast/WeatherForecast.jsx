import WeatherIcons from '../WeatherIcon/WeatherIcon';
import './WeatherForecast.css'

const Weather = ( {day, img, alt, conditions, time}) => {
    return (
<div className="weather">
  <h2>{day}</h2>
  <WeatherIcons src={img} alt={alt} />
  <p><span>conditions: </span>{conditions}</p>
  <p><span>time: </span>{time}</p>
</div>
    )
}

export default Weather;