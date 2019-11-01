import React from 'react';
import { connect } from 'react-redux';
import EmployeeCard from './EmployeeCard';
import styled from 'styled-components';

const Container = styled.div`
  padding: 15px 25px;
  display: flex;
  flex-wrap: wrap;
`;

const EmployeesList = ({ employees }) => {
  return (
    <Container>
      {employees.map(emp => {
        return <EmployeeCard key={emp.id} employee={emp} />;
      })}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    employees: state.data.employees
  };
};

export default connect(
  mapStateToProps,
  null
)(EmployeesList);