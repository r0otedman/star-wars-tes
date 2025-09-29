import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Grid,
  Typography,
} from "@mui/material";
import type { Character } from "../api/swapi";
import { useNavigate } from "react-router-dom";
import { GlitchText } from "./ui/GlitchText";
import { COLORS } from "../colors";

interface Props {
  character: Character;
  index: number;
}

export const CharacterCard: React.FC<Props> = ({ character, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const id = character.url.split("/").filter(Boolean).pop();
    navigate(`/character/${id}`);
  };

  return (
    <Card
      data-testid={`character-card-${index}`}
      sx={{
        minWidth: 250,
        width: "100%",
        borderRadius: 2,
        backgroundColor: COLORS.background,
        color: COLORS.white,
      }}
    >
      {/* 
        Можно делегировать onClick, 
        но сервер всегда отдает 10 карточек, 
        поэтому в этом нет смысла 
      */}
      <CardActionArea onClick={handleClick} disableTouchRipple>
        <CardContent>
          <Grid container spacing={2}>
            <Typography variant="h6">{character.name}</Typography>
            {index === 0 && (
              <GlitchText text="Top Now" size={16} color={COLORS.green} />
            )}
          </Grid>
          <Typography color={COLORS.green} variant="body2">
            Gender: {character.gender}
          </Typography>
          <Typography variant="body2">
            Birth Year: {character.birth_year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
