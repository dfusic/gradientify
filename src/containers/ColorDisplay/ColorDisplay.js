import React, {Component} from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorDisplay.css';
class ColorDisplay extends Component {
  state={
    style: this.props.color,
    copied: false
  }
    render(){
      let style = {
        color: this.props.color
      }
      return (
          <div className="ColorDisplay_parent">
            <CopyToClipboard
            text={this.props.color}
            onCopy={this.props.handleCopy}>
              <button className="ColorDisplay" style={style}>{this.props.color}</button>
            </CopyToClipboard>  
            </div>
      );
    }
}

export default ColorDisplay;