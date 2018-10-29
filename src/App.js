import React, { Component } from 'react'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
import './App.scss'

const API_KEY = '6aa3a528f4869a1f367b9b91f95018b9'

class App extends Component {
  state = {
    city: '',
    country: '',
    temperature: '',
    humidity: '',
    description: '',
    error: '',
  }

  getWeather = async event => {
    event.preventDefault()
    const city = event.target.elements.city.value
    const country = event.target.elements.country.value
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    )
    const data = await api_call.json()
    if (data.cod !== '404') {
      console.log(data)
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: '',
      })
    } else {
      this.setState({
        city: '',
        country: '',
        temperature: '',
        humidity: '',
        description: '',
        error: 'you entered invalid city or country, please check again',
      })
    }
  }
  render() {
    const { getWeather } = this
    const {
      city,
      country,
      temperature,
      humidity,
      description,
      error,
    } = this.state
    return (
      <div className="app">
        <Titles />
        <div className="weather-container">
          <Form getWeather={getWeather} />
          <Weather
            city={city}
            country={country}
            temperature={temperature}
            humidity={humidity}
            description={description}
            error={error}
          />
        </div>
      </div>
    )
  }
}

export default App
