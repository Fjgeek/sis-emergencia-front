import React, { Component } from 'react';
import './top-nav.css';
/* Components */
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';
import {
  NavLink
} from 'react-router-dom';

import MaterialIcon from '@material/react-material-icon';
import List, {ListItem, ListItemGraphic, ListItemText } from '@material/react-list';

class TopNav extends Component {
  constructor(props){
    super();
    this.state={
      open: false
    }
  }
  toggle = ()=>{
    this.setState( (prev) =>({
        open: !prev.open
      })
    )
  }
  render() {
    const { signOut } = this.props;
    return (
      <div className="TopNav">
        <TopAppBar
          fixed
          style={{
            backgroundColor: '#3f51b5'
          }}
        >
          <TopAppBarRow>
            <TopAppBarSection align='start'>
              <TopAppBarIcon navIcon tabIndex={0}>
                <MaterialIcon hasRipple icon='menu' onClick={() => console.log('click')}/>
              </TopAppBarIcon>
              <TopAppBarTitle>
                <aside className="TopNav-user">
                  Sistema de Emergencias
                  <small>Administrador</small>
                </aside>
              </TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection align='end' role='toolbar'>
              <TopAppBarIcon actionItem tabIndex={0} onClick={() => this.toggle() }>
                <div>
                  <MaterialIcon 
                    aria-label="Menu Usuario" 
                    hasRipple 
                    icon='person_pin'
                  />
                </div>

              </TopAppBarIcon>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <div className={`TopNav-modal ${this.state.open?'':'hide'}`} onClick={ this.toggle }>
          <List>
            <ListItem>
              <NavLink to="/perfil" className="TopNav-link">
                <ListItemGraphic graphic={<MaterialIcon icon='account_circle'/>} />
                <ListItemText primaryText='Perfil' />
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/" className="TopNav-link" onClick={ signOut }>
                <ListItemGraphic graphic={<MaterialIcon icon='exit_to_app'/>} />
                <ListItemText primaryText='Salir' />
              </NavLink>
            </ListItem>
          </List>
        </div>
      </div>
    )
  }
}

export default TopNav;