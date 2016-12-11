// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router';


export default class CreateVM extends Component {
  constructor(props) {
    super(props);

    this.state = {
      directory: '',
      current: '',
      locations: [],
    };
  }

  render() {
    return (
      <div className={'container'}>
        <input type="text" />
      </div>
    );
  }
}
