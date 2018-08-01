import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
// import CommentBox from "components/CommentBox";
// import CommentList from "components/CommentList";
import * as actions from "actions";

// antd
import "antd/dist/antd.css";
import "../css/project.css";
import { Avatar, Badge, Icon } from "antd";
// import { Layout, Menu, Icon, Breadcrumb } from "antd";
// const { Header, Content, Footer, Sider } = Layout;
// const sideStyle = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   right: 0
// };

// bs
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header_collapsed: false,
      sub_collapsed: false,
      dropdownOpen: false
    };
    this.header_toggle = this.header_toggle.bind(this);
    this.sub_toggle = this.sub_toggle.bind(this);
    this.dropdown_toggle = this.dropdown_toggle.bind(this);
  }
  header_toggle() {
    this.setState({ header_collapsed: !this.state.header_collapsed });
  }
  sub_toggle() {
    this.setState({ sub_collapsed: !this.state.sub_collapsed });
  }
  dropdown_toggle(e) {
    e.preventDefault();
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    return (
      <div>
        <div className="header">
          <Navbar color="light" light expand="md">
            <NavbarToggler onClick={this.header_toggle} />
            <NavbarBrand href="/">LOGO</NavbarBrand>

            {/* <button
              className="navbar-toggler"
              type="button"
              onClick={this.toggle}
            >
              
              <span className="user-images">
                <img src="http://placehold.it/28x28" />
              </span>
            </button> */}

            <Collapse isOpen={this.state.header_collapsed} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/">fire</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">search</NavLink>
                </NavItem>
              </Nav>
            </Collapse>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">
                  <Dropdown
                    className="user-toggle"
                    isOpen={this.state.dropdownOpen}
                    toggle={this.dropdown_toggle}
                  >
                    <DropdownToggle caret>
                      <span className="user-images">
                        <img src="http://placehold.it/28x28" />
                      </span>
                      <div className="user-name">USER</div>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem disabled>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  {/* </div> */}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="checkbox-middle" href="/components/">
                  <i className="far fa-check-square icon-middle" />
                </NavLink>
              </NavItem>

              <li className="nav-item bell">
                <a className="nav-link" href="/">
                  <span style={{ marginRight: 24 }}>
                    <Badge count={3}>
                      <Avatar
                        style={{
                          color: "black",
                          backgroundColor: "transparent"
                        }}
                        shape="circle"
                        icon="bell"
                      />
                    </Badge>
                  </span>
                </a>
              </li>
            </Nav>
          </Navbar>
        </div>
        <div className="sub-header">
          {/* <Navbar color="light" light expand="md"> */}
          {/* <NavbarToggler onClick={this.sub_toggle} /> */}
          {/* <Collapse isOpen={this.state.sub_collapsed} navbar> */}
          {/* <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Active
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="/"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/">
                  Separated link
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
          </ul> */}
          <Nav pills>
            <NavItem>
              <NavLink href="#" active>
                Link
              </NavLink>
            </NavItem>
            {/* <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle nav caret>
                Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown> */}
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">
                Disabled Link
              </NavLink>
            </NavItem>
          </Nav>

          {/* <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">CAT 1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">CAT 2</NavLink>
              </NavItem>
            </Nav> */}
          {/* </Collapse> */}
          {/* </Navbar> */}
        </div>
      </div>
    );
  }
}
function callback(key) {
  console.log(key);
}
function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(
  mapStateToProps,
  actions
)(App);
