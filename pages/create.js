import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Button, Grid, TextField, Typography } from "@mui/material";

export default function Create() {
  const { data: session } = useSession();

  const [nameValue, setNameValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [nameInputDisabled, setNameInputDisabled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (session && !nameValue) {
      setNameValue(session.user?.name);
      setNameInputDisabled(true);
    }
  }, [session, nameValue]);

  async function onFormSubmit(event) {
    event.preventDefault();

    const response = await fetch("/api/card/create", {
      method: "POST",
      body: JSON.stringify({
        name: nameValue,
        content: contentValue,
      }),
    });
    console.log(await response.json());

    router.push("/cards");
  }

  return (
    <form onSubmit={onFormSubmit}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h1">Add a new card</Typography>
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
          <TextField
            name="name"
            label="Name"
            fullWidth
            value={nameValue}
            onChange={(event) => {
              setNameValue(event.target.value);
            }}
            disabled={nameInputDisabled}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Create
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
