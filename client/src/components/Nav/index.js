import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Logo from "../logo";
// import Login from "../LoginForm";
import AuthButton from "../AuthButton";
import { UserContext } from "../../utils/UserContext";

import {
  NavbarToggler
} from "reactstrap";

//I want to add some basic inline styling here, even though we are bringing in styles
const buttonStyle = {
  marginRight: 10
};

function Nav() {

  const [user, dispatch] = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    if (open && width > 991) {
      setOpen(false);
    }
    setWidth(window.innerWidth)
    // toggleNav()
  };

  const toggleNav = () => {
    
    setOpen(!open);
    
  };

  useEffect(() => {

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    }
  }, [])


  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow p-3 bg-white rounded mb-0">

      <Link className="navbar-brand" to="/">
       <Logo />
        </Link>
        <NavbarToggler onClick={toggleNav} className="bg-primary"/>
      <div className={`${open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
        {user.username ? <span className="userText text-primary ml-3 pt-1" to="#">Hi {user.username} !</span> : ""}
        <ul className="navbar-nav ml-auto">
        
          {user.username ? 
        
                  <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white border border-primary font-weight-bold btn btn-primary rounded-pill px-4" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Itemization
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link style={buttonStyle} className=" btn btn-white font-weight-bold" to={{pathname: "/inventory/subscriptions", type: "subscriptions", user: user.username}}>Subscriptions</Link>
                    <Link style={buttonStyle} className=" btn btn-white font-weight-bold" to={{pathname: "/inventory/utilities", type: "utilities", user: user.username}}>Utilities</Link>
                    <Link style={buttonStyle} className=" btn btn-white font-weight-bold" to={{pathname: "/inventory/groceries", type: "groceries", user: user.username}}>Groceries</Link>
                  </div>
                </li>
                    :     
            ""}
          <div className="container mr-5">
			  <li className="nav-item">
				<Link style={buttonStyle} className=" btn btn-primary text-white font-weight-bold border border-primary rounded-pill px-4" to="/public">About Us</Link>
		    <Link style={buttonStyle} className="btn btn-primary text-white border border-primary font-weight-bold rounded-pill px-4" to="/protected">Budget</Link>
				{user.username ? "" :
				<Link style={buttonStyle} className="btn btn-primary border border-primary font-weight-bold text-white rounded-pill px-4" to="/register">Sign Up</Link>
				}
				<AuthButton />
			</li>
		  </div>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;



// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
// } from "reactstrap";


// class Nav1 extends Component {
//   constructor(props) {
//     super(props);
//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false,
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen,
//     });
//   }
//   render() {
//     return (
//       <>
//         <Navbar color="inverse" light expand="md" className="bg-info">
//           <NavbarBrand href="/">Home</NavbarBrand>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <Link
//                   to="/"
//                   className={
//                     window.location.pathname === "/" ||
//                       window.location.pathname === "/Home"
//                       ? "nav-link active"
//                       : "nav-link"
//                   }
//                 >
//                   CTRLfreak
//               </Link>
//               </NavItem>
//               <NavItem>
//                 <Link
//                   to="/Budgets"
//                   className={
//                     window.location.pathname === "/Budgets"
//                       ? "nav-link active"
//                       : "nav-link"
//                   }
//                 >
//                   Inventory
//               </Link>
//               </NavItem>
//               <NavItem>
//                 <Link
//                   to="/logout"
//                   className={
//                     window.location.pathname === "/logout"
//                       ? "nav-link active"
//                       : "nav-link"
//                   }
//                 >
//                   Log out
//               </Link>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </>
//     );
//   }
// }
// export default Nav1;