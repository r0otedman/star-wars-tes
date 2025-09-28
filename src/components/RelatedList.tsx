import { CircularProgress, Grid, Typography } from "@mui/material";
import PublicOff from "@mui/icons-material/PublicOff";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import MovieIcon from "@mui/icons-material/Movie";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TwoWheeler from "@mui/icons-material/TwoWheeler";
import { GlitchText } from "./ui/GlitchText";
import { COLORS } from "../colors";
type Props<T> = {
  urls: string[];
  label: string;
  hook: (url: string) => { data?: T; isLoading: boolean };
  nameField?: keyof T;
};

export function RelatedList<T extends object>({
  urls,
  label,
  hook,
  nameField = "name" as keyof T,
}: Props<T>) {
  const items = urls.map((u) => hook(u));
  const loading = items.some((i) => i.isLoading);

  return (
    <Grid container spacing={2} alignItems="center" mt={2}>
      <Grid>
        {label === "Homeworld" && <PublicOff />}
        {label === "Species" && <SmartToyIcon />}
        {label === "Films" && <MovieIcon />}
        {label === "Starships" && <RocketLaunchIcon />}
        {label === "Vehicles" && <TwoWheeler />}
      </Grid>

      <Grid>
        <Typography>
          <strong>{label}:</strong>
        </Typography>
      </Grid>

      <Grid>
        {loading ? (
          <CircularProgress size={16} />
        ) : items.length ? (
          <Typography>
            {items
              .map((i) => i.data?.[nameField] ?? "")
              .filter(Boolean)
              .join(", ")}
          </Typography>
        ) : (
          <GlitchText text="N/A" size={16} color={COLORS.red} />
        )}
      </Grid>
    </Grid>
  );
}
