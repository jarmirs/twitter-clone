import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from './components/Feed';
import Widgets from "./components/Widget";


function App() {
  return (
    <div className= "app">
      <Sidebar />
      {/*feed section*/}
      <Feed/>
      {/*widgets*/}
      <Widgets/>
    </div>
  );
}

export default App;
