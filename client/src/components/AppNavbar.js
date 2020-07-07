import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Progress
} from "reactstrap";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <Navbar
          style={{ backgroundColor: "#f3f33e" }}
          expand="sm"
          className="mb-5"
          light
        >
          <Container>
            <NavbarBrand href="/">
              <h1
                style={{
                  marginLeft: "20px",
                  fontSize: "5vw",
                  fontFamily: "sansserif",
                  fontStyle: "oblique",
                  fontWeight: "500",
                  fontVariant: "small-caps"
                }}
              >
                Task List
              </h1>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto " navbar>
                <NavItem>
                  <NavLink href="https://github.com/clarkjo12">Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>{" "}
        </Navbar>
        <Progress
          className="progress-bar"
          animated
          color="caution"
          value="100"
        />
      </div>
    );
  }
}

export default AppNavbar;
