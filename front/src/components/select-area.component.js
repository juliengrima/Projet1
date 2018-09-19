import React, { Component } from 'react'
import '.././styles/select-area.css'

class SelectArea extends Component {
  constructor(props) {
    super(props)
  }

  selectArea = event => {
    this.props.area(event.target.value)
  }

  render() {
    return (
      <select onChange={this.selectArea} className="area ml-4" name="area" id="area">
        <option value="Tous">Tous</option>
        <option value="1e">1er</option>
        <option value="2e">2e</option>
        <option value="3e">3e</option>
        <option value="4e">4e</option>
        <option value="5e">5e</option>
        <option value="6e">6e</option>
        <option value="7e">7e</option>
        <option value="8e">8e</option>
        <option value="9e">9e</option>
        <option value="10e">10e</option>
        <option value="11e">11e</option>
        <option value="12e">12e</option>
        <option value="13e">13e</option>
        <option value="14e">14e</option>
        <option value="15e">15e</option>
        <option value="16e">16e</option>
        <option value="17e">17e</option>
        <option value="18e">18e</option>
        <option value="19e">19e</option>
        <option value="20e">20e</option>
      </select>
    )
  }

}

export default SelectArea