import React, { Component } from 'react'

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
        <option value="1e">1er</option>
        <option value="2e">2er</option>
      </select>
    )
  }

}

export default SelectArea