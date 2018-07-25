import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
// import CommentBox from "components/CommentBox";
// import CommentList from "components/CommentList";
import * as actions from "actions";

// antd
import "antd/dist/antd.css";
import "../css/project.css";
import { Layout, Menu, Icon, Breadcrumb } from "antd";
const { Header, Content, Footer, Sider } = Layout;
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
          <Sider
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
          </Sider>

          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? "bars" : "close"}
                onClick={this.toggle}
              />
            </Header>
            {/* <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header> */}

            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "12px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                content
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
