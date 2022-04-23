import { Button, Typography } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";

export default function AccountButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Typography sx={{ color: "white" }}>
          Hello {session.user.name}
        </Typography>
        <Button sx={{ color: "white" }} onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <Button sx={{ color: "white" }} onClick={() => signIn()}>
      Sign in
    </Button>
  );
}
