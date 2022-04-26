import React, { useEffect } from "react";
import styled from 'styled-components/macro';
import { Expand } from './Expand';
import { tablet } from 'styles/breakpoints';

type AppProps = {
  question: string;
  answer: string;
  index: number;
};

export const QuestionAnswer: React.FC<AppProps> = ({index, question, answer}: AppProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    //The first answer is displayed by default
    if (index === 0) {
      setExpanded(true);
    }
  }, [index, question]);

  return (
    <QuestionAnswerW onClick={handleExpandClick}>
      <CardActionsWrapper>
        <CardActionsRoot>
          <CardActionsRootTitle className="question">
            {question}
          </CardActionsRootTitle>
        </CardActionsRoot>
        {/*Button to display the answer */}
        <Expand
          click={handleExpandClick}
          expanded={expanded}
          title="show more"
        ></Expand>
      </CardActionsWrapper>
      <Collapse>
        <CardContent style={expanded ? { height: "auto" } : { height: "0" }}>
          <CardContentP>{answer}</CardContentP>
        </CardContent>
      </Collapse>
    </QuestionAnswerW>
  );
};

const QuestionAnswerW = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    margin: 1rem;
    border: 1px solid #ebebeb;
    cursor: pointer;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    overflow: hidden;
`;

const CardActionsWrapper = styled.div`
    align-items: center;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const CardActionsRoot = styled.div`
    padding: 1rem 2rem;
    text-align: left;
    font-weight: 700;

    @media ${tablet} {
        padding: 0.5rem 1rem;
    }
`;

const CardActionsRootTitle = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5;
    padding-bottom: 0;
    margin-bottom: 0;
`;

const Collapse = styled.div`
    height: auto;
    overflow: visible;
    transition: height 800ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
const CardContent = styled.div`
    display: flex;
    width: 100%;

    @media ${tablet} {
    padding: "0 2rem";
    text-align: "left";
    }
`;

const CardContentP = styled.p`
    margin: 0 2rem 2rem 2rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;

    @media ${tablet} {
        margin: 0 1rem 1rem 1rem;
    }
`;