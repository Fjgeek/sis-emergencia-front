import React, { Component } from 'react';
import './main.css';
/* Components */
import Menu from '../menu';
import TopNav from '../menu/top-nav';
/*
import MenuTop from '../menu/menu-top';
*/

class Main extends Component {
  render(){
    const { signOut } = this.props;
    return(
      <div>
        <nav>
          <TopNav 
            signOut = { signOut}
          />
        </nav>
        <div className="main-panel">
          {/* Menu Lateral */}
          <section className="Main-menu">
            <Menu/>
          </section>
          {/* Contenido de Navegación */}
          <section className="Main-container">
            { this.props.children }
          </section>
        </div>
      </div>
    )
  }
}
export default Main;