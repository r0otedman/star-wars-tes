import { Navbar, SubNavbar } from "../widgets/Navbar";
import AppRouter from "./providers/router";

export default function App() {
  return (
    <div>
      <Navbar />
      <SubNavbar />
      <AppRouter />
    </div>
  );
}
