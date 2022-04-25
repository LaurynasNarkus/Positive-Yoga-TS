import React, { useState } from "react";
import { Plan } from 'components/sections/Plan/Plan'
import { ProgramElement } from 'components/sections/ProgramElement/ProgramElement';
import { Conditions } from 'components/sections/Conditions/Conditions';
import styled from 'styled-components/macro';
import { tablet } from 'styles/breakpoints';
//SVGs from icons folder
import bookCheck from "../../../assets/icons/bookcheck.svg";
import exercise from "../../../assets/icons/exercise.svg";
import plan from "../../../assets/icons/plan.svg";
import shoe from "../../../assets/icons/shoe.svg";
import diet from "../../../assets/icons/diet.svg";
import smartwatch from "../../../assets/icons/smartwatch.svg";
import whistle from "../../../assets/icons/whistle.svg";

type plan = {
    title: string;
    price: string;
    billed: string;
    sale?: string;
  };
  
type programElement = {
    title: string;
    description: string;
    icon: string;
  };
  

export const Program: React.FC = () => {
    const plans: plan[] = [
    {
      title: "6 month plan",
      price: "9.99",
      sale: "50",
      billed: "every 6 months",
    },
    {
      title: "3 month plan",
      price: "14.99",
      billed: "every 3 months",
    },
    {
      title: "1 month plan",
      price: "19.99",
      billed: "monthly",
    },
  ];

    const programElements: programElement[] = [
    {
      title: "A personalized yoga program",
      description: "Completely safe and focused on your key goals",
      icon: plan,
    },
    {
      title: "Easy & enjoyable yoga workouts for your level",
      description: "Program adjusts to your level and pace",
      icon: exercise,
    },
    {
      title: "No special preparation needed",
      description:
        "Perfect for beginners: Requires no special preparation or equipment",
      icon: shoe,
    },
    {
      title: "Daily motivation & accountability",
      description:
        "Track your progress, develop a healthy routine, reach goals faster",
      icon: diet,
    },
    {
      title: "Browse from various yoga challenges",
      description:
        "30 d morning yoga, mindful yoga, back flexibility challenge, and more!",
      icon: whistle,
    },
    {
      title: "Easy access on any device",
      description: "Do your yoga anywhere across all types of devices",
      icon: smartwatch,
    },
    {
      title: "A complete guide to get start",
      description:
        "Best tips, guidelines, advice, and recommendations for successful practice",
      icon: bookCheck,
    },
  ];

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleChangeIndex = (index: number) => {
    setSelectedIndex(index);
    };

    return (
        <SectionWrapper>
            <ProgramW>
                <ProgramDescription>
                    <SectionTitleWrapper>
                        <BoldHeader>
                        Choose your plan and get <Orange>7 days free trial</Orange>
                        </BoldHeader>
                    </SectionTitleWrapper>
                    {plans.map((plan, index) => (
                        <Plan
                        key={index}
                        {...plan}
                        selected={index === selectedIndex}
                        changeIndex={() => handleChangeIndex(index)}
                        />
                    ))}
                    <ButtonGetPlanWrapper>
                        <ButtonGetPlan>Get your plan</ButtonGetPlan>
                    </ButtonGetPlanWrapper>
                    <ConditionsWrapper>
                        <Conditions />
                    </ConditionsWrapper>
                </ProgramDescription>
                <ProgramContentWrapper>
                <SectionTitleWrapper>
                    <ProgramQuestion>What's in my program?</ProgramQuestion>
                </SectionTitleWrapper>
                    <ProgramElementList>
                    {programElements.map((item) => {
                        return (
                            <ProgramElement
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            />
                        );
                    })}
                    </ProgramElementList>
                </ProgramContentWrapper>
            </ProgramW>
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

const ProgramW = styled.div`
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

const ProgramDescription = styled.div`
    display: block;
    height: 100%;
    width: calc(50% - 1rem);
    margin-right: 1rem;

    @media ${tablet} {
        width: 100%;
        margin-right: 0;
}
`;

const ProgramContentWrapper = styled.div`
    display: block;
    width: calc(50% - 1rem);
    height: 100%;
    margin-left: 1rem;

    @media ${tablet} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 2.5rem;
        margin-left: 0;
    }
`;

const SectionTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    @media ${tablet} {
        width: 100%;
        margin-bottom: 1.5rem;
        margin-top: 1rem;
    }
`;

const BoldHeader = styled.div`
    display: block;
    font-size: 1.5rem;
    line-height: 140%;
    font-weight: 700;
`;

const ButtonGetPlanWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 2rem;

    @media ${tablet} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
`;

const ButtonGetPlan = styled.button`
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

const ConditionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1rem;

    @media ${tablet} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 1rem;
    }
`;

const ProgramQuestion = styled.div`
    display: block;
    font-size: 1.5rem;
    line-height: 140%;
    font-weight: 700;
`;

const ProgramElementList = styled.div`
    width: 100%;
    margin-top: 3rem;

    @media ${tablet} {
        margin-top: 0;
    }
`;

const Orange = styled.span`
    color: #ff9b4e;
`
