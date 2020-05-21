import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [initial, setInitial] = useState(false);


  function handleChange(event) {
    const { name, value } = event.target;
    name === "title" && setNote(prevValue => ({ ...prevValue, [name]: value }));
    name === "content" &&
      setNote(prevValue => ({ ...prevValue, [name]: value }));
    // console.log(note);

  }
function initialization(){
  setInitial(true);
}


  return (
    <div>
      <form className="create-note">
        {initial && <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />}
        <textarea
          onChange={handleChange}
          onClick={initialization}
          name="content"
          placeholder="Take a note..."
          rows={initial ? 3 : 1}
          value={note.content}
        />
        
        <Zoom in={initial}>
          <Fab
            type="button"
            onClick={() => {
              props.onAdd(note);
              setNote({ title: "", content: "" });
            }}>

            <AddIcon/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
