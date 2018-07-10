import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Alert from '../Alert/Alert';
import './ColorDisplay.css';
const ColorDisplay = props => {
    let style = {
      color: props.color
    }
    let copied = props.copied;

    return (
      <CopyToClipboard
      text={props.color}
      onCopy={()=>{
        copied = true;
        console.log(copied);
      }}>
        <button className="ColorDisplay" style={style}>{props.color}</button>
      </CopyToClipboard>
    );
}

export default ColorDisplay;