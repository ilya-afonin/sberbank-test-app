import React, { Component } from 'react';

export default class UserRow extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.onSelectUser(this.props.user.get('id'));
  }

  render() {
    const userData = this.props.user;

    return (
      <tr onClick={this.handleClick.bind(this)}>
        <td>{userData.get('id')}</td>
        <td>{userData.get('firstName')}</td>
        <td>{userData.get('lastName')}</td>
        <td>{userData.get('email')}</td>
        <td>{userData.get('phone')}</td>
      </tr>
    );
  }
}
