import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import login from '../mutations/login';
import currentUser from '../queries/current_user';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
    }
  }
  onSubmit({ email, password}) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query: currentUser}]
    })
    .catch((res) => {
      const errors = res.graphQLErrors.map(error => {
        return error.message
      });
      console.log(errors);
      this.setState({
        errors,
      })

    });
  }
  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm
          onSubmit={this.onSubmit.bind(this)}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default graphql(login)(LoginForm);
