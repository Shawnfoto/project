// modules
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
// component
import reducers from "reducers";

import App from "components/App";

// ReactDOM.render(
//   <Root>
//     <BrowserRouter>
//       <Route path="/" component={App} />
//     </BrowserRouter>
//   </Root>,
//   document.querySelector('#root')
// );
const store = createStore(reducers, {}, applyMiddleware(reduxPromise));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          {/* <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} /> */}
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
