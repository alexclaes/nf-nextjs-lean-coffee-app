import Link from "next/link";
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import AccountButton from "./AccountButton";

export default function Header() {
  return (
    <AppBar color="primary">
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Toolbar>
          <Link href="/" passHref>
            <Button sx={{ color: "white" }} component="a">
              Home
            </Button>
          </Link>
          <Link href="/cards" passHref>
            <Button sx={{ color: "white" }} component="a">
              Cards
            </Button>
          </Link>
          <Link href="/create" passHref>
            <Button sx={{ color: "white" }} component="a">
              Create
            </Button>
          </Link>
        </Toolbar>
        <Toolbar>
          <AccountButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
