import React from "react";

const Button = props => {
  const clickHandler = () => {
    alert(props.alerttext);
  };

  return (
    <button
      style={{
        boxShadow: "3px 3px lightgrey",
        background: props.color,
        height: "4vh",
        width: "auto",
        fontSize: "1rem",
        border: "1px, solid, black",
        borderRadius: "10px",
      }}
      onClick={clickHandler}
    >
      {props.title}
    </button>
  );
};

export default Button;
