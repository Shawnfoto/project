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
      collapsed: false,
      sub_collapsed: false,
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.sub_toggle = this.sub_toggle.bind(this);
    this.dropdown_toggle = this.dropdown_toggle.bind(this);
  }
  toggle() {
    this.setState({ collapsed: !this.state.collapsed });
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
            <NavbarBrand href="/">LOGO</NavbarBrand>

            <NavbarToggler onClick={this.toggle} />

            <Collapse isOpen={this.state.collapsed} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/">fire</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">search</NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">
                    {/* <div className="user-images">
                    <img src="http://placehold.it/28x28" />
                  </div> */}

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

                {/* <NavItem>
                  <NavLink className="checkbox-middle" href="/components/">
                    <i class="far fa-bell icon-middle" />
                  </NavLink>
                </NavItem> */}
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
            </Collapse>
          </Navbar>
        </div>
        <div className="sub-header">
          <Navbar color="light" light expand="md">
            <NavbarToggler onClick={this.sub_toggle} />
            <Collapse isOpen={this.state.sub_collapsed} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">CAT 1</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">CAT 2</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
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
