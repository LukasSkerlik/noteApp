import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arrayOfNotes, setArrayOfNotes] = useState([]);

  function addItem(inputObject) {
    setArrayOfNotes(prevItems => {
      return [...prevItems, inputObject];
    });
    // console.log(arrayOfNotes);
  }

  function deleteItem(id) {
    setArrayOfNotes(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div class="nightmode">
      <Header />
      <main>
      <CreateArea onAdd={addItem} />
      {arrayOfNotes.map((notes, index) => (
        <Note
          key={index}
          id={index}
          title={notes.title}
          content={notes.content}
          onChecked={deleteItem}
        />
      ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
