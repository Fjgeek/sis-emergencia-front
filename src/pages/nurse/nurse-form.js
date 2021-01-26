import React from 'react';
import PropTypes from 'prop-types';
import '../@style/container.css';
import '../@style/form.css';
/* Components */
import { TextField } from '@rmwc/textfield';
import NumberFormat from 'react-number-format';
import Remove from '../../common/remove';
import NurseRead from './nurse-read';

const NurseForm = (props) => {
  return (
    <div className="graduate-container">
      <div className="graduate-form">
        <fieldset className="graduate-form--fieldset">
          <legend>
            Datos Básicos
          </legend>

          <aside className="graduate-form--control">
            <TextField
              required
              type="text"
              label="Nombre"
              helpText="Escriba nombre/s"
              value={props.first_name}
              onChange={(e) => props.changeState({ first_name: e.currentTarget.value })}
              pattern="^[a-zA-Zñüáéíóú ]{1,100}$"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => props.changeState({ first_name: '' })
              }}
            />
          </aside>

          <aside className="graduate-form--control">
            <TextField
              required
              type="text"
              label="Apellido"
              helpText="Escriba apellido/s"
              value={props.last_name}
              onChange={(e) => props.changeState({ last_name: e.currentTarget.value })}
              pattern="^[a-zA-Zñüáéíóú ]{1,100}$"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => props.changeState({ last_name: '' })
              }}
            />
          </aside>

          <div className="graduate-separate" />

          <aside className="graduate-form--control">
            <TextField
              required
              type="number"
              label="Carnet de Identidad"
              helpText="Escriba número de CI"
              value={props.ci}
              onChange={(e) => props.changeState({ ci: e.currentTarget.value })}
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => props.changeState({ ci: '' })
              }}
            />
          </aside>
        </fieldset>

        <fieldset className="graduate-form--fieldset">
          <legend>
            Contactos
          </legend>

          <aside className="graduate-form--control">
            <NumberFormat
              customInput={TextField}
              type="text"
              placeholder="Ingrese número"
              value={props.cellphone}
              format="### #####"
              mask="_ "
              onValueChange={(e) => {
                props.changeState({ cellphone: e.value })
              }}
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => props.changeState({ cellphone: '' })
              }}
            />
          </aside>

        </fieldset>

        {
          props.editForm ?
            <Remove
              text="(*) Si usted esta seguro que quiere deshabilitar al usuario, es bajo su responsabilidad."
              label="DESHABILITAR"
              handleEvent={props.disabledAccount}

            />
            :
            <NurseRead
              rfid={props.rfid}
              {...props.readInfo}
              changeState={props.changeState}
              startRead={props.startRead}
              cancelRead={props.cancelRead}
            />
        }

      </div>
    </div>
  )
}

NurseForm.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  ci: PropTypes.string,
  cellphone: PropTypes.string,
  rfid: PropTypes.string,
  editForm: PropTypes.bool,
  changeState: PropTypes.func,
  disabledAccount: PropTypes.func
}

NurseForm.defaultProps = {
  first_name: '',
  last_name: '',
  ci: '',
  cellphone: '',
  rfid: '',
  editForm: false,
  changeState: () => { },
  disabledAccount: () => { }
}

export default NurseForm;