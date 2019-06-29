import React from 'react';
import PropTypes from 'prop-types';
import './alert.css';
/* Components */
import MaterialIcon from '@material/react-material-icon';

const Alert = (props) => {
  return (
    <div className="alert-container">
      <div className={`alert-form alert-${props.theme} animated pulse`}>
        { props.message }
        <span className="alert-close" onClick={ props.hideAlert }>
          <MaterialIcon icon="close"/>
        </span>
      </div>
    </div>
  )
}

Alert.propTypes = {
  message: PropTypes.string,
  theme: PropTypes.string,
  hideAlert: PropTypes.func
}
Alert.defaultProps = {
  message: 'default',
  theme: '',
  hideAlert: ()=>{}
}

export default Alert;