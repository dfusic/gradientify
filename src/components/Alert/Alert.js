import React from 'react';
import './Alert.css';
import emoji from '../../images/emoji.png';
const Alert = props =>{
  return <div className="Alert">
  <p>Copied to clipboard! <img src={emoji} alt="Copied to clipboard!" className="Alert_emoji"/></p>
  </div>
}
export default Alert;