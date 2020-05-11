import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component{
constructor(props){
  super(props);
  // define the state using object this.state = {propertyName:value}
  this.state = {count:0};
  }

  //method to increment the count
  handleClick(){
    this.setState({count:this.state.count+1});
  }
  render(){
    return(
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>States and Events</code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        {/* display state (initial state) with this.state.count */}
        <h1>{this.state.count}</h1> 
        {/* update state by calling the handleClick method this.handleClick() */}
        <p>Click button to increment</p>
    <button className="btn" onClick={()=>{this.handleClick()}}>+</button>
      </header>
   
     </div>
    );
  }
}



export default App;
