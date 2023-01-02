import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = () => {
  return (
    <>
      <div className="main_note">
        <form>
          <input type="text" name="text" placeholder="Title" />
          <textarea rows="" cols="" placeholder="Write a note..."></textarea>
          <Button>
            <AddIcon className="plus_sign"/>
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
