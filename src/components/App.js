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
      open: false
    };
    // this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     open: false
    //   });
    // }, 2000);
  }
  onChange = bool => {
    console.log(bool);
  };
  onTouchEnd = () => {
    this.setState({
      open: false
    });
  };
  onSwitch = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    return (
      <div>
        {/* 抽屜 */}
        <Drawer
          onChange={this.onChange}
          open={this.state.open}
          onMaskClick={this.onTouchEnd}
          handler={false}
          level={null}
          width="20vw"
        >
          <Menu
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
        {/* 抽屜結束*/}

        <Layout>
          <Header className="header" style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.onSwitch}
            />
            {/* <div className="logo" /> */}
            {/* <a href="/">LOGO</a> */}

            <Menu
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
              Content
            </Content>
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
