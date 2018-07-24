import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
// import CommentBox from "components/CommentBox";
// import CommentList from "components/CommentList";
import * as actions from "actions";

// antd
import Drawer from "rc-drawer";
import { Layout, Menu, Icon } from "antd";
import "antd/dist/antd.css";
import "rc-drawer/assets/index.css";
// import "./assets/index.less";
import "../css/project.css";

const { Header, Content, Footer, Sider } = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
// const sideStyle = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   right: 0
// };

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle(collapsed) {
    console.log(collapsed);
    this.setState({ collapsed: !this.state.collapsed });
  }
  render() {
    return (
      <div>
        <Layout>
          {/* <Sider
            trigger={null}
            breakpoint="lg"
            collapsedWidth="0"
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={(collapsed, type) => {
              this.toggle(collapsed);
              console.log("collapsed", collapsed);
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span className="nav-text">test nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text">nav 3</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="user" />
                <span className="nav-text">nav 4</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="heart-o" />
                <span className="nav-text">nav 5</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="team" />
                <span className="nav-text">nav 6</span>
              </Menu.Item>
            </Menu>
          </Sider> */}
          <Drawer width="20vw">
            <Menu
              style={{ height: "200%" }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="mail" />
                    <span>Navigation One</span>
                  </span>
                }
              >
                <MenuItemGroup key="g1" title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>Navigation Two</span>
                  </span>
                }
              >
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="setting" />
                    <span>Navigation Three</span>
                  </span>
                }
              >
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </Drawer>

          <Layout>
            <Header className="header">
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                style={{ lineHeight: "64px" }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>

            <Content style={{ margin: "0 16px" }}>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                magnam adipisci dolorem explicabo animi laudantium iste itaque
                nam facilis quasi.
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
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
