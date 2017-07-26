import React from 'react';

const Content = (props) => {
  return (
    <div className="contentSec">
      <h3 className= "secHeader"> Who I am: </h3>
      <p className="secPara">{ props.about }</p>
    </div>

  )
}

export default Content;
