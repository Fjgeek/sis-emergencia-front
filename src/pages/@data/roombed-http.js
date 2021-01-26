import axios from 'axios';
import { BASE } from './@server';

const RoombedHttp = {
  getAll: (response, error) => {
    axios.get(BASE + 'roombed/all')
      .then(function (r) {
        response(r.data);
      })
      .catch(function (e) {
        error(e);
      })
  },
  getList: (response, error) => {
    axios.get(BASE + 'roombed/list')
      .then(function (r) {
        response(r.data);
      })
      .catch(function (e) {
        error(e);
      })
  },
  getId: (id, response, error) => {
    axios.get(BASE + 'roombed/' + id)
      .then(function (r) {
        response(r.data);
      })
      .catch(function (e) {
        error(e);
      })
  },
  updatePriority: (data, response, error) => {
    axios.post(BASE + 'bed/update/priority', data)
      .then(function (r) {
        response(r.data);
      })
      .catch(function (e) {
        error(e);
      })
  }
};

export default RoombedHttp;