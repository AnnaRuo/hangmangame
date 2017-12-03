import React, { Component } from 'react';

class Word extends Component {
  render() {
  return (
      <span className="Word">
        {this.props.value}
      </span>
    );
  }
}

export default Word;
