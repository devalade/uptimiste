import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./tailwind.css";
import Index from "./pages/NotesDeFrais/NoteDeFrais";
import Ajout from "./pages/NotesDeFrais/Ajout";
import Valide from "./pages/NotesDeFrais/Valide";
import Attentes from "./pages/NotesDeFrais/Attentes";
import Absences from "./pages/Absences/Absences";
import AbsencesEnAttentes from "./pages/Absences/AbsencesEnAttentes";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/notes-de-frais" component={Index} />
        <Route exact path="/notes-de-frais/ajout" component={Ajout} />
        <Route exact path="/notes-de-frais/valide" component={Valide} />
        <Route exact path="/notes-de-frais/attentes" component={Attentes} />
        <Route exact path="/absences" component={Absences} />
        <Route exact path="/absences/attentes" component={AbsencesEnAttentes} />
      </Switch>
      {/* <Index /> */}
      {/* <Ajout /> */}
      {/* <Valide /> */}
    </Router>
  );
}

export default App;
