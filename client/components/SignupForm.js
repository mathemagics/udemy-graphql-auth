import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import signup from '../mutations/signup';

class SignupForm extends Component {
  render() {
    return (
      <div>
          <h3>Sign Up!</h3>
          <Authform onSubmit={this.onSubmit} errors={this.state.errors} />
      </div>

    );
  }
}

export default graphql(signup)(SignupForm);
