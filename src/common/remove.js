import React from 'react';
import './remove.css';
import '../pages/@style/container.css';
import '../pages/@style/form.css';
/* Components */
import Button from '@material/react-button';

const Remove = (props)=>(
  <div className="Remove-container">
    <fieldset className="graduate-form--fieldset">
          <legend>
            Zona de Peligro
          </legend>
          <h6 className="graduate-form--helper">(*) Si usted esta seguro de Eliminar, es bajo su responsabilidad.</h6>
          <br/>
          <Button>
            Eliminar
          </Button>
    </fieldset>
  </div>
);

export default Remove;