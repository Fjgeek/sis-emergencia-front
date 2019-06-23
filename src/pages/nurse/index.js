import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
/* components */
import ScrollTop from '../../common/scrolltop';
import NurseList from './nurse-list';
import PersonNew from './nurse-new';
import PersonDetail from './nurse-detail';


class Person extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <ScrollTop>
          <Switch>
              <Route
                exact
                path={match.url}
                component={ NurseList }
              />
              {/* <Route 
                exact
                path={`${match.url}/nuevo`}
                component={ PersonNew }
              />
              <Route
                path={`${match.url}/:id`}
                component ={ PersonDetail }
              /> */}
            </Switch>
        </ScrollTop>
      </div>
    )
  }
}

export default Person;