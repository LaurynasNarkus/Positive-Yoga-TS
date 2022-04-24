import React from "react";
import styled from 'styled-components/macro';
import { tablet } from 'styles/breakpoints';

type AppProps = {
  title: string;
  description: string;
  icon: string;
};

export const ProgramElement: React.FC<AppProps> = ({
  icon,
  title,
  description,
}: AppProps) => {
  return (
    <ProgramElementW>
      <IconWrapper>
        <img src={icon} alt="icon" />
      </IconWrapper>
      <div className="textContent">
        <ProgramTitle>{title}</ProgramTitle>
        <DescriptionProgram>{description}</DescriptionProgram>
      </div>
    </ProgramElementW>
  );
};

const ProgramElementW = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    //height: 6rem;
    height: auto;
    margin-bottom: 0.5rem;

    @media ${tablet} {
        margin-bottom: 1.5rem;
    }
`;

const IconWrapper = styled.div`
    margin-right: 1rem;

    @media ${tablet} {
        width: 3rem;
        margin-right: 1rem;
    }
`;

const ProgramTitle = styled.h3`
    margin-bottom: 0.5rem;
    @media ${tablet} {
    margin-top: 0;
}
`;

const DescriptionProgram = styled.p`
    color: grey;
    margin: 0;
    margin-block: 0;

    @media ${tablet} {
        margin: 0;
        margin-block: 0;
    }
`;

