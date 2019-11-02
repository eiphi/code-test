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
  max-width: calc(50% - 22px);
  &:hover {
    background: #ffa5006b;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    max-width: 100%;
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
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
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
