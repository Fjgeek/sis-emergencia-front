import React, { Component } from 'react';
/* Components */
import Header from '../../common/header';
/* Data */
import NurseHttp from '../@data/nurse-http';
/* React Table Component */
import ReactTable from "react-table";
import "react-table/react-table.css";

class PersonList extends Component {
  constructor(props){
    super();
    this.state = {
      data: [],
      redirect: ''
    }
  }

  showDetail = (e, handleOriginal, rowInfo)=>{
    if(typeof(rowInfo)!=="undefined"){
      if( rowInfo.original.id_nurse !== null){
        this.props.history.push(''+this.props.match.url+'/'+rowInfo.original.person_id);
      }else{
        console.error('Existe un error en ShowDetail el objeto no existe');
      }
    }
  }
  addFilterPlaceholder = () => {
    const filters = document.querySelectorAll("div.rt-th > input");
    for (let filter of filters) {
      filter.placeholder = "Buscar..";
    }
  }
  componentDidMount() {
    this.addFilterPlaceholder();
    let self = this;
    NurseHttp.getAll(
      (data)=>{
        self.setState({
          data: data.result
        });
      },
      (error)=>{
      console.log(error);
      }
    );
  }
  render() {
    const { data } = this.state;
    return (
      <section>
        <Header
          title = "Enfermeras"
          match = { this.props.match }
          history = { this.props.history }
          actions={[
              {
                on: `${this.props.match.path}/nuevo`,
                title: 'Añadir'
              }
          ]}
          theme = {{
            background: "#3F51B5",
            color: "#fff"
          }}
        />
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>{
            return String(row[filter.id]).toLowerCase().indexOf(String(filter.value).toLowerCase()) !== -1;
          }}
          previousText = 'Anterior'
          nextText = 'Siguiente'
          loadingText = 'Cargando Datos'
          noDataText = 'No se encontraron datos'
          pageText = 'Página'
          ofText = 'de'
          rowsText = 'filas'

          getTdProps={(state, rowInfo, column, instance) => {
            let self = this;
            return {
              onClick: (e, handleOriginal) => {
                self.showDetail(e, handleOriginal, rowInfo);
              }
            };
          }}
          columns={[
            {
              Header: "Datos Básicos",
              columns: [
                {
                  Header: "Nombre",
                  accessor: "first_name"
                },
                {
                  Header: "Apellido",
                  accessor: "last_name"
                },
                {
                  Header: "Carnet de Identidad",
                  accessor: "ci"
                },
                {
                  Header: "Número de Celular",
                  accessor: "cellphone"
                }
              ]
            },
            {
              Header: "Sobre el Registro",
              columns: [
                {
                  Header: "Registrado",
                  accessor: "created"
                },
                {
                  Header: "Modificado",
                  accessor: "updated"
                },
                {
                  Header: "Estado",
                  id: "enabled",
                  accessor: d => d.enabled ? 'Habilitado': 'Desahabilitado'
                }
              ]
            }
          ]}
          defaultPageSize={20}
          className="-striped -highlight"
        />
      </section>
    )
  }
}

export default PersonList;