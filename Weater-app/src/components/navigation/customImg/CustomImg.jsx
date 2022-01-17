import React from 'react';

const CustomImg = (props) => {
  return (
    <div className="imageCircle">
      <img
        className="iconBtn"
        src={props.src}
        alt={props.alt}
        onClick={props.onClick}
      />
    </div>
  );
};

export default CustomImg;
