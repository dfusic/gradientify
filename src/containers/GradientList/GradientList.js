import React, {Component} from 'react';
import SingleGradient from '../../components/SingleGradient/SingleGradient';
import './GradientList.css';
class GradientList extends Component{
  
  state = {
    gradients: this.props.gradients
  }

  render(){
    let showGradients = null;
    let colors = null;
    if(this.state.gradients){
      // get all gradients and loop through
      showGradients = this.state.gradients.map(gradient=>{
        //get all colors within gradient and loop through
        colors = gradient.colors.map(singleColor=>{
          return singleColor + ' ';
        });
        return <div className="col"key={gradient.key}><SingleGradient 
        
        colors={colors}
        name={gradient.name}
        /></div>;
      });
    }
    return (
      <div className="container">
        <div className="grid">
        {showGradients}
        </div>
      </div>
    );
  }
}

export default GradientList;