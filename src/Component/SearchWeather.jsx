import React, { useEffect, useState } from "react";
import weatherimg from "./img/weather.jpg";

export default function SearchWeather() {
  const Api1 = {
    key: "9be3474a11ebce963a053ce0d3ceeb20",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [search, setSearch] = useState("");
  const [weather, setweather] = useState({});

  const searchpressed = () => {
    fetch(`${Api1.base}weather?q=${search}&units=metric&APPID=${Api1.key}`)
      .then((res) => res.json())
      .then((result) => {
        setweather(result);
        console.log("result", result);
      });
  };

  useEffect(() => {
    searchpressed();
  }, []);

  return (
    <>
      <div className="container">
        <div className="details">
          <header className="App-header">
            <div>
              <input
                type="text"
                placeholder="Enter city"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button onClick={searchpressed}>search</button>
            </div>
            {typeof weather.main != "undefined" ? (
              <div className="detl">
                <span>
                  <p className="para">{weather.name}</p>
                  <p className="para">{weather.weather[0].main}</p>
                </span>
                <span>
                  <p className="para">
                    Feels Like - {weather.main.temp} &deg;c
                  </p>
                </span>
                <span>
                  <p className="para"> Humidity - {weather.main.humidity}%</p>
                </span>
                <span>
                  <p className="para"> Wind - {weather.wind.speed} Km/h</p>
                </span>
                <p className="para">{weather.weather[0].description}</p>
              </div>
            ) : (
              ""
            )}
          </header>
        </div>
      </div>
    </>
  );
}
