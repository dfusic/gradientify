import React, { Component } from 'react';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import GradientList from '../containers/GradientList/GradientList';
import GradientPreview from '../containers/GradientPreview/GradientPreview';
import api from '../api/db';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import '../assets/fonts.css';
import './App.css';

class App extends Component {
  state={
    gradients: []
  }

  fetchGradients = () => {
    //temporary gradient holder
    let gradients = [];
    //loop through api return
    api.gradients.forEach((elem)=>{
      //push every element to temporary gradient holder
     gradients.push(elem);
    })
    // pass elements from gradient holder to state
    this.setState({
      gradients: gradients
    })
  }

  componentWillMount(){
    this.fetchGradients();
  }
 
  render() {
    let routeList = this.state.gradients.map((grad)=>{
      return (
      <Route
      key={grad.key} 
      path={"/" + grad.name}
      exact
      render={()=>
        {return(<GradientPreview/>)}}/>)
    })
    return (
      <BrowserRouter>
          <Switch>
          {routeList}
          <Route 
          path="/"
          exact
          render={()=>{
            return(
              <div className="App">
              {/*Header - title*/}
              <HomeHeader />
              {/*Gradient list*/}
              <div className="grid">
                <GradientList 
                gradients={this.state.gradients}
                />
              </div>
            </div>
            );
          }}
          />
          </Switch>
        
      </BrowserRouter>
    );
  }
}

export default App;
