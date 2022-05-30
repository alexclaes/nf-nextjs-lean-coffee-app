import { Container, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import CardCreateForm from '../src/components/CardCreateForm';

export default function Create() {
  const { data: session } = useSession();

  return (
    <Container maxWidth="xl">
      {session ? <CardCreateForm /> : <Typography>Please sign-in</Typography>}
    </Container>
  );
}
