import { Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h1">My Lean Coffe App</Typography>
        </Grid>
        <Grid item xs={12}>
          <Image
            src="/images/lean-coffee.jpg"
            alt="Lean Coffee"
            width={640}
            height={428}
            layout="responsive"
          />
        </Grid>
      </Grid>
    </>
  );
}
