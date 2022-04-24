import React from "react";
import styled from 'styled-components/macro';
import { tablet } from 'styles/breakpoints';

export const IntroText: React.FC = () => {
  return (
    <div>
      <IntroTextW>
        <p>
          Over <b>52 147</b> plans ordered.
        </p>
      </IntroTextW>
      <IntroTextBig>Get access to your yoga program now!</IntroTextBig>
    </div>
  );
};



const IntroTextW = styled.div`
    font-size: 1rem;
    text-align: center;
    margin-top: 2rem;
    line-height: 1rem;
    font-style: normal;

    @media ${tablet} {
        margin: 1rem 1rem;
        font-size: 1rem;
        text-align: start;
    }
`;

const IntroTextBig = styled.div`
    font-size: 2rem;
    text-align: center;
    line-height: 2.5rem;
    margin-bottom: 2rem;
    font-weight: 700;

    @media ${tablet} {
        text-align: start;
        margin-left: 1rem;
        margin-bottom: 0;
    }
`;
