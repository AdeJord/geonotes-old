import React from "react";
import "./add-note.css";

const AddNote = () => {
  const clickHandler = () => {
    alert("this function is in the process of being created!");
  };

  return (
    <div className="add-note-main">
      <button
        style={{
          boxShadow: "3px 3px lightgrey",
          background: "lightgreen",
          height: "5vh",
          width: "auto",
          fontSize: "1.3rem",
          border: "1px, solid, black",
          borderRadius: "10px",
        }}
        onClick={clickHandler}
      >
        Add a note
      </button>
    </div>
  );
};

export default AddNote;
