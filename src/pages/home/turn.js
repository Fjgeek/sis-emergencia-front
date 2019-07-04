import React from 'react';
import './turn.css';

/* Components */
import Card,{
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from '@material/react-card';
import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';

const Turn = (props)=>{
  return(
    <div className="turn-container">
      <Button
        raised
        className = "turn-btn"
        onClick={ props.showFull }
        icon={
          props.fullscreen?
          <MaterialIcon icon="fullscreen_exit"></MaterialIcon>
          :
          <MaterialIcon icon="fullscreen"></MaterialIcon>
        }
      >
        {
          props.fullscreen?'Normal':'Pantalla Completa'
        }
      </Button>

      {
        props.data.map( (emergency)=>{
          return(
            <Card 
              className="turn-card"
              key = { emergency.id_emergency }
            >
                <CardPrimaryContent>
                  <div className="turn-bed">
                    { emergency.labelBed }
                  </div>
                </CardPrimaryContent>
        
                <CardActions>
                  <CardActionButtons>
                    <h4>{ emergency.labelRoom }</h4>
                  </CardActionButtons>
        
                  <CardActionIcons>
                    <MaterialIcon icon="access_time"/><i>{ emergency.time_request }</i>
                  </CardActionIcons>
                </CardActions>
              </Card>
          )
        } )
      }
    </div>
  )
}

export default Turn;