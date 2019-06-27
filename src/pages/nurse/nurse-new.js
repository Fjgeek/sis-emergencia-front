import React, { Component } from 'react';

/* Components */
import { Redirect } from 'react-router-dom';
import Header from '../../common/header';
import NurseForm from './nurse-form';
import Action from '../../common/action';
import Loading from '../../common/loading';

/* Interface */
import { NurseSchema } from './nurse-schema';

/* Data */
import NurseHttp from '../@data/nurse-http';
import { getUrl } from '../@data/get-url';

class NurseNew extends Component {
  constructor(props){
    super();
    this.state = {
      data: Object.assign({},NurseSchema),
      load: false,
      completed: false,
      urlCompleted: '/'
    }
  }
  handleSend = (e)=>{
    e.preventDefault();
    this.setState({
      load: true
    });
    let self = this;
    console.log(this.state.data);
    // NurseHttp.add(this.state.data,
    //   (data)=>{
    //     self.completeSend(data.result);
    //   },
    //   (error)=>{
    //     self.completeError(error.result);
    //   });
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
  componentDidMount(){
    let url = getUrl.back(this.props.history.location.pathname);
    this.setState({
      urlCompleted: url.path
    });
  }
  render() {
    return (
      <div>
        <Header
          title = "Añadir Enfermera"
          match = { this.props.match }
          history = { this.props.history }
          theme = {{
            background: "#116d11",
            color:"#fff"

          }}
        />
        {
          this.state.load ?
          <Loading title="Guardando Datos..." />
          :
          <form onSubmit={ this.handleSend }>
            <NurseForm
              changeState = { this.changeState }
              { ...this.state.data }
            />
            <Action
              match = { this.props.match }
            />
          </form>
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

export default NurseNew;