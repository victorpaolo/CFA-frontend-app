import React, { Component } from 'react'

export default class Formula extends Component {
    state = {
        celcius: "",
        americanTemperature: "",
    }
    
    handleKeyPress = (event) => {
        const {name, value} = event.target
        this.setState({[name] : Number(value)},()=>this.convert(name))
    }

    convert = (name) => {
        const {celcius, americanTemperature} = this.state;

        name === "celcius" ? this.setState({americanTemperature: this.converCelciusToFarenheit(celcius)}) : this.setState({celcius: this.converFarenheitToCelcius(americanTemperature)})
    }
    converCelciusToFarenheit = (value) => {
        return value * 9 / 5 + 32
    }
    converFarenheitToCelcius = (value) => {
        return (value -32) * 5 / 9; 
    }


    render() {
        console.log(this.state);
        return (
            <div>
                <h1>Formula Page</h1>
                <p><input className='valusC' name="celcius" type="number" id="c" value={this.state.celcius} onChange={(e)=>{this.handleKeyPress(e)}}/> degrees Celcius</p>
                <p><input className='valusC' name="americanTemperature" type="number" id="f" value={this.state.americanTemperature} onChange={(e)=>{this.handleKeyPress(e)}}/> degrees Fahrenheit</p>
            </div>
        )
    }
}

