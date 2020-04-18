import React from "react";
import './App.css';

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// {/* Hompage which contains the link to all the projects I am working on */}
class WriterApp extends React.Component {
    constructor(props) {
       super(props);
         
       this.state = {
          data: ''
       }
       this.updateState = this.updateState.bind(this);
    };
    updateState (event){
        this.setState({
            data: event.target.value
          });
    }
    render () {

        return (
            <div className="main_writer row">
                {/* we divide the  content of this page into 3 sections  */}
                <div className="col-md-2 writer_sidebar">
                    <h6>12 Months Goals</h6>
                    <ul>
                        <li>NATIVE Schools Institute</li>
                        <li>OBILI</li>
                        <li>NATIVE Maintenance</li>
                    </ul>
                </div>
                <textarea className="col-md-5 writer_content"  onChange={this.updateState} placeholder="Write your text...">
                </textarea>
                <div className="col-md-5 writer_display">
                    <div className="writer_page" >First page</div>
                    <div className="writer_page writer_page_sub" >Second page</div>
                    <div className="writer_page writer_page_sub">{this.state.data}</div>
                </div>
            </div>
        );
    }
}
export default WriterApp;