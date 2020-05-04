import React from 'react';
import axios from 'axios';

class Position extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            position: 2,
            total: 3
        }
      }
      
    getTotal(event){
        var url = 'http://localhost:5000/api/data';
        axios.get(url)
        .then((res) => {
           let results = res.data[0]
           console.log(results.position)
           this.setState({position: 1});
           console.log(this.state.position)
        })
      }

  render() {
    return (
      <div className="container-fluid">
        
        <div className="counter_card">
          <h2>Position</h2>
          <div>
            <button className="btn btn-primary" onClick={this.getTotal}>-</button>
            <span className="count">{this.state.total}</span>
            <button className="btn btn-primary">+</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Position;