import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import * as actions from "actions";

// antd
import "antd/dist/antd.css";
import "../css/project.css";
import { Layout, Menu, Icon } from "antd";
const { Header, Sider, Content, Footer } = Layout;

const sideStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle pull-left"
                data-toggle="collapse"
                data-target="#myNavbar"
                onClick={this.toggle}
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>

              <a className="navbar-brand" href="#">
                LOGO
              </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="#">Home</a>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    Page 1 <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Page 1-1</a>
                    </li>
                    <li>
                      <a href="#">Page 1-2</a>
                    </li>
                    <li>
                      <a href="#">Page 1-3</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Page 2</a>
                </li>
                <li>
                  <a href="#">Page 3</a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#">
                    <span className="glyphicon glyphicon-user" /> Sign Up
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="glyphicon glyphicon-log-in" /> Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(
  mapStateToProps,
  actions
)(App);
