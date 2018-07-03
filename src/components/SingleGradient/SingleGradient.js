import React from 'react';

const SingleGradient = (props) => {
  let style = {
    'width': '300px',
    'height': '100px',
    'background': `-webkit-linear-gradient(left, ${props.colors})`,
  };
  console.log(style);
  return (
    <article className="SingleGradient">
      <div className="SingleGradient_preview" style={style}></div>
    </article>
  );
}

export default SingleGradient;