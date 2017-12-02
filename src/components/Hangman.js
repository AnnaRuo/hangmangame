// import libraries from react package
import React, { PureComponent } from 'react'

// create class extended from react's component class
class Hangman extends PureComponent {
  // returns jsx, react way writing HTML
  render() {
    return(
      <h1>{ this.props.content }</h1>
    )
  }
}

export default Hangman
