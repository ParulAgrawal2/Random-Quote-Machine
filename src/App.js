import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      randomIndex: '',
      
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentWillMount(){
    document.addEventListener("new-quote", this.handleClick());
  }
  
  componentWillUnmount(){
    document.removeEventListener("new-quote", this.handleClick());
  }
  
  handleClick(){
    this.setState({
      randomIndex: Math.floor(Math.random() * 13)
    })
  }
  
  render(){
    const quote = [
      "Start where you are. Use what you have. Do what you can.", 
    "I never dreamed about success. I worked for it.",
    "Don’t think about making art. Just get it done. Let everyone else decide if it’s good or bad, whether they love it or hate it. While they are deciding, make even more art.",
      "We have a strategic plan. It’s called doing things.",
      "You can’t use up creativity. The more you use, the more you have.",
      "Go confidently in the direction of your dreams! Live the life you’ve imagined!",
      "Find out who you are and do it on purpose.",
      "Some people want it to happen, some people wish it would happen, others make it happen.",
      "The man on top of the mountain didn’t fall there.",
      "Never let go of that fiery sadness called desire.",
      "Challenges are gifts that force us to search for a new center of gravity. Don’t fight them. Just find a new way to stand.",
      "Life is short. Don’t be lazy.",
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
    ]
    
    const authorname = ["Arthur Ashe",
                       "Estee Lauder",
                        "Andy Warhol",
                       "Herb Kelleher",
                       "Maya Angelou",
                       "Thoreau",
                       "Dolly Parton",
                    "Michael Jordan",
                    "Vince Lombardi",
                       "Patti Smith",
                       "Oprah Winfrey",
                      "Sophia Amoruso",
                       "Aristotle"];
    
     const styles = [{backgroundColor : '#8BBEE8FF', color: '#8BBEE8FF'}, {backgroundColor : '#CD5555', color: '#CD5555'}, {backgroundColor : '#FF4500', color: '#FF4500'},{backgroundColor : '#e52165', color: '#e52165'}, {backgroundColor : '#0d1137', color: '#0d1137'}, {backgroundColor : '#d72631', color: '#d72631'}, {backgroundColor : '#5c3c92', color: '#5c3c92'}, {backgroundColor : '#e2d810', color: '#e2d810'}, {backgroundColor : '#fbcbc9', color: '#fbcbc9'}, {backgroundColor : '#6b7b8c', color: '#6b7b8c'}, {backgroundColor : '#26495c', color: '#26495c'}, {backgroundColor : '#c4a35a', color: '#c4a35a'}, {backgroundColor : '#77c593', color: '#77c593'}];
    
    const btnstyle = [{backgroundColor : '#8BBEE8FF', color: 'white'}, {backgroundColor : '#CD5555', color: 'white'}, {backgroundColor : '#FF4500', color: 'white'},{backgroundColor : '#e52165', color: 'white'}, {backgroundColor : '#0d1137', color: 'white'}, {backgroundColor : '#d72631', color: 'white'}, {backgroundColor : '#5c3c92', color: 'white'}, {backgroundColor : '#e2d810', color: 'white'}, {backgroundColor : '#fbcbc9', color: 'white'}, {backgroundColor : '#6b7b8c', color: 'white'}, {backgroundColor : '#26495c', color: 'white'}, {backgroundColor : '#c4a35a', color: 'white'}, {backgroundColor : '#77c593', color: 'white'}];
    
    const quotes = quote[this.state.randomIndex];
    
    const authorsname = authorname[this.state.randomIndex]
    
    const bgstyle = styles[this.state.randomIndex]
   
    const btnsstyle = btnstyle[this.state.randomIndex]
      
    return(
<div className="container-fluid" style ={bgstyle}>
      <div id="quote-box" >
        
        <div className="row">
          
        <div className="col-lg-6 col-lg-offset-3">
          <div className = "well">
        
          <p id="text"><i className = "fa fa-quote-left"></i>{quotes}</p>
        
        <h5 id="author">{authorsname}</h5>
        
        <div className = "row">
          <div className ="col-xs-6">
        <a href = "https://twitter.com/share?ref_src=twsrc%5Etfw" id="tweet-quote" className = "btn btn-default" style = {{color: '#00acee'}}><i className = "fab fa-twitter"></i></a>
            </div>
          
        <div className="col-xs-6">
         <button id ="new-quote" className = "btn  btn-default" style ={btnsstyle} onClick = {this.handleClick}>New Quotes</button>
          </div>
          </div>
     </div>
          </div>
        </div>
        </div>
  </div>
      
        
    )
  }
}
export default App;
