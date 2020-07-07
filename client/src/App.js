import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import TaskList from "./components/TaskList";
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import store from "./store";
import Modal from "./components/ItemModal";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <Modal>Add New</Modal>
            <TaskList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
