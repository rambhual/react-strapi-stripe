import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    this.setState(
      {
        active: !this.state.active
      },
      () => {
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-link is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className="navbar-item" title="Logo">
              <h1 className="is-size-4 has-text-weight-semibold">
                Saint Gobain
              </h1>
            </NavLink>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <NavLink className="navbar-item" to="/about">
                About
              </NavLink>
              <NavLink className="navbar-item" to="/products">
                Products
              </NavLink>
              <NavLink className="navbar-item" to="/news">
                News
              </NavLink>
              <NavLink className="navbar-item" to="/contact">
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
