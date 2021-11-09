import "../css/Homepage.css";
import React, { Component } from "react";
import QuoteAndAuthor from "./QuoteAndAuthor";
import quotes from "./QuoteDB";

export default class App extends Component {
  
  //state
  state = {
    quote: quotes[0].quote,
    author: quotes[0].author,
  };

  //generate diffrent quote function
  generateRandomQuote = (arr) => {
    //get random numbers
    let num = Math.floor(Math.random() * quotes.length);

    let newQuote = quotes[num];

    //update state
    this.setState({
      quote: newQuote.quote,
      author: newQuote.author,
    });

    this.shuffleQuotes(quotes);
  };

  //shuufle quotes function
  shuffleQuotes = (arr) => {
    return arr.sort(function () {
      return 0.5 - Math.random();
    });
  };

    render() {
      var test = localStorage.getItem("LOGGEDIN");
      
      if(test != "True"){
        window.location.href = '/Login App';
      }

      
        return (
          
            <div className="homepage">
             
              <h1 id="welcome">Welcome To Hyland Hackathon!</h1>
                 <div className="container">
                    <div className="left_container">
                      <div className="Announcements">
                       <h1> Announce</h1>
                     </div>
                      <div className="quotebox">
              
                             <h2 className="text-center">Jokes</h2>
              <div className="quote">
                <QuoteAndAuthor
                  generateRandomQuote={this.generateRandomQuote}
                  quote={this.state}
                />
              </div>
            </div>
            
            </div>
            <div className="right_container">
            <div className="Itinerary">
                <h3>Itinerary</h3>
                <h1><iframe src="https://titanembeds.com/embed/457565571920166942" height="500" width="700" frameborder="0"></iframe></h1>
            </div>
            </div>
            </div>
            <div classname ="announcements">
              <h3>Announcements</h3>
              <h1><iframe src="https://titanembeds.com/embed/457565571920166942" height="500" width="700" frameborder="0"></iframe></h1>

            </div>
            </div>
        );
        
    };
};


