import React from "react";
import GreenCheckIcon from "../../../assets/images/GreenCheckIcon.svg";
import AppImg from "../../../assets/images/AppImg.png";
import Accent from '../../../assets/images/accent.svg'
import styled from 'styled-components/macro';
import { tablet } from 'styles/breakpoints';

const questions = [
    "Each program adapts to your age or fitness level",
    "Mindful way to exercise and get real results",
    "Effective and long term lasting results",
    "Suited activities that benefit both the mind and body",
    "Low-intensity but highly effective workouts",
    "Extra attention to muscle, joint and back health",
]

export const Bnft: React.FC = () => {
    return (
        <SectionWrapper>
            <RowWrapper>
                <SectionContent>    
                    <SectionTitleWrapper>
                        Start your yoga journey now!
                    </SectionTitleWrapper> 
                    <ImageWrapper>
                        <AppImage />
                    </ImageWrapper>
                    </SectionContent>
                    <ListContentWrapper>  
                        <SectionTitleWrapper>
                            Is positive Yoga right for me?
                        </SectionTitleWrapper>  
                        {questions.map((question) => {
                            return (
                                <ElementList>
                                    <ContentWrapper>
                                        <IconWrapper>
                                            <img src={GreenCheckIcon} alt="check icon" />
                                        </IconWrapper>
                                        <ProgramTitle>
                                            {question}
                                        </ProgramTitle>
                                    </ContentWrapper>
                                </ElementList>
                            )
                        })}
                    </ListContentWrapper>  
            </RowWrapper>
        </SectionWrapper>
    );
};

const SectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media ${tablet} {
        flex-direction: column;
        margin: 0 1rem;
        width: calc(100% - 2rem);
    }
`;

const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    width: 48rem;
    
    @media ${tablet} {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 1rem;
    }
`;

const SectionContent = styled.div`
    margin-right: 1rem;
    width: calc(50% - 1rem);
    align-items: center;
    @media ${tablet} {
        width: 100%;
        margin-right: 0;
}
`;

const SectionTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    line-height: 140%;
    font-weight: 700;

    @media ${tablet} {
        width: 100%;
        margin-bottom: 1.5rem;
        margin-top: 1rem;
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    @media ${tablet} {
        background-image: url(${Accent});
        background-repeat: no-repeat;
        background-size: contain;
}
`;

const ListContentWrapper = styled.div`
    width: 100%;
    margin-left: 1rem;
    width: calc(50% - 1rem);

    @media ${tablet} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-left: 0;
    }
`;

const ElementList = styled.div`
    width: 100%;
`;

const AppImage = styled.img.attrs({
    src: `${AppImg}`
  })`
    width: 100%;
    object-fit: contain;
  `;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;  
`

const ProgramTitle = styled.h3`
    font-weight: 500;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`;

