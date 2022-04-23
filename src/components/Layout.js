import { Container } from "@mui/material";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container maxWidth="xl" component="main" sx={{ marginTop: "6rem" }}>
        {children}
      </Container>
    </>
  );
}
