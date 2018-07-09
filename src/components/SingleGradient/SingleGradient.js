import React, {Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import Alert from '../Alert/Alert';
import './SingleGradient.css';
class SingleGradient extends Component {
  state={
    gradientDirection: 'left',
    colors: this.props.colors,
    copied : false
  }

  handleDirectionChange = event =>{
   
    this.setState({
      gradientDirection: event.target.value
    });
  }

 render(){
    let previewStyle = {
      width: '200px',
      height: '200px',
      background: `-webkit-linear-gradient(${this.state.gradientDirection}, ${this.state.colors})`,
      borderRadius: '50%',
      margin: '15px auto'
    }
    let CSS = `
    background: -linear-gradient(${this.state.gradientDirection}, ${this.state.colors});
    background: -webkit-linear-gradient(${this.state.gradientDirection}, ${this.state.colors});
    background: -moz-linear-gradient(${this.state.gradientDirection}, ${this.state.colors});
    background: -o-linear-gradient(${this.state.gradientDirection}, ${this.state.colors});
    `;
    let alert = null;
    if(this.state.copied){
      alert = <Alert />;
      setTimeout(()=>{
        this.setState({
          copied: false
        })
      }, 1500)
    }
  return (
    <div className="col">
    <article className="SingleGradient">
      <Link to={"/" + this.props.name}> 
        <div className="SingleGradient_preview" style={previewStyle}></div>
      </Link>
      <h2 className="SingleGradient_name">{this.props.name}</h2>
      <section className="SingleGradient_data">
        <CopyToClipboard text={CSS}
        onCopy={()=> this.setState({copied: true})}>
          <button className="SingleGradient_copy_css">Copy CSS</button>
        </CopyToClipboard>
        <select value={this.state.direction} onChange={(event)=>this.handleDirectionChange(event)} className="SingleGradient_direction">
          <option value="left">Left</option>
          <option value="top">Top</option>
          <option value="right">Right</option>
          <option value="bottom">Bottom</option>
        </select>
      </section>
      {alert}
    </article>
    </div>
  );
 }
}

export default SingleGradient;