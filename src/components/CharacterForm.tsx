import { Grid, Button } from "@mui/material";
import { Character } from "../api/swapi";
import { CustomTextField } from "./ui/CustomTextField";
import { COLORS } from "../colors";

type Props = {
  character: Character;
  onChange: (field: keyof Character, value: string) => void;
  onSave: () => void;
  onCancel: () => void;
};

export function CharacterForm({
  character,
  onChange,
  onSave,
  onCancel,
}: Props) {
  const fields: { label: string; field: keyof Character }[] = [
    { label: "Name", field: "name" },
    { label: "Height", field: "height" },
    { label: "Mass", field: "mass" },
    { label: "Hair Color", field: "hair_color" },
    { label: "Skin Color", field: "skin_color" },
    { label: "Eye Color", field: "eye_color" },
    { label: "Birth Year", field: "birth_year" },
    { label: "Gender", field: "gender" },
  ];

  return (
    <Grid container p={2}>
      {fields.map(({ label, field }) => (
        <Grid key={field} size={{ xs: 12, sm: 12, md: 12 }}>
          <CustomTextField
            label={label}
            value={character[field as keyof Character] || ""}
            onChange={(e) => onChange(field as keyof Character, e.target.value)}
          />
        </Grid>
      ))}

      <Grid
        container
        spacing={2}
        sx={{ width: "100%", justifyContent: "space-between" }}
      >
        <Button
          sx={{ width: "46%", backgroundColor: COLORS.green }}
          variant="contained"
          fullWidth
          onClick={onSave}
        >
          Save
        </Button>

        <Button
          sx={{
            width: "46%",
            color: COLORS.focus,
            borderColor: COLORS.focus,
            "&:hover": {
              borderColor: COLORS.focus,
            },
          }}
          variant="outlined"
          fullWidth
          onClick={onCancel}
        >
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
}
