import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import EmployeeCard from './EmployeeCard';

const Container = styled.div`
  padding: 15px 25px;
  display: flex;
  flex-wrap: wrap;
`;

const Header = styled.div`
  width: 100%;
  font-size: 20px;
`;

const SearchBox = styled.div`
  font-size: 17px;
  & label {
    margin-right: 10px;
  }
  @media (min-width: 768px) {
    float: right;
  }
`;

const EmployeesList = ({ employees }) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  const searchChange = event => {
    const query = event.target.value;
    setSearchValue(query);
    if (query) {
      setFilteredEmployees(
        employees.filter(
          emp =>
            emp.firstName.toLowerCase().includes(query.toLowerCase()) ||
            emp.lastName.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredEmployees(employees);
    }
  };

  return (
    <>
      <Container>
        <Header>
          <strong>Our Employees</strong>
          <SearchBox>
            <label htmlFor="search">Search</label>
            <input
              id="search"
              type="text"
              name="name"
              value={searchValue}
              onChange={searchChange}
            />
          </SearchBox>
          <hr />
        </Header>
        {filteredEmployees.length ? (
          filteredEmployees.map(emp => {
            return <EmployeeCard key={emp.id} employee={emp} />;
          })
        ) : (
          <div>
            No results :( ...
            <br />
            <button
              onClick={() => {
                setSearchValue('');
                setFilteredEmployees(employees);
              }}
            >
              Reset search
            </button>
          </div>
        )}
      </Container>
    </>
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
