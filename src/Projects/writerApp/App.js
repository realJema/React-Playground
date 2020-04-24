import React from "react";
import './App.css';

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// {/* Hompage which contains the link to all the projects I am working on */}
class WriterApp extends React.Component {
    constructor(props) {
       super(props);
         
       this.state = {
          data: '',
          titles: []
       }
       this.updateState = this.updateState.bind(this);
    };
    updateTitles (event){
        var titleArray = [];
        var input = this.state.data;
        var lines = input.split('\n');

        for(var i = 0;i < lines.length;i++){
            //code here using lines[i] which will give you each line
            let line = lines[i];
            if (line.includes('# ') ){
                titleArray.push(line);
            }
        }

        return titleArray;
    }
    
    updateState (event){
        this.setState({
            data: event.target.value,
            titles: this.updateTitles()
          });
    }

    // determines the types of headings/titles and returns a descriptive class name
    countOccurrence (string) {
        var count = 0;
        var char = '#';
        for(var i=0; i<string.length; i++) {
            if(string[i] === char) {
                count++;
            }
        }
        // console.log(string + "---> " + count);
        return 'writerApp_sidebar_' + count;
    }
    render () {

        return (
            <div className="main_writer row">
                {/* we divide the  content of this page into 3 sections  */}
                <div className="col-md-2 writer_sidebar">
                    <ul className="writerApp_sidebar">
                        {
                            this.state.titles.map((title, index) =>  
                            // title.substring(title.lastIndexOf('#') + 1
                            // with this piece of code, I get the substring after the last index of # character and add I to it, then return the title without the # character. I also trim the extra spaces 
                                <li key={index} className={this.countOccurrence(title)}>{title.substring(title.lastIndexOf('#') + 1).trim()}</li>
                            )
                        }
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