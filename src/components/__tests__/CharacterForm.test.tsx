import { render, screen, fireEvent } from "@testing-library/react";
import { CharacterForm } from "../CharacterForm";
import type { Character } from "../../api/swapi";

describe("CharacterForm", () => {
  const mockCharacter: Character = {
    name: "Luke",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "",
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    url: "",
    created: "2023-01-01T00:00:00.000Z",
    edited: "2023-01-01T00:00:00.000Z",
  };

  const onChange = jest.fn();
  const onSave = jest.fn();
  const onCancel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    render(
      <CharacterForm
        character={mockCharacter}
        onChange={onChange}
        onSave={onSave}
        onCancel={onCancel}
      />
    );
  });

  it("renders all fields with correct initial values", () => {
    expect(screen.getByLabelText("Name")).toHaveValue("Luke");
    expect(screen.getByLabelText("Height")).toHaveValue("172");
    expect(screen.getByLabelText("Mass")).toHaveValue("77");
    expect(screen.getByLabelText("Hair Color")).toHaveValue("blond");
    expect(screen.getByLabelText("Skin Color")).toHaveValue("fair");
    expect(screen.getByLabelText("Eye Color")).toHaveValue("blue");
    expect(screen.getByLabelText("Birth Year")).toHaveValue("19BBY");
    expect(screen.getByLabelText("Gender")).toHaveValue("male");
  });

  it("calls onChange when input value changes", () => {
    const nameInput = screen.getByLabelText("Name");
    fireEvent.change(nameInput, { target: { value: "Leia" } });
    expect(onChange).toHaveBeenCalledWith("name", "Leia");
  });

  it("calls onSave when Save button is clicked", () => {
    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);
    expect(onSave).toHaveBeenCalled();
  });

  it("calls onCancel when Cancel button is clicked", () => {
    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);
    expect(onCancel).toHaveBeenCalled();
  });
});
