import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
// import CommentBox from "components/CommentBox";
// import CommentList from "components/CommentList";
import * as actions from "actions";

// antd
import { Avatar, Badge, Icon, Dropdown, Menu, Button } from "antd";
import "antd/dist/antd.css";
import "../css/project.css";

// bs
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

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
  }
  header_toggle() {
    this.setState({ header_collapsed: !this.state.header_collapsed });
  }
  sub_toggle() {
    this.setState({ sub_collapsed: !this.state.sub_collapsed });
  }

  render() {
    return (
      <div>
        <div id="header">
          <Navbar color="light" light expand="md">
            <div className="navbar-toggle-search">
              <NavbarToggler onClick={this.header_toggle} />
              <Nav className="search-nav" navbar>
                <NavItem>
                  <a href="javascript:void(0)" className="nav-link search-open">
                    <i className="fa fa-search" />
                  </a>
                </NavItem>
              </Nav>
            </div>

            <NavbarBrand id="brand" href="/">
              LOGO
            </NavbarBrand>

            <Collapse
              id="header-collapse"
              isOpen={this.state.header_collapsed}
              navbar
            >
              <Nav className="" navbar>
                <NavItem>
                  <NavLink href="/">
                    <i className="fas fa-rocket" />
                  </NavLink>
                </NavItem>
              </Nav>

              <Nav className="mr-auto search-nav desktop" navbar>
                <NavItem>
                  {/* <NavLink href="/">search</NavLink> */}
                  <a href="javascript:void(0)" className="nav-link search-open">
                    <i className="fa fa-search" />
                  </a>
                </NavItem>
              </Nav>

              <Nav className="ml-auto user-bar desktop" navbar>
                <NavItem className="user">
                  {/* <Dropdown
                    className="user-toggle"
                    overlay={menu}
                    trigger={["click"]}
                    placement="bottomRight"
                  >
                    <a className="nav-link ant-dropdown-link" href="#">
                      <span className="user-images">
                        <img src="http://placehold.it/28x28" />
                      </span>

                      <Icon type="down" />
                    </a>
                  </Dropdown> */}
                  <Button>Login</Button>
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
            </Collapse>

            <Nav className="user-bar mobile" navbar>
              <NavItem>
                <Dropdown
                  className="user-toggle"
                  overlay={menu}
                  trigger={["click"]}
                  placement="bottomRight"
                >
                  <a className="nav-link ant-dropdown-link" href="#">
                    <span className="user-images">
                      <img src="http://placehold.it/28x28" />
                    </span>
                    <span className="user-name">USER</span>

                    <Icon type="down" />
                  </a>
                </Dropdown>
              </NavItem>

              <NavItem className="check">
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

            {/* <div className="search-inline">
                <form>
                    <input type="text" className="form-control" placeholder="Searching...">
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                    <a href="javascript:void(0)" className="search-close">
                        <i className="fa fa-times"></i>
                    </a>
                </form>
            </div> */}
          </Navbar>
        </div>

        <div className="sub-header">
          <Nav pills>
            <NavItem>
              <NavLink href="#" active>
                Link
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Another Link</NavLink>
            </NavItem>
          </Nav>
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
