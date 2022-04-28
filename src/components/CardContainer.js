import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import FadeIn from 'react-fade-in/lib/FadeIn';

const CardContainerComponent = ({ weatherData, loading }) => {
    const [forecast, setForecast] = useState([]);
    const [name, setName] = useState('');
    const [gotData, setGotData] = useState(false);

    useEffect(() => {
        if (!gotData) {
            parseWeatherData();
        }
    });

    const parseWeatherData = () => {
        if (Object.keys(weatherData).length !== 0) {
            setForecast(weatherData.list.slice(0, 5));
            setName(weatherData.city.name);
            setGotData(true);
        }
    };

    return (
        <div className="main-card-container">
            {
                (loading) ?
                    <FadeIn><div className="spinner-border"></div></FadeIn> :
                    (Object.keys(weatherData).length !== 0) ?
                        <FadeIn>
                            <div className="forecast-container">
                                <div className="loc m-2 pl-2">
                                    <h1 className="name">{name}</h1>
                                </div>
                                <div className="card-container">
                                    <FadeIn delay={50}>
                                        {forecast.map(function (data) {
                                            return <CardComponent data={data} />
                                        })}
                                    </FadeIn>
                                </div>
                            </div>
                        </FadeIn> :
                        <div className="place-container">
                            <h5 className="place">Enter your city to get weather data</h5>
                        </div>
            }
        </div>
    );
}

export default CardContainerComponent;