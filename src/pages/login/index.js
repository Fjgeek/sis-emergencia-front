import React from 'react';
import styled from 'styled-components'
import './login.css';

/* Components */
import { Button } from '@rmwc/button';
import { TextField } from '@rmwc/textfield';
import { Icon } from '@rmwc/icon';
import Alert from '../../common/alert';

const FormControl = styled.div`
  padding: 5px;
`

const Login = (props) => {
  let {
    signIn,
    changeState,
    hideAlert,
    data
  } = props;
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={signIn}>
        <div className="login-form-title">
          <h3>
            Sistema de Emergencias
              <small>Caja Nacional de Salud</small>
          </h3>
        </div>
        <div className="login-form-logo">
          <Icon role="button" icon="lock" />
        </div>
        <FormControl>
          <TextField
            required
            label='Usuario'
            value={data.user}
            trailingIcon={{
              icon: 'close',
              tabIndex: 1,
              onClick: () => changeState({ user: '' })
            }}
            onChange={(e) => changeState({ user: e.currentTarget.value })}
          />
        </FormControl>
        <FormControl>
          <TextField
            required
            type="password"
            label='Contraseña'
            value={data.password}
            trailingIcon={{
              icon: 'close',
              tabIndex: 1,
              onClick: () => changeState({ password: '' })
            }}
            onChange={(e) => changeState({ password: e.currentTarget.value })}
          />
        </FormControl>
        <Button
          raised
          className="login-form-btn"
        >
          Ingresar
          </Button>
      </form>
      {
        data.alert.visible ?
          <Alert
            max
            message={data.alert.message}
            theme={data.alert.theme}
            hideAlert={hideAlert}
          />
          :
          <span />
      }
    </div>
  )
}
export default Login;