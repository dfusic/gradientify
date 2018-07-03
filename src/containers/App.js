import React, { Component } from 'react';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import GradientList from '../containers/GradientList/GradientList';
import uniqid from 'uniqid';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import '../assets/fonts.css';
import './App.css';

class App extends Component {
  state = {
    gradients : [
      {
        name: 'Megatron',
        key: uniqid(),
        'colors': [
          '#C6FFDD',
          '#FBD786',
          '#f7797d'
        ]
      },
      {
        name: 'Lorem Ipsum',
        key: uniqid(),
        'colors': [
          'red',
          'blue',
          'green'
        ]
      },
      {
        name: 'Dolor Sit',
        key: uniqid(),
        'colors': [
          'lavender',
          'yellow',
          'pink'
        ]
      }
    ]
  }

  render() {
    return (
      <BrowserRouter>
          <Switch>
          <Route 
          path="/"
          exact
          render={()=>{
            return(
              <div className="App">
              {/*Header - title*/}
              <HomeHeader />
              {/*Gradient list*/}
              <GradientList 
              gradients={this.state.gradients}
              />
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
