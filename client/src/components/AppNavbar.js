import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Progress from "../components/ProgressBar";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
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
        <Progress />
        <Navbar
          style={{
            backgroundImage: "linear-gradient(-90deg, #FBFF7B, #FAFF56)",
            marginBottom: "20px"
          }}
          expand="sm"
          light
        >
          <Container>
            <NavbarBrand href="/">
              <h1
                style={{
                  marginLeft: "20px",
                  fontSize: "6vw",
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
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
