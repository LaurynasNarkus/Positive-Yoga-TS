import React from "react";
import logo from "../../../assets/images/Logo.svg";
import styled from 'styled-components/macro';

export const Header: React.FC = () => {
  return (
    <HeaderW>
      <img src={logo} alt="logo" height={"96px"} />
    </HeaderW>
  );
};

const HeaderW = styled.div`
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: center;
`;