import React from "react";
import "./add-note.css";
import Button from "./Button";

const AddNote = props => {

  return (
    <div className="add-note-main">
      <Button 
      color='red' 
      title="Add A Note" 
      alerttext='This will open the modal to add notes, and them to the DB and the map below'/>
    </div>
  );
};

export default AddNote;
