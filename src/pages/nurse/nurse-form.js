import React from 'react';
import PropTypes from 'prop-types';
import '../@style/container.css';
import '../@style/form.css';
/* Components */
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Switch from '@material/react-switch';
import Remove from '../../common/remove';

const PersonForm = (props)=>{
  return (
    <div className="graduate-container">
      <div className="graduate-form">
        <fieldset className="graduate-form--fieldset">
          <legend>
            Datos Básicos
          </legend>

          <aside className="graduate-form--control">
            <TextField
              label='Nombre'
              helperText={<HelperText>Help Me!</HelperText>}
              onTrailingIconSelect={ () => props.changeState({first_name: ''})}
              trailingIcon={<MaterialIcon role="button" icon="close "/>}
              className='graduate-form--input'
            ><Input
              required
              id="first_name"
              value={props.first_name}
              onChange={(e) => props.changeState({first_name: e.currentTarget.value})} />
            </TextField>
          </aside>

          <aside className="graduate-form--control">  
            <TextField
              label='Apellido'
              helperText={<HelperText>Help Me!</HelperText>}
              onTrailingIconSelect={() => props.changeState({last_name: ''})}
              trailingIcon={<MaterialIcon role="button" icon="close "/>}
              className='graduate-form--input'
            ><Input
              required
              id="last_name"
              value={props.last_name}
              onChange={(e) => props.changeState({last_name: e.currentTarget.value})} />
            </TextField>
          </aside>

          <div className="graduate-separate"/>

          <aside className="graduate-form--control">
            <TextField
              label='Carnet de Identidad'
              helperText={<HelperText>Help Me!</HelperText>}
              onTrailingIconSelect={() => props.changeState({ci: ''})}
              trailingIcon={<MaterialIcon role="button" icon="close "/>}
              className='graduate-form--input'
            ><Input
              required
              id="ci"
              value={props.ci}
              type="number"
              onChange={(e) => props.changeState({ci: e.currentTarget.value})} />
            </TextField>
          </aside>
        </fieldset>

        <fieldset className="graduate-form--fieldset">
          <legend>
            Contactos
          </legend>

          <aside className="graduate-form--control">  
            <TextField
              label='Número de Celular'
              helperText={<HelperText>Help Me!</HelperText>}
              onTrailingIconSelect={() => props.changeState({cellphone: ''})}
              trailingIcon={<MaterialIcon role="button" icon="close "/>}
              className='graduate-form--input'
            ><Input
              required
              id="cellphone"
              value={props.cellphone}
              onChange={(e) => props.changeState({cellphone: e.currentTarget.value})} />
            </TextField>
          </aside>

          <aside className="graduate-form--control">
            <TextField
              label='Número de Telefono'
              helperText={<HelperText>Help Me!</HelperText>}
              onTrailingIconSelect={() => props.changeState({telephone: ''})}
              trailingIcon={<MaterialIcon role="button" icon="close "/>}
              className='graduate-form--input'
            ><Input
              required
              id="telephone"
              value={props.telephone}
              onChange={(e) => props.changeState({telephone: e.currentTarget.value})} />
            </TextField>
          </aside>

          <div className="graduate-separate"/>

          <aside className="graduate-form--control">
            <TextField
              label='Correo Electrónico'
              helperText={<HelperText>Help Me!</HelperText>}
              onTrailingIconSelect={() => props.changeState({email: ''})}
              trailingIcon={<MaterialIcon role="button" icon="close "/>}
              className='graduate-form--input'
            ><Input
              required
              id="email"
              value={props.email}
              type="email"
              onChange={(e) => props.changeState({email: e.currentTarget.value})} />
            </TextField>
          </aside>


        </fieldset>

        <fieldset className="graduate-form--fieldset">
          <legend>
            Residencia
          </legend>

          <aside className="graduate-form--control">
          
            <TextField
              label='Ciudad'
              helperText={<HelperText>Help Me!</HelperText>}
              onTrailingIconSelect={() => props.changeState({city: ''})}
              trailingIcon={<MaterialIcon role="button" icon="close "/>}
              className='graduate-form--input'
            ><Input
              required
              id="city"
              value={props.city}
              onChange={(e) => props.changeState({city: e.currentTarget.value})} />
            </TextField>
          </aside>

          <div className="graduate-separate"/>

          <aside className="graduate-form--control">
            
            <TextField
              label='Dirección'
              helperText={<HelperText>Help Me!</HelperText>}
              onTrailingIconSelect={() => props.changeState({address: ''})}
              trailingIcon={<MaterialIcon role="button" icon="close "/>}
              className='graduate-form--input'
            ><Input
              required
              id="address"
              value={props.address}
              onChange={(e) => props.changeState({address: e.currentTarget.value})} />
            </TextField>
          </aside>

        </fieldset>

        <fieldset className="graduate-form--fieldset">
          <legend>Seguridad</legend>
          {
            props.editForm ?
            <div>
              <div className="graduate-form--switch">
                <Switch
                  nativeControlId='changePass'
                  checked={props.changePass}
                  onChange={(e) => props.togglePass({changePass: e.target.checked})} />
                <label htmlFor='changePass'>Cambiar Contraseña</label>
              </div>
              {
                props.changePass ?
                <div>
                  <h6 className="graduate-form--helper">(*) Por favor Ingrese Actual contraseña y despues la nueva.</h6>
                  <aside className="graduate-form--control">  
                    <TextField
                      label='Contraseña Actual'
                      helperText={<HelperText>Help Me!</HelperText>}
                      onTrailingIconSelect={() => props.changeState({passNow: ''})}
                      trailingIcon={<MaterialIcon role="button" icon="close "/>}
                      className='graduate-form--input'
                    ><Input
                      required
                      id="passNow"
                      type = 'password'
                      value={props.passNow}
                      onChange={(e) => props.changeState({passNow: e.currentTarget.value})} />
                    </TextField>
                  </aside>
                  <aside className="graduate-form--control">  
                    <TextField
                      label='Contraseña Nueva'
                      helperText={<HelperText>Help Me!</HelperText>}
                      onTrailingIconSelect={() => props.changeState({passNew: ''})}
                      trailingIcon={<MaterialIcon role="button" icon="close "/>}
                      className='graduate-form--input'
                    ><Input
                      required
                      id="passNew"
                      type = 'password'
                      value={props.passNew}
                      onChange={(e) => props.changeState({passNew: e.currentTarget.value})} />
                    </TextField>
                  </aside>
                </div>
                :
                <div>
                  <h6 className="graduate-form--helper">Su contraseña, solo se moficara con permiso del usuario.</h6>
                </div>
              }
            </div>
            :
            <aside className="graduate-form--control">  
              <TextField
                label='Password'
                helperText={<HelperText>Help Me!</HelperText>}
                onTrailingIconSelect={() => props.changeState({pass: ''})}
                trailingIcon={<MaterialIcon role="button" icon="close "/>}
                className='graduate-form--input'
              ><Input
                required
                id="pass"
                type = 'password'
                value={props.pass}
                onChange={(e) => props.changeState({pass: e.currentTarget.value})} />
              </TextField>
            </aside>
          }

        </fieldset>

        {
          props.editForm?
          <Remove />
          :
          <span/>
        }

      </div>
    </div>
  )
}

PersonForm.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  ci: PropTypes.string,
  email: PropTypes.string,
  cellphone: PropTypes.string,
  telephone: PropTypes.string,
  city: PropTypes.string,
  address: PropTypes.string,
  password: PropTypes.string,
  newForm: PropTypes.bool,
  passChange: PropTypes.bool,
  togglePass: PropTypes.func
}

PersonForm.defaultProps = {
  first_name: '',
  last_name: '',
  ci: '',
  email: '',
  cellphone: '',
  telephone: '',
  city: '',
  address: '',
  password: '',
  editForm: false,
  passChange: false,
  togglePass: ()=>{}
}

export default PersonForm;