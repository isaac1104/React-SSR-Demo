import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default ChildComponent => {
  class ComposedComponent extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to='/' />;
        case null:
          return <p>Loading...</p>;
        default:
          return <ChildComponent {...this.props} />;
      }
    };
  };

  function mapStateToProps({ auth }) {
    return {
      auth
    };
  };

  return connect(mapStateToProps, null)(ComposedComponent);
};
