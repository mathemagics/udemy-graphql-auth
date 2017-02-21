import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import currentUser from '../queries/current_user';

class Header extends Component {
  renderButtons() {
    const { loading, user } = this.props.data;
    if(loading) { return <div>loading</div> }
    if(user) {
      return <div>logout</div>
    } else {
      return (
        <div>Not Signed In</div>
      );
    }
  }
  render() {

    return (
      <nav>
        <div className="nav-wrapper">
          {this.renderButtons()}
        </div>
      </nav>
    );
  }
}

export default graphql(currentUser)(Header);
