import React from "react";
import { DateTimeDisplay } from "./DateTimeDisplay";
import { useCountdown } from "../../hooks/useCountDown";
import discountIcon from "../../../assets/images/Discount.svg";
import styled from 'styled-components/macro';

const ExpiredNotice = () => {
  return (
    <ExpiredNoticeW>
      <span>Discount expired</span>
    </ExpiredNoticeW>
  );
};

const ShowCounter = ({
  hours,
  minutes,
  seconds,
}: {
  hours: string;
  minutes: string;
  seconds: string;
}) => {
  return (
    <ShowCounterW>
      <img src={discountIcon} alt="discountIcon" />
      <p>
        &nbsp;<b>50%</b> discount only valid for&nbsp;
      </p>
      <b>
        <DateTimeDisplay value={hours} />
      </b>
      <p>:</p>
      <b>
        <DateTimeDisplay value={minutes} />
      </b>
      <p>:</p>
      <b>
        <DateTimeDisplay value={seconds} />
      </b>
    </ShowCounterW>
  );
};

const CountdownTimer = ({ targetDate }: { targetDate: number }) => {
  const [hours, minutes, seconds] = useCountdown(targetDate);

  if (+hours + +minutes + +seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <Sticky>
        <ShowCounter hours={hours} minutes={minutes} seconds={seconds} />
      </Sticky>
    );
  }
};

export default CountdownTimer;

const ExpiredNoticeW = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 1rem;
    color: white;
    background-color: #90caf9;
    line-height: 1rem;
`;

const ShowCounterW = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 1rem;
    color: white;
    background-color: #90caf9;
    line-height: 1rem;
    font-variant-numeric: tabular-nums;
    height: 3rem;

    .countdown {
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    .countdown > span {
        text-transform: uppercase;
        font-size: 0.75rem;
        line-height: 1rem;
    }
    `;

    const Sticky = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999;
    `;