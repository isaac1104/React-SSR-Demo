import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  };

  renderUsers() {
    return this.props.users.data.map(user => {
      return <li key={user.id}>{user.name}</li>
    });
  };

  render() {
    return (
      <div className='center-align' style={{ marginTop: '200px' }}>
        <h3>Users List</h3>
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
};

function mapStateToProps({ users }) {
  return {
    users
  };
};

function loadData(store) {
  return store.dispatch(fetchUsers());
};

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
};
