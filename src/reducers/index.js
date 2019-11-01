import { combineReducers } from 'redux';
import { GET_DATA } from '../actions';

const getData = (state = {}, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        companyInfo: action.response.companyInfo,
        employees: action.response.employees
      };
    default:
      return state;
  }
};

export default combineReducers({
  data: getData
});
