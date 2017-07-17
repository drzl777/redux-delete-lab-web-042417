import React, { Component } from 'react'
import Band from './Band'

class Bands extends Component {
  render () {
    const bandsList = this.props.store.getState().bands.map(b => <Band band={b} store={this.props.store} />)
    return (
      <ul>
        {bandsList}
      </ul>
    )
  }
};

export default Bands
