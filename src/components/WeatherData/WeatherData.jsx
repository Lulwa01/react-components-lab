// contains both the day, conditions, and time 

const WeatherDetails = ({ day, conditions, time }) => {

    return (
        <li>
            <h2>{day}</h2>
            <p>{conditions}</p>
            <p>{time}</p>
        </li>
    )
}

export default WeatherDetails