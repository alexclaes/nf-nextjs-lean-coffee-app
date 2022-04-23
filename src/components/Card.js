import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

export default function Card({ content, name }) {
  return (
    <MuiCard>
      <CardContent>
        <Typography variant="h5" component="p">
          {content}
        </Typography>
        <Typography>{name}</Typography>
      </CardContent>
    </MuiCard>
  );
}
