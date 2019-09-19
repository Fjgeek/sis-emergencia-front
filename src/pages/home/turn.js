import React from 'react';
import PropTypes from 'prop-types';
import './turn.css';

/* Components */
import Card, {
  CardPrimaryContent,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from '@material/react-card';
import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';

const Turn = ({
  showFull,
  fullscreen,
  data
}) => {
  return (
    <div className="turn-container">
      <Button
        raised
        className="turn-btn"
        onClick={showFull}
        icon={
          fullscreen ?
            <MaterialIcon icon="fullscreen_exit"></MaterialIcon>
            :
            <MaterialIcon icon="fullscreen"></MaterialIcon>
        }
      >
        {
          fullscreen ? 'Normal' : 'Pantalla Completa'
        }
      </Button>

      {
        data.map((emergency) => {
          return (
            <Card
              className="turn-card"
              key={emergency.id_emergency}
            >
              <CardPrimaryContent>
                <div className="turn-bed">
                  {emergency.labelBed}
                </div>
              </CardPrimaryContent>

              <CardActions>
                <CardActionButtons>
                  <h4>{emergency.labelRoom}</h4>
                </CardActionButtons>

                <CardActionIcons>
                  <MaterialIcon icon="access_time" /><i>{emergency.time_request}</i>
                </CardActionIcons>
              </CardActions>
            </Card>
          )
        })
      }
    </div>
  )
}

Turn.propTypes = {
  showFull: PropTypes.func.isRequired,
  fullscreen: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({}))
}

Turn.defaultProps = {
  data: [],
}

export default Turn;