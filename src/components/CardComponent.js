function CardComponent({data}) {

    return (
        <div className="weather-card">
            Temperature: {data.main.temp}
        </div>
    );
}

export default CardComponent;