import React, { Component } from 'react'
import AddToColection from '../../pages/AddToColection';
import MathJax from 'react-mathjax2'


export default class Kurtosis extends Component {
    state = {
        excessKurtosis: "",
        sampleKurtosis: "",
    }
    
    handleKeyPress = (event) => {
        const {name, value} = event.target
        this.setState({[name] : Number(value)},()=>this.convert(name))
    }

    convert = (name) => {
        const {excessKurtosis, sampleKurtosis} = this.state;
        console.log(name, this.state[name]);
        name === "excessKurtosis" ? this.setState({sampleKurtosis: this.convertExcessToSample(excessKurtosis)}) : this.setState({excessKurtosis: this.convertSampleToExcess(sampleKurtosis)})
    }
    convertExcessToSample = (value) => {
        return value + 3;
    }
    convertSampleToExcess = (value) => {
        return value - 3; 
    }


    render() {
        const ascii = '"Excess Kurtosis" = "Sample Kurtosis"  - 3'

        return (
            <div>
                <h2>Excess Kurtosis Calculation</h2>
                <MathJax.Context input='ascii'>
                    <div className="formula">
                        <MathJax.Node>{ascii}</MathJax.Node>
                    </div>
                </MathJax.Context>
                <AddToColection formulaName="kurtosis"/>
                <p><input className='valusC' name="excessKurtosis" type="number" id="c" value={this.state.excessKurtosis} onChange={(e)=>{this.handleKeyPress(e)}}/>Excess Kurtosis</p>
                <p><input className='valusC' name="sampleKurtosis" type="number" id="f" value={this.state.sampleKurtosis} onChange={(e)=>{this.handleKeyPress(e)}}/>Sample Kurtosis</p>
            </div>
        )
    }
}