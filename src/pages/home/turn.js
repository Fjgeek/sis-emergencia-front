import React from 'react';
import PropTypes from 'prop-types';
import './turn.css';

/* Components */
import {
  Card,
  CardPrimaryAction,
  CardActions,
  CardActionButtons
} from '@rmwc/card';
import { Typography } from '@rmwc/typography'
import { Icon } from '@rmwc/icon'
import { Button } from '@rmwc/button'

/* Theme */
import { RequestTheme } from '../@style/RequestTheme'

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
            <Icon icon="fullscreen_exit" />
            :
            <Icon icon="fullscreen" />
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
              <CardPrimaryAction>
                <div
                  className="turn-bed"
                  style={{
                    background: `${RequestTheme[emergency.priority].color}`,
                    color: `${RequestTheme[emergency.priority].textColor}`,
                  }}
                >
                  {emergency.labelBed}<br />
                  <Typography use="headline5" style={{ opacity: 0.7 }}>{emergency.time_request}</Typography>
                </div>
              </CardPrimaryAction>
              <CardActions style={{ justifyContent: 'center' }}>
                <CardActionButtons>
                  <Typography use="headline6">{emergency.labelRoom}</Typography>
                </CardActionButtons>
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