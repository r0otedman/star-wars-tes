import { Box, Grid, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { GlitchText } from "./ui/GlitchText";
import { COLORS } from "../colors";
import { Character } from "../types";

type Props = {
  character: Character;
  isEditing: boolean;
  onToggle: () => void;
};

export function CharacterHeader({ character, onToggle }: Props) {
  return (
    <Box
      sx={{
        border: `1px solid ${COLORS.border}`,
        borderRadius: 2,
        backgroundColor: "#1C2530",
      }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mt={3}
      p={2}
    >
      <Grid>
        <GlitchText text={character.name} color={COLORS.green} size={34} />
        <Typography>Gender: {character.gender}</Typography>
        <Typography>Birth Year: {character.birth_year}</Typography>
      </Grid>
      <IconButton onClick={onToggle}>
        <EditIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
}
