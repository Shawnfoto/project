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
        <nav className="navbar navbar-fixed-top">
          <div className="container-fluid Logo_block">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle pull-left"
                data-toggle="collapse"
                data-target="#Cat_bar"
                onClick={this.toggle}
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>

              <a className="navbar-brand" href="javascript:void(0)">
                LOGO
              </a>
              <button
                type="button"
                className="navbar-toggle pull-right"
                data-toggle="collapse"
                data-target="#User"
                onClick={this.toggle}
              >
                <span className="glyphicon glyphicon-user" />
              </button>

              {/* <div id="nav-user-mobile-app">
                <div className="dropdown nav-user-mobile-base visible-xs">
                  123
                </div>
              </div> */}
            </div>

            <div className="collapse navbar-collapse" id="User">
              <ul className="nav navbar-nav navbar-left">
                <li>
                  <a href="">
                    <span className="glyphicon glyphicon-king" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="glyphicon glyphicon-search" />
                  </a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="">
                    <span className="glyphicon glyphicon-user" />
                  </a>
                </li>

                <li>
                  <a href="">
                    <span className="glyphicon glyphicon-ok" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Inbox <span className="badge">42</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="container-fluid Cat_bar_container">
            <div className="collapse navbar-collapse" id="Cat_bar">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="">CAT1</a>
                </li>

                <li>
                  <a href="">CAT2</a>
                </li>
                <li>
                  <a href="">CAT3</a>
                </li>
                <li>
                  <a href="">CAT4</a>
                </li>
                <li>
                  <a href="">CAT5</a>
                </li>
                <li>
                  <a href="">CAT6</a>
                </li>
                <li>
                  <a href="">CAT7</a>
                </li>
                <li>
                  <a href="">CAT8</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="container-fluid Count">
            {/* <div className="" id="Cat_bar"> */}
            <div className="row">
              <div className="col-sm-4 col-xs-12">ALL</div>
              <div className="col-sm-8 hidden-xs text-center">CAT2-1</div>
            </div>
          </div>
          <div className="left">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-4">search</div>
                <div className="col-sm-8">content</div>
              </div>
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
