import React from "react";
import styled from 'styled-components/macro';
import { tablet } from 'styles/breakpoints';

export const GetMyPlan: React.FC = () => {
    return (
        <OrangeButtonWrapper>
            <OrangeButton>Get your plan</OrangeButton>
        </OrangeButtonWrapper>

    );
};

const OrangeButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #ff9b4e;
    border: none;
    width: 100%;
    height: 100%;
    padding: 1.25rem;
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    box-shadow: 0px 1rem 2rem rgba(255, 155, 78, 0.24);
    border-radius: 0.5rem;
    cursor: pointer;
    font-family: 'Red Hat Display';

    &:hover {
        background: #ff5e18;
        -webkit-transition: all ease 0.5s;
        -moz-transition: all ease 0.5s;
        transition: all ease 0.5s;
}

    @media ${tablet} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #ff9b4e;
        border: none;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        padding: 1.25rem;
        color: white;
        font-size: 1.5rem;
        font-weight: 700;
        box-shadow: rgba(255, 159, 26, 0.2) 0.5rem 1rem 0.5rem;
        cursor: pointer;
    }
`;

const OrangeButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 22rem;
    margin: 2rem auto;

    @media ${tablet} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: calc(100% - 2rem);
        margin: 1rem auto;
    }
`;