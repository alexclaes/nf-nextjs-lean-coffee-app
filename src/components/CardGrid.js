import { Grid, Typography } from "@mui/material";
import useSWR from "swr";
import Card from "./Card";

export default function CardGrid() {
  const { data, error } = useSWR("/api/cards");

  if (error) {
    return <Typography>Error: {error.message}</Typography>;
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h1">Cards</Typography>
      </Grid>
      {data.map((card) => (
        <Grid item xs={4} key={card.id}>
          <Card id={card.id} content={card.content} name={card.name} />
        </Grid>
      ))}
    </Grid>
  );
}
