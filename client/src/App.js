import React, { Component, Fragment } from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

import LabelHome from './label/LabelHome';
import LabelingLoader from './label/LabelingLoader';
import OverScreen from './label/OverScreen';
import AdminApp from './admin/AdminApp';
import Help from './help/Help';

class App extends Component {
  render() {
    if (process.env.REACT_APP_DEMO) {
      return (
        <Router basename="/demo">
          <Fragment>
            <Redirect exact from="/" to="/label/demo/1" />
            <Route
              exact
              path="/label/:projectId/:imageId"
              render={props =>
                props.match.params.imageId === 'over' ? (
                  <OverScreen {...props} />
                ) : (
                  <LabelingLoader {...props} />
                )
              }
            />
          </Fragment>
        </Router>
      );
    }

    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={LabelHome} />
          <Route path="/admin" component={AdminApp} />
          <Route path="/help" component={Help} />
          <Route exact path="/label/:projectId" component={LabelingLoader} />
          <Route
            exact
            path="/label/:projectId/:imageId"
            render={props =>
              props.match.params.imageId === 'over' ? (
                <OverScreen {...props} />
              ) : (
                <LabelingLoader {...props} />
              )
            }
          />
        </Fragment>
      </Router>
    );
  }
}

export default App;
