import React from "react";
import styled from 'styled-components/macro';
import { QuestionAnswer } from "./QuestionAnswer";
import { tablet } from 'styles/breakpoints';

type question = {
    question: string;
    answer: string;
  };

export const FAQ: React.FC = () => {
  const questions: question[] = [
    {
      question: "What happens after I order?",
      answer:
        "After you place your order, we get to work!\n" +
        "\n" +
        "Based on the questions you answered in the\n" +
        "quiz, we ll craft your personal plan to your level\n" +
        "with recomendations on how to improve. ",
    },
    {
      question: "Where I can access my plan?",
      answer:
        "Your plan will be accessible in Positive Yoga's\n" +
        "web app with a special link generated after\n" +
        "your purchase.",
    },
    {
      question: "How can I cancel my subscription?",
      answer:
        "You can manage or cancel your subscription\n" +
        "by writing our customer support\n" +
        "hello@positiveyoga.app",
    },
    {
      question: "Why this program is paid?",
      answer:
        "We are aiming to offer our clients the best\n" +
        "experience, which comes with a lot of work.\n" +
        "The entire yoga program is developed by our\n" +
        "large team of experts that work long hours to\n" +
        "prepare effective, trustworthy and enjoyable\n" +
        "content and workouts that can help you to\n" +
        "reach your goals. The program is also\n" +
        "completely free of ads and is constantly being\n" +
        "updated based on your feedback! ",
    },
  ];

  return (
    <FAQW>
      <SectionTitleWrapper>
          <BoldHeader>Frequently Asked Questions</BoldHeader>
      </SectionTitleWrapper>
      <FaqQuestions>
        {/*Display all the questions with answers*/}
        {questions.map((question: question, index: number) => (
          <div key={index}>
            <QuestionAnswer
              index={index}
              question={question.question}
              answer={question.answer}
            />
          </div>
        ))}
      </FaqQuestions>
    </FAQW>
  );
};

 const FAQW = styled.div`
  margin: 2rem auto;
  width: 46rem;

  @media ${tablet} {
    width: 100%;
  }
`;

const SectionTitleWrapper = styled.div`
    display: flex;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    line-height: 140%;
    font-weight: 700;

    @media ${tablet} {
        text-align: left;
        margin-left: 1rem;
    }
`;

const BoldHeader = styled.div`
    display: block;
    font-size: 1.5rem;
    line-height: 140%;
    font-weight: 700;
    width: 100%;
    margin: auto;
`;

 const FaqQuestions = styled.div`
    width: 100%;
`;