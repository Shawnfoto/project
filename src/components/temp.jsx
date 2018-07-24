<nav className="navbar navbar-fixed-top">
          <div className="control_bar">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle pull-left"
                  data-toggle="collapse"
                  data-target="#Cat_bar"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>

                <a className="navbar-brand" href="">
                  LOGO
                </a>
                <button
                  id="User_toggle"
                  type="button"
                  className="navbar-toggle pull-right"
                  data-toggle="collapse"
                  data-target="#User"
                >
                  <div className="chip">
                    <img src="http://placehold.it/30x30" alt="Person" />
                    USER
                  </div>
                </button>
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
                  <li className="User_Status">
                    {/* <a href="">
                      <span className="glyphicon glyphicon-user" />
                    </a> */}
                    <a href="">
                      <span className="User_Icon" />
                    </a>
                  </li>

                  <li>
                    <a href="">
                      <Icon type="check-square-o" />
                    </a>
                  </li>

                  <li className="bell">
                    <a href="">
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
                </ul>
              </div>
            </div>
          </div>
          <div className="Cat_bar">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="Cat_bar">
                <ul className="nav navbar-nav">
                  <li className="active">
                    <a href="">CAT 1</a>
                  </li>

                  <li>
                    <a href="">CAT 2</a>
                  </li>
                  <li>
                    <a href="">CAT 3</a>
                  </li>
                  <li>
                    <a href="">CAT 4</a>
                  </li>
                  <li>
                    <a href="">CAT 5</a>
                  </li>
                  <li>
                    <a href="">CAT 6</a>
                  </li>
                  <li>
                    <a href="">CAT 7</a>
                  </li>
                  <li className="dropdown">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      CAT 8
                      <span className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">sub-cat 1</a>
                      </li>
                      <li>
                        <a href="#">sub-cat 2</a>
                      </li>
                      <li>
                        <a href="#">sub-cat 3</a>
                      </li>
                      <li>
                        <a href="#">sub-cat 4</a>
                      </li>
                      <li>
                        <a href="#">sub-cat 5</a>
                      </li>
                      <li>
                        <a href="#">sub-cat 6</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {/* <div className="nav_bar_wrapped" /> */}

        <div className="MainTitle">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4 col-xs-12">
                <div className="Count_Title">ALL (210)</div>
              </div>
              <div className="col-sm-8 hidden-xs text-center">
                <div className="CAT_Title">CAT 2-1</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-4 col-xs-12" id="LeftList">
          <form className="search-form">
            <div className="form-group has-feedback">
              <label htmlFor="search" className="sr-only" />
              <input
                type="text"
                className="form-control"
                name="search"
                id="search"
                placeholder="Search"
              />
              <span className="glyphicon glyphicon-search form-control-feedback" />
            </div>
          </form>

          <div className="list-group">
            <button className="list-group-item active">
              <h4 className="list-group-item-heading">TITLE 1</h4>

              <p className="list-group-item-text">TITLE 2</p>
              <p className="list-group-item-text">info</p>
              <p className="list-group-item-text">info</p>
              <div className="Status">
                <div className="row noPadding">
                  <div className="col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4">
                    <p className="list-group-item-text">Status 1</p>
                  </div>
                  <div className="col-xs-4 col-sm-4">
                    <p className="list-group-item-text">Status 2</p>
                  </div>
                </div>
              </div>
            </button>
            <button className="list-group-item">
              <h4 className="list-group-item-heading">TITLE 1</h4>

              <p className="list-group-item-text">TITLE 2</p>
              <p className="list-group-item-text">info</p>
              <p className="list-group-item-text">info</p>
              <div className="Status">
                <div className="row noPadding">
                  <div className="col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4">
                    <p className="list-group-item-text">Status 1</p>
                  </div>
                  <div className="col-xs-4 col-sm-4">
                    <p className="list-group-item-text">Status 2</p>
                  </div>
                </div>
              </div>
            </button>
            <button className="list-group-item">
              <h4 className="list-group-item-heading">TITLE 1</h4>

              <p className="list-group-item-text">TITLE 2</p>
              <p className="list-group-item-text">info</p>
              <p className="list-group-item-text">info</p>
              <div className="Status">
                <div className="row noPadding">
                  <div className="col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4">
                    <p className="list-group-item-text">Status 1</p>
                  </div>
                  <div className="col-xs-4 col-sm-4">
                    <p className="list-group-item-text">Status 2</p>
                  </div>
                </div>
              </div>
            </button>
            <button className="list-group-item">
              <h4 className="list-group-item-heading">TITLE 1</h4>

              <p className="list-group-item-text">TITLE 2</p>
              <p className="list-group-item-text">info</p>
              <p className="list-group-item-text">info</p>
              <div className="Status">
                <div className="row noPadding">
                  <div className="col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4">
                    <p className="list-group-item-text">Status 1</p>
                  </div>
                  <div className="col-xs-4 col-sm-4">
                    <p className="list-group-item-text">Status 2</p>
                  </div>
                </div>
              </div>
            </button>
            <button className="list-group-item">
              <h4 className="list-group-item-heading">TITLE 1</h4>

              <p className="list-group-item-text">TITLE 2</p>
              <p className="list-group-item-text">info</p>
              <p className="list-group-item-text">info</p>
              <div className="Status">
                <div className="row noPadding">
                  <div className="col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4">
                    <p className="list-group-item-text">Status 1</p>
                  </div>
                  <div className="col-xs-4 col-sm-4">
                    <p className="list-group-item-text">Status 2</p>
                  </div>
                </div>
              </div>
            </button>
            <button className="list-group-item">
              <h4 className="list-group-item-heading">TITLE 1</h4>

              <p className="list-group-item-text">TITLE 2</p>
              <p className="list-group-item-text">info</p>
              <p className="list-group-item-text">info</p>
              <div className="Status">
                <div className="row noPadding">
                  <div className="col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4">
                    <p className="list-group-item-text">Status 1</p>
                  </div>
                  <div className="col-xs-4 col-sm-4">
                    <p className="list-group-item-text">Status 2</p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* 右 */}

        <div className="col-sm-8 hidden-xs" id="RightList">
          <header className="details_header">
            <div className="container-fluid">
              <div className="img">
                <img src="http://placehold.it/100x100" />
              </div>

              <div className="TITLE_IMG_desc">
                <div className="title">TITLE</div>
                <div className="title">TITLE 2</div>
              </div>

              <div className="info">
                {/* <div className="row"> */}
                <div className="unit">$0.00 / UNIT</div>
                <div className="number_status">
                  <div className="one">
                    <span>xx number</span>
                    <span>Status 1</span>
                  </div>
                  <div className="two">
                    <span>xx number</span>
                    <span>Status 2</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="content">
            <div className="card-container">
              <Tabs type="card" defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Tab 1" key="1">
                  <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
                  />
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                  Content of Tab Pane 3
                </TabPane>
                <TabPane tab="Tab 4" key="4">
                  Content of Tab Pane 4
                </TabPane>
                <TabPane tab="Tab 5" key="5">
                  Content of Tab Pane 5
                </TabPane>
                <TabPane tab="Tab 6" key="6">
                  Content of Tab Pane 6
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>