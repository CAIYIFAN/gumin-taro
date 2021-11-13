import React from 'react';

function HocComponent(C) {
  return (props) => {
    return (
      <>
      {props.children}
      </>
    )
  }
}

export default HocComponent;