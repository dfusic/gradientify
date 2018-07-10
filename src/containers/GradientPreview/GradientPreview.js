import React, {Component} from 'react';
import Alert from '../../components/Alert/Alert';
import ColorDisplay from '../../components/ColorDisplay/ColorDisplay';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './GradientPreview.css';
class GradientPreview extends Component{
  state={
    direction: 'left',
    gradient: this.props.gradient,
    colors: this.props.gradient.colors,
    copied: false
  }

  handleDirectionChange = event => {
    this.setState({
      direction: event.target.value
    });
  }
  render(){
    let GradientPreview_styles = {
      'background': `-webkit-linear-gradient(${this.state.direction}, ${this.props.gradient.colors})`,
      'height': '100vh',
      'width': '100vw'
    }
    let CSS = `
    background: linear-gradient(${this.state.direction}, ${this.props.gradient.colors});
    background: -webkit-linear-gradient(${this.state.direction}, ${this.props.gradient.colors});
    background: -moz-linear-gradient(${this.state.direction}, ${this.props.gradient.colors});
    background: -o-linear-gradient(${this.state.direction}, ${this.props.gradient.colors});`;

    let alert = null;
    if(this.state.copied){
      alert = <Alert text="Copies CSS to clipboard!"/>
      setTimeout(()=>{
        this.setState({
          copied: false
        })
      }, 1500)
    }
    let colorCopy = null;
    if(this.state.colors.length > 0){
      colorCopy = this.state.colors.map((color,index)=>{
        return (
            <ColorDisplay 
            key={index}
            color={color}
            copied={this.state.copied}
            />
        );
      })
    }
    return(
      <div className="GradientPreview" style={GradientPreview_styles}>
      <Link to="/">Back to homepage</Link>
      <CopyToClipboard 
      text={CSS}
      onCopy={()=>this.setState({copied: true})}
      >
        <button>Copy CSS</button>
      </CopyToClipboard>
      <select value={this.state.direction} onChange={(event)=>this.handleDirectionChange(event)} className="SingleGradient_direction">
        <option value="left">Left</option>
        <option value="top">Top</option>
        <option value="right">Right</option>
        <option value="bottom">Bottom</option>
      </select>
      <div className="ColorCopy">
        {colorCopy}
      </div>
      {alert}
      </div>
    );
  }
}

export default GradientPreview;