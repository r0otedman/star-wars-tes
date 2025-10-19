import { useState } from "react";
import Navbar from "../widgets/Navbar";
import AppRouter from "./providers/router";
import { Modal } from "shared/ui/Modal/Modal";

export default function App() {
  const [open, setOppen] = useState(false);
  return (
    <div>
      <Modal onClose={() => setOppen(false)} open={open}></Modal>
      <Navbar />
      <AppRouter />
    </div>
  );
}
