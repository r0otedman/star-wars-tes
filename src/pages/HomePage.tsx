import { useState } from "react";
import { Container, CircularProgress, Typography, Grid } from "@mui/material";
import { useGetCharactersQuery } from "../api/swapi";
import { CustomTextField } from "../components/ui/CustomTextField";
import { CharacterCard } from "../components/CharacterCard";
import { PaginationControls } from "../components/ui/PaginationControls";

export default function HomePage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, isLoading, isFetching, error } = useGetCharactersQuery({
    page,
    search,
  });

  const totalPages = data ? Math.ceil(data.count / 10) : 1;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Star Wars Characters
      </Typography>

      <CustomTextField
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      {isLoading && (
        <Grid container justifyContent="center" sx={{ mt: 4 }}>
          <CircularProgress />
        </Grid>
      )}

      {error && (
        <Typography color="error" textAlign="center">
          Failed to load characters
        </Typography>
      )}

      <Grid container spacing={3}>
        {data?.results.map((char, index) => (
          <Grid
            key={char.url}
            size={
              index !== 0
                ? { xs: 12, sm: 6, md: 4 }
                : { xs: 12, sm: 12, md: 12 }
            }
          >
            <CharacterCard index={index} character={char} key={char.url} />
          </Grid>
        ))}
      </Grid>

      {!isLoading && data && (
        <PaginationControls
          page={page}
          totalPages={totalPages}
          onChange={setPage}
        />
      )}

      {isFetching && !isLoading && (
        <Grid container justifyContent="center" sx={{ mt: 2 }}>
          <CircularProgress size={20} />
        </Grid>
      )}
    </Container>
  );
}
