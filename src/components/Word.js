import React, { Component } from 'react';


class Word extends Component {

  constructor(props) {
    super()
    const { word } = props

    this.state = {
      word
    }
  }

  render() {
  return (
      <span className="Word">
        
      </span>
    );
  }
}

export default Word;
