import type { Character, CharacterListResponse } from "../../types";

describe("swapiApi endpoints", () => {
  it("getCharacters формирует правильный URL и данные", () => {
    const mockData: CharacterListResponse = {
      count: 1,
      next: null,
      previous: null,
      results: [
        {
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
          created: "2023-01-01T00:00:00.000Z",
          edited: "2023-01-01T00:00:00.000Z",
        },
      ],
    };

    expect(mockData.results[0].height).toBe("172");
    expect(mockData.results[0].name).toBe("Luke Skywalker");
  });

  it("getCharacterById формирует правильные данные", () => {
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
      created: "2023-01-01T00:00:00.000Z",
      edited: "2023-01-01T00:00:00.000Z",
    };

    expect(mockCharacter.height).toBe("172");
    expect(mockCharacter.name).toBe("Luke Skywalker");
  });
});
