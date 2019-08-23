import React, { Component } from 'react'
import AddToColection from '../../pages/AddToColection';
import MathJax from 'react-mathjax2'


export default class ReturnOnAssets extends Component {
    state = {
        netIncome:0,
        averageTotalAssets:0,
        returnOnAssets:0,
        mode:"ROA",
        }
    
    handleKeyPress = (event) => {
        const {name, value} = event.target
        console.log("START SETTING THE STATE", { name, value })

        this.setState(
            {
                [name] : Number(value)
            }, 
            ()=> {
                console.log("AFTER SETTING THE STATE", this.state.returnOnAssets)

                this.convert(name)
            }
        )
    }

    convert = (name) => {
        const {returnOnAssets, netIncome, averageTotalAssets} = this.state;
        
        if (name === "netIncome") {
            this.setState({
                returnOnAssets: this.calculationRoa(netIncome, averageTotalAssets),
                averageTotalAssets: this.calculationTotalAssets(returnOnAssets, averageTotalAssets)
            }
            )   
        } else if (name === "averageTotalAssets" ){
            this.setState({
                netIncome: this.calculationNetIncome(returnOnAssets, averageTotalAssets),
                returnOnAssets: this.calculationRoa(netIncome, averageTotalAssets)
            })   
        } else if (name ===  "returnOnAssets" ) {
            this.setState({
                netIncome: this.calculationNetIncome(returnOnAssets, averageTotalAssets),
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
        this.setState({
            mode: e.target.value,
            netIncome:0,
            averageTotalAssets:0,
            returnOnAssets:0,
        })
    }
    
    renderCalculation = () => {

        const { netIncome, returnOnAssets, averageTotalAssets, mode} = this.state; 
        // const example = `${returnOnAssets} = ${netIncome}/ ${averageTotalAssets}`

        if(mode === 'ROA') {
            return (<>
                {/* <MathJax.Context input='example'>
                    <div className="formula">
                        <MathJax.Node>{example}</MathJax.Node>
                    </div>
                </MathJax.Context> */}

                <p>Net Income<input key={"netIncome"} name="netIncome" type="number" defaultValue={netIncome} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                <p>Average Total Assets<input key={"averageTotalAssets"} name="averageTotalAssets" type="number" defaultValue={averageTotalAssets} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                <p>ROA<input key={"returnOnAssets"} name="returnOnAssets" type="number" value={returnOnAssets}/></p>
                </>
            );
        } else if (mode === 'Net Income') {
            return(<>
                <p>ROA<input key={"returnOnAssets"} name="returnOnAssets" type="number" defaultValue={returnOnAssets || 0} onChange={(e)=>this.handleKeyPress(e)}/></p>
                <p>Average Total Assets<input key={"averageTotalAssets"} name="averageTotalAssets" type="number" defaultValue={averageTotalAssets} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                <p>Net Income<input key={"netIncome"} name="netIncome" type="number" value={netIncome} /></p>
                </>
            )
        } else if (mode === 'Average Total Assets') {
            return(
                <>
                <p>ROA<input key={"returnOnAssets"} name="returnOnAssets" type="number" defaultValue={returnOnAssets} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                <p>Net Income<input key={"netIncome"} name="netIncome" type="number" defaultValue={netIncome} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                <p>Average Total Assets<input key={"averageTotalAssets"} name="averageTotalAssets" type="number" value={averageTotalAssets} /></p>
                </>
            )
        }
    }
    
    render() {
        // const { netIncome, returnOnAssets, averageTotalAssets, mode} = this.state; 
        const ascii = 'ROA = "Net Income"/ "Average Total Assets"'

        // console.log(this.state);
        
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
                <div><form>{this.renderCalculation()}</form></div>
            </div>
        )
    }
}

