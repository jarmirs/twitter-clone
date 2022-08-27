import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from './components/Feed';


function App() {
  return (
    <div className= "app">
      <Sidebar />
      {/*feed section*/}
      <Feed/>
      {/*widgets*/}
    </div>
  );
}

export default App;
