import React from 'react';

const Contact = (props) => {
  return (
    <div className="contactSec">
      <h3 className="contactItem">Contact: {props.info.name}</h3>
      <p className="contactItem"> Phone: {props.info.phone}</p>
      <p className="contactItem"> Email: {props.info.email}</p>
    </div>
  )
}

export default Contact;
