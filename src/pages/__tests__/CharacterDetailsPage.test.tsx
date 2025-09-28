import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CharacterDetailsPage from "../CharacterDetailsPage";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import type { Character } from "../../api/swapi";

jest.mock("../../api/swapi", () => ({
  __esModule: true,
  useGetCharacterByIdQuery: jest.fn(),
  useGetSpeciesQuery: jest.fn(() => ({ data: [], isLoading: false })),
  useGetFilmQuery: jest.fn(() => ({ data: [], isLoading: false })),
  useGetStarshipQuery: jest.fn(() => ({ data: [], isLoading: false })),
  useGetVehicleQuery: jest.fn(() => ({ data: [], isLoading: false })),
  useGetPlanetQuery: jest.fn(() => ({ data: [], isLoading: false })),
  swapiApi: { util: { updateQueryData: jest.fn() } },
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "1" }),
  useNavigate: () => mockNavigate,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => jest.fn(),
}));

const mockCharacter: Character = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  gender: "male",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  homeworld: "Tatooine",
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  url: "1",
  created: "2020-01-01",
  edited: "2020-01-01",
};

function renderWithProviders(ui: React.ReactElement) {
  const store = configureStore({ reducer: () => ({}) });
  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );
}

describe("CharacterDetailsPage", () => {
  const { useGetCharacterByIdQuery } = jest.requireMock("../../api/swapi");

  it("показывает загрузку", () => {
    (useGetCharacterByIdQuery as jest.Mock).mockReturnValue({
      isLoading: true,
    });
    renderWithProviders(<CharacterDetailsPage />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("показывает ошибку", () => {
    (useGetCharacterByIdQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      error: true,
    });
    renderWithProviders(<CharacterDetailsPage />);
    expect(screen.getByText(/Failed to load character/i)).toBeInTheDocument();
  });

  it("рендерит данные персонажа", () => {
    (useGetCharacterByIdQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      error: null,
      data: mockCharacter,
    });
    renderWithProviders(<CharacterDetailsPage />);
    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes("172"))
    ).toBeInTheDocument();
  });

  it("открывает и закрывает форму редактирования", async () => {
    (useGetCharacterByIdQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      error: null,
      data: mockCharacter,
    });

    renderWithProviders(<CharacterDetailsPage />);

    fireEvent.click(screen.getByTestId("EditIcon").closest("button")!);

    expect(await screen.findByText("Save")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Cancel"));

    await waitFor(() =>
      expect(screen.queryByText("Save")).not.toBeInTheDocument()
    );
  });
});
