// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router';

import style from './view.css';

export default class ViewVMs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      directory: '',
      current: '',
      locations: [],
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className={'container'}>
        <input type="text" />
        <button>
          Start
        </button>
        <video
          controls=""
          loop=""
        />
      </div>
    );
  }
}
