import { useState } from "react";
import {
  Button,
  Card as MuiCard,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

export default function Card(props) {
  const [isEditMode, setIsEditMode] = useState(false);

  function enableEditMode() {
    setIsEditMode(true);
  }

  function disableEditMode() {
    setIsEditMode(false);
  }

  return (
    <MuiCard>
      {isEditMode ? (
        <CardModeEdit {...props} onDisableEditMode={disableEditMode} />
      ) : (
        <CardModeShow {...props} onEnableEditMode={enableEditMode} />
      )}
    </MuiCard>
  );
}

function CardModeShow({ id, content, name, onEnableEditMode }) {
  return (
    <>
      <CardContent>
        <Typography variant="h5" component="p">
          {content}
        </Typography>
        <Typography>{name}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            console.log("Delete card", id, content, name);
          }}
        >
          Delete
        </Button>
        <Button size="small" onClick={onEnableEditMode}>
          Edit
        </Button>
      </CardActions>
    </>
  );
}

function CardModeEdit({ id, content, name, onDisableEditMode }) {
  const [nameValue, setNameValue] = useState(name);
  const [contentValue, setContentValue] = useState(content);

  function onFormSubmit(event) {
    event.preventDefault();
    console.log(nameValue, contentValue);
    onDisableEditMode();
  }

  return (
    <form onSubmit={onFormSubmit}>
      <CardContent>
        <TextField
          name="content"
          label="Content"
          fullWidth
          multiline
          rows={2}
          value={contentValue}
          onChange={(event) => {
            setContentValue(event.target.value);
          }}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          name="name"
          label="Name"
          fullWidth
          value={nameValue}
          onChange={(event) => {
            setNameValue(event.target.value);
          }}
        />
      </CardContent>
      <CardActions>
        <Button
          type="submit"
          size="small"
          onClick={() => {
            console.log("Delete card", id, content, name);
          }}
        >
          Save
        </Button>
      </CardActions>
    </form>
  );
}
