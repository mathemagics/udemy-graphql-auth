import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import currentUser from '../queries/current_user';
import { Link } from 'react-router';

import logout from '../mutations/logout';

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query: currentUser }],
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;
    if(loading) { return <div>loading</div> }
    if(user) {
      return (
        <li><a onClick={this.onLogoutClick.bind(this)}>Logout</a></li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="signup">Sign Up</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
        </div>
      );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(logout)(
  graphql(currentUser)(Header)
);
