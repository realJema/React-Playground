import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, incrementing, decrementing, auth } from './Components/actions/postActions';

class Counter1 extends React.Component {
  componentDidMount() {
    // this.props.fetchPosts();
  }
  
  increment = () => {
    console.log("incrementing")
    this.props.incrementing(5);
  };
  
  decrement = () => {
    console.log("decrementing")
    this.props.decrementing();
  };

  auth = (e) => {
    console.log(e);
    this.props.auth(e);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Counter App</h1>
            <p className="lead">Count the time up or down</p>
          </div>
        </div>
        <h2>Counter - {this.props.count}</h2>
        <div className="row">
          <div className="btn btn-primary" onClick={this.increment.bind(this)}>
            +
          </div>
          <div className="btn btn-danger" onClick={this.decrement.bind(this)}>
            -
          </div>
        </div>
        <div className="row">
          <div className="btn btn-success" onClick={this.auth.bind("Login")}>
            Login
          </div>
          <div className="btn btn-warning" onClick={this.auth.bind("Logout")}>
            Logout
          </div>
          {this.props.auth}
        </div>
        <div className="row"></div>
      </div>
    );
  }
}
// Posts.propTypes = {
//     fetchPosts: PropTypes.func.isRequired,
//     posts: PropTypes.array.isRequired
// }

const mapStateToProps = state => ({
  posts: state.posts.items,
  count: state.posts.count,
  auth: state.posts.auth
})

export default connect(mapStateToProps, {
  fetchPosts,
  incrementing,
  decrementing,
  auth,
})(Counter1);
