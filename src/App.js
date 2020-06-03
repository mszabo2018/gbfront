import React from "react";
import "./App.css";
// import { Typography, Popover, Button } from "@material-ui/core";
import logo from "./logo.svg";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <div className="Regles">
          À l'aide de React et Material-ui, construire un{" "}
          <a href="https://material-ui.com/components/popover/" className="lien">
            Popover
          </a>{" "}
          flexible et réutilisable
        </div>
        <ul className="rules">
          <li>
            Libre à vous du look final, mais un exemple de ce qui est attendu se trouve dans
            /public/exemple.mp4
          </li>
          <li>Le code doit être clair et de vous</li>
          <li>Le data qui doit être contenu dans le popover est dans la variable DATA</li>
          <li>L'ajout de tests est fortement conseillé</li>
        </ul>
      </header>
    </div>
  );
}

//uncomment this 
// const DATA = [
//   {
//     question:
//       "Aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit1  ?",
//     answer: "Yes",
//   },
//   {
//     question:
//       "Lore aut odit aut fugit, sed quia ceos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum qui dolor sit ?",
//     answer: "Yes",
//   },
//   {
//     question: "Lorem ipsum dolor sit amet, sum dolor sit amet, consectetuer ?",
//     answer: "No",
//   },
//   {
//     question:
//       "Bem ipsum dolor sit amet, consectetuer, sum dolor sit amet, lorem ipsum dolor sit amet, consectetuer ?",
//     answer: "Yes",
//   },
// ];


export default App;
