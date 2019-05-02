import React, { Component } from 'react'

class TemperatureInput extends Component {

    handleChange = (event) => {
        const temperature = event.target.value
        const { scale } = this.props

        this.props.onTemperatureChange(temperature, scale)


    }

    render() {
        const { temperature, scale } = this.props
        return (
            <fieldset>
                <legend>Enter temperature in {scale}</legend>
                <input type="text" value={temperature} onChange={this.handleChange} />
            </fieldset>
        )
    }
}

export default TemperatureInput
