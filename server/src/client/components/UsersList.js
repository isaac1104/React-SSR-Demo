import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    // fetch users list from api
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    });
  };

  render() {
    return (
      <div>
        <h1>Users List</h1>
        <ul>
          {/* {this.renderUsers()} */}
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

export default connect(mapStateToProps, { fetchUsers })(UsersList);
