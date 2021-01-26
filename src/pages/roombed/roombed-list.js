import React, { Component } from 'react';
/* Components */
import Header from '../../common/header';
import { GridList } from '../../common/grid-list'
import RoombedCard from './components/roombed-card'
import { NavLink } from 'react-router-dom'
/* Data */
import RoombedHttp from '../@data/roombed-http';

class RoombedList extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      redirect: ''
    }
  }

  showDetail = (e, handleOriginal, rowInfo) => {
    if (typeof (rowInfo) !== "undefined") {
      if (rowInfo.original.person_id !== null) {
        this.props.history.push('' + this.props.match.url + '/' + rowInfo.original.person_id);
      } else {
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
    RoombedHttp.getList(
      (data) => {
        console.log(data)
        self.setState({
          data: data.result
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  render() {
    const { data } = this.state;
    return (
      <section>
        <Header
          title="Salas"
          match={this.props.match}
          history={this.props.history}
          theme={{
            background: "#008000",
            color: "#fff"
          }}
        />
        <GridList>
          {
            data.map(el => (
              <NavLink
                key={el.id_room}
                to={`${this.props.match.url}/${el.id_room}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <RoombedCard
                  label={el.room_label}
                  subLabel={`(${el.bedsCount}) Camas`}
                  iconSubLabel="local_hotel"
                />
              </NavLink>
            ))
          }
        </GridList>
      </section>
    )
  }
}

export default RoombedList;