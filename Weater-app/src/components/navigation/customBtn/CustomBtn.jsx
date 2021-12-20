import React from 'react';

const CustomBtn = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default CustomBtn;
