import React, { Component } from 'react'
import '.././styles/select-area.css'

class SelectArea extends Component {

  selectArea = event => {
    this.props.area(event.target.value)
  }

  render() {
    return (
      <select onChange={this.selectArea} className="area ml-4" name="area" id="area">
        <option value="Tous">Tous</option>
        <option value="1e">1er</option>
        <option value="2e">2nd</option>
        <option value="3e">3ème</option>
        <option value="4e">4ème</option>
        <option value="5e">5ème</option>
        <option value="6e">6ème</option>
        <option value="7e">7ème</option>
        <option value="8e">8ème</option>
        <option value="9e">9ème</option>
        <option value="10e">10ème</option>
        <option value="11e">11ème</option>
        <option value="12e">12ème</option>
        <option value="13e">13ème</option>
        <option value="14e">14ème</option>
        <option value="15e">15ème</option>
        <option value="16e">16ème</option>
        <option value="17e">17ème</option>
        <option value="18e">18ème</option>
        <option value="19e">19ème</option>
        <option value="20e">20ème</option>
      </select>
    )
  }

}

export default SelectArea