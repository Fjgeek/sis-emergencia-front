import React from 'react';
import '../pages/@style/form.css';
import {
  NavLink
} from 'react-router-dom';

import Button from '@material/react-button';

/* Data */
import { getUrl } from '../pages/@data/get-url';

const Action = (props)=>{
  let urls = getUrl.parts(props.match.url);
  let urlCompleted = urls[urls.length-2];

  return (
    <div className="graduate-form--action">
      <NavLink to={ urlCompleted.path }>
        <Button type="button">
          Cancelar
        </Button>
      </NavLink>      
      <Button
        type = 'submit'
        raised
      >
        Guardar
      </Button>
    </div>
  );
}


export default Action;