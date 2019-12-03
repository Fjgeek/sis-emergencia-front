import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
/* components */
import ScrollTop from '../../common/scrolltop';
import RoombedList from './roombed-list';
// import PositionNew from './position-new';
import RoombedDetail from './roombed-detail';


class Roombed extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <ScrollTop>
          <Switch>
            <Route
              exact
              path={match.url}
              component={RoombedList}
            />
            {/* <Route 
                exact
                path={`${match.url}/nuevo`}
                component={ PositionNew }
              /> */}
            <Route
              path={`${match.url}/:id`}
              component={RoombedDetail}
            />
          </Switch>
        </ScrollTop>
      </div>
    )
  }
}

export default Roombed;