import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
/* components */
import ScrollTop from '../../common/scrolltop';
import NurseList from './nurse-list';
import NurseNew from './nurse-new';
import NurseDetail from './nurse-detail';


class Nurse extends Component {
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
              <Route 
                exact
                path={`${match.url}/nuevo`}
                component={ NurseNew }
              />
              <Route
                path={`${match.url}/:id`}
                component ={ NurseDetail }
              />
            </Switch>
        </ScrollTop>
      </div>
    )
  }
}

export default Nurse;