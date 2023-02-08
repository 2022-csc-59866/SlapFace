import React from "react";
import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const CreateProphecyButton = () => {
  //main window
  const [open, setOpen] = useState(false);
  const handldClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const submitPost = () => {
    handleClose();
    // Needs modification here
    console.log("submit post");
  };
  //category
  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <div>
        <Fab
          color="primary"
          aria-label="add"
          variant="extended"
          onClick={handldClickOpen}
        >
          <AddIcon sx={{ mr: 1 }} />
          Create
        </Fab>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>New Prophecy</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To start to a new Prophecy, please enter the information of the
              prophecy below.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="prophecy_title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="prophecy_description"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={submitPost}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default CreateProphecyButton;
