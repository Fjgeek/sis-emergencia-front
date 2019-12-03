import React from 'react'
import './top-nav.css'
/* Components */
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust,
} from '@rmwc/top-app-bar'

import {
  NavLink,
  withRouter,
} from 'react-router-dom'

import {
  SimpleMenu,
  MenuItem,
} from '@rmwc/menu'

import { IconButton } from '@rmwc/icon-button'

const TopNav = ({
  match,
  signOut,
  handleToggle
}) => {
  return (
    <div className="TopNav">

      <TopAppBar fixed style={{ background: '#008000' }}>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <IconButton
              icon="menu"
              style={{ background: '#008000', outline: 'none' }}
              onClick={handleToggle}
            />
            <TopAppBarTitle>
              <aside className="TopNav-user">
                Sistema de Emergencias
                <small>Admin</small>
              </aside>
            </TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            <SimpleMenu handle={<IconButton icon="person_pin" />}
              anchorCorner='topStart'
            >
              <MenuItem onClick={signOut}>
                <NavLink exact={true} to={`${match.url}/perfil`} className="TopNav-link" onClick={signOut}>
                  Perfil
                </NavLink>
              </MenuItem>
              <MenuItem>
                <div className="TopNav-link" onClick={signOut}>Salir</div>
              </MenuItem>
            </SimpleMenu>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </div>
  )
}
export default withRouter(TopNav)