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
        <option value="2e">2er</option>
        <option value="3e">3er</option>
        <option value="4e">4er</option>
      </select>
    )
  }

}

export default SelectArea