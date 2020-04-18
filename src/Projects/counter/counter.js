import React from 'react';
import { connect } from 'react-redux';
import './App.css';
// importing bootstrap
import 'bootstrap/dist/css/bootstrap.css'; 

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' }); // calling the reducers(functions)
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div className="container-fluid">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Counter App</h1>
            <p class="lead">Count the time up or down</p>
          </div>
        </div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
        </div>
        <div className="card counter_card">
          <h2>Counter</h2>
          <div>
            <button className="btn btn-primary" onClick={this.decrement}>-</button>
            <span className="count">{this.props.count}</span>
            <button className="btn btn-primary" onClick={this.increment}>+</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);