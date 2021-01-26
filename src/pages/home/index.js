import React, { Component } from 'react'
import './home.css'
import '@material/elevation/dist/mdc.elevation.css'

/* Components*/
import HomeHeader from './home-header'
import { Elevation } from '@rmwc/elevation'
import Clock from 'react-live-clock'
import Turn from './turn'
/* Data */
import EmergencyHttp from '../@data/emergency-http'

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      fullscreen: false,
      request: true,
    }
  }
  componentDidMount() {
    EmergencyHttp.activeRead();
    this.initRealTime();
    this.interval = setInterval(() => this.initRealTime(), 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    EmergencyHttp.cancelRead();
    this.setState({
      request: false
    });
  }
  initRealTime = () => {
    let self = this;
    if (this.state.request) {
      EmergencyHttp.emergencyNow(
        (data) => {
          if (data.result) {
            self.updateData(data.result);
          } else {
            self.updateData([]);
          }
        },
        (error) => {
          console.log(error);
        });
    }
  }
  updateData = (data) => {
    this.setState({
      data
    })
  }

  showFull = () => {
    if (document.fullscreenEnabled) {
      if (this.state.fullscreen) {
        if (window.document.fullscreenElement != null) {
          window.document.exitFullscreen();
        }
        this.setState({
          fullscreen: false
        })
      } else {
        window.document.body.requestFullscreen();
        this.setState({
          fullscreen: true
        })
      }
    } else {
      alert('su dispositivo no soporta pantalla completa')
    }
  }
  render() {
    return (
      <div className={`home-container ${this.state.fullscreen ? 'home-full-screen' : ''}`}>
        <HomeHeader />
        <Elevation z={16} className="home-clock">
          <Clock format="HH:mm:ss" ticking={true} interval={1000} />
        </Elevation>
        <Turn
          showFull={this.showFull}
          fullscreen={this.state.fullscreen}
          data={this.state.data}
        />
      </div>
    )
  }
}

export default Home;