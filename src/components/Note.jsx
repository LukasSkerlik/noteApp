import React from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        <DeleteForeverIcon />
      </button>
    </div>
  );
}

export default Note;
