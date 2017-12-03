import React from 'react';
// import PropTypes from 'prop-types'
// square
class ButtonLetter extends React.Component {
  render() {
    return (
      <button className="buttonletter" onClick={() =>
      alert('click')}>
        {this.props.value}
      </button>
    );
  }
}
console.log(ButtonLetter);
//
class Letter extends React.Component {

  renderButtonLetter(i) {
    return (
    <ButtonLetter value={i}/>
    );
  }

  render() {
    return (
      <div>
        <div className="letter-row">
          {this.renderButtonLetter('A')}
          {this.renderButtonLetter('B')}
          {this.renderButtonLetter('C')}
          {this.renderButtonLetter('D')}
          {this.renderButtonLetter('E')}
          {this.renderButtonLetter('F')}
          {this.renderButtonLetter('G')}
          {this.renderButtonLetter('H')}
        </div>
        <div className="letter-row">
          {this.renderButtonLetter('I')}
          {this.renderButtonLetter('J')}
          {this.renderButtonLetter('K')}
          {this.renderButtonLetter('L')}
          {this.renderButtonLetter('M')}
          {this.renderButtonLetter('N')}
          {this.renderButtonLetter('O')}
          {this.renderButtonLetter('P')}
        </div>
        <div className="letter-row">
          {this.renderButtonLetter('Q')}
          {this.renderButtonLetter('R')}
          {this.renderButtonLetter('S')}
          {this.renderButtonLetter('T')}
          {this.renderButtonLetter('U')}
          {this.renderButtonLetter('V')}
          {this.renderButtonLetter('X')}
          {this.renderButtonLetter('Y')}
          {this.renderButtonLetter('Z')}
        </div>
      </div>
    );
  }
}

export default Letter
