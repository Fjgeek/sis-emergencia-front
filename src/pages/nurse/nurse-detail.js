import React, { Component } from 'react';
/* Components */
import { Redirect } from 'react-router-dom';
import Header from '../../common/header';
import Loading from '../../common/loading';
import NurseForm from './nurse-form';
import Action from '../../common/action';

/* Interface */
import { NurseSchema } from './nurse-schema';

/* Data */
import NurseHttp from '../@data/nurse-http';
import { getUrl } from '../@data/get-url';

class PersonDetail extends Component {
  constructor(props){
    super();
    this.state = {
      data: Object.assign({},NurseSchema),
      changePass: false,
      load: true,
      loadText: 'Cargando Información',
      completed: false,
      urlCompleted: '/'
    }
  }
  componentDidMount(){
    const id = this.props.match.params.id;
    let url = getUrl.back(this.props.history.location.pathname);
    let self = this;
    NurseHttp.getId(
      id,
      (data)=>{
        self.setState({
          urlCompleted: url.path,
          load: false,
          data: {
            passNow:'',
            passNew: '',
            ...data.result
          }
        });
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  handleSend = (e)=>{
    e.preventDefault();
    let data = this.state.data;
    this.setState({
      load: true,
      loadText: 'Guardando'
    });
    if(this.state.changePass){
      if(data.passwords === data.passNow ){
        data.pass = data.passNew;
        this.sendUpdate(data);
      }else{
        alert('Contraseña anterior no coincide, acceso Denegado');
      }
    }else{
      data.pass = data.passwords;
      this.sendUpdate(data);
    }
  }
  sendUpdate = (data)=>{
    let self = this;
    NurseHttp.update(data,
      (data)=>{
        self.completeSend(data);
      },
      (error)=>{
        self.completeError(error);
      })
  }

  completeSend = (result)=>{
    //console.log(result);
    this.setState({
      completed: true
    })
  }
  completeError = ()=>{
    this.setState({
      load: false
    })
  }

  changeState = (keyObject)=>{
    let name = Object.keys(keyObject)[0];
    let data = this.state.data;
    data[name] = keyObject[name]; 
    this.setState({
      data: data
    })
  }
  togglePass = ({ changePass })=>{
    this.setState({
      changePass
    },()=>{
      console.log('actual', this.state);
    })
  }
  render() {
    return (
      <div>
        <Header
          title = "Detalle Enfermera"
          match = { this.props.match }
          theme = {{
            background: "#008000",
            color:"#fff"

          }}
        />

        {
          !this.state.load ?
          <form onSubmit={ this.handleSend }>
            <NurseForm
              editForm
              changeState = { this.changeState }
              changePass = { this.state.changePass }
              togglePass = { this.togglePass }
              { ...this.state.data }
            />
            <Action
              match = { this.props.match }
            />
          </form>
          :
          <Loading title={ this.state.loadText }/>
        }

        {
          this.state.completed?
          <Redirect to={ this.state.urlCompleted } />
          :
          <span/>
        }
      </div>
    )
  }
}

export default PersonDetail;