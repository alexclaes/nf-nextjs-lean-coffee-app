import Link from "next/link";
import {
  AppBar,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

export default function Header() {
  return (
    <AppBar color="primary">
      <Container maxWidth="xl">
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
      </Container>
    </AppBar>
  );
}
