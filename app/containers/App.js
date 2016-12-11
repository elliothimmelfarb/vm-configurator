// @flow
import React, { Component, PropTypes } from 'react';
import { AppBar, Drawer, MenuItem } from 'material-ui';

export default class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div className={'app'}>
        <AppBar
          title="VM Configurator"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        {this.props.children}
      </div>
    );
  }
}
