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
      <ContentWrapper>
        <ProgramTitle>{title}</ProgramTitle>
        <DescriptionProgram>{description}</DescriptionProgram>
      </ContentWrapper>
    </ProgramElementW>
  );
};

const ProgramElementW = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: start;
    height: auto;
    margin-bottom: 1.5rem;

    @media ${tablet} {
        margin-bottom: 1.5rem;
    }
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin-right: 1rem;

    @media ${tablet} {
        width: 3rem;
        margin-right: 1rem;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;  
`

const ProgramTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 0.25rem;
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

