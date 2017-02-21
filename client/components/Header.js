import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import currentUser from '../queries/current_user';

class Header extends Component {
  render() {
    if(this.props.data.loading) { return <div>loading</div> }
    return (
      <div>Header</div>
    );
  }
}

export default graphql(currentUser)(Header);
