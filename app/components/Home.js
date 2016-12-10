// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { RaisedButton } from 'material-ui';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>Welcome to the Virtual Machine Configurator</h2>
        <h3>
          Choose to create a new machine or to view your
          previously created machines
        </h3>
        <RaisedButton
          primary
          fullWidth
          label="Create New VM"
        />
        <br />
        <br />
        <RaisedButton
          label="Your VM Library"
          primary
          fullWidth
        />
      </div>
    );
  }
}
