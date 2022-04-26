import React from "react";
import styled from 'styled-components/macro';
import { tablet } from 'styles/breakpoints';
import { SuccessStory } from "./SuccessStory";
import FiveStars from "../../../assets/testimonials/5stars.svg";
import Kylie from "../../../assets/testimonials/Kylie.png";
import Jesica from "../../../assets/testimonials/Jesica.png";
import Emily from "../../../assets/testimonials/Emily.png";
  

export const SuccessStories: React.FC = () => {
    const successStories = [
        {
            surname: "Emily",
            age: "28",
            location: "Delaware, NJ",
            rate: FiveStars,
            img: Emily,
            text: "I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts."
        },
        {
            surname: "Kylie",
            age: "40",
            location: "Los Angeles, CA",
            rate: FiveStars,
            img: Kylie,
            text: "I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress."
        },
        {
            surname: "Jesica",
            age: "51",
            location: "San Francisco, CA",
            rate: FiveStars,
            img: Jesica,
            text: "I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation."
        }
    ]

    return (
        <SuccessStoriesWrapper>
        <SectionTitleWrapper>
            <BoldHeader>
            Hear success stories from our clients
            </BoldHeader>
            </SectionTitleWrapper>
            
        <SectionWrapper>
            {successStories.map((successStory) => {
                        return(
                            <SuccessStory
                                surname={successStory.surname}
                                age={successStory.age}
                                location={successStory.location}
                                rate={successStory.rate}
                                img={successStory.img}
                                text={successStory.text}
                            />
                        )
                    })}

        </SectionWrapper>
        </SuccessStoriesWrapper>
    );
};

const SuccessStoriesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 2rem;
    width: 60rem;

    @media ${tablet} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: calc(100% - 4rem);
        margin: 1rem;
    }
`;

const SectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    width: 100%;

    @media ${tablet} {
        flex-direction: column;

        margin: 0;
        width: 100%;
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
