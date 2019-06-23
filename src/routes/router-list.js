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
  loader: ()=> import('../pages/home'),
  loading: Loading
});

const RoomBed = Loadable({
  loader: ()=> import('../pages/roombed'),
  loading: Loading
});

const Nurse = Loadable({
  loader: ()=> import('../pages/nurse'),
  loading: Loading
});



const RouterList = (props)=>{
  return(
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/salas" component={ RoomBed }/>
      <Route exact path="/enfermeras" component={ Nurse }/>
      <Route component={NoMatch} />
    </Switch>        
  )
}


export default RouterList;