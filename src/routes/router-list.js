import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Loadable from 'react-loadable';

/*loading*/
import Loading from '../common/loading';
import NoMatch from '../common/notmatch';

const Home = Loadable({
  loader: () => import('../pages/Home'),
  loading: Loading
});

const Nurse = Loadable({
  loader: () => import('../pages/Nurse'),
  loading: Loading
});

const Roombed = Loadable({
  loader: () => import('../pages/Roombed'),
  loading: Loading
})
const Demand = Loadable({
  loader: () => import('../pages/Demand'),
  loading: Loading
});

const RouterList = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/enfermeras" component={Nurse} />
      <Route path="/recepcion" component={Roombed} />
      <Route path="/historial" component={Demand} />
      <Route component={NoMatch} />
    </Switch>
  )
}


export default RouterList;