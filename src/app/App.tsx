import { useState } from "react";
import { Modal } from "../shared/ui/Modal/Modal";
import Navbar from "../widgets/Navbar";
import AppRouter from "./providers/router";

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
