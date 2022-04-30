import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import FadeIn from 'react-fade-in/lib/FadeIn';

const CardContainerComponent = ({ weatherData, loading, error }) => {
    const [forecast, setForecast] = useState([]);
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        if (Object.keys(weatherData).length !== 0 && !error) {
            parseWeatherData();
        }
    }, [weatherData]);

    const parseWeatherData = () => {
        setForecast(weatherData.list.slice(0, 5));
        setCity(weatherData.city.name);
        setCountry(weatherData.city.country);
    };

    return (
        <div className="main-card-container">
            {
                (loading) ?
                    <FadeIn><div className="spinner-border"></div></FadeIn> :
                    (error) ?
                        <div className="place-container">
                            <h5 className="place">No data found, please try again</h5>
                        </div>
                        :
                        (Object.keys(weatherData).length !== 0) ?
                            <FadeIn>
                                <div className="forecast-container">
                                    <div className="loc m-2 pl-2">
                                        <h1 className="name">{city}, {country}</h1>
                                    </div>
                                    <div className="card-container">
                                        <FadeIn delay={50}>
                                            {forecast.map((data, i) => {
                                                return <CardComponent data={data} key={i} datakey={i} modalActive={modalActive} setModalActive={setModalActive} />
                                            })}
                                        </FadeIn>
                                    </div>
                                </div>
                            </FadeIn> :
                            <div className="place-container">
                                <h5 className="place">Enter your city to get weather forecast</h5>
                            </div>
            }
        </div>
    );
}

export default CardContainerComponent;