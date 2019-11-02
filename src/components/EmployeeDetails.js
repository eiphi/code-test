import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Avatar } from './EmployeeCard';

const Overlay = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Dialog = styled.div`
  max-width: 500px;
  position: relative;
  background: white;
  padding: 20px;
  margin: auto;
`;

const Vitals = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Name = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 0 10px;
  padding-bottom: 5px;
  border-bottom: 2px solid silver;
`;

const Info = styled.div`
  margin-top: 10px;
`;

const JobInfo = styled.div`
  width: 130px;
  float: left;
`;

const Bio = styled.div`
  margin-left: 10px;
  float: left;
  max-width: calc(100% - 140px);
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: -10px;
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
`;

const EmployeeDetails = ({ closeModal, employee }) => {
  const modalRef = useRef();

  const handleClick = e => {
    if (modalRef.current.contains(e.target)) {
      // clicking inside the ref
      return;
    }
    // clicking outside the ref
    closeModal();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  return (
    <Overlay>
      <Dialog ref={modalRef}>
        <Vitals>
          <Avatar src={employee.avatar} />
          <Name>
            {employee.firstName} {employee.lastName}
          </Name>
        </Vitals>
        <Info>
          <JobInfo>
            <strong>{employee.jobTitle}</strong>
            <br />
            {employee.age}
            <br />
            {employee.dateJoined.slice(0, 10)}
          </JobInfo>
          <Bio>{employee.bio}</Bio>
        </Info>
        <CloseButton onClick={closeModal}>&#10005;</CloseButton>
      </Dialog>
    </Overlay>
  );
};

export default EmployeeDetails;
