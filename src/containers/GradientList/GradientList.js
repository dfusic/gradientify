import React, {Component} from 'react';
import SingleGradient from '../../components/SingleGradient/SingleGradient';
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
        return <SingleGradient 
        key={gradient.key}
        colors={colors}
        />;
      });
    }
    return (
      <div>
        <h1>GradientList</h1>
        {showGradients}
      </div>
    );
  }
}

export default GradientList;