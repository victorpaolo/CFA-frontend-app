import React, { Component } from 'react'
import AddToColection from '../../pages/AddToColection';


export default class ReturnOnAssets extends Component {
    

    state = {
        netIncome:"4",
        averageTotalAssets: "5",
        returnOnAssets:"",
        }
    
    handleKeyPress = (event) => {
        const {name, value} = event.target
        this.setState({[name] : Number(value)},()=>this.convert(name))
    }

    calculationRoe2 = (props, name) => {
        const selected = "ROA"
        const {returnOnAssets, netIncome} = this.state
        this.setState({averageTotalAssets: this.calculationTotalAssets(netIncome, returnOnAssets)}
        )
    }
    convert = (name) => {
        const {returnOnAssets, netIncome, averageTotalAssets} = this.state;
        console.log(name, this.state[name]);
        if (name === "netIncome" && "returnOnAssets") {
            this.setState({
                // netIncome: this.calculationNetIncome(returnOnAssets, averageTotalAssets),
                averageTotalAssets: this.calculationTotalAssets(netIncome, returnOnAssets)
            }
        ); return "Insert Net Income and ROA";
        } else if (name === "netIncome") {
            this.setState({
                // returnOnAssets: this.calculationRoe(netIncome, averageTotalAssets),
                // averageTotalAssets: this.calculationTotalAssets(returnOnAssets, averageTotalAssets)
            }
        )   
        } else {
            this.setState({
                // netIncome: this.calculationNetIncome(returnOnAssets, averageTotalAssets),
                // returnOnAssets: this.calculationRoe(netIncome, averageTotalAssets)
            }
        )   
        }
    }
    calculationRoe = (value, value2) => {
        return value / value2;
    }
    calculationNetIncome = (value, value2) => {
        return value * value2; 
    }
    calculationTotalAssets = (value, value2) => {
        return value / value2; 
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h2>ROA Calculation</h2>
                <AddToColection />
                {}
                <label>
                    I want to calculate:
                    <select >
                        <option >ROA</option>
                        <option >Net Income</option>
                        <option >Average Total Assets</option>
                    </select>
                </label>
                <p><input className='valusC' name="returnOnAssets" type="number" id="c" value={this.state.returnOnAssets} onChange={(e)=>{this.handleKeyPress(e)}}/>ROA</p>
                <p><input className='valusC' name="netIncome" type="number" id="f" value={this.state.netIncome} onChange={(e)=>{this.handleKeyPress(e)}}/>Net Income</p>
                <p><input className='valusC' name="averageTotalAssets" type="number" id="f" value={this.state.averageTotalAssets} onChange={(e)=>{this.handleKeyPress(e)}}/>Average Total Assets</p>
                <button>Calculate</button>
            </div>
        )
    }
}
