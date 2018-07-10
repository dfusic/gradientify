import React, { Component } from 'react';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import GradientList from '../containers/GradientList/GradientList';
import GradientPreview from '../containers/GradientPreview/GradientPreview';
import api from '../api/db';
import {Route, BrowserRouter} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import '../assets/fonts.css';
import './App.css';

class App extends Component {
  state={
    gradients: [],
    hasMore : true
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
  fetchMoreData = () => {
    if(this.state.gradients.length >= 8){
      this.setState({hasMore: false});
      return;
    }
  }

  componentWillMount(){
    this.fetchGradients();
  }
 
  render() {

    let routeList = this.state.gradients.map((grad)=>{
      return (
        <Route 
        path={"/" + grad.name}
        key={grad.key}
        render={()=>{
          return <GradientPreview 
          gradient={grad}
          />
        }}
        />
      );
    })
    return (
      <BrowserRouter>
          <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 1 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper">
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
          {routeList}
          </AnimatedSwitch>
      </BrowserRouter>
    );
  }
}

export default App;
