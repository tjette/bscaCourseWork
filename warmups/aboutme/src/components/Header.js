import React from 'react';


const Header = (props) => {
  return (
    <div className="appHeader">
      <h1> { props.title }</h1>
      <h3> { props.headerMsg } </h3>
    </div>
  )
}

export default Header;
