import React from "react";
import styled from 'styled-components/macro';
import { tablet } from 'styles/breakpoints';

type AppProps = {
    surname: string;
    age: string;
    location: string;
    rate: string;
    img: string;
    text: string;
};

export const SuccessStory: React.FC<AppProps> = ({
    surname,
    age,
    location,
    rate,
    img,
    text
}: AppProps) => {
  return (
    <SuccessStoryWrapper>
        <NameWrapper>
            {surname}, {age}
        </NameWrapper>
        <LocationWrapper>
            {location}
        </LocationWrapper>
        <RateWrapper>
            <img src={rate} alt="stars" />
        </RateWrapper>
        <ImgWrapper>
            <img src={img} alt="successStoryImg" />
        </ImgWrapper>
        <StoryTextWrapper>
            {text}
        </StoryTextWrapper>
    </SuccessStoryWrapper>
  );
};

const SuccessStoryWrapper = styled.div`
    display: block;
    margin: 2rem 0.5rem;
    padding: 2rem;
    box-shadow: 0 0.5rem 1rem 0.25rem rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    width: 100%;

    @media ${tablet} {
        margin: 1rem 0;
        padding: 1;
        width: calc(100% - 2rem);
    }
`

const NameWrapper = styled.div`
    font-weight: 700;
`;

const LocationWrapper = styled.div`
    font-size: 0.75rem;
    color: grey;
`;

const RateWrapper = styled.div``

const ImgWrapper = styled.div``

const StoryTextWrapper = styled.div``





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