import React from 'react';
import ReactDOM from 'react-dom';

var word = "burito"
var guessedWord = ["_", "_", "_", "_", "_", "_"]
var wrongGuess = 0

function CheckLetter(letter) {
  var index = word.indexOf(letter.toLowerCase())
  if (index > -1)
  {
    guessedWord[index] = letter;
    // renders guessword class into the position where the element is
    ReactDOM.render(<GuessWord/>, document.getElementById('GuessWord'));
  }
  else
  {
    wrongGuess++
    ReactDOM.render(<WrongGuess/>, document.getElementById('WrongGuess'));
  }
}

class GuessWord extends React.Component {
  CreateGuessedWord() {
    var wordToShow = ""
    for (var i = 0; i < guessedWord.length; i++) {
      wordToShow += guessedWord[i] + "  "
    }
    return wordToShow
  }

  render() {
    return (
      <div>
      {this.CreateGuessedWord()}
      </div>
    );
  }
}

class WrongGuess extends React.Component {
  CreateWrongGuessedWord() {
    var wrongWordToShow = ""
    for (var i = 0; i < wrongGuess; i++) {
      wrongWordToShow +=  "X"
    }
    return wrongWordToShow
  }

  render() {
    return (
      <div>
      {this.CreateWrongGuessedWord()}
      </div>
    );
  }
}


class ButtonLetter extends React.Component {
  render() {
    return (
      <button className="buttonletter" onClick={() => CheckLetter(this.props.value)}>
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

        <br />
        <div id="WrongGuess">
          <WrongGuess/>
        </div>
        <br/>
        <br/>
        <div id="GuessWord">
          <GuessWord/>
        </div>
      </div>
    );
  }
}

export default Letter
