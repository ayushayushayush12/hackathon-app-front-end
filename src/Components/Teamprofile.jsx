import React from "react";
import "../css/Teamprofile.css";

class Teamprofile extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render()
    {
        return(  
        <div className="teampage">
        <div className = "team_name">
                <h2> Team Name </h2> 
                <form>
                <label>
              Name:
                 <input type="text" name="name" />
                 </label>
                 <input type="submit" value="Submit" />
                </form>
        </div>
        <div className = "highschool">
            <h2> HS/College?</h2>
            <form>
                <label>
              HS/College:
                 <input type="text" name="name" />
                 </label>
                 <input type="submit" value="Submit" />
                </form>
        </div>
        <div className = "fullP">
            <h2>Team Profile/Information</h2>
        </div>
        <div className = "names">
            <h2>Names?</h2>
            <form>
                <label>
              Team Members:
                 <input type="text" name="name" />
                 </label>
                 <input type="submit" value="Submit" />
                </form>
        </div>
        <div className = "struggle">
            <h2>Struggle type?</h2>
            <form>
                <label>
              Struggle Type:
                 <input type="text" name="name" />
                 </label>
                 <input type="submit" value="Submit" />
                </form>
        </div>
        <div className = "languages">
            <h2>Coding Languages?</h2>
            <form>
                <label>
              Coding Languages Being Used:
                 <input type="text" name="name" />
                 </label>
                 <input type="submit" value="Submit" />
                </form>
        </div>
        <div className = "projectIdea">
            <h2>Project Idea?</h2>
            <form>
                <label>
              Idea:
                 <input type="text" name="name" />
                 </label>
                 <input type="submit" value="Submit" />
                </form>
        </div>
        <div className = "location">
            <h2>Location?</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
              Location:
                 <input type="text" name ="name" />
                 </label>
                 <input type="submit" value="Submit" />
                </form>
        </div>
        <div className = "contact">
            <h2>Contact info?</h2>
            <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
                
        </div>
            
        </div>
        )
    }
}











export default Teamprofile;
  