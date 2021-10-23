import Home from "./pages/Home";
import "./styles/global.css";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Home />
    </AnimatePresence>
  );
}

export default App;
