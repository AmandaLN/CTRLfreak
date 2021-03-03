import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
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
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/" ||
                      window.location.pathname === "/Home"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  CTRLfreak
              </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/Budgets"
                  className={
                    window.location.pathname === "/Budgets"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Inventory
              </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/logout"
                  className={
                    window.location.pathname === "/logout"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Log out
              </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}
export default Nav1;