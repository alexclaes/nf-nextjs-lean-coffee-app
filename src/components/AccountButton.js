import { Button, Typography } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function AccountButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Image
          src={session.user.image}
          width="40"
          height="40"
          alt={session.user.name}
        />
        <Typography sx={{ color: 'white' }}>
          Hello {session.user.name}
        </Typography>
        <Button sx={{ color: 'white' }} onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <Button sx={{ color: 'white' }} onClick={() => signIn()}>
      Sign in
    </Button>
  );
}
