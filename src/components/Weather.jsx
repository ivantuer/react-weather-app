import React from 'react'

const Weather = ({
  city,
  country,
  temperature,
  humidity,
  description,
  error,
}) => {
  return (
    <div className="weather">
      {city && (
        <p>
          City: <span>{city}</span>
        </p>
      )}
      {country && (
        <p>
          Country: <span>{country}</span>
        </p>
      )}
      {temperature && (
        <p>
          Temperature: <span>{temperature} °C</span>
        </p>
      )}
      {humidity && (
        <p>
          Humidity: <span>{humidity} %</span>
        </p>
      )}
      {description && (
        <p>
          Description: <span>{description}</span>
        </p>
      )}
      {error && (
        <p>
          Error: <span className="error">{error}</span>
        </p>
      )}
    </div>
  )
}

export default Weather
