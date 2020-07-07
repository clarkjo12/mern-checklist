import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class ItemModal extends Component {
  state = {
    modal: false,
    name: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name
    };

    //Add item vis addItem action
    this.props.addItem(newItem);

    //Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Task
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader
            style={{ backgroundColor: "skyblue" }}
            toggle={this.toggle}
          >
            {" "}
            Name a task you'd like to complete soon
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="start here"
                  onChange={this.onChange}
                />
                <Button
                  color="dark"
                  style={{ margin: "auto", width: "200px", marginTop: "2rem" }}
                  block
                >
                  Add
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapsStateToProps = state => ({
  item: state.item
});
export default connect(
  mapsStateToProps,
  { addItem }
)(ItemModal);
