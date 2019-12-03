import React from 'react';
import PropTypes from 'prop-types';

/* Components */
import {
  NavLink
} from 'react-router-dom';
import { TextField } from '@rmwc/textfield'
import { Button } from '@rmwc/button';

const NurseRead = (props) => {
  return (
    <fieldset className="graduate-form--fieldset">
      <legend>
        Tarjeta RFID
      </legend>

      <aside className="graduate-form--control">
        <span
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'rgb(234, 119, 129)',
            display: 'block',
            paddingBottom: 15

          }}
        >
          {
            props.message !== "" ?
              <div>
                {`${props.message} `}
                <NavLink to={props.linkRef}>
                  Ver Usuario
              </NavLink>
              </div>
              :
              ``
          }
        </span>
        <TextField
          required
          label="Código RFID"
          helpText={{
            persistent: true,
            validationMsg: true,
            children: props.load ?
              `Esperando lectura ${props.seconds} seg`
              :
              '(*)Presione LEER RFID y coloque su tarjeta en el lector'
          }}
          className={`${props.load ? 'graduate-label--load' : ''}`}
          value={props.rfid}
          onKeyDown={(e) => { e.preventDefault() }}
          onChange={(e) => props.changeState({ rfid: e.currentTarget.value })}
          trailingIcon={{
            icon: 'close',
            tabIndex: 1,
            onClick: () => props.changeState({ rfid: '' })
          }}
        />
        <Button
          raised
          onClick={props.load ? props.cancelRead : props.startRead}
          type="button"
          icon="credit_card"
          className={`graduate-form--input ${props.load ? 'graduate-btn--cancel' : 'graduate-btn--read'}`}
        >
          {
            props.load ?
              'CANCELAR'
              :
              'LEER RFID'
          }
        </Button>
      </aside>

    </fieldset>
  )
}

NurseRead.propTypes = {
  message: PropTypes.string,
  linkRef: PropTypes.string,
  seconds: PropTypes.number,
  load: PropTypes.bool,
  rfid: PropTypes.string,
  changeState: PropTypes.func,
  startRead: PropTypes.func,
  cancelRead: PropTypes.func
}

NurseRead.defaultProps = {
  message: '',
  linkRef: '',
  seconds: 10,
  load: false,
  rfid: '',
  changeState: () => { },
  startRead: () => { },
  cancelRead: () => { }
}

export default NurseRead;