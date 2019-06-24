import React from 'react';
import './home-header.css';

const HomeHeader = (props)=>{
  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-10">
          <div className="jumbotron text-center">
            <h1>Llamados de Emergencia</h1> 
            <p>Las camas de color rojo necesitan atención INMEDIATA.</p> 
          </div>
        </div>
        <div className="col-2">
          <img src="/assets/images/CNS.png" className="img-responsive float-right jumbo-image" alt="Chania"/>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader;