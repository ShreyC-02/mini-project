import React, { useState } from 'react';

import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
export default function WeatherApp() {
    const [WeatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feels_like: 33.32,
        temp: 32.05,
        temp_min: 32.05,
        temp_max: 32.05,
        humidity: 45,
        weather: "haze",
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{ textAlign: "center"}}>
            <h2>Weather App By Shreya</h2>
            <SearchBox updateInfo = {updateInfo} />
            <InfoBox info = {WeatherInfo} />
        </div>
    );
};