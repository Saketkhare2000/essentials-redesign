import Home from "./pages/Home";
import "./styles/global.css";
import { AnimatePresence } from "framer-motion";
import { Switch, Route } from "react-router-dom";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/admin" exact>
            <Admin />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
