import Home from "./pages/Home";
import "./styles/global.css";
import { AnimatePresence } from "framer-motion";
import { Switch, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Softwares from "./pages/Softwares";

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
          <Route path="/softwares" exact>
            <Softwares />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
