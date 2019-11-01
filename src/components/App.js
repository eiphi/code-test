import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';
import TopBar from './TopBar';
import EmployeesList from './EmployeesList';

const App = ({ getData, companyInfo, employees }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  if (!companyInfo) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <TopBar />
      <EmployeesList />
    </>
  );
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
