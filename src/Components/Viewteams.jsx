import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import{Button, ButtonToolbar} from 'react-bootstrap';
import{AddSubModal} from './AddSubModal';
export class Viewteams extends Component{

function Viewteams() {
    var test = localStorage.getItem("LOGGEDIN");
      
    if(test !== "True"){
      window.location.href = '/Login App';
    }
    return (
        <h2> What are the teams working on? </h2>
    )
}

export default Viewteams;