import React, { Component } from 'react'

export default class CrossPriceElasticity extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Pick your favorite flavor:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="elasticity">Cross-Price Elasticity</option>
                <option value="changeQuantity">% Change in quantity demanded</option>
                <option value="changePrice">% Change in price of substitute or complement</option>
              </select>
            </label>
            <input type="submit" value="Calculation" />
          </form>
        );
      }
    
}
