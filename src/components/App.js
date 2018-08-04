import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
// import CommentBox from "components/CommentBox";
// import CommentList from "components/CommentList";
import * as actions from "actions";

// antd

import { Avatar, Badge, Icon, Menu, Button,Dropdown } from "antd";
import Drawer from "rc-drawer";
import "antd/dist/antd.css";
import "rc-drawer/assets/index.css";
import "../css/project.css";

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
  // Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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

  // onChange = bool => {
  //   console.log(bool);
  // };
  onTouchEnd = () => {
    this.setState({
      header_collapsed: false
    });
  };

  render() {
    return (
      <div>
        {/* mobile Drawer */}
         <Drawer
          // onChange={this.onChange}
          open={this.state.header_collapsed}
          onMaskClick={this.onTouchEnd}
          handler={false}
          level={null}
          width="200px"
        >
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
           <Menu.Item key="1">
            <Icon type="mail" />
            Navigation One
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="calendar" />
            Navigation Two
          </Menu.Item>
           
          </Menu>
        </Drawer>
        {/* mobile Drawer */}

        <div className="header">
          <Navbar color="light" light expand="md">
            
            <NavbarToggler onClick={this.header_toggle} />
            <NavbarBrand className="logo-color" href="/">
              LOGO
            </NavbarBrand>
            
            <Nav className="user-bar mobile" navbar>
              <NavItem>
              <Dropdown className="user-toggle" overlay={menu} trigger={['click']} placement="bottomRight">
                <a className="ant-dropdown-link" href="#">
                <span className="user-images">
                  <img src="http://placehold.it/28x28" />
                </span>
                  Click me <Icon type="down" />
                </a>
              </Dropdown>
                {/* <NavLink href="/"> */}
                
                  {/* <Dropdown
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
                  </Dropdown> */}
                  {/* </div> */}
                {/* </NavLink> */}
              </NavItem>
            </Nav>

            
            <Collapse
              className="header-collapse"
              // isOpen={this.state.header_collapsed}
              navbar
            >
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/">FIRE</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">search</NavLink>
                </NavItem>
              </Nav>

              <Nav className="ml-auto user-bar desktop" navbar>
                <NavItem>
                <Dropdown className="user-toggle" overlay={menu} trigger={['click']} placement="bottomRight">
                
                <a className="ant-dropdown-link" href="#">
                <span className="user-images">
                  <img src="http://placehold.it/28x28" />
                </span>
                  Click me <Icon type="down" />
                </a>
              </Dropdown>
                  {/* <NavLink href="/"> */}

                 

                 
                {/* <Dropdown overlay={menu} trigger={['click']}  placement="bottomRight">
                <a className="ant-dropdown-link" href="#">
                  Click me <Icon type="down" />
                </a>
              </Dropdown> */}

                    {/* <Dropdown
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
                    </Dropdown> */}
                    {/* </div> */}
                  {/* </NavLink> */}
                </NavItem>
                <NavItem>
                  <NavLink className="checkbox-middle" href="/components/">
                    <i className="far fa-check-square icon-middle" />
                  </NavLink>
                </NavItem>

                <li className="nav-item bell">
                  <a className="nav-link" href="/">
                    <span>
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
            <NavItem>
              <NavLink disabled href="#">
                Disabled Link
              </NavLink>
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