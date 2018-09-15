import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const API_KEY = "b2bbdc56dec953dbd74f8076df99d019";
class App extends Component {
  state={
    temp:"",
    humidity:"",
    image:"",
    location:"",
    error:""
   
  }
  handleClick = async(e) => {
    e.preventDefault();//prevents page from reloading before it fetches the data
    const city = e.target.elements.city.value;
    const country = e.target.elements.city.value;
    const api = await fetch(`http://api.wunderground.com/api/73b0005b139fa130/conditions/q/${country}/${city}.json`);
    const rtr= await api.json();
    if(city && country){
      this.setState({
        temp:rtr.current_observation.temp_c,
        humidity:rtr.current_observation.relative_humidity,
        image:rtr.current_observation.icon_url,
        location:rtr.current_observation.observation_location.full,
        
      });
    }
    else{
      this.setState({
        
          temp:"",
          humidity:"",
          image:"",
          location:"",
          error:"wrong input"
          
      
      });
    
  }
}
  render() {
    return (
      <div className="container">
        <center>
          <div className="card" id="card1">
          <h1>My Whether App</h1>
          <form onSubmit={this.handleClick}>
            <input type="text" placeholder="enter city" name="city" className="form-control"/><br></br>
            <input type="text" placeholder="enter country" name="country" className="form-control"/><br></br>
            <button className="btn btn-info">Get Whether</button>
          </form>
          {this.state.image!=''?<img src={this.state.image} width="100px" height="100px"/>:''}
          {this.state.location!=''?<h1>Location:{this.state.location} </h1>:''}
          {this.state.temp!=''?<h1>Temp:{this.state.temp} </h1>:''}
          {this.state.humidity!=''?<h1>Humidity:{this.state.humidity} </h1>:''}
          {this.state.error!=''?<h1>error:{this.state.error} </h1>:''}
          </div>
        </center>
      </div>
    );
  }
}

export default App;
