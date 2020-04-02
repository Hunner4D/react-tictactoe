import React from "react";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;


//Forgetting () => and writing onClick={alert('click')} is a common mistake, and would fire the alert every time the component re-renders.