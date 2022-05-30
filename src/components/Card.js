import { useState } from 'react';
import {
  Button,
  Card as MuiCard,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
import { useSWRConfig } from 'swr';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

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

function CardModeShow({ id, content, user, onEnableEditMode }) {
  const { data: session } = useSession();
  const { mutate } = useSWRConfig();

  return (
    <>
      <CardContent>
        <Typography variant="h5" component="p">
          {content}
        </Typography>
        <Image src={user.image} width="32" height="32" alt={user.name} />
        <Typography component="span">{user.name}</Typography>
      </CardContent>
      {session && session.user.email === user.email && (
        <CardActions>
          <Button
            size="small"
            onClick={async () => {
              const response = await fetch('/api/card/' + id, {
                method: 'DELETE',
              });
              console.log(await response.json());
              mutate('/api/cards');
            }}
          >
            Delete
          </Button>
          <Button size="small" onClick={onEnableEditMode}>
            Edit
          </Button>
        </CardActions>
      )}
    </>
  );
}

function CardModeEdit({ id, content, user, onDisableEditMode }) {
  const [contentValue, setContentValue] = useState(content);
  const { mutate } = useSWRConfig();

  async function onFormSubmit(event) {
    event.preventDefault();

    const response = await fetch('/api/card/' + id, {
      method: 'PUT',
      body: JSON.stringify({
        content: contentValue,
      }),
    });
    console.log(await response.json());

    mutate('/api/cards');
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
          value={user.name}
          disabled
        />
      </CardContent>
      <CardActions>
        <Button type="submit" size="small">
          Save
        </Button>
      </CardActions>
    </form>
  );
}
