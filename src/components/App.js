import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';

const App = ({ getData, companyInfo, employees }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  if (!companyInfo) {
    return <div>Loading...</div>;
  }
  return employees.map(emp => {
    return <div key={emp.id}>{emp.firstName}</div>;
  });
};

const mapStateToProps = state => {
  return {
    companyInfo: state.data.companyInfo,
    employees: state.data.employees
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(App);