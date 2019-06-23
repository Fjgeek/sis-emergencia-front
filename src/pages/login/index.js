import React, { Component } from 'react';
import './login.css';

/* Components */
import Button from '@material/react-button';
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

class Login extends Component {
  constructor(props){
    super();
    this.state = {
      user: '',
      password: ''
    };
  }

  render(){
    let {
      signIn
    } = this.props;
    return(
      <div className="login-container">
        <form className="login-form" onSubmit={ signIn }>
          <div className="login-form-title">
            <h3>
              Programa de Graduación
              <small>de Antiguos Egresados</small>
            </h3>
          </div>
          <div className="login-form-logo">
            <MaterialIcon role="button" icon="lock"/>
          </div>
          <TextField
            label='Usuario'
            helperText={<HelperText>Help Me!</HelperText>}
            onTrailingIconSelect={() => this.setState({user: ''})}
            trailingIcon={<MaterialIcon role="button" icon="close "/>}
          ><Input
            id="user"
            value={this.state.user}
            onChange={(e) => this.setState({user: e.currentTarget.value})} />
          </TextField>

          <TextField
            label='Contraseña'
            helperText={<HelperText>Help Me!</HelperText>}
            onTrailingIconSelect={() => this.setState({password: ''})}
            trailingIcon={<MaterialIcon role="button" icon="close"/>}
          ><Input
            id="password"
            type = 'password'
            value={this.state.password}
            onChange={(e) => this.setState({password: e.currentTarget.value})} />
          </TextField>
          <Button
            raised
          >
            Ingresar
          </Button>
        </form>
      </div>
    )
  }
}
export default Login;