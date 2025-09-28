import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage.async";
import { CharacterDetailsPage } from "./pages/CharacterDetailsPage.async";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
