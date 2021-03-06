import React from 'react';
import { render } from 'react-dom';
const img = require('./images/image.png');
import styles from './styles/main.css';
import Next from './next.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <p> Hello React!</p>
        {this.renderImage()}
        <Next />
      </div>
    );
  }
  renderImage() {
    return (
      <div>
        <img width={300} src={img} />
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));
