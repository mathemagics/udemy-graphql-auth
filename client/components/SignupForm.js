import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import signup from '../mutations/signup';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
    };
  }
  onSubmit({email, password}) {
    this.props.mutate({
      variables: { email, password },
    });
  }
  render() {
    return (
      <div>
          <h3>Sign Up!</h3>
          <AuthForm
            onSubmit={this.onSubmit.bind(this)}
            errors={this.state.errors}
          />
      </div>
    );
  }
}

export default graphql(signup)(SignupForm);
