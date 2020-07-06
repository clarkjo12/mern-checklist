import React from "react";
import AppNavbar from "./components/AppNavbar";
import TaskList from "./components/TaskList";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <TaskList />
    </div>
  );
}

export default App;
