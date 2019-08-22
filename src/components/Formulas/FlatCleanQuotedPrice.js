import React, { Component } from 'react'
import AddToColection from '../../pages/AddToColection';
import MathJax from 'react-mathjax2'


export default class FlatCleanQuotedPrice extends Component {
    state = {
        dirtyPrice:0,
        accruedInterest:0,
        cleanPrice:0,
        mode:"Clean Price",
        }
    
    handleKeyPress = (event) => {
        const {name, value} = event.target
        console.log("START SETTING THE STATE", { name, value })

        this.setState(
            {
                [name] : Number(value)
            }, 
            ()=> {
                console.log("AFTER SETTING THE STATE", this.state.cleanPrice)

                this.convert(name)
            }
        )
    }

    convert = (name) => {

        console.log("%%% IN CONVERT")
        const {cleanPrice, dirtyPrice, accruedInterest} = this.state;
        
        if (name === "dirtyPrice") {
            console.log("%%%%%% IN FIRST")
            this.setState({
                cleanPrice: this.calculationClean(dirtyPrice, accruedInterest),
                accruedInterest: this.calculationAccrued(cleanPrice, accruedInterest)
            }
            )   
        } else if (name === "accruedInterest" ){
            console.log("%%%%%% IN SECOND")
            this.setState({
                dirtyPrice: this.calculationDirty(cleanPrice, accruedInterest),
                cleanPrice: this.calculationClean(dirtyPrice, accruedInterest)
            })   
        } else if (name ===  "cleanPrice" ) {
            console.log("%%%%%% IN THIRD")

            this.setState({
                dirtyPrice: this.calculationDirty(cleanPrice, accruedInterest),
                accruedInterest: this.calculationAccrued(dirtyPrice, cleanPrice)
            }
        )
        } 
    }

    calculationClean = (value, value2) => {
        return value - value2;
    }
    calculationDirty = (value, value2) => {
        return value + value2; 
    }
    calculationAccrued = (value, value2) => {
        return value - value2; 
    }

    handleSelect = (e) => {
        this.setState({
            mode: e.target.value,
            dirtyPrice:0,
            accruedInterest:0,
            cleanPrice:0,
        })
    }
    
    renderCalculation = () => {

        const { dirtyPrice, cleanPrice, accruedInterest, mode} = this.state; 
        if(mode === 'Clean Price') {
            console.log("IN Clean Price INPUT",this.state.cleanPrice)

            return (<>
                <p>Dirty Price<input key={"dirtyPrice"} name="dirtyPrice" type="number" defaultValue={dirtyPrice} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                <p>Accrued Interest<input key={"accruedInterest"} name="accruedInterest" type="number" defaultValue={accruedInterest} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                <p>Clean Price<input key={"cleanPrice"} name="cleanPrice" type="number" value={cleanPrice}/></p>
                </>
            );
        } else if (mode === 'Dirty Price') {
            console.log("net income ready")
            console.log("IN Dirty Price INPUT",this.state.cleanPrice)
            console.log("IN INPUT - VALUE TYPE IS",typeof this.state.cleanPrice)

            return(<>
                <p>Clean Price<input key={"cleanPrice"} name="cleanPrice" type="number" defaultValue={cleanPrice || 0} onChange={(e)=>this.handleKeyPress(e)}/></p>
                <p>Accrued Interest<input key={"accruedInterest"} name="accruedInterest" type="number" defaultValue={accruedInterest} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                <p>Dirty Price<input key={"dirtyPrice"} name="dirtyPrice" type="number" value={dirtyPrice} /></p>
                </>
            )
        } else if (mode === 'Accrued Interest') {
            return(
                <>
                <p>Clean Price<input key={"cleanPrice"} name="cleanPrice" type="number" defaultValue={cleanPrice} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                <p>Dirty Price<input key={"dirtyPrice"} name="dirtyPrice" type="number" defaultValue={dirtyPrice} onChange={(e)=>{this.handleKeyPress(e)}}/></p>
                <p>Accrued Interest<input key={"accruedInterest"} name="accruedInterest" type="number" value={accruedInterest} /></p>
                </>
            )
        }
    }
    
    render() {
        // const { dirtyPrice, cleanPrice, accruedInterest, mode} = this.state; 
        const ascii = '"Clean" = "Dirty" - "Accrued Interest"'
        // console.log(this.state);
        
        return (
            <div>
                <h2>Clean Price</h2>
                <MathJax.Context input='ascii'>
                    <div className="formula">
                        <MathJax.Node>{ascii}</MathJax.Node>
                    </div>
                </MathJax.Context>
                <AddToColection formulaName="flatcleanquotedprice"/>
                <label>
                     I want to calculate:
                     <select onChange={this.handleSelect} value={this.state.mode}>
                         <option value="Clean Price">Clean Price</option>
                         <option value="Dirty Price">Dirty Price</option>
                         <option value="Accrued Interest">Accrued Interest</option>
                     </select>
                 </label>
                <div><form>{this.renderCalculation()}</form></div>
            </div>
        )
    }
}
