import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

export default function Create() {
  const [nameValue, setNameValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();
    console.log(nameValue, contentValue);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Name"
            fullWidth
            value={nameValue}
            onChange={(event) => {
              setNameValue(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="content"
            label="Content"
            fullWidth
            multiline
            rows={4}
            value={contentValue}
            onChange={(event) => {
              setContentValue(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
