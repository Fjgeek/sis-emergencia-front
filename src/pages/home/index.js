import React, { Component } from 'react';

/* Components*/
import HomeHeader from './home-header';

/* Data */
import RoomBedHttp from '../@data/roombed-http';
class Home extends Component {
  constructor(props){
    super();
    this.state = {
      rooms: []
    }
  }
  componentDidMount(){
    let self = this;
    RoomBedHttp.getAll(
      (data)=>{
        console.log(data.result);
        self.setState({
          rooms: data.result
        })
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  render() {
    return (
      <div>
        <HomeHeader />
        {
          this.state.rooms.map( (room)=>(
            <div key={ `room-${ room.id_room }` }>
              <h3>
                { room.room_label }
              </h3>

              {
                room.beds.map( (bed, index)=>(
                  <div key={ `bed-${ bed.id_bed + index }` }>
                    { bed.bed_label }
                  </div>
                ))
              }
            </div>
          ))
        }

      </div>
    )
  }
}

export default Home;