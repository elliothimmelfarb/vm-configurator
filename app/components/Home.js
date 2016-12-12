// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { RaisedButton } from 'material-ui';


export default class Home extends Component {
  render() {
    return (
      <div className={'container'}>
        <h2>Welcome to the Virtual Machine Configurator</h2>
        <h3>
          Choose to create a new machine or to view your
          previously created machines
        </h3>
        <Link to={'/create'} >
          <RaisedButton
            primary
            fullWidth
            label="Create New VM"
          />
        </Link>
        <br />
        <br />
        <Link to={'/view'} >
          <RaisedButton
            label="Your VM Library"
            primary
            fullWidth
          />
        </Link>
      </div>
    );
  }
}
