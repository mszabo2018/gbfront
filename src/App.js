import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { DATA } from "./Constants";
import SimplePopover from "./SimplePopover";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="Regles">
          À l'aide de React et Material-ui, construire un
          <br />
          <br />
          <SimplePopover
            tableTitle="Daily Questions"
            data={DATA}
            buttonTitle="Exemple Greybox"
          />
          <br />
          flexible et réutilisable
        </div>
        <ul className="rules">
          <li>
            Libre à vous du look final, mais un exemple de ce qui est attendu se
            trouve dans /public/exemple.mp4
          </li>
          <li>Le code doit être clair et de vous</li>
          <li>
            Le data qui doit être contenu dans le popover est dans la variable
            DATA
          </li>
          <li>L'ajout de tests est fortement conseillé</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
