import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import login from '../mutations/login';
import currentUser from '../queries/current_user';

class LoginForm extends Component {
  onSubmit({ email, password}) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query: currentUser}]
    });
  }
  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit.bind(this)}/>
      </div>
    );
  }
}

export default graphql(login)(LoginForm);
