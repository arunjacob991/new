import React from 'react';
import { render } from 'react-dom';
import styles from './styles/next.css';

class Next extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div
        onClick={this.handleClick}
        className={'container ' + (this.state.open ? 'change' : '')}
      >
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </div>
    );
  }
  handleClick() {
    this.setState({
      open: !this.state.open,
    });
  }
}

export default Next;
