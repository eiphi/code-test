import React, { useState } from 'react';
import styled from 'styled-components';
import EmployeeDetails from './EmployeeDetails';

const Card = styled.div`
  display: flex;
  border: 1px solid black;
  overflow: hidden;
  margin: 10px;
  flex: 1;
  min-width: 300px;
  &:hover {
    background: #ffa5006b;
    cursor: pointer;
  }
`;
export const Avatar = styled.img`
  max-height: 130px;
  border: 1px solid black;
  max-width: 130px;
`;
const Vitals = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const Info = styled.div`
  padding: 10px 15px;
  max-height: 100px;
  overflow: hidden;
`;

const EmployeeCard = ({ employee }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Card onClick={() => setModalOpen(true)}>
        <Avatar src={employee.avatar} />
        <Info>
          <Vitals>
            {employee.firstName} {employee.lastName}
          </Vitals>
          <div>{employee.bio}</div>
        </Info>
      </Card>
      {modalOpen && (
        <EmployeeDetails
          employee={employee}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </>
  );
};

export default EmployeeCard;
