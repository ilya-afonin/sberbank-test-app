import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


import UserRow from './UserRow';

export default class UserTable extends Component {
  constructor(props) {
    super(props);
  }
  onSortedBy(e) {
    e.currentTarget.getElementsByClassName('fa-caret-down')[0].classList.toggle('rotate');
    this.props.onSorted(e.target.getAttribute('sort-by'));
  }
  
  render() {
    const userData = this.props.userData;
    let userRows = [];

    if(userData) {
      userData.map((user) => {
        const userRow = (
          <UserRow
            user={user}
            key={user.get('id')}
            onSelectUser={this.props.onSelectUser.bind(this)}
          />
        );
        userRows.push(userRow);
      });
    }

    const isDataLoaded = !this.props.isFetching;
    const loading = <span>Loading...</span>;

    return isDataLoaded? (
      <Table bordered hover className="user-list" size="sm">
        <thead>
          <tr>
            <th><Button variant="link" size="sm" sort-by="id" onClick={this.onSortedBy.bind(this)}>Id <FontAwesomeIcon icon={faCaretDown} /></Button></th>
            <th><Button variant="link" size="sm" sort-by="firstName" onClick={this.onSortedBy.bind(this)}>Имя <FontAwesomeIcon icon={faCaretDown} /></Button></th>
            <th><Button variant="link" size="sm" sort-by="lastName" onClick={this.onSortedBy.bind(this)}>Фамилия <FontAwesomeIcon icon={faCaretDown} /></Button></th>
            <th><Button variant="link" size="sm" sort-by="email" onClick={this.onSortedBy.bind(this)}>E-mail <FontAwesomeIcon icon={faCaretDown} /></Button></th>
            <th><Button variant="link" size="sm" sort-by="phone" onClick={this.onSortedBy.bind(this)}>Телефон <FontAwesomeIcon icon={faCaretDown} /></Button></th>
          </tr>
        </thead>
        <tbody>
          {userRows}
        </tbody>
      </Table>
    ) : (loading);
  }
}
