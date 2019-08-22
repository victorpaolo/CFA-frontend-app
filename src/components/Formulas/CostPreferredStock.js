import React, { Component } from 'react'
import AddToColection from '../../pages/AddToColection';
import MathJax from 'react-mathjax2'


export default class CostPreferredStock extends Component {
    state = {
        netIncome:0,
        averageTotalAssets:0,
        returnOnAssets:0,
        mode:"ROA",
        }
    
    handleKeyPress = (event) => {
        const {name, value} = event.target
        console.log(name)
        this.setState({[name] : Number(value)},()=>this.convert(name))
    }

    convert = (name) => {
        const {returnOnAssets, netIncome, averageTotalAssets} = this.state;
        console.log(returnOnAssets, netIncome, averageTotalAssets);
        
        if (name === "averageTotalAssets" || "netIncome" ) {
          
            this.setState({
                returnOnAssets: this.calculationRoa(netIncome, averageTotalAssets),
                // averageTotalAssets: this.calculationTotalAssets(returnOnAssets, averageTotalAssets)
            }
        )   
        } else if (name === "returnOnAssets" || "averageTotalAssets" ){
            this.setState({
                netIncome: this.calculationNetIncome(returnOnAssets, averageTotalAssets),
                // returnOnAssets: this.calculationRoa(netIncome, averageTotalAssets)
            }, ()=>{console.log("NET INCOME CALCULATION", this.state)}
        )   
        } else if (name ===  "returnOnAssets" || "netIreturnOnAssetsncome") {

            this.setState({
                // netIncome: this.calculationNetIncome(returnOnAssets, averageTotalAssets),
                averageTotalAssets: this.calculationTotalAssets(netIncome, returnOnAssets)
            }
        )
        } 
    }
    calculationRoa = (value, value2) => {
        
        return value / value2;
    }
    calculationNetIncome = (value, value2) => {
        
        return value * value2; 
    }
    calculationTotalAssets = (value, value2) => {
        return value / value2; 
    }

    handleSelect = (e) => {
        this.setState({mode: e.target.value,})
    }
    renderCalculation = () => {
        if(this.state.mode === 'ROA') {
            return (<>
                <p>Net Income<input className='valusC' name="netIncome" type="number" id="f" value={this.state.netIncome} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                <p>Average Total Assets<input className='valusC' name="averageTotalAssets" type="number" id="f" value={this.state.averageTotalAssets} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                <p>ROA<input className='valusC' name="returnOnAssets" type="number" id="c" value={this.state.returnOnAssets}/></p>
                </>
            );
        } else if (this.state.mode === 'Net Income') {
            console.log("net income ready")
            return(<>
                <p>ROA<input className='valusC' name="returnOnAssets" type="number" id="c" value={this.state.returnOnAssets} onChange={(e)=>{console.log(this.handleKeyPress(e))}}/></p>
                <p>Average Total Assets<input className='valusC' name="averageTotalAssets" type="number" id="f" value={this.state.averageTotalAssets} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                <p>Net Income<input className='valusC' name="netIncome" type="number" id="f" value={this.state.netIncome} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                </>
            )
        } else if (this.state.mode === 'Average Total Assets') {
            return(
                <>
                <p>ROA<input className='valusC' name="returnOnAssets" type="number" id="c" value={this.state.returnOnAssets} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                <p>Net Income<input className='valusC' name="netIncome" type="number" id="f" value={this.state.netIncome} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                <p>Average Total Assets<input className='valusC' name="averageTotalAssets" type="number" id="f" value={this.state.averageTotalAssets} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                </>
            )
        }
    }
    
    render() {
        const ascii = 'ROA = "Net Income"/ "Average Total Assets"'
        console.log(this.state);
        
        return (
            <div>
                <h2>ROA Calculation</h2>
                <MathJax.Context input='ascii'>
                    <div className="formula">
                        <MathJax.Node>{ascii}</MathJax.Node>
                    </div>
                </MathJax.Context>
                <AddToColection formulaName="roa"/>
                <label>
                     I want to calculate:
                     <select onChange={this.handleSelect} value={this.state.mode}>
                         <option value="ROA">ROA</option>
                         <option value="Net Income">Net Income</option>
                         <option value="Average Total Assets">Average Total Assets</option>
                     </select>
                 </label>
                <div>{this.renderCalculation()}</div>
            </div>
        )
    }
}

