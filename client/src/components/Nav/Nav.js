import React, { Component } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";


class Nav1 extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <>
        <Navbar color="inverse" light expand="md" className="bg-info">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  to="/"
                  className={
                    window.location.pathname === "/" ||
                      window.location.pathname === "/Home"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  CTRLfreak
              </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/inventory"
                  className={
                    window.location.pathname === "/inventory"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Inventory
              </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/logout"
                  className={
                    window.location.pathname === "/logout"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Log out
              </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}
export default Nav1;