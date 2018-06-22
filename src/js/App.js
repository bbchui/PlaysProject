import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

export default class Plays extends Component {
  render() {
    return (
      <div>
        Hello from Plays!
      </div>
    );
  }
}

if (process.env.NODE_ENV !== 'test') {
  render(<Plays />, document.getElementById('app'));
}
