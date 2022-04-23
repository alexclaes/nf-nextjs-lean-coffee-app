import { Grid, Typography } from "@mui/material";
import Card from "../src/components/Card";
import { getCards } from "../src/services/get-cards";

export function getStaticProps() {
  const cards = getCards();

  return {
    props: {
      cards,
    },
  };
}

export default function Cards({ cards }) {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h1">Cards</Typography>
        </Grid>
        {cards.map((card) => (
          <Grid item xs={4} key={card.id}>
            <Card id={card.id} content={card.content} name={card.name} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
