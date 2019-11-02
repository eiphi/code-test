import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  background: #ebebeb;
  border-bottom: 1px solid black;
  padding: 15px 25px;
`;

const CompanyName = styled.span`
  font-size: 25px;
  font-weight: bold;
`;

const SecondLine = styled.div`
  display: flex;
`;
const CompanyMotto = styled.div`
  margin-right: 20px;
`;
const CompanyYear = styled.div`
  margin-left: auto;
  white-space: nowrap;
`;

const TopBar = ({ companyInfo }) => {
  const date = new Date(companyInfo.companyEst);
  return (
    <Container>
      <CompanyName>{companyInfo.companyName}</CompanyName>
      <SecondLine>
        <CompanyMotto>{companyInfo.companyMotto}</CompanyMotto>
        <CompanyYear>Since {date.getFullYear()}</CompanyYear>
      </SecondLine>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    companyInfo: state.data.companyInfo
  };
};

export default connect(
  mapStateToProps,
  null
)(TopBar);
