import React, { Component } from 'react';
import Text from './components/Text';
import Button from './components/Button/Button';

class App extends Component {
    state = {
      text: 'Coding',
    }

    handleClick = () => {
      alert('this click worked')
    }
    handleClickAgain = () => {
      alert('this click worked also!')
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
      <h1>More Practice</h1>
        </header>

        <Text text={this.state.text} />
        <Button label="Click" click={ this.handleClick }  />
        <Button label="ClickAgain" click={ this.handleClickAgain } />
      </div>
    );
  }
}

export default App;
