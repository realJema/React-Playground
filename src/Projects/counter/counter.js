import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, incrementing, decrementing, auth } from './Components/actions/postActions';

class Counter1 extends React.Component {
  componentDidMount() {
    // this.props.fetchPosts();
  }
  
  increment = () => {
    console.log("incrementing")
    this.props.incrementing();
  };
  
  decrement = () => {
    console.log("decrementing")
    this.props.decrementing();
  };

  auth = (e) => {
    let auth_status = e.target.textContent
    if (auth_status === 'Login') {
      this.props.auth(true);
    } else {
      this.props.auth(false)
    }
    // this.props.auth();
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
        <div className="row">
          <div className="btn btn-primary" onClick={this.increment.bind(this)}>
            +
          </div>
          <div className="btn btn-danger" onClick={this.decrement.bind(this)}>
            -
          </div>
        <h2>Counter - {this.props.posts.count}</h2>
        </div>
        <div className="row">
          <div
            className="btn btn-success"
            value="Login"
            onClick={this.auth.bind(this)}
          >
            Login
          </div>
          <div
            className="btn btn-warning"
            value="Logout"
            onClick={this.auth.bind(this)}
          >
            Logout
          </div>
        <h2>state - {this.props.posts.auth? "Logged In" : "Logged out"}</h2>
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
  posts: state.posts
})

export default connect(mapStateToProps, {
  fetchPosts,
  incrementing,
  decrementing,
  auth,
})(Counter1);
