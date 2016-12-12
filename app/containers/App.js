// @flow
import React, { Component, PropTypes } from 'react';
import { AppBar, Drawer, MenuItem } from 'material-ui';
import { Link } from 'react-router';

export default class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div className={'app'}>
        <AppBar
          title="VM Configurator"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          open={this.state.open}
          docked={false}
        >
          <MenuItem
            onTouchTap={this.handleToggle}
          >
            Close
          </MenuItem>
          <Link to={'/'}>
            <MenuItem onTouchTap={this.handleToggle}>
              Home
            </MenuItem>
          </Link>
          <Link to={'/view'}>
            <MenuItem onTouchTap={this.handleToggle}>View Your VMs</MenuItem>
          </Link>
          <Link to={'/create'}>
            <MenuItem onTouchTap={this.handleToggle}>Create a New VM</MenuItem>
          </Link>
        </Drawer>
        {this.props.children}
      </div>
    );
  }
}
