import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  onSubmit(e){
    const { email, password } = this.state;
    e.preventDefault();
    this.props.onSubmit({ email, password});
  }
  render() {
    return (
      <div className="row">
      <form className="col s6" onSubmit={this.onSubmit.bind(this)}>
        <div className="input-field">
          <input
            placeholder="email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>
        <div className="input-field">
          <input
            value={this.state.password}
            placeholder="password"
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
        </div>
        <button className="btn">Submit</button>
      </form>
      </div>
    );
  }
}

export default AuthForm;
