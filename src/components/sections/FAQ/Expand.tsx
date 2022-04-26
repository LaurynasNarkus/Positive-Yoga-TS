import React from "react";
import arrow from "../../../assets/images/arrow.png";
import styled from 'styled-components/macro';

type AppProps = {
  click: () => void;
  expanded: boolean;
  title: string;
};

export const Expand: React.FC<AppProps> = ({click, expanded, title}: AppProps) => {
  return (
    <ExpandW
      style={
        expanded
          ? { transform: "rotate(180deg)" }
          : { transform: "rotate(0deg)" }
      }
      title={title}
      onClick={click}
    >
      <img src={arrow} alt="arrow" width={"32px"} height={"32px"} />
    </ExpandW>
  );
};

const ExpandW = styled.button`
    display: inline-flex;
    background-color: transparent;
    border: 0px;
    cursor: pointer;
    vertical-align: middle;
    font-size: 1.5rem;
    padding: 0 1rem;
    overflow: visible;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;