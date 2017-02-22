import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { graphql } from 'react-apollo';
import currentUser from '../queries/current_user';

class Dashboard extends Component {
  componentWillMount(){
    if (!this.props.data.user) {
      hashHistory.push('/login');
    }
  }
  componentWillUpdate(nextProps){
    if (!nextProps.data.user) {
      hashHistory.push('/login');
    }
  }
  render() {
    return (
      <h3> The dashboard's melted but we still have the radio</h3>
    );
  }
}

export default graphql(currentUser)(Dashboard);
