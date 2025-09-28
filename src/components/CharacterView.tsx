import { Grid, Typography } from "@mui/material";

import { Character } from "../api/swapi";
import { COLORS } from "../colors";

type Props = { character: Character };

export function CharacterView({ character }: Props) {
  return (
    <Grid
      sx={{
        border: `1px solid ${COLORS.border}`,
        borderRadius: 2,
        backgroundColor: "#1C2530",
      }}
      justifyContent="space-between"
      mt={3}
      p={2}
    >
      <Typography>Height: {character.height}</Typography>
      <Typography>Mass: {character.mass}</Typography>
      <Typography>Hair Color: {character.hair_color}</Typography>
      <Typography>Skin Color: {character.skin_color}</Typography>
      <Typography>Eye Color: {character.eye_color}</Typography>
    </Grid>
  );
}
