import React from 'react';
import './Alert.css';
import emoji from '../../images/emoji.png';
const Alert = props =>{
  return <div className="Alert">
  <p>{props.text} <img src={emoji} alt={props.text} className="Alert_emoji"/></p>
  </div>
}
export default Alert;