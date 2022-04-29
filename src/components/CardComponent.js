import { useEffect, useState } from "react";
import IconComponent from "./IconComponent";

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function CardComponent({data, datakey, modalActive, setModalActive}) {
    const [date, setDate] = useState({});
    const [temp, setTemp] = useState({});
    const [description, setDescription] = useState('');

    useEffect(() => {
        parseForecastData();
    }, [data]);

    const parseForecastData = () => {
        const d = new Date(data.dt_txt);

        setDate({
            dayName: dayNames[(d.getDay() + datakey % dayNames.length + dayNames.length) % dayNames.length].slice(0, 3)
        });
        setTemp({
            actual: Math.round(data.main.temp),
            feelsLike: Math.round(data.main.feels_like)
        });

        setDescription(data.weather[0].description.toLowerCase());
    }

    return (
        <div className="weather-card" onClick={() => setModalActive(!modalActive)} >
            <div className="d-flex justify-content-between">
                <div>
                    <h5 className="alt-temp day" align="left">{date.dayName}.</h5>
                    <h1 className="temp">{temp.actual}º</h1>
                </div>
                <div><IconComponent path={"flat/" + description + ".png"}/></div>
            </div>
            <div className="bottom">
                <h5 className="alt-temp" align="left">Feels like {temp.feelsLike}º</h5>
                <h6 className="alt-temp" align="left">{description.charAt(0).toUpperCase() + description.slice(1)}</h6>
                <h6 className="alt-temp" align="left">Humidity: {data.main.humidity}%</h6>
            </div>
        </div>
    );
}

export default CardComponent;