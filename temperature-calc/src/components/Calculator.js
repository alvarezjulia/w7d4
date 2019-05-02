import React, { Component } from 'react'
import BoilingVeredict from './BoilingVeredict';
import TemperatureInput from './TemperatureInput'

const toCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9
}

const toFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32
}

const tryConvert = (temperature, convertFunction) => {
    let converted = convertFunction(parseFloat(temperature))
    if (Number.isNaN(converted)) return ""
    return converted.toFixed(2).toString()
}

class Calculator extends Component {
    state = {
        temperature: "",
        scale: 'celsius'
    }

    onTemperatureChange = (temperature, scale) => {
        this.setState({
            temperature,
            scale
        })
    }

    handleChange = (event) => {
        const temperature = event.target.value
        this.setState({
            temperature
        })
    }

    render() {
        const { temperature, scale } = this.state

        const celsius = scale === 'celsius' ? temperature : tryConvert(temperature, toCelsius)
        const fahrenheit = scale === 'fahrenheit' ? temperature : tryConvert(temperature, toFahrenheit)

        return (
            <div>
                <TemperatureInput onTemperatureChange={this.onTemperatureChange} temperature={celsius} scale="celsius" />
                <TemperatureInput onTemperatureChange={this.onTemperatureChange} temperature={fahrenheit} scale="fahrenheit" />
                <BoilingVeredict celsius={celsius} />
            </div>
        )
    }
}

export default Calculator
