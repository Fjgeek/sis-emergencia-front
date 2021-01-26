import React from 'react'
import {
  NavLink
} from 'react-router-dom'
import './navigation.css'
import {
  withRouter
} from 'react-router'

const Navigation = ({
  movil,
  handleToggle,
  match,
}) => {
  return (
    <div className="Nav-container">
      <ul className="Nav-menu-list">
        <li>
          <NavLink to={match.url} exact={true} activeClassName="active-menu" onClick={() => movil ? handleToggle() : true}>
            Emergencias
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}enfermeras`} exact={true} activeClassName="active-menu" onClick={() => movil ? handleToggle() : true}>
            Enfermeras
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}recepcion`} exact={true} activeClassName="active-menu" onClick={() => movil ? handleToggle() : true}>
            Recepción
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}historial`} exact={true} activeClassName="active-menu" onClick={() => movil ? handleToggle() : true}>
            Historial
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Navigation)