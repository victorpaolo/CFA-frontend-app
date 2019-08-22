import React, { Component } from 'react'
import AddToColection from '../../pages/AddToColection';
import MathJax from 'react-mathjax2'


export default class CostPreferredStock extends Component {
    state = {
        preferredDividenPerShare:0,
        pricePerShare:0,
        costOfPreferredStock:0,
        mode:"Cost of Preferred Stock",
        }
    
    handleKeyPress = (event) => {
        const {name, value} = event.target
        console.log("START SETTING THE STATE", { name, value })

        this.setState(
            {
                [name] : Number(value)
            }, 
            ()=> {
                console.log("AFTER SETTING THE STATE", this.state.costOfPreferredStock)

                this.convert(name)
            }
        )
    }

    convert = (name) => {

        console.log("%%% IN CONVERT")
        const {costOfPreferredStock, preferredDividenPerShare, pricePerShare} = this.state;
        
        if (name === "preferredDividenPerShare") {
            console.log("%%%%%% IN FIRST")
            this.setState({
                costOfPreferredStock: this.calculationCostPreferred(preferredDividenPerShare, pricePerShare),
                pricePerShare: this.calculationPriceShare(costOfPreferredStock, pricePerShare)
            }
            )   
        } else if (name === "pricePerShare" ){
            console.log("%%%%%% IN SECOND")
            this.setState({
                preferredDividenPerShare: this.calculationPreferredDividend(costOfPreferredStock, pricePerShare),
                costOfPreferredStock: this.calculationCostPreferred(preferredDividenPerShare, pricePerShare)
            })   
        } else if (name ===  "costOfPreferredStock" ) {
            console.log("%%%%%% IN THIRD")

            this.setState({
                preferredDividenPerShare: this.calculationPreferredDividend(costOfPreferredStock, pricePerShare),
                pricePerShare: this.calculationPriceShare(preferredDividenPerShare, costOfPreferredStock)
            }
        )
        } 
    }

    calculationCostPreferred = (value, value2) => {
        
        return value / value2;
    }
    calculationPreferredDividend = (value, value2) => {
        
        return value * value2; 
    }
    calculationPriceShare = (value, value2) => {
        return value / value2; 
    }

    handleSelect = (e) => {
        this.setState({
            mode: e.target.value,
            preferredDividenPerShare:0,
            pricePerShare:0,
            costOfPreferredStock:0,
        })
    }
    
    renderCalculation = () => {

        const { preferredDividenPerShare, costOfPreferredStock, pricePerShare, mode} = this.state; 
        if(mode === 'Cost of Preferred Stock') {
            return (<>
                <p>Preferred Dividend per Share<input key={"preferredDividenPerShare"} name="preferredDividenPerShare" type="number" defaultValue={preferredDividenPerShare} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                <p>Price per Share<input key={"pricePerShare"} name="pricePerShare" type="number" defaultValue={pricePerShare} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                <p>Cost of Preferred Stock<input key={"costOfPreferredStock"} name="costOfPreferredStock" type="number" value={costOfPreferredStock}/></p>
                </>
            );
        } else if (mode === 'Preferred Dividend per Share') {
            return(<>
                <p>Cost of Preferred Stock<input key={"costOfPreferredStock"} name="costOfPreferredStock" type="number" defaultValue={costOfPreferredStock || 0} onChange={(e)=>this.handleKeyPress(e)}/></p>
                <p>Price per Share<input key={"pricePerShare"} name="pricePerShare" type="number" defaultValue={pricePerShare} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                <p>Preferred Dividend per Share<input key={"preferredDividenPerShare"} name="preferredDividenPerShare" type="number" value={preferredDividenPerShare} /></p>
                </>
            )
        } else if (mode === 'Price per Share') {
            return(
                <>
                <p>Cost of Preferred Stock<input key={"costOfPreferredStock"} name="costOfPreferredStock" type="number" defaultValue={costOfPreferredStock} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                <p>Preferred Dividend per Share<input key={"preferredDividenPerShare"} name="preferredDividenPerShare" type="number" defaultValue={preferredDividenPerShare} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                <p>Price per Share<input key={"pricePerShare"} name="pricePerShare" type="number" value={pricePerShare} /></p>
                </>
            )
        }
    }
    
    render() {
        const ascii = '"Cost" = "Preferred Dividend per Share"/ "Price per Share"'
        
        return (
            <div>
                <h2>Cost of Preferred Stock</h2>
                <MathJax.Context input='ascii'>
                    <div className="formula">
                        <MathJax.Node>{ascii}</MathJax.Node>
                    </div>
                </MathJax.Context>
                <AddToColection formulaName="costpreferredstock"/>
                <label>
                     I want to calculate:
                     <select onChange={this.handleSelect} value={this.state.mode}>
                         <option value="Cost of Preferred Stock">Cost of Preferred Stock</option>
                         <option value="Preferred Dividend per Share">Preferred Dividend per Share</option>
                         <option value="Price per Share">Price per Share</option>
                     </select>
                 </label>
                <div><form>{this.renderCalculation()}</form></div>
            </div>
        )
    }
}


