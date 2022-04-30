import { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import CardContainerComponent from "./CardContainer";

const api = {
    key: '6f32b8b6a516d799524ab287b0628126',
    base: 'https://api.openweathermap.org/data/2.5/'
};

function WeatherSearch() {
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const [error, setError] = useState(false);

    const fetchWeatherData = (e) => {
        if (e.key === 'Enter') {
            setLoading(true);
            fetch(`${api.base}forecast?q=${city}&units=imperial&APPID=${api.key}`)
                .then(resp => resp.json())
                .then(result => {
                setData(result)
                console.log(result)
                setLoading(false)
                setError(result.cod === "404")
            });
        }
    }

    return (
        <div className="container">
            <div className="search">
                <InputGroup>
                    <FormControl className="form-control mb-3"
                        type="text"
                        placeholder="Search..."
                        aria-label="city"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        onKeyPress={fetchWeatherData}
                    />
                </InputGroup>
            </div>
            <CardContainerComponent weatherData={data} loading={loading} error={error} />
        </div>
    );
}

export default WeatherSearch;