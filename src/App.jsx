import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./tailwind.css";
import Index from "./pages/NotesDeFrais/NoteDeFrais";
import Ajout from "./pages/NotesDeFrais/Ajout";
import Valide from "./pages/NotesDeFrais/Valide";
import Attentes from "./pages/NotesDeFrais/Attentes";
import Absences from "./pages/Absences/Absences";
import AbsencesEnAttentes from "./pages/Absences/AbsencesEnAttentes";
import AbsencesValide from "./pages/Absences/AbsencesValide";
import DemandeAbsence from "./pages/Absences/DemandeAbsence";
import NaissanceAdoption from "./pages/Absences/NaissanceAdoption";
import MariageOuPacs from "./pages/Absences/MariageOuPacs";
import Maladie from "./pages/Absences/Maladie";
import TempsDeTravail from "./pages/TempsDeTravail/TempsDeTravail";

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
        <Route exact path="/absences/valide" component={AbsencesValide} />
        <Route
          exact
          path="/absences/demande-absence"
          component={DemandeAbsence}
        />
        <Route
          exact
          path="/absences/naissance-adoption"
          component={NaissanceAdoption}
        />
        <Route exact path="/absences/mariage-pacs" component={MariageOuPacs} />
        <Route exact path="/absences/maladie" component={Maladie} />
        <Route exact path="/temps-de-travail" component={TempsDeTravail} />
      </Switch>
      {/* <Index /> */}
      {/* <Ajout /> */}
      {/* <Valide /> */}
    </Router>
  );
}

export default App;
