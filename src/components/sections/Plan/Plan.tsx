import React from "react";
import styled from 'styled-components/macro';
import checkIcon from "../../../assets/images/CheckIcon.svg";
import { tablet } from 'styles/breakpoints';

type AppProps = {
  title: string;
  price: string;
  sale?: string;
  billed: string;
  selected: boolean;
  changeIndex: React.MouseEventHandler<HTMLDivElement>;
};

export const Plan: React.FC<AppProps> = ({
    title,
    price,
    sale,
    billed,
    selected,
    changeIndex,
    }: AppProps) =>  {
  const Planner = selected ? PlanW : PlanGrey;
  const ButtonChecker = selected ? ButtonCheck : ButtonCheckGrey;
  const ImageChecker = selected ? ImgCheckIcon : ImgCheckIconNotChecked;
  return (
    <PlanWrapper>
      {/*If a plan is selected we display orange border*/}
      <Planner onClick={changeIndex}>
        <Description>
          <Title>
            {title}
            {/*If there is a discount, we display it*/}
            {sale && <Sale>Save {sale}%</Sale>}
          </Title>
          <Price>
            <PriceValue> ${price} </PriceValue> / month
          </Price>
          <Periodicity>
            {sale ? (
              <div>
                <LineThroughPrice>$119.94</LineThroughPrice>
                <Orange>$59.94</Orange> billed {billed}
              </div>
            ) : (
              <span> Billed {billed}</span>
            )}
          </Periodicity>
        </Description>
        <div className="button-wrapper">
          {/*If a plan is selected we display button it in orange*/}
          <ButtonChecker>
            <ImageChecker src={checkIcon} alt="icon" />
          </ButtonChecker>
        </div>
      </Planner>
    </PlanWrapper>
  );
};

const PlanWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
    height: auto;
`;

const PlanW = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 1rem;
    padding: 1rem;
    border: 0.125rem solid #ff9b4e;
    cursor: pointer;
    height: auto;

    @media ${tablet} {
        width: 100%;
    }
`;

const PlanGrey = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 1rem;
    padding: 1rem;
    border: 0.125rem solid #ebebeb;
    cursor: pointer;
    height: auto;

    @media ${tablet} {
        width: 100%;
    }
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 100%;
`;

const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: 100%;
    font-size: 1.5rem;
    line-height: 2.5rem;
`;

const Sale = styled.span`
    background-color: #ffe082;
    border-radius: 0.5rem;
    line-height: 150%;
    padding: 0.5rem;
    margin: 0 0.5rem;
    font-size: 1rem;
    line-height: 150%;
`;

const Price = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 100%;
    font-size: 1rem;
    line-height: 2rem;
    align-items: flex-end;
`;

const PriceValue = styled.span`
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 2.5rem;
    margin-right: 0.25rem;
`;

const Periodicity = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: 100%;
    margin-top: 0.5rem;
`;

const LineThroughPrice = styled.span`
    text-decoration: line-through;
    margin-right: 0.25rem;
`;

const ButtonCheck = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
`;

const ButtonCheckGrey = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: #ebebeb;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    padding: 0;
`;

const ImgCheckIconNotChecked = styled.img`
    display: none;
`;

const ImgCheckIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`;

const Orange = styled.span`
    color: #ff9b4e;
`