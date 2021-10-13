import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./tailwind.css";
import Index from "./pages/NotesDeFrais/Index";
import Ajout from "./pages/NotesDeFrais/Ajout";
import Valide from "./pages/NotesDeFrais/Valide";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/notes-de-frais" component={Index} />
        <Route exact path="/notes-de-frais/ajout" component={Ajout} />
        <Route exact path="/notes-de-frais/valide" component={Valide} />
      </Switch>
      {/* <Index /> */}
      {/* <Ajout /> */}
      {/* <Valide /> */}
    </Router>
  );
}

export default App;
