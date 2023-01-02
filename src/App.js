import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("I am clicked");
   setAddItem((prevData) => {
    return [...prevData, note];
   });
   console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((olddata) =>
    olddata.filter((currdata, indx) => {
      return indx !== id;
    })
    );
  };


  return (
    <>
      <Header /> 
      <CreateNote passNote={addNote} />
    
      {
        addItem.map((val, index) => {
          return (
             <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
          />
          );
        })
      }
      <Footer />
    </>
  );
};

export default App;
