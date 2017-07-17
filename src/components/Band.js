import React, { Component } from 'react'

class Band extends Component {

  handleClick = () => {
    this.props.store.dispatch({type: 'DELETE_BAND', id: this.props.band.id })
  }

  render () {
    return (
      <li>
        <h2>{this.props.band.text}</h2>
        <button onClick={this.handleClick}>Delete Band</button>
      </li>
    )
  }
};

export default Band
