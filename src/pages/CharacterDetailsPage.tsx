import {
  Container,
  CircularProgress,
  Typography,
  IconButton,
  Dialog,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  useGetCharacterByIdQuery,
  swapiApi,
  Character,
  useGetSpeciesQuery,
  useGetFilmQuery,
  useGetStarshipQuery,
  useGetVehicleQuery,
  useGetPlanetQuery,
} from "../api/swapi";
import { AppDispatch } from "../redux/store";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CharacterHeader } from "../components/CharacterHeader";
import { CharacterForm } from "../components/CharacterForm";
import { CharacterView } from "../components/CharacterView";
import { RelatedList } from "../components/RelatedList";
import { COLORS } from "../colors";

export default function CharacterDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { data: character, isLoading, error } = useGetCharacterByIdQuery(id!);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Character | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (isEditing && character) {
      setFormData({ ...character });
    }
  }, [isEditing, character]);

  const handleChange = (field: keyof Character, value: string) => {
    if (!formData) return;
    setFormData((prev) => ({ ...prev!, [field]: value }));
  };

  const handleSave = () => {
    if (!formData) return;
    dispatch(
      swapiApi.util.updateQueryData("getCharacterById", id!, (draft) => {
        Object.assign(draft, formData);
      })
    );

    dispatch(
      swapiApi.util.updateQueryData(
        "getCharacters",
        { page: 1, search: "" },
        (draft) => {
          draft.results = draft.results.map((item: Character) =>
            item.url === formData.url ? { ...item, ...formData } : item
          );
        }
      )
    );

    setIsEditing(false);
  };

  if (isLoading)
    return (
      <Container sx={{ py: 4, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );

  if (error || !character)
    return (
      <Container sx={{ py: 4, textAlign: "center" }}>
        <Typography color="error">Failed to load character</Typography>
      </Container>
    );

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <IconButton sx={{ padding: 0 }} onClick={() => navigate(-1)}>
        <ArrowBackIcon sx={{ color: "white" }} />
      </IconButton>

      <CharacterHeader
        character={character}
        isEditing={isEditing}
        onToggle={() => setIsEditing(true)}
      />

      <Dialog
        open={isEditing}
        onClose={() => setIsEditing(false)}
        fullWidth
        maxWidth="sm"
        slotProps={{
          backdrop: { inert: true },
          paper: {
            sx: { borderRadius: 2, backgroundColor: COLORS.darkBg },
          },
        }}
      >
        {formData && (
          <CharacterForm
            character={formData}
            onChange={handleChange}
            onSave={handleSave}
            onCancel={() => setIsEditing(false)}
          />
        )}
      </Dialog>

      <CharacterView character={character} />

      <RelatedList
        urls={[character.homeworld]}
        label="Homeworld"
        hook={useGetPlanetQuery}
      />
      <RelatedList
        urls={character.species}
        label="Species"
        hook={useGetSpeciesQuery}
      />
      <RelatedList
        urls={character.films}
        label="Films"
        hook={useGetFilmQuery}
        nameField="title"
      />
      <RelatedList
        urls={character.starships}
        label="Starships"
        hook={useGetStarshipQuery}
      />
      <RelatedList
        urls={character.vehicles}
        label="Vehicles"
        hook={useGetVehicleQuery}
      />
    </Container>
  );
}
